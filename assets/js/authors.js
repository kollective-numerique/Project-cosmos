let sidenav = document.querySelector(".menu");
let openBtn = document.getElementById("openBtn");

openBtn.onclick = openNav;

function openNav() {
  sidenav.classList.toggle("active");
}

/* RECUPERATION DES DATAS DE L'API */

for (var id = 1; id < 6; id++) {
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
          document.querySelector('.authorsList').innerHTML += display_author(result.thumbnailUrl, result.title);
      })
}

let display_author = function(thumbnailUrl, title) {
  return (
      `<div class="authorsBox">
        <div class="top">
          <img src="assets/user.png" alt="" id="image" />
        </div>
        <div id="text">
          <span id="article">${title}</span>
        </div>
   </div>
  `
  )
}