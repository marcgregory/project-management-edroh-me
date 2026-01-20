import { Router } from "express";
import { search } from "../controllers/search.controllers";

const searchRoutes = Router();

searchRoutes.get("/", search);

export default searchRoutes;
