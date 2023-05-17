var imgAtual = '/img/igor.png'
var imgAnterior = '/img/igor2.png'

var corBackgroudAnterior='#9BA4B5'
var corBackgroundAtual='#F1F6F9'


function trocarFoto() {
  document.getElementById("profile").src = imgAtual
  let aux = imgAtual
  imgAtual = imgAnterior
  imgAnterior = aux
}

function trocarCor() {
  document.getElementByquerySelector("body").style.color=corBackgroundAtual
  let aux = corBackgroundAtual
  corBackgroundAtual = corBackgroundAnterior
  corBackgroundAnterior = aux
}

