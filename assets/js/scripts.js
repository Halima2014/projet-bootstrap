const listCategories = document.querySelector(".list-categories");
const listArticles = document.querySelector("#allArticles");
const categorie =`<div class="categorie">
                    <a>Ma categorie</a>
                </div>`;

const article = `<article class="col-12 col-md-6 col-xl-4 p-2">
                   
                    <div class="card shadow" >
                    <img src="https://picsum.photos/300/150" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Microphone Rode NT1-A</h5>
                        <p class="card-text">Avec sa capsule de condensateur de 1 pouce et sa réponse en fréquence étendue ...</p>
                        <a href="#" class="btn btn-primary"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="325 utillisateurs regardent cet article">
                        <i class="bi bi-cart"></i>  Acheter</a>
                    </div>
                </article>
                
                </div>`;


let htmlCategories = '';
for(let i =0; i<6;i++){
    htmlCategories += categorie;
}
listCategories.innerHTML = htmlCategories;

let htmlArticles = '';
for(let i =0; i<12; i++){
    htmlArticles += article;
}
listArticles.innerHTML = htmlArticles;

// Initialisation des toolitps
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})