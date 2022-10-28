import express from "express";
import register from "@react-ssr/express/register";
import pageRouter from "./pages";
import apiRouter from "./api";

const app = express();

(async () => {
  await register(app);

  app.use("/api", apiRouter);
  app.use("/", pageRouter);
  app.listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
})();
