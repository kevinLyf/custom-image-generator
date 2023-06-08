import { Router } from "express";
import letter from "./letter/letter.js";

const router = Router();

router.use(letter);

export default router;