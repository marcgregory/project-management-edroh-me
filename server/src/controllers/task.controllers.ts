import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { HTTPSTATUS } from "../config/http.config";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const projectId = parseInt(req.query.projectId as string);
  console.log(req.query.projectId);
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId,
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error retrieving tasks: ${error.message}` });
  }
};

export const createTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    res.status(HTTPSTATUS.CREATED).json(newTask);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error creating task: ${error.message}` });
  }
};

export const updateTasksStatus = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status,
      },
    });
    res.json(updatedTask);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error updating tasks: ${error.message}` });
  }
};

export const getUserTasks = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { userId } = req.params;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { authorUserId: Number(userId) },
          { assignedUserId: Number(userId) },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res
      .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
      .json({ message: `Error retrieving user's tasks: ${error.message}` });
  }
};
