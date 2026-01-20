import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { HTTPSTATUS } from "../config/http.config";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error retrieving users: ${error.message}` });
  }
};
