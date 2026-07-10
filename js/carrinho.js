// PEGA O CARRINHO SALVO NO NAVEGADOR
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []

const secaoItens = document.querySelector('#itens-carrinho')
const spanTotal = document.querySelector('#total')
const btnLimpar = document.querySelector('#btn-limpar')
const btnFinalizar = document.querySelector('#btn-finalizar')

// MOSTRA OS PRODUTOS DO CARRINHO
const exibirCarrinho = () => {
    secaoItens.innerHTML = ''

    if (carrinho.length === 0) {
        secaoItens.innerHTML = '<p>Carrinho vazio!</p>'
        return
    }

    carrinho.forEach(elem => {
        const div = document.createElement('div')
        div.setAttribute('class', 'card')

        div.innerHTML = `
            <img src="../${elem.caminho_da_imagem}" alt="${elem.descricao_produto}">
            <h2>${elem.descricao_produto}</h2>
            <h3>R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}</h3>
            <p>Quantidade: ${elem.quantidade}</p>
            <button class="btn-remover" data-id="${elem.id_produto}">Remover</button>
        `

        secaoItens.appendChild(div)
    })

    // EVENTO DOS BOTÕES REMOVER
    document.querySelectorAll('.btn-remover').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'))
            removerProduto(id)
        })
    })

    calcularTotal()
}

// CALCULA E MOSTRA O TOTAL
const calcularTotal = () => {
    const total = carrinho.reduce((acc, item) => {
        return acc + (item.valor_unitario * item.quantidade)
    }, 0)

    spanTotal.innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`
}

// REMOVE UM PRODUTO
const removerProduto = (id_produto) => {
    const index = carrinho.findIndex(item => item.id_produto === id_produto)
    carrinho.splice(index, 1)
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    exibirCarrinho()
}

// LIMPA O CARRINHO
btnLimpar.addEventListener('click', () => {
    localStorage.removeItem('carrinho')
    location.reload()
})

// FINALIZA A COMPRA
btnFinalizar.addEventListener('click', () => {
    alert('Compra finalizada!')
    localStorage.removeItem('carrinho')
    location.reload()
})

// INICIALIZA
exibirCarrinho()