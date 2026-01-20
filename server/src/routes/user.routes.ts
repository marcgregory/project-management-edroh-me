import { Router } from "express";
import { getUsers } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("/", getUsers);

export default userRoutes;
