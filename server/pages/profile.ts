import { Request, Response } from "express";

export default (_req: Request, res: Response) => {
  const user = { name: "Alice" };
  res.render("auth/profile", { user });
};
