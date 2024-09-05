import { Navbar } from "./navbar";

export const renderHome = ($app) => {
  // Renderiza el Navbar
  Navbar($app);

  // Crea el contenedor principal
  const $container = document.createElement("main");

  // Crea y configura el título principal
  const $title = document.createElement("h1");
  $title.innerText = "Bienvenidos a LockDev";
  $title.classList.add("text-center", "font-bold", "text-2xl", "m-2");

  // Crea y configura el párrafo principal
  const $paragraph = document.createElement("p");
  $paragraph.innerText =
    "Transformamos tus ideas en soluciones digitales seguras y efectivas.";
  $paragraph.classList.add("text-center");

  // Crea y configura la primera sección
  const $section1 = document.createElement("section");
  $section1.classList.add("bg-gray-100", "p-6", "flex", "flex-col", "gap-4");

  const $titleSection1 = document.createElement("h2");
  $titleSection1.innerText = "Desarrollo Web";

  const $pSection1 = document.createElement("p");
  $pSection1.innerText =
    "En LockDev, creamos sitios web modernos, rápidos y responsivos que se adaptan a todas las plataformas. Utilizamos las últimas tecnologías para ofrecer una experiencia de usuario única y eficiente.";

  $section1.appendChild($titleSection1);
  $section1.appendChild($pSection1);

  // Crea y configura la segunda sección
  const $section2 = document.createElement("section");
  $section2.classList.add("bg-gray-100", "p-6", "flex", "flex-col", "gap-4");

  const $titleSection2 = document.createElement("h2");
  $titleSection2.innerText = "Desarrollo de Aplicaciones Móviles"; // Cambiado para reflejar un título diferente

  const $pSection2 = document.createElement("p");
  $pSection2.innerText =
    "Desarrollamos aplicaciones móviles eficientes y seguras para diversas plataformas, asegurando un rendimiento óptimo y una experiencia de usuario intuitiva.";

  $section2.appendChild($titleSection2);
  $section2.appendChild($pSection2);

  // Añade todos los elementos al contenedor principal
  $container.appendChild($title);
  $container.appendChild($paragraph);
  $container.appendChild($section1);
  $container.appendChild($section2);

  // Añade el contenedor principal al elemento raíz
  $app.appendChild($container);
};
