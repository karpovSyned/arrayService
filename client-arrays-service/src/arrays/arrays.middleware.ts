import express from "express";
import ClassValidator from "../common/class-validator";

class UsersMiddleware {
  async validateRequiredArrayFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!req.body.length) {
      res.status(400).send({
        error: `Missing required field length`
      });

      return;
    }

    if (!ClassValidator.isValidType(req.body.length, "number")) {
      res.status(400).send({
        error: `Incorrect format of required field length`
      });

      return;
    }

    if (!ClassValidator.isValidRange(req.body.length, 1, 1000)) {
      res.status(400).send({
        error: `Incorrect range of required field length`
      });

      return;
    }

    next();
  }
}

export default new UsersMiddleware();
