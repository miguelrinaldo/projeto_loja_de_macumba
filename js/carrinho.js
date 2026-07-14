//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = []

//FUNÇÃO PARA ADICIONAR O ITEM NO ARRAY
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)
}

//LISTAR ITENS DO CARRINHO
const listItens = () => {
    return itensCarrinho
}

export{addItem}
