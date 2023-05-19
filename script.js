var imgAtual = '/img/igor.png'
var imgAnterior = '/img/igor2.png'



var corBackgroundAnterior='#F1F6F9'
var corBackgroundAtual='#212A3E'
var corTextoAnterior='black'
var corTextoAtual='white'
var corHeaderAnterior='#212A3E'
var corHeaderAtual='#0f131d'


function trocarFoto() {
  document.getElementById("profile").src = imgAtual
  let aux = imgAtual
  imgAtual = imgAnterior
  imgAnterior = aux
}

function trocarCor() {
//  cor body
  document.querySelector("body").style.backgroundColor=corBackgroundAtual
  let aux = corBackgroundAtual
  corBackgroundAtual = corBackgroundAnterior
  corBackgroundAnterior = aux

 
  
  // cor texto
  document.querySelector("#projetos").style.color=corTextoAtual
  document.querySelector("#bio").style.color=corTextoAtual
  // document.querySelector("a").style.color=corTextoAtual
  let aux2 = corTextoAtual
  corTextoAtual = corTextoAnterior
  corTextoAnterior = aux2

   //cor header e footer
   document.querySelector("header").style.backgroundColor=corHeaderAtual
   document.querySelector("footer").style.backgroundColor=corHeaderAtual
   let aux3 = corHeaderAtual
   corHeaderAtual = corHeaderAnterior
   corHeaderAnterior = aux3



}


