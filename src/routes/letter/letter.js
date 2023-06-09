import { Router } from "express";
import { createCanvas, loadImage } from "canvas";
const router = Router();

const canvas = createCanvas(1080, 1080);
const ctx = canvas.getContext('2d');

ctx.font = '42px Poppins';
ctx.fillStyle = '#E06469';
ctx.textAlign = 'center';

export default router.get("/letter/:text", (req, res) => {
    let { text } = req.params;
    text = text.replaceAll("  ", "\n");
    
    loadImage("./src/routes/letter/templates/letter.png").then((image) => {
        ctx.drawImage(image, image.width / 1080, image.height / 1080);
        ctx.fillText(text, 540, 450, 800);

        res.status(200).json({ image: canvas.toDataURL(), category: "letter" });
    });
});