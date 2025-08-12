import { env } from "../utils/zod/zodValidation";
export const corsOption = {
  origin: [env.CORS_ORIGIN],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type"],
};
