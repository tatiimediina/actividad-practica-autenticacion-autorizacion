import "./style.css";

import { renderLogin } from "../pages/login.js";
import { renderRegister } from "../pages/register.js";
import { renderHome } from "../pages/home.js";
import { renderAbout } from "../pages/about.js";
import { renderBlogs } from "../pages/blogs.js";

const pathname = window.location.pathname;

const $app = document.getElementById("app");

if (pathname === "/login") {
  renderLogin($app);
} else if (pathname === "/register") {
  renderRegister($app);
} else if (pathname === "/home") {
  renderHome($app);
} else if (pathname === "/about") {
  renderAbout($app);
} else if (pathname === "/blog") {
  renderBlogs($app);
}
if (pathname === "/home" || pathname === "/about" || pathname === "/blog") {
  (async () => {
    const response = await fetch("http://localhost:4000/session", {
      method: "GET",
      credentials: "include", // Importante para enviar las cookies de sesión
    });

    console.log({ response });

    if (response.ok) {
      const data = await response.json();

      document.getElementById("user-name").innerText = data.user.username;
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      window.location.href = "/home";
    }
  })();
}
