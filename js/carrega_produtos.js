//IMPORTANDO O ARRAY DOS PRODUTOS
import { produtos } from "./produtos.js";

//PEGANDO ELEMENTO DO DOM
const section_cards = document.querySelector('#cards')

//CARREGA 
const carregaProduto = (id_secao) => {
    //AO CHAMAR A FUNÇÃO carregaProduto() DEVE PASSAR O PARÂMETRO. 0(ZERO) CHAMA A FUNÇÃO listarProdutos(), QUALQUER OUTRO VALOR CHAMA A FUNLÇAO produtosFiltrados(id_secao)
    if (id_secao === 0) {
        montandoCards(listarProdutos())
    } else {
        montandoCards(produtosFiltrados(id_secao))
    }

    //QUALQUER FUNÇÃO CHAMADA SEMPRE CHAMA A FUNÇÃO montarSecoes()
    montarSecoes()
}

//FUNÇÃO PARA CARREGAR OS PRODUTOS
const listarProdutos = () => {
    section_cards.innerHTML = ''




}

listarProdutos()

//FILTRANDO AS SEÇÕES COM A COLEÇÃO map
const listarSecoes = () => {
    const secoesFiltrada = new Map()

    produtos.forEach((elem, i) => {
        secoesFiltrada.set(elem.id_secao, elem)
    })

    const secoesMenu = Array.from(secoesFiltrada.values())
    return secoesMenu
}

//MONTANDO OS LINKS SEÇÕES
const montarSecoes = () => {
    const ulMenu = document.querySelector('#menu-secoes')
    ulMenu.innerHTML = ''

    const liTodos = document.createElement('li')
    const aTodos = document.createElement('a')
    aTodos.setAttribute('href', '#')
    aTodos.setAttribute('class', 'lnk-secao')
    aTodos.innerHTML = 'Todos'
    aTodos.addEventListener('click', () => {
        montandoCards(produtos)
    })
    liTodos.appendChild(aTodos)
    ulMenu.appendChild(liTodos)

    listarSecoes().forEach((elem, i) => {
        const liSecao = document.createElement('li')

        const aSecao = document.createElement('a')
        aSecao.setAttribute('href', '#')
        aSecao.setAttribute('class', 'lnk-secao')
        aSecao.innerHTML = elem.nome_secao

        aSecao.addEventListener('click', () => {
            montandoCards(produtosFiltrados(elem.id_secao))
        })

        liSecao.appendChild(aSecao)
        ulMenu.appendChild(liSecao)
    })
}

//FILTRANDO PRODUTOS 
const produtosFiltrados = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao)
}

//MONTANDO CARDS
const montandoCards = (objProdutos) => {
    section_cards.innerHTML = ''

    objProdutos.forEach((elem, i) => {
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        const imgProduto = document.createElement('img')
        imgProduto.setAttribute('src', elem.caminho_da_imagem)
        imgProduto.setAttribute('alt', elem.descricao_produto)
        imgProduto.setAttribute('class', 'img_card')

        const h2Titulo = document.createElement('h2')
        h2Titulo.setAttribute('class', 'tito_card')
        h2Titulo.innerHTML = elem.descricao_produto

        const h3Valor = document.createElement('h3')
        h3Valor.setAttribute('class', 'valor_card')
        h3Valor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-card')
        btnCard.innerHTML = 'Adicionar'

        // EVENTO DO BOTÃO ADICIONADO AQUI, NA CRIAÇÃO DO CARD
        btnCard.addEventListener('click', () => {
            alert(`${elem.descricao_produto} adicionado ao carrinho!`)
            console.log('Produto adicionado:', elem)
        })

        divCard.appendChild(imgProduto)
        divCard.appendChild(h2Titulo)
        divCard.appendChild(h3Valor)
        divCard.appendChild(btnCard)

        section_cards.appendChild(divCard)

    })
}