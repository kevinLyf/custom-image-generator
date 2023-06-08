import { Router } from "express";
import { createCanvas, loadImage } from "canvas";
const router = Router();

const canvas = createCanvas(1080, 1080);
const ctx = canvas.getContext('2d');

ctx.font = '42px Poppins';
ctx.fillStyle = '#E06469';
ctx.textAlign = 'center';

export default router.get("/letter/:text", (req,  res) => {
    let { text } = req.params;
    text = text.replace("  ", "\n");
    
    loadImage("./src/templates/letter.png").then((image) => {
        ctx.drawImage(image, image.width / 1080, image.height / 1080);
        ctx.fillText(text, 540, 450, 800);
        
        res.status(200).send(`
        <html>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Poppins", sans-serif;
                    text-decoration: none;
                    list-style: none;
                    transition: all .6s ease;
                }

                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    height: 100vh;
                }

                main {
                    width: 1080px;
                    height: 100%;
                    max-width: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 1rem;
                }

                img {
                    width: 100%;
                    height: 600px;
                    object-fit: contain;

                    border: 10px solid #000;
                    border-radius: 5px;
                }

                a {
                    width: 600px;
                    height: 60px;
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: 15pt;
                    color: #fff;
                    
                    background-color: #ED2B2A;
                    border-radius: 5px;
                }

                a:hover {
                    background-color: #F45050;
                }
            </style>
            <body>
            <main>
                <div>
                    <img src="${canvas.toDataURL()}"></img>
                </div>
                <a href="${canvas.toDataURL()}" download="lover-letter">Download</a>
            </main>
            </body>
        </html>
        `);
    });
});