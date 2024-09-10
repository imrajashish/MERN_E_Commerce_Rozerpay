import { Products } from "../Models/Product.js";

//Add Products
export const addProduct = async (req, res) => {
  const { title, description, price, category, qty, imgSrc } = req.body;
  try {
    let product = await Products.create({
      title,
      description,
      price,
      category,
      qty,
      imgSrc,
    });
    res.json({
      message: " All Products Created successfully",
      product,
      success: true,
    });
  } catch (error) {
    res.json("Product error" + error.message);
  }
};

//Get all Product
export const getProducts = async (req, res) => {
  try {
    let products = await Products.find().sort({ createdAt: -1 });
    res.json({ message: "All products", products });
  } catch (error) {
    res.json("Product error" + error.message);
  }
};

//find Product by ID
export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Products.findById(id);
  if (!product) {
    return res.json({ message: "Invalid Id" });
  } else {
    res.json({ message: "Specific products", product });
  }
};

//update product by Id

export const updateProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Products.findByIdAndUpdate(id, req.body, { new: true });
  if (!product) res.json({ message: "Invalid id" });
  if (product)
    res.json({ message: "Product has been Updated Successfully...", product });
};

//delete Product by id

export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Products.findByIdAndDelete(id);
  if (!product) res.json({ message: "Invalid  Product Id" });
  if (product)
    res.json({ message: "This Product has been  deleted ", product });
};
