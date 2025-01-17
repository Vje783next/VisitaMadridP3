const btn_menu = document.getElementById("btn-menu");
const navbar = document.getElementById("navbar");

btn_menu.addEventListener('click', () => {
  navbar.classList.toggle('show_menu');
  if(navbar.classList.contains('show_menu')) {
    btn_menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    btn_menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
})