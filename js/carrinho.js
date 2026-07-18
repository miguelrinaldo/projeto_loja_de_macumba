//localStorage.removeItem("itensSessao");
//localStorage.clear()

//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//const itensCarrinho = JSON.parse(sessionStorage.getItem('itensSessao')) || []

//CRIANDO ARROW ITEM
const fobjItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_descricao_produto, 
        descricao_produto: objProduto.descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem,
        valor_unitario: objProduto.valor_unitario, 
        quantidade: 1,
        
    }

    return item
}




//FUNÇÃO PARA ADCIONAR O ITEM NO ARRAY
console.log("indice do array ->>>", itensCarrinho.findIndex(elem => elem.id_produto == 2))
const addItem = (objItem) => {
    // 1) Procura se o produto já está no carrinho
    const indiceExistente = itensCarrinho.findIndex(
        elem => elem.id_produto === objItem.id_produto
    )

    if (indiceExistente !== -1) {
        // 2) Já existe -> só incrementa a quantidade
        itensCarrinho[indiceExistente].quantidade += 1
    } else {
        // 3) Não existe -> cria um item novo
        itensCarrinho.push(fobjItem(objItem))
    }
   

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}



//LISTAR ITENS DO CARRINHO
const listItens = () => {

    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    //const itensSelecionados = JSON.parse(sessionStorage.getItem('itensSessao')) || []

    return itensSelecionados
}

//PEGANDO O INDICE DO ARRAY

console.log(itensCarrinho.findIndex(elem => elem.id_produto == 2))


//REMOVER ELEMENTO
const removeItem = (pos) => {
    itensCarrinho.splice(pos, 1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}


export { addItem, listItens, removeItem }