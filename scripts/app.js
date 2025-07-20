import { renderLista } from "./ui.js"
import { Interesse } from "./interesse.js"

const interesse = new Interesse

async function iniciarProjeto(){
  
  renderLista(interesse.getItems)
}

document.addEventListener('DOMContentLoaded',iniciarProjeto)


