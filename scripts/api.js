export async function getNews(){
    const response = await fetch ('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
    const data = await response.json()

    if (!response.ok){
        return []        
    }

    return data.items[0].titulo;
}