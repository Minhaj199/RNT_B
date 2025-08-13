import { Router } from "express";
import { controller } from "../controller/controller";

const router = Router();

router.get("/fetch-nodes", controller.fetchNodes);
router.post("/add-node", controller.createNode);
router.delete('/remove-nodes',controller.deleteNodes)

export { router };
