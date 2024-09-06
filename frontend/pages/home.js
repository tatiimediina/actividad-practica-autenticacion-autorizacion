import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer.js";

export const renderHome = ($app) => {
  // Renderiza el Navbar
  Navbar($app);

  const $container = document.createElement("main");
  $container.classList.add("h-full");

  $container.innerHTML += `
    <div class="flex flex-col items-center justify-center py-4">
    <h1 class="text-center font-bold text-4xl p-6">Bienvenidos a LockDev</h1>
    <p class="text-center">Transformamos tus ideas en soluciones digitales seguras y efectivas.</p>
  </div>
  <hr class="my-6 border-gray-300">
 <!-- Desarrollo Web -->
<div class="flex flex-col md:flex-row items-center bg-gray-100 py-8">
  <div class="w-full md:w-1/2">
    <img src="img/home-desarrollo-web.webp" alt="Desarrollo Web" class="w-full h-auto">
  </div>
  <div class="w-full md:w-1/2 text-center md:text-left px-6">
    <h2 class="text-3xl font-semibold">Desarrollo Web</h2>
    <p class="mt-4">En LockDev, creamos sitios web modernos, rápidos y responsivos que se adaptan a todas las plataformas. Utilizamos las últimas tecnologías para ofrecer una experiencia de usuario única y eficiente.</p>
  </div>
</div>

<hr class="my-6 border-gray-300">

<!-- Desarrollo de Aplicaciones Móviles -->
<div class="flex flex-col md:flex-row-reverse items-center py-8">
  <div class="w-full md:w-1/2">
    <img src="img/home-desarrollo-movil.jpg" alt="Desarrollo de Aplicaciones Móviles" class="w-full h-auto">
  </div>
  <div class="w-full md:w-1/2 text-center md:text-left px-6">
    <h2 class="text-3xl font-semibold">Desarrollo de Aplicaciones Móviles</h2>
    <p class="mt-4">Diseñamos y desarrollamos aplicaciones móviles innovadoras y personalizadas para Android e iOS, garantizando una experiencia de usuario óptima y una alta performance en cada dispositivo.</p>
  </div>
</div>

<hr class="my-6 border-gray-300">

<!-- Seguridad de Software -->
<div class="flex flex-col md:flex-row items-center bg-gray-100 py-8">
  <div class="w-full md:w-1/2">
    <img src="img/home-seguridad-software.webp" alt="Seguridad de Software" class="w-full h-auto">
  </div>
  <div class="w-full md:w-1/2 text-center md:text-left px-6">
    <h2 class="text-3xl font-semibold">Seguridad de Software</h2>
    <p class="mt-4">En LockDev, nos preocupamos por la seguridad de tus aplicaciones. Ofrecemos auditorías de seguridad y soluciones robustas para proteger tus sistemas de posibles amenazas y vulnerabilidades.</p>
  </div>
</div>

`;
  setTimeout(() => {
    Footer($app);
  }, 1000);
  $app.appendChild($container);
};
