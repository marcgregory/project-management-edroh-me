import { Router } from "express";
import { createProject, getProjects } from "../controllers/project.controllers";

const projectsRoutes = Router();

projectsRoutes.get("/", getProjects);
projectsRoutes.post("/", createProject);

export default projectsRoutes;
