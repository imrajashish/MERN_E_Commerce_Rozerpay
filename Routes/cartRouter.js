import {
  addToCart,
  userCart,
  removeProductFromCart,
  clearCart,
  decreaseProductQty,
} from "../Controllers/cart.js";
import express from "express";
import { Authenticated } from "../Middlewares/auth.js";

export const cartRouter = express.Router();

//Add to cart
cartRouter.post("/add", Authenticated, addToCart);

//Get the Cart
cartRouter.get("/user", Authenticated, userCart);

//Remove item in the cart
cartRouter.delete("remove/:productId", Authenticated, removeProductFromCart);

//clear Cart
cartRouter.delete("/clear", Authenticated, clearCart);

//get Qty
cartRouter.post("/--qty", Authenticated, decreaseProductQty);

export default cartRouter;
