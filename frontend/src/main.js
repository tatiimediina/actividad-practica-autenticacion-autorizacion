import "./style.css";

import { renderLogin } from "../pages/login.js";
import { renderRegister } from "../pages/register.js";
import { renderHome } from "../pages/home.js";

const pathname = window.location.pathname;

const $app = document.getElementById("app");

if (pathname === "/login") {
  renderLogin($app);
} else if (pathname === "/register") {
  renderRegister($app);
} else if (pathname === "/home") {
  renderHome($app);
}
