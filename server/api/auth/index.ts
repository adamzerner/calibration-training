import express from "express";
import logIn from "./log-in";

const router = express.Router();

router.get("/log-in", logIn);

export default router;
