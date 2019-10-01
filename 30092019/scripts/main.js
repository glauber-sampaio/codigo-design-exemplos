
var quadrado = document.querySelector(".quadrado");
var circulo = document.querySelector(".circulo");

quadrado.addEventListener("mouseover", function() {
  // console.log("Mouse está em cima");
  circulo.classList.add("cor-preto");
})

quadrado.addEventListener("mouseleave", function() {
  // console.log("Mouse saiu");
  circulo.classList.remove("cor-preto");
})

document.addEventListener("mousemove", function (event) {
  
  // console.log(event.clientX, event.clientY);

  var posicaoY = event.clientY - 300;
  var posicaoX = event.clientX - 380;

  circulo.style.transform = "translate3d("+ posicaoX +"px, "+ posicaoY +"px, 0)"

});