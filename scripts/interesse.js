export class Interesse {
    #key = "m1s7:meus-interesses"
    
    items = []

    constructor(){
        this.items = this.loadFromLocalStorage()
    }

    addItem(interesse){
        this.items.push(interesse)
        this.saveToLocalStorage()
    }

    getItems(){
        return this.items
    }

    loadFromLocalStorage(){
        const listaStorage = localStorage.getItem(this.#key)

        if(listaStorage) {
            const lista = JSON.parse(listaStorage);

            console.log(lista)
            return lista;
        }

        return []
    }

    saveToLocalStorage(){
        const parsedList = JSON.stringify(this.items)

        localStorage.setItem(this.#key, parsedList)

        console.log("Interesses salvos no localStorage")

    }

}