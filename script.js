var imgAtual = '/img/igor.png'
var imgAnterior = '/img/igor2.png'




function trocarFoto() {
  document.getElementById("profile").src = imgAtual
  let aux = imgAtual
  imgAtual = imgAnterior
  imgAnterior = aux
}

