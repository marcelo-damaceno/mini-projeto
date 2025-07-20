import { renderLista } from "./ui.js"
import { Interesse } from "./interesse.js"

const interesse = new Interesse
const novoInteresseElemento = document.getElementById('interesse-descricao')

function adicionarInteresse() {
  let novoInteresse = novoInteresseElemento.value

  if (novoInteresseElemento.value.trim() === '') {
    alert('Informe o interesse ou hobbie para adicionar')
    novoInteresseElemento.focus()
    return
  }

  interesse.addItem(novoInteresse)
  novoInteresseElemento.value = ''
  novoInteresseElemento.focus()

  renderLista(interesse.getItems())

}

function limparInteresse(){
  interesse.clearItems()
  renderLista(interesse.getItems())
}

async function iniciarProjeto(){
  
  renderLista(interesse.getItems())
}

document.addEventListener('DOMContentLoaded',iniciarProjeto)
document.getElementById('add-interesse').addEventListener('click', adicionarInteresse)
document.getElementById('clear-interesse').addEventListener('click', limparInteresse)


setInterval(() => {
  renderLista(interesse.getItems())
},1000)


