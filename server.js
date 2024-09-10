import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./Routes/userRouter.js";
import productRouter from "./Routes/productRouter.js";
import cartRouter from "./Routes/cartRouter.js";
import addAddress from "./Routes/addressRouter.js";
import paymentRouter from "./Routes/paymentRouter.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    Credential: true,
  })
);

//user Router
app.use("/api/user", userRouter);

//product Router
app.use("/api/product", productRouter);

//Cart Router
app.use("/api/cart", cartRouter);

//Address Router
app.use("/api/address", addAddress);

// payment Router
app.use("/api/payment", paymentRouter);

const DB =
  "mongodb://ashishit0707:wOcaZuYbEUrhxBBe@cluster0-shard-00-00.itjc0.mongodb.net:27017,cluster0-shard-00-01.itjc0.mongodb.net:27017,cluster0-shard-00-02.itjc0.mongodb.net:27017/ZARA_E_Commerce?replicaSet=atlas-104025-shard-0&ssl=true&authSource=admin";
mongoose
  .connect(DB, {
    dbName: "ZARA_E_Commerce",
  })
  .then(() => console.log("Mongodb connected Successfully..."))
  .catch((err) => console.log(err));

const port = 8000;
app.listen(port, () => console.log(`Server is Running on Port ${port}`));
