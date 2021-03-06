import serverless from "serverless-http";
import express, { Express } from "express";
import { config } from "dotenv";
import { json, urlencoded } from "body-parser";

import { connectDB } from "./config/db";
import { routes } from "./api/routes";

function buildApp(): Express {
  // setting up env vars
  config({ path: "./.env.local" });

  // create express server
  const app = express();

  // body parser
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // mongoose setup
  connectDB();

  // routes
  app.use("/api", routes());
  return app;
}

function runApp() {
  const app = buildApp();
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("Local app listening on port 3000!"));
}

runApp();
