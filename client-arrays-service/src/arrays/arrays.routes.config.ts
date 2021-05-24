import { CommonRoutesConfig } from "../common/common.routes.config";
import ArraysController from "./arrays.controller";
import ArraysMiddleware from "./arrays.middleware";
import express from "express";

export class ArraysRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "ArraysRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/arrays`)
      .post(
        ArraysMiddleware.validateRequiredArrayFields,
        ArraysController.createArray
      );

    return this.app;
  }
}
