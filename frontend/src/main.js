import "./style.css";

import { renderLogin } from "./login.js";
import { renderRegister } from "./register.js";
import { renderHome } from "./home.js";

const pathname = window.location.pathname;

const $app = document.getElementById("app");

if (pathname === "/login") {
  renderLogin($app);
} else if (pathname === "/register") {
  renderRegister($app);
} else if (pathname === "/home") {
  renderHome($app);
}
