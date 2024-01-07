import { Router } from "express";
import {addInitialTeam, joinTeam} from "./Team";

const router: Router = Router();

router.post("/", addInitialTeam);
router.post("/join", joinTeam)
export default router;
