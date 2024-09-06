import Swal from "sweetalert2";
export const renderRegister = ($app) => {
  $app.classList.add("flex", "justify-center", "items-center", "h-screen");
  const $form = document.createElement("form");

  // Título del formulario
  const $title = document.createElement("h1");
  $title.innerText = "Registrarse";
  $title.classList.add(
    "text-center",
    "font-bold",
    "text-2xl",
    "mb-6",
    "text-gray-700"
  );
  $form.appendChild($title);

  // Añadir clases y estilo al formulario
  $form.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "bg-pink-100",
    "rounded",
    "p-6",
    "shadow-md",
    "w-80"
  );

  // Estilo del input de username
  const $inputUsername = document.createElement("input");
  $inputUsername.type = "text";
  $inputUsername.name = "username";
  $inputUsername.placeholder = "Username";
  $inputUsername.required = true;
  $inputUsername.classList.add(
    "mb-4",
    "p-2",
    "rounded",
    "border",
    "border-gray-400",
    "w-full",
    "focus:outline-none",
    "focus:border-sky-500",
    "transition",
    "duration-300"
  );
  $form.appendChild($inputUsername);

  // Estilo del input de password
  const $inputPassword = document.createElement("input");
  $inputPassword.type = "password";
  $inputPassword.name = "password";
  $inputPassword.placeholder = "Password";
  $inputPassword.required = true;
  $inputPassword.classList.add(
    "mb-6",
    "p-2",
    "rounded",
    "border",
    "border-gray-400",
    "w-full",
    "focus:outline-none",
    "focus:border-sky-500",
    "transition",
    "duration-300"
  );
  $form.appendChild($inputPassword);

  // Estilo del botón de login
  const $button = document.createElement("button");
  $button.type = "submit";
  $button.innerText = "Registrarme";
  $button.classList.add(
    "bg-pink-400",
    "hover:bg-pink-600",
    "text-white",
    "rounded",
    "py-2",
    "px-4",
    "w-full",
    "transition",
    "duration-300",
    "shadow",
    "hover:shadow-lg"
  );
  $form.appendChild($button);

  // Añadir el formulario a la aplicación
  $app.appendChild($form);

  // Agregamos el evento submit al formulario
  $form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Obtenemos los valores de los inputs
    const username = $inputUsername.value;
    const password = $inputPassword.value;

    try {
      // Hacemos la petición fetch para enviar las credenciales
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "¡Bienvenido ! Ya puedes iniciar sesión",
          icon: "success",
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Hubo un error en la solicitud");
    }
  });
};
