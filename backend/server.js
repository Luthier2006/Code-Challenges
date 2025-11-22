import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import challengesRoute from "./routes/challenges.js";
import runRoute from "./routes/run.js";
import aiRoute from "./routes/ai.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/challenges", challengesRoute);
app.use("/api/run", runRoute);
app.use("/api/ai", aiRoute);

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta", PORT));
