import { Router } from "express";
import {addInitialTeam} from "./Team";

const router: Router = Router();

router.post("/", addInitialTeam);

export default router;
