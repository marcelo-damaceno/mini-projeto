/** 
 * items = >  
 * interesse: string 
 */
const listaItemsElemento = document.getElementById('lista-interesse')

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

