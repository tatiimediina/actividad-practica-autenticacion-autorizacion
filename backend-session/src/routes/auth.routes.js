import { Router} from 'express'; 
import { login, logout, session} from '../controllers/auth.controllers.js'
const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/session", session);
authRouter.post("/logout", logout);

export { authRouter }
