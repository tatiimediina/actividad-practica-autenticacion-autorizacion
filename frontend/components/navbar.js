export const Navbar = ($app) => {
  const $container = document.createElement("header");
  $container.classList.add(
    "flex",
    "flex-row",
    "justify-between",
    "items-center",
    "bg-pink-100",
    "p-3"
  );
  const $nav = document.createElement("nav");
  $nav.classList.add("flex", "flex-row", "gap-4");

  const $logo = document.createElement("h1");
  $logo.classList.add("text-3xl", "font-bold", "text-pink-700");
  $logo.innerText = "LockDev";

  const $btnLogout = document.createElement("button");
  $btnLogout.classList.add(
    "bg-pink-300",
    "p-2",
    "rounded-md",
    "text-white",
    "shadow-md",
    "transition",
    "duration-300",
    "hover:bg-pink-400",
    "hover:shadow-lg",
    "hover:scale-105"
  );
  $btnLogout.innerText = "Logout";
  const $ul = document.createElement("ul");
  
  $ul.classList.add("flex", "flex-row", "gap-4");
  const $blog = document.createElement("li");
  $blog.innerText = "Blog";
  const $about = document.createElement("li");
  $about.innerText = "About";
  const $home = document.createElement("li");
  $home.innerText = "Home";

  $ul.appendChild($blog);
  $ul.appendChild($about);
  $ul.appendChild($home);

  $nav.appendChild($ul);

  $container.appendChild($logo);
  $container.appendChild($nav);
  $container.appendChild($btnLogout);
  $app.appendChild($container);
};
