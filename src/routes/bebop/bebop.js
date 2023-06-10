import { Router } from "express";
import { createCanvas, loadImage } from "canvas";
const router = Router();

const canvas = createCanvas(1080, 1080);
const ctx = canvas.getContext('2d');

ctx.font = '42px Arial';
ctx.fillStyle = '#fff';
ctx.textAlign = 'center';

export default router.get("/bebop/:text", (req, res) => {
    let { text } = req.params;
    text = text.replaceAll("  ", "\n");
    
    loadImage("./src/routes/bebop/templates/bebop.png").then((image) => {
        ctx.drawImage(image, image.width / 1080, image.height / 1080);
        ctx.fillText(text, 750, 150, 600);

        res.status(200).send(`
            <img src="${canvas.toDataURL()}"></img>
        `);
    });
});