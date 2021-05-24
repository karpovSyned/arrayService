import express from "express";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";

import config from "./src/config";
import { CommonRoutesConfig } from "./src/common/common.routes.config";
import { ArraysRoutes } from "./src/arrays/arrays.routes.config";
import debug from "debug";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = config().serverPort;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

app.use(cors());
app.use(express.json());

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [
    new winston.transports.Console(), 
    new winston.transports.Http(config().logService)
  ],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  )
};

app.use(expressWinston.logger(loggerOptions));

routes.push(new ArraysRoutes(app));

app.use(expressWinston.errorLogger(loggerOptions));

const runningMessage = `Server running at http://localhost:${port}`;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});
