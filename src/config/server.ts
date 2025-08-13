import { app } from "../app";
import { env } from "../utils/zod/zodValidation";
import cluster from 'cluster'
import os from 'os'
export function serverConfig() {
   if (cluster.isPrimary) {
    const cores = os.cpus().length;
    for (let i = 0; i < cores; i++) cluster.fork();
    
  } else {
    app.listen(env.PORT, () => console.log(`Worker ${process.pid} running`));
  }
}
