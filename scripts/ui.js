/** 
 * items = >  
 * interesse: string 
 */
const listaItemsElemento = document.getElementById('lista-interesse')
const listaNoticiaElemento = document.querySelector('.title-news-today')

export function renderNoticia(noticia){
    listaNoticiaElemento.innerHTML = ""

    const noticiaElemento = document.createElement('p')
    noticiaElemento.classList.add('title-news-today')

    noticiaElemento.innerHTML = ` <p>${noticia}</p> `
    listaNoticiaElemento.appendChild(noticiaElemento)
}
export function renderLista(items) {    
    listaItemsElemento.innerHTML = ""
    if (items.length >0) {
      items.forEach((item) => {
          const listaItemElemento = document.createElement('li')
          listaItemElemento.classList.add('lista-item')

          listaItemElemento.innerHTML = ` <li>${item}</li> `
          listaItemsElemento.appendChild(listaItemElemento)
      });
    }    
}

