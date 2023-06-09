import { Router } from "express";
import { createCanvas, loadImage } from "canvas";
const router = Router();

const canvas = createCanvas(1080, 1080);
const ctx = canvas.getContext('2d');

ctx.font = '42px Poppins';
ctx.fillStyle = '#000';
ctx.textAlign = 'center';

export default router.get("/meme/:title/:subtitle", (req, res) => {
    let { title, subtitle } = req.params;
    title = title.replaceAll("  ", "\n");
    subtitle = subtitle.replaceAll("  ", "\n");

    
    loadImage("./src/routes/meme/templates/meme.jpg").then((image) => {
        ctx.drawImage(image, image.width / 1080, image.height / 1080);
        ctx.fillText(title, 840, 250, 460);
        ctx.fillText(subtitle, 840, 850, 460);
        res.status(200).json({ image: canvas.toDataURL(), category: "meme" });
    });
});