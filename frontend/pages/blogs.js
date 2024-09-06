import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export const renderBlogs = ($app) => {
  Navbar($app);
  const $container = document.createElement("main");
  $container.classList.add("h-full", "min-h-screen");

  $container.innerHTML += `
    <div class="container mx-auto px-4 justify-center items-center">
  <h1 class="text-3xl font-bold mb-4 text-center">Blog LockDev</h1>
  <hr class="my-4 border-gray-300">

 
  <div class="mb-4 justify-center items-center">
    <p class="text-gray-700 text-center">En este blog, exploramos las últimas tendencias, técnicas y herramientas en el mundo del desarrollo de software. 
       Desde consejos para principiantes hasta avanzadas técnicas de programación, 
       aquí encontrarás recursos útiles para mejorar tus habilidades y mantenerte al día con la evolución de la industria.</p>
  </div>

 
  <h2 class="text-2xl font-semibold mb-4">Publicaciones Recientes</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <img src="./src/img/javascript.png" class="w-full h-48 object-cover" alt="JavaScript">
      <div class="p-4">
        <h5 class="text-xl font-semibold mb-2">Introducción a JavaScript ES6</h5>
        <p class="text-gray-600 mb-4">Descubre las nuevas características de ES6 que están cambiando la forma en que escribimos JavaScript.</p>
        <a href="#" class="text-blue-500 hover:underline">Leer más</a>
      </div>
    </div>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <img src="./src/img/docker.png" class="w-full h-48 object-cover" alt="Docker">
      <div class="p-4">
        <h5 class="text-xl font-semibold mb-2">Docker para Desarrolladores</h5>
        <p class="text-gray-600 mb-4">Aprende cómo Docker puede simplificar la configuración de tu entorno de desarrollo.</p>
        <a href="#" class="text-blue-500 hover:underline">Leer más</a>
      </div>
    </div>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <img src="./src/img/agile.png" class="w-full h-48 object-cover" alt="Agile">
      <div class="p-4">
        <h5 class="text-xl font-semibold mb-2">Metodologías Ágiles en Desarrollo de Software</h5>
        <p class="text-gray-600 mb-4">Explora cómo las metodologías ágiles pueden mejorar la eficiencia y la colaboración en tu equipo de desarrollo.</p>
        <a href="#" class="text-blue-500 hover:underline">Leer más</a>
      </div>
    </div>
  </div>
</div>

    

    `;
  $app.appendChild($container);
  Footer($app);
};
