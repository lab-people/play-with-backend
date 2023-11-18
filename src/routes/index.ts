import express from "express";
import test from "./Test/index";
import user from "./User/index";

export default (app: express.Application) => {
  app.use("/api/test", test);
  app.use("/api/user", user);
};
