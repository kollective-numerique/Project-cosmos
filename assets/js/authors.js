let sidenav = document.getElementById("sideMenu");
let openBtn = document.getElementById("openBtn");

openBtn.onclick = openNav;

function openNav() {
  sidenav.classList.toggle("active");
}