import express, { type Request, type Response } from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import projectsRoutes from "./routes/project.routes";
import { config } from "./config/app.config";
import taskRoutes from "./routes/task.routes";
import searchRoutes from "./routes/search.routes";
import userRoutes from "./routes/user.routes";
import teamRoutes from "./routes/team.routes";

// ROUTES IMPORTS

//CONFIGURATIONS

const app = express();
app.use(express.json()); //reads the body and converts it into a JS object
app.use(express.urlencoded({ extended: true })); //// forms
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //Some resources should not be loaded by other websites
app.use(morgan("common")); //logging
// app.use(bodyParser.json()); //Middleware to parse request bodies (req.body) in Express
// app.use(bodyParser.urlencoded({ extended: false })); // forms
app.use(cors()); //Controls which websites can make requests to your server (cross-origin requests).

//ROUTES
app.get(config.BASE_PATH, (req: Request, res: Response) => {
  res.send("This is home route");
});

app.use(`${config.BASE_PATH}/projects`, projectsRoutes);
app.use(`${config.BASE_PATH}/tasks`, taskRoutes);
app.use(`${config.BASE_PATH}/search`, searchRoutes);
app.use(`${config.BASE_PATH}/users`, userRoutes);
app.use(`${config.BASE_PATH}/teams`, teamRoutes);

//Server
const port = config.PORT || 3000;
console.log(config.PORT);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
