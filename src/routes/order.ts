import { Router } from "express";
import { checkJwt } from "../middleware/session";
import { getOrders } from "../controllers/order.controller";

const router = Router();

router.get("/", checkJwt, getOrders);

export { router };