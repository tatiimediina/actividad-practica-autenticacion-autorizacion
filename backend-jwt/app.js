// server.js
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";

import { PORT } from "./src/config/env.js";
/* import generarJwt from "./src/helpers/generar-jwt.js";
import validarJwt from "./middlewares/validar-jwt.js"; */
import morgan from "morgan";
import { createMyPool } from "./src/db/database.js";
import { authRouter } from "./src/routes/auth.routes.js";

const app = express();

app.use(
  cors({
    // Permitir solicitudes desde el front-end
    origin: [
      "http://localhost:5500",
      "http://localhost:4040",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Habilitar envío de cookies
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "session_secret_key", // Cambia esto por una clave secreta en producción
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Usar 'true' si usas HTTPS
  })
);

app.use(authRouter);

// Servidor escuchando
app.listen(PORT, () => {
  const pool = createMyPool();
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
