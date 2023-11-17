import express from "express";
import test from "./Test/index";

export default (app: express.Application) => {
  app.use("/api/test", test);
};
