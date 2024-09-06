export const Navbar = ($app) => {
  const $container = document.createElement("header");
  $container.innerHTML += `
    <nav class="bg-gray-500 text-white mb-3">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo o marca -->
      <a href="#" class="flex items-center">
        <img src="./src/img/lockdev.webp" width="50" height="50" alt="Logo" class="mr-2">
      </a>
      <!-- Botón de menú para dispositivos móviles -->
      <button id="menu-toggle" class="text-white focus:outline-none lg:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <!-- Navegación -->
      <div id="navbar" class="hidden lg:flex lg:items-center lg:space-x-4 ">
        
        <ul class="flex flex-row justify-between space-x-4">
          <li><a href="/home" class="hover:text-gray-300">Home</a></li>
          <li><a href="/blog" class="hover:text-gray-300">Blog</a></li>
          <li><a href="/about" class="hover:text-gray-300">About</a></li>
        </ul>
      </div>
      <div class="hidden lg:flex lg:items-center lg:space-x-4">
       <ul class=" ml-auto flex space-x-4">
          <li><a href="" id="user-name" class="hover:text-gray-300">NotLogged</a></li>
          <li><a href="/login" id="logout" class="hover:text-gray-300">Salir</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  
  
  <script>
    document.getElementById('menu-toggle').addEventListener('click', function() {
      const navbar = document.getElementById('navbar');
      navbar.classList.toggle('hidden');
    });
    document.getElementById("logout").addEventListener("click", async () => {
      const response = await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error("Error al cerrar sesión");
      } else {
        window.location.href = "/login";
      }
    })
    
  </script>
  
  
    `;
  $app.appendChild($container);
};
