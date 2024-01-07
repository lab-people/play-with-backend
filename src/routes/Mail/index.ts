import { Router } from "express";
import {sendInviteMail, sendJoinMail} from "./Mail";

const router: Router = Router();

router.post("/join", sendJoinMail);
router.post("/invite", sendInviteMail);

export default router;