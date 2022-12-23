  fetch(`https://jsonplaceholder.typicode.com/posts/10`)
          .then((res) => res.json()) 
          .then((data) => {
            console.log(data) 
            // document.getElementById("title").appendChild(document.createTextNode (data.title))
            // document.getElementById("id").appendChild(document.createTextNode (data.id))
            // document.getElementById("user").appendChild(document.createTextNode (data.userId))
            // document.getElementById("bodi").appendChild(document.createTextNode (data.body))
            document.getElementById("apiContent").innerHTML=aff(data.id,data.userId,data.title,data.body)
          })
          function aff(id,user,title,body){
            return ` 
            <div class="content">
              
            <div class="articleUser">
              <p>User:${user}</p>
              <p>ID:${id}</p>
              <p>${title}</p>
              <p> ${body}</p>
            </div>
            </div>`;
          }
          // .then((data) => alert(data.body))
          