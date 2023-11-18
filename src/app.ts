import express, { Application } from "express";
import dotenv from "dotenv";
import router from "./routes";
import cookieParser from "cookie-parser";
import logger from "morgan";
import path from "path";
import createError from "http-errors";
import { AppDataSource } from "./config/connect";
import passport from "passport";
//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
AppDataSource.initialize();
app.use(passport.initialize());
router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
