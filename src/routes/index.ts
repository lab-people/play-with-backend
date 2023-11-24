import express from "express";
import user from "./User/index";

export default (app: express.Application) => {
  app.use("/api/user", user);
};
