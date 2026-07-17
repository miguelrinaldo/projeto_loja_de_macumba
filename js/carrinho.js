//localStorage.removeItem("itensSessao");
//localStorage.clear()

//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//const itensCarrinho = JSON.parse(sessionStorage.getItem('itensSessao')) || []

//CRIANDO ARROW ITEM
const fobjItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem,
        valor_unitario: objProduto.valor_unitario,
        quantidade: 1,
        valor_total: objProduto.valor_unitario * 1
    }

    return item
}


//FUNÇÃO PARA ADCIONAR O ITEM NO ARRAY (SEM DUPLICAR, PRODUTO DIFERENTE ENTRA SEPARADO)
const addItem = (objItem) => {

    const indice = itensCarrinho.findIndex(elem => elem.id_produto === objItem.id_descricao_produto)

    if (indice == -1) {
        // Produto NÃO existe no carrinho -> entra como item NOVO e separado
        itensCarrinho.push(fobjItem(objItem))
    } else {
        // Produto JÁ existe -> não duplica, só soma quantidade e valor
        itensCarrinho[indice].quantidade += 1
        itensCarrinho[indice].valor_total =
            itensCarrinho[indice].valor_unitario * itensCarrinho[indice].quantidade
    }

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))

    return calcularTotalCarrinho()
}


//LISTAR ITENS DO CARRINHO
const listItens = () => {

    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    //const itensSelecionados = JSON.parse(sessionStorage.getItem('itensSessao')) || []

    return itensSelecionados
}


//REMOVER ELEMENTO
const removeItem = (pos) => {
    itensCarrinho.splice(pos, 1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))

    return calcularTotalCarrinho()
}


//CALCULAR O VALOR TOTAL DE TODOS OS PRODUTOS DO CARRINHO
const calcularTotalCarrinho = () => {
    let total = 0

    for (const item of itensCarrinho) {
        total += item.valor_unitario * item.quantidade
    }

    return total
}


export { addItem, listItens, removeItem, calcularTotalCarrinho }