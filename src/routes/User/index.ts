import { Router } from "express";
import { getUser } from "./User";
import { authenticateJwt } from "../../passport/authenticate";

const router: Router = Router();

router.get("/", authenticateJwt, getUser);

export default router;
