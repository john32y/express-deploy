import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { getAllCandy, addNewCAndy } from "./src/candy.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => res.send("It's working!"));

app.get("/candy", getAllCandy);
app.post("candy", addNewCAndy);

export const api = onRequest(app);

