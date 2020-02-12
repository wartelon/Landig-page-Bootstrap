import api from "./services/api";

class App{
    constructor() {
        this.repositories = [];
        this.listrepo = document.getElementById('list-repo')

        this.addRepo();
    }

//pegando os dados do apigithub 
 addRepo(event){
     event.preventDefault();

    const response = await api.get();

    const { name, description, html_url } = response.data

    this.repositories.push({
        name,
        description,
        html_url
    });

    this.render();
}
    
  
//rederizando na tela
 render(){
    
    this.lisrepo.innerHTML = '';

     this.repositories.forEach(repo =>{
         let titlerepo = document.createElement('strong');
         titlerepo.appendChild(document.createTextNode(repo.name));

         let descriptionrepo = document.createElement('p');
         descriptionrepo.appendChild(document.createTextNode(repo.description));

         let linkrepo = document.createElement('a');
         linkrepo.setAttribute('target','_blank');

         let listRepo = document.createElement('li');
         listRepo.appendChild(titlerepo);
         listRepo.appendChild(descriptionrepo);
         listRepo.appendChild(linkrepo);


         this.listrepo.appendChild(listRepo)


     })

 }
}

 new App()