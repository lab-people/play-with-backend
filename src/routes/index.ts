import express from "express";
import user from "./User/index";
import team from "./Team/index";
import mail from "./Mail/index";
export default (app: express.Application) => {
  app.use("/api/user", user);
  app.use("/api/team", team);
  app.use("/api/mail", mail);
};
