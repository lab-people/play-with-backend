import { Router } from "express";
import {addInitialTeam, joinTeam} from "./Team";

const router: Router = Router();

router.post("/", addInitialTeam);
router.get("/join", joinTeam)
export default router;
