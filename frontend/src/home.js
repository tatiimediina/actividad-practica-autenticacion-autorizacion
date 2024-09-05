import { Navbar } from "./navbar";

export const renderHome = ($app) => {
  Navbar($app);

  const $container = document.createElement("main");
  const $title = document.createElement("h1");
  $title.innerText = "Bienvenidos a LockDev";
  const $paragraph = document.createElement("p");
  $paragraph.innerText =
    "Transformamos tus ideas en soluciones digitales seguras y efectivas.";

  const $section1 = document.createElement("section");
  $section1.classList.add("bg-gray-100", "p-6", "flex", "flex-col", "gap-4");
  const $titleSection1 = document.createElement("h2");
  $titleSection1.innerText = "Desarrollo Web";
  const $pSection1 = document.createElement("p");
  $pSection1.innerText =
    "En LockDev, creamos sitios web modernos, rápidos y responsivos que se adaptan a todas las plataformas. Utilizamos las últimas tecnologías para ofrecer una experiencia de usuario única y eficiente.";

  $section1.appendChild($titleSection1);
  $section1.appendChild($pSection1);

  $container.appendChild($title);
  $container.appendChild($paragraph);

  $app.appendChild($container);
};
