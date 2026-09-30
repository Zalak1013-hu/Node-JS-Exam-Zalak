import { Router } from "express";

import { register, login, profile } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/profile/:id", profile);

export default userRouter;
