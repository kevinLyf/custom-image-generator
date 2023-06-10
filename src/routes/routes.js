import { Router } from "express";
import letter from "./letter/letter.js";
import meme from "./meme/meme.js";
import bebop from "./bebop/bebop.js";

const router = Router();

router.use(letter);
router.use(meme);
router.use(bebop);

export default router;