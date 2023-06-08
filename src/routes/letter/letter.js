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
    text = text.replaceAll("  ", "\n");
    
    loadImage("./src/routes/letter/templates/letter.png").then((image) => {
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
                }

                body {
                    width: 100%;
                    height: 100vh;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                main {
                    width: 100%;
                    height: 100%;
                    max-width: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 1rem;
                }

                .warn {
                    width: 600px;
                    max-width: 100%;

                    display: flex;
                    align-items: center;
                    justify-center: center;
                    gap: 1rem;

                    padding: .9rem 1rem;
                    border-radius: 5px;
                    color: #fff;
                    font-weight: 700;
                    border-left: 15px solid #D21312;
                    background-color: #ED2B2A;
                }

                .post {
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
                <div class="warn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                    </svg>
                    <p>
                        Double space breaks the line
                    </p>
                </div>

                <div>
                    <img class="post" src="${canvas.toDataURL()}"></img>
                </div>
                <a href="${canvas.toDataURL()}" download="lover-letter">Download</a>
            </main>
            </body>
        </html>
        `);
    });
});