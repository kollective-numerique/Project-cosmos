let sidenav = document.getElementById("sideMenu");
let openBtn = document.getElementById("openBtn");

openBtn.onclick = openNav;

function openNav() {
  sidenav.classList.toggle("active");
}

/* RECUPERATION DES DATAS DE L'API */


for(var id = 1; id<6; id++){
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  
  .then((res)=> res.json())
  .then((result)=>{
    console.log(result)
    for(i=1; i< result.length; i++){
      var div = document.getElementById('text')
      div;
    } 
    let printElement = result.title
    document.getElementById('article').innerHTML += printElement
  }) 
} 
