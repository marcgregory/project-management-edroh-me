import { Router } from "express";
import { getUsers, postUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.post("/create-user", postUser);

export default userRoutes;
