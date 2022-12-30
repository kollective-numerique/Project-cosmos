let sidenav = document.getElementById("sideMenu");
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
                /*   for (i = 1; i < result.length; i++) {
                      var div = document.getElementById('text')
                      div;
                  } */
                /* let printElement = result.title */
            document.querySelector('.authorsList').innerHTML += display_author(result.thumbnailUrl, result.title);
        })
}

let display_author = function(thumbnailUrl, title) {
    return (
        `<div class="authorsBox">
          <div class="top">
            <img src="${thumbnailUrl}" alt="" id="image" />
          </div>
          <div id="text">
            <span id="article">${title}</span>
          </div>
     </div>
    `
    )
}