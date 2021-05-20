import express from "express";
import cors from "cors";
import morgan from "morgan";
import taskRoutes from "./routes/task.routes";
import { SwaggerOptions } from "swagger-ui-express";
//swaggger
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swaggerOptons";

const app = express();

app.set("port", process.env.PORT || 3000); //nombre de variable port si no toma el port 3000
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const specs =swaggerJSDoc(options)
app.use(taskRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;
