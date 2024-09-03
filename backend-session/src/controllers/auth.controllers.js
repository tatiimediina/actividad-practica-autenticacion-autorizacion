import { createMyPool } from "../db/database.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await createMyPool();
    const result = await pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    const rows = result[0]; // O result.rows dependiendo de la estructura.
    

    // Verifica si el usuario existe
    if (rows.length === 0) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const user = rows[0];

    // Aquí deberías comparar el password con el hash almacenado en la base de datos
    // Suponiendo que ya tienes la comparación de contraseñas correcta
    if (password === user.password) {
      req.session.userId = user.id;
      req.session.username = user.username;

      return res.json({
        message: "Inicio de sesión exitoso",
        user: { id: user.id, username: user.username },
      });
    } else {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export const session = async (req, res) => {
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username }
    });
  } else {
    return res.status(401).json({ loggedIn: false, message: 'No hay sesión activa' });
  }
};

export const logout = async (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Error al cerrar la sesión' });
    }
    res.clearCookie('connect.sid'); // Nombre de cookie por defecto para express-session
    return res.json({ message: 'Sesión cerrada exitosamente' });
  });
};

export const register = async(req, res) =>{
    const { username, password } = req.body;

    try {
        const pool = await createMyPool();
        await pool.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, password]
        );
        return res.json({ message: "Usuario creado exitosamente" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error en el servidor" });
        
    }
}