//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = []

//FUNÇÃO PARA ADICIONAR O ITEM NO ARRAY
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

 localStorage.setItem('itensSessao', itensCarrinho)
}

//LISTAR ITENS DO CARRINHO
const listItens = () => {
    const itensSelecionados = JSON.stringify(localStorage.getItem('itensSessao'))

    return itensCarrinho
}

//MONTANDO A TELA CARRINHO
const montaTelaCarrinho = () =>{
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listItens().forEach((elem, i) =>{  
    const sectionItem = document.createElement('section')
    sectionItem.setAttribute('class', 'item')
    sectionItem.innerHTML = `<img scr='${elem.caminho_da_imagem}' alt=${elem.descriacao_produto}/> <p class='descricao'>${elem.descriacao_produto}</p> <p class='vlr-unitario'>${elem.valor_unitario}</p> <imput type="number" name='quant${i}' id='quant${i}' class="input-item" value=${1}> <p calss="tot-item">${elem.valor_unitario * 1}</p> <img scr="../imagens/icones/remover.png" alt"" class="img-remover">`
  sectionItensCarrinho.appendChild(sectionItem)

})

}

export{addItem}
