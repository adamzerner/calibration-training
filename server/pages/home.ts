import { Request, Response } from "express";

export default (_req: Request, res: Response) => {
  const user = { name: "World" };
  res.render("home", { user });
};
