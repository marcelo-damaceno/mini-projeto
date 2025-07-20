import { renderLista } from "./ui.js"
import { renderNoticia } from "./ui.js"
import { Interesse } from "./interesse.js"
import { getNews } from "./api.js"

const interesse = new Interesse
const novoInteresseElemento = document.getElementById('interesse-descricao')

var noticia

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

  try {
    noticia = await getNews()
    renderNoticia(noticia)

  } catch (error){
    console.log('erro ao carregar as noticias')
  }
}

document.addEventListener('DOMContentLoaded',iniciarProjeto)
document.getElementById('add-interesse').addEventListener('click', adicionarInteresse)
document.getElementById('clear-interesse').addEventListener('click', limparInteresse)


setInterval(() => {
  renderLista(interesse.getItems())
},1000)


