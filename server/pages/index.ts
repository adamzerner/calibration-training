import express from "express";
import analytics from "./analytics";
import email from "./email";
import help from "./help";
import home from "./home";
import play from "./play";
import profile from "./profile";
import logIn from "./log-in";
import signUp from "./sign-up";
import sms from "./sms";
import error404 from "./404";

const router = express.Router();

router.get("/analytics", analytics);
router.get("/email", email);
router.get("/help", help);
router.get("/", home);
router.get("/play", play);
router.get("/profile", profile);
router.get("/log-in", logIn);
router.get("/sign-up", signUp);
router.get("/sms", sms);
router.get("*", error404);

export default router;
