import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { HTTPSTATUS } from "../config/http.config";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();
    console.log(teams);

    const teamsWithUsernames = await Promise.all(
      teams.map(async (team: any) => {
        const productOwnner = await prisma.user.findUnique({
          where: { userId: team.productOwnerUserId! },
          select: { username: true },
        });

        const projectManager = await prisma.user.findUnique({
          where: {
            userId: team.projectManagerUserId!,
          },
          select: { username: true },
        });

        return {
          ...team,
          productOwnerUsername: productOwnner?.username,
          projectManagerUsername: projectManager?.username,
        };
      })
    );
    res.json(teamsWithUsernames);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error retrieving teams: ${error.message}` });
  }
};
