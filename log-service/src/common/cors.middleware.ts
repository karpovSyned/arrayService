import express from "express";

class CorsMiddleware {
  async addAccessControlHeaders(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }

    next();
  }
}

export default new CorsMiddleware();
