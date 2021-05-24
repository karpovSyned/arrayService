/* eslint-disable no-process-env */
import dotenv from "dotenv";

dotenv.config();

export default () => ({
  serverPort: process.env.SERVER_PORT,
  logService:{
    port: Number(process.env.LOG_SERVER_PORT),
    host: process.env.LOG_SERVER_URL,
    path: process.env.LOG_SERVER_PATH
  }
});