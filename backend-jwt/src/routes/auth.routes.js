import { Router } from "express";
import {
  login,
  logout,
  register,
  session,
} from "../controllers/auth.controllers.js";
import { validarJwt } from "../middlewares/validar-jwt.js";
const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/session", validarJwt, session);
authRouter.post("/logout", logout);
authRouter.post("/register", register);

export { authRouter };
