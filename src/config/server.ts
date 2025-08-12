import { app } from "../server";
import { env } from "../utils/zod/zodValidation";

export function serverConfig() {
  app.listen(env.PORT, () => {
    console.log(`server started on ${env.PORT}`);
  });
}
