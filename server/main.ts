import express from "express";
import register from "@react-ssr/express/register";
import dotenv from "dotenv";
import pageRouter from "./pages";
import apiRouter from "./api";

dotenv.config();
const app = express();
const port = process.env.PORT;

(async () => {
  await register(app);

  app.use("/api", apiRouter);
  app.use("/", pageRouter);
  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
