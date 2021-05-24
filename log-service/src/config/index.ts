/* eslint-disable no-process-env */
import dotenv from "dotenv";

dotenv.config();

export default () => ({
  serverPort: process.env.SERVER_PORT,
  logServerPort: process.env.LOG_SERVER_PORT,
  logServerUrl: process.env.LOG_SERVER_URL,
  logServerPath: process.env.LOG_SERVER_PATH
});