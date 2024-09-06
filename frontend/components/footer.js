export const Footer = ($app) => {
  return ($app.innerHTML += `
          <hr class="my-4 border-gray-300">
          <footer class="text-center justify-center p-6 items-center">
          <p class="p-2">&copy; 2024 LockDev. Todos los derechos reservados.</p>
          </footer>   
          `);
};
