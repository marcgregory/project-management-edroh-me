import { Router } from "express";
import { getUser, getUsers, postUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.get("/:cognitoId", getUser);

userRoutes.post("/create-user", postUser);

export default userRoutes;
