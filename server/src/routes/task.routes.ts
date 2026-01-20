import { Router } from "express";
import {
  createTask,
  getTasks,
  getUserTasks,
  updateTasksStatus,
} from "../controllers/task.controllers";

const taskRoutes = Router();

taskRoutes.get("/", getTasks);
taskRoutes.post("/", createTask);
taskRoutes.patch("/:taskId/status", updateTasksStatus);
taskRoutes.get("/user/:userId", getUserTasks);

export default taskRoutes;
