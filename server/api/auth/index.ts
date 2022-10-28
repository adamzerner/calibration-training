import express from "express";
import signIn from "./sign-in";

const router = express.Router();

router.get("/sign-in", signIn);

export default router;
