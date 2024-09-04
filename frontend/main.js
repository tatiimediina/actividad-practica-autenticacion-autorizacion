(async () => {
  const response = await fetch("http://localhost:3000/session", {
    method: "GET",
    credentials: "include", // Importante para enviar las cookies de sesión
  });

  console.log({ response });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    document.getElementById("user-name").innerText = data.user[0].username;
  } else {
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "index.html";
  }
})();

// Manejar el cierre de sesión
document.querySelector("#logout").addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/logout", {
    mode: "no-cors",
    method: "POST",
    credentials: "include", // Importante para enviar las cookies de sesión
    headers: {
      "Content-Type": "application/json",
    },
  });
});

// document.getElementById("logout").addEventListener("click", async () => {
//   const response = await fetch("http://localhost:3000/logout", {
//     mode: "cors",
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Error al cerrar sesión");
//   } else {
//     window.location.href = "index.html";
//   }
// });
