import e, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import { HttpStatus } from "../constants/statusCodeContrain";
import { MongoDuplicateKeyError } from "../types";
import { AppError } from "../utils/customError";

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    res.status(error.status).json({ message: error.message });
  } else if (
    error instanceof Error &&
    "code" in error &&
    error.code === HttpStatus.MONGO_DUPLICATE
  ) {
    const err = error as MongoDuplicateKeyError;
    const field = err.keyValue ? Object.keys(err.keyValue)[0] : "unknown";
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: `${field} already exists` });
  } else if (error instanceof Error) {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  } else {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "interanl server error" });
  }

  next();
};
