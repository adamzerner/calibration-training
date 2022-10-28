import express from "express";
import register from "@react-ssr/express/register";
import pageRouter from "./pages";

const app = express();

(async () => {
  await register(app);

  app.use("/", pageRouter);
  app.listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
})();
