import { Router } from "express";
import {sendMail} from "./Mail";

const router: Router = Router();

router.post("/", sendMail);

export default router;