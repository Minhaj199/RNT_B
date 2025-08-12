import mongoose from "mongoose";
import { env } from "../utils/zod/zodValidation";

export async function dbConnection() {
  try {
    await mongoose.connect(env.DP_STRING);
    console.log("db connected");
  } catch (error) {
    process.exit(1);
  }
}
