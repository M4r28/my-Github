class myGithub {
  constructor() {
    this.name = "LeandroDCI";
    this.init();
    this.eventListener();
  }

  eventListener() {
    document.querySelector("#search").addEventListener("keyup", () => {
      if (event.keyCode == 13) {
        // console.log(event);
        this.init();
      }
    });

    document.querySelector("#searchButton").addEventListener("click", () => {
      this.init();
    })
  }


  template1(data1) {
    console.log(data1);

    let { login, avatar_url, bio, html_url } = data1;
    console.log(avatar_url);
    if (bio == null) {
      bio = "";
    }

    let userTemplate = `<div class="row">
    <img src="${avatar_url}" id="profile-pic"> 
    <div class="col">
      <h1 class="jumbotron-heading">${login}</h1>
    <p class="lead text-muted">
        ${bio} 
      </p>
      <p>
        <a href="${html_url}" target="_blank" class="btn btn-primary my-2">View profile</a>
        <a href="#" class="btn btn-secondary my-2" onclick="cornify_add();return false;"> Click me!</a>
      </p>
    </div>
  </div>
`;

    document.querySelector("#pic").innerHTML = userTemplate;
  }

  template(data) {
    // console.log(data);

    let myTemplate = data
      .map(element => {
        let { name, html_url, description } = element;
        // console.log(name);
if (description == null){
  description = "";
}
        return `
      <div class="col-md-4">
      <div class="card mb-4 box-shadow">
      <div class="card-body">
      <h2 class="card-title">${name}</h2>
        <p class="card-text">${description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
    </div>
      `;
      })
      .join("");

    document.querySelector("#repos").innerHTML = myTemplate;

    // console.log(myTemplate);
  }

  init() {
    const myKey =
      "client_id=87e3bb42bbede7eb88ec&client_secret=492a92738b53af34595dbaeb26a2b45ab0b783f7";

      const search = document.querySelector("#search").value
      if (search == ""){
        this.name = "LeandroDCI"
      } else {
        this.name = search
      }

      // if(search !== ""){
      //   this.name = search
      // }

// if(!search){
//   this.name = search
// }

      console.log(this.name);
      
      
       

    const url = `https://api.github.com/users/${this.name}/repos?${myKey}`;
    // console.log(url);
    const url1 = `https://api.github.com/users/${this.name}?${myKey}`;

    fetch(url1)
      .then(response1 => {
        //console.log(response.json());
        return response1.json();
      })
      .then(user => {
        // console.log(user);
        this.template1(user);
      })
      .catch(err => {
        console.log("There is an error!", err);
      });

    fetch(url)
      .then(response => {
        //console.log(response.json());
        return response.json();
      })
      .then(repos => {
        // console.log(repos);
        this.template(repos);
      })
      .catch(err => {
        console.log("There is an error!", err);
      });
  }
}
const martaDCI = new myGithub();



