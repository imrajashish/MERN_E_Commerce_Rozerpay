import express from "express";
import {
  checkout,
  verify,
  userOrder,
  allOrders,
} from "../Controllers/payment.js";
import { Authenticated } from "../Middlewares/auth.js";

const paymentRouter = express.Router();

//checkout payment
paymentRouter.post("/checkout", checkout);

//verify payment
paymentRouter.post("verify", verify);

// user order
paymentRouter.get("/userorder", Authenticated, userOrder);

// All order's
paymentRouter.get("/orders", allOrders);

export default paymentRouter;
