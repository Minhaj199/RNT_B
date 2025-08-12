import { HttpStatus } from "../../constrains/statusCodeContrain";
import { AppError } from "../customError";
import { envSchema, newNodeSchema } from "./zodSchemas";

import dotEnv from "dotenv";
dotEnv.config();
///////////////// evn validation
const validatedEnvData = envSchema.safeParse(process.env);

if (!validatedEnvData.success) {
  console.log("error on env", validatedEnvData.error.format());
  process.exit(1);
}
export const env = {
  PORT: validatedEnvData.data?.PORT,
  DP_STRING: validatedEnvData.data.DB_STRING,
  CORS_ORIGIN: validatedEnvData.data.CORS_ORIGIN,
};

//////////////validate new node creation input data//

export function vaidatorAddForm(data: unknown) {
  const validatedData = newNodeSchema.safeParse(data);
  if (validatedData.success) {
    return validatedData.data;
  } else {
    throw new AppError(
      validatedData.error.issues[0].message,
      HttpStatus.BAD_REQUEST
    );
  }
}
