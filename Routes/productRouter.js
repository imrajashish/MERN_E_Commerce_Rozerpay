import express from "express";
import {
  addProduct,
  getProductById,
  getProducts,
  updateProductById,
  deleteProductById,
} from "../Controllers/product.js";

const productRouter = express.Router();

//add product
productRouter.post("/add", addProduct);
//getting all products
productRouter.get("/all", getProducts);

//find specific id
productRouter.get("/:id", getProductById);

//update by id
productRouter.put("/:id", updateProductById);

//delete by id
productRouter.delete("/:id", deleteProductById);

export default productRouter;
