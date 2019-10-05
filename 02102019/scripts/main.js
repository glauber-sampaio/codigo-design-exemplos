var lista = document.querySelector('.lista ul');
var bigTitle = document.querySelector('.big-title');
var modal = document.querySelector(".modal");
var modalConteudo = modal.querySelector(".modal__conteudo");
var botaoFechar = modal.querySelector(".botao-fechar");

// Aqui fica cada clique num item

lista.querySelectorAll("li").forEach(function(elemento) {

  //Capturamos o nome completo da cidade e deixamos apenas o primeiro nome
  //Ex: Cabo Frio = Cabo
  //Ex: Campo Grande = Campo
  var nomeCidade = elemento.querySelector('h1').innerHTML.split(" ")[0];
  
  // Quando o mouse passa por cima do elemento
  elemento.addEventListener("mouseover", function() {
    bigTitle.innerHTML = nomeCidade;
  });

  // Quando o mouse sai de cima do elemento
  elemento.addEventListener("mouseleave", function() {
    bigTitle.innerHTML = "";
  });

  // Quando vc clica num elemento
  elemento.addEventListener("click", function () {

    //Aqui a gente captura o atributo data-cidade no html
    var dataCidade = elemento.dataset.cidade;
    
    //Acrescentando a classe "show" no modal
    modal.classList.add("show");

    //Acrescentamos na modalConteudo a classe bg + nome da cidade
    modalConteudo.classList.add("bg-" + dataCidade);

    //Procuramos no modalConteudo qualquer div que tenha a classe .show e removemos a classe .show
    modalConteudo.querySelector(".show").classList.remove("show");
    
    //Acrescentamos a classe .show na div com ID + nome da cidade
    modalConteudo.querySelector("#conteudo-" + dataCidade).classList.add("show");
    

  });

});


//Adicionamos um evento de clique no botão fechar. Executa a função hideModal();
botaoFechar.addEventListener("click", hideModal);

//Adicionar um evento quando vc aperta o botão Esc. 
//Faz exatamente a mesma coisa que clicar no botão fechar.
document.addEventListener("keydown", function (e) {
  
  //Criamos a condição para a tecla a ser apertada.
  //Aqui dizemos que APENAS ESC funciona
  if(e.key == "Escape") {
    
    //Chamamos a função para fechar a modal
    hideModal();
  }
});


//Aqui fica a função de fechar a modal
function hideModal() {

  modal.classList.remove("show");

  var classes = modalConteudo.classList.value.split(" ");
  var classeBg = classes[1];
  
  modalConteudo.classList.remove(classeBg);

}

