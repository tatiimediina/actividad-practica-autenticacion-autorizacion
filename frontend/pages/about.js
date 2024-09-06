import { Footer } from "../components/footer.js";
import { Navbar } from "../components/navbar.js";

export const renderAbout = ($app) => {
  Navbar($app);
  const $container = document.createElement("main");
  $container.classList.add("h-full", "min-h-screen");
  $container.innerHTML += `
    <h1 class="text-center font-bold text-3xl">Sobre Nosotros</h1>
    <hr class="my-4 border-gray-300"/>
    <div class="flex flex-row mx-8 ">    
      <div class="w-1/2">
        <p class="my-1">Bienvenidos a <strong>LockDev</strong>, un espacio dedicado a todos los entusiastas del desarrollo de software, tanto principiantes como profesionales. Fundado en 2020 por un grupo de apasionados desarrolladores, nuestro objetivo es compartir conocimiento, experiencias y recursos que ayuden a otros a crecer en su carrera profesional.</p>
        <p class="my-1">Nuestra misión es simplificar el aprendizaje del desarrollo de software proporcionando contenido de calidad, tutoriales prácticos y consejos útiles sobre las últimas tecnologías y mejores prácticas de la industria. Creemos en el poder de la comunidad y en la importancia de mantenerse actualizado en un campo tan dinámico y en constante evolución como es el desarrollo de software.</p>
        <p class="my-1">En LockDev, cubrimos una amplia gama de temas, desde lenguajes de programación como JavaScript, Python y Java, hasta frameworks modernos, metodologías ágiles, y herramientas de DevOps como Docker y Kubernetes. Nos enfocamos en crear contenido accesible y fácil de entender, sin importar el nivel de experiencia de nuestros lectores.</p>
        <p class="my-1">Únete a nuestra comunidad y participa en la conversación. Nos encantaría escuchar tus ideas, sugerencias y experiencias. Juntos, podemos construir un futuro mejor a través de la tecnología.</p>
      </div>
      <div class="w-1/2">
        <img src="img/lockdev.webp" class="img-fluid" alt="Equipo de LockDev">
      </div>
    </div>
    `;
  setTimeout(() => {
    Footer($app);
  }, 1000);
  $app.appendChild($container); // Corrección aquí
};
