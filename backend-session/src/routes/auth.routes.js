import { Router} from 'express'; 
import { login, logout, register, session} from '../controllers/auth.controllers.js'
const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/session", session);
authRouter.post("/logout", logout);
authRouter.post("/register", register)

export { authRouter }
