import express from "express";
import cors from "cors";
import "dotenv/config";

import routes from "./routes/routes.js"; 

const app = express();
const PORT = process.env.PORT || 3334;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => console.log(`|SERVER| Server is running on port: ${PORT}`));