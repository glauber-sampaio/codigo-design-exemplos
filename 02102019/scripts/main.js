console.log("Oi");

var lista = document.querySelector('.lista ul');
var bigTitle = document.querySelector('.big-title');


lista.querySelectorAll("li").forEach(function(elemento) {

  var nomeCidade = elemento.querySelector('h1').innerHTML.split(" ")[0];
  
  elemento.addEventListener("mouseover", function() {
    bigTitle.innerHTML = nomeCidade;
  });

  elemento.addEventListener("mouseleave", function() {
    bigTitle.innerHTML = "";
  });

});


// console.log(lista);