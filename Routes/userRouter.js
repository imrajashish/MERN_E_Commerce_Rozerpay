import express from "express";
import { login, register, users, profile } from "../Controllers/user.js";
import { Authenticated } from "../Middlewares/auth.js";

const userRouter = express.Router();
//register user
userRouter.post("/register", register); // =>/api/user/register

//login user
userRouter.post("/login", login);

//get all user
userRouter.get("/all", users);

//get profile
userRouter.get("/profile", Authenticated, profile);

export default userRouter;
