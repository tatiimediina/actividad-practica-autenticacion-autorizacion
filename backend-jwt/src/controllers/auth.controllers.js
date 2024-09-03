import { createMyPool } from "../db/database.js";
import { generarJwt } from "../helpers/generar-jwt.js";
import { validarJwt } from "../middlewares/validar-jwt.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log("hola lol");
  try {
    const pool = await createMyPool();
    const sql = "SELECT * FROM `users` WHERE username = ? and password = ?";
    const [user] = await pool.query(sql, [username, password]);

    // Validación de usuario
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Generar token JWT
    const token = await generarJwt(user[0].id);

    // Almacenar el token en la sesión del servidor
    req.session.token = token;

    // Almacenar el token en una cookie segura
    res.cookie("authToken", token, {
      httpOnly: true, // La cookie no es accesible desde JavaScript
      secure: false, // Cambiar a true en producción con HTTPS
      maxAge: 3600000, // Expiración en milisegundos (1 hora)
    });

    return res.json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
};

export const session =
  (validarJwt,
  (req, res) => {
    console.log(req.user);
    return res.json({
      message: "Acceso permitido a área protegida",
      user: req.user,
    });
  });

export const logout = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error al cerrar sesión" });
      }

      res.clearCookie("authToken");
      return res.json({ message: "Cierre de sesión exitoso" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
};
