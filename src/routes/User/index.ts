import { Router } from "express";
import { addUser, getTest, getUser, login } from "./User";
import { authenticateJwt } from "../../passport/authenticate";

const router: Router = Router();

router.get("/", authenticateJwt, getUser);
router.get("/aaa", getTest);
router.post("/login", login);
router.post("/", addUser);

export default router;
