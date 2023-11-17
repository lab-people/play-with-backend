import { Router } from "express";
import { getTest } from "./Test";

const router: Router = Router();

router.get("/", getTest);
export default router;
