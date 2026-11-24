import { Application } from "express";
import express from "express";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());



export default app;