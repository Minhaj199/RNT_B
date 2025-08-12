export class AppError extends Error {
  status: number = 500;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}
