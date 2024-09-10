import express from "express";
import { addAddress, getAddress } from "../Controllers/address.js";
import { Authenticated } from "../Middlewares/auth.js";

const addressRouter = express.Router();

addressRouter.post("/add", Authenticated, addAddress);
addressRouter.get("/get", Authenticated, getAddress);

export default addAddress;
