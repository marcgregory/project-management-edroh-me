import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import { HTTPSTATUS } from "../config/http.config";

const prisma = new PrismaClient();

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error retrieving projects: ${error.message}` });
  }
};

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, startDate, endDate } = req.body;
  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    res.status(HTTPSTATUS.CREATED).json(newProject);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error creating project: ${error.message}` });
  }
};
