import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../constants/statusCodeContrain";

export const pageNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(HttpStatus.NOT_FOUND).json({ message: "invalid route" });
};
