import express from "express";
import register from "@react-ssr/express/register";
import pageRouter from "./pages";
import apiRouter from "./api";

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  await register(app);

  app.use("/api", apiRouter);
  app.use("/", pageRouter);
  app.listen(port, () => {
    console.log("> Ready on http://localhost:3000");
  });
})();
