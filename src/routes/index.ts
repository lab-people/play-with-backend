import express from "express";
import test from "./test/index";

export default (app: express.Application) => {
  app.use("/api/test", test);
};
