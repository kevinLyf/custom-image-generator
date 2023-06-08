import { Router } from "express";
import letter from "./letter/letter.js";
import meme from "./meme/meme.js";

const router = Router();

router.use(letter);
router.use(meme);

export default router;