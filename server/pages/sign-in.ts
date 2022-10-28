import { Request, Response } from "express";

export default (_req: Request, res: Response) => {
  res.render("auth/sign-in");
};
