import express from "express";
import usersService from "./arrays.service";

class ArraysController {
  async createArray(req: express.Request, res: express.Response) {
    const array = await usersService.create(req.body);
    res.status(201).send(array);
  }
}

export default new ArraysController();
