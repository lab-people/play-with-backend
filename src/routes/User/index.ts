import { Router } from "express";
import { getUser, login } from "./User";
import { authenticateJwt } from "../../passport/authenticate";

const router: Router = Router();

router.get("/", authenticateJwt, getUser);
router.post("/login", login)

export default router;
