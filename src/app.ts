import express from "express";
import { serverConfig } from "./config/server";
import { dbConnection } from "./config/mongodb";
import cors from "cors";
import { corsOption } from "./config/cors";
import { router } from "./routes/router";
import { errorHandler } from "./middlewares/errorHandler";
import { pageNotFound } from "./middlewares/notFound";
import morgan from "morgan";

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

////////////////////cors/////
app.use(cors(corsOption));

////////////////////router/////
app.use("/api", router);

///////////////////server started////
serverConfig();
////////////////// db connection/////////
dbConnection();

//////////page not found///////

app.use(pageNotFound);

/////////////global error handler/////
app.use(errorHandler);
