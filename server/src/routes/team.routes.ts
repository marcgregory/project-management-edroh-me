import { Router } from "express";
import { getTeams } from "../controllers/team.controllers";

const teamRoutes = Router();

teamRoutes.get("/", getTeams);

export default teamRoutes;
