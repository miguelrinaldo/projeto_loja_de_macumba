import { produtos} from "./produtos.js";

 //PEGANDO ELEMENTO DO DOM 
 const section_cards = document.querySelector(cards)

 //FUNÇÃO PARA CARREGAR OS PRODUTOS
 const listaProdutos = ()=>{
    section_cards.innerHtML = ''

    produtos.forEach((elem, i)=>{
       const divCard = document.createElement('div')
       divCard.setAttribute('class', 'card')

       const imgProduto = document.createElement('img')
       imgProduto.setAttribute('scr',elem.caminho_da_imagem)
       imgProduto.setAttribute('alt',elem.descricao_produto)
       imgProduto.setAttribute('class', img_car)

       const h2Titulo = document.createElement('h2')
       h2Titulo.innerHTML = elem.descricao_produto

       const divValor = document.createElement('div')
       divValor.setAttribute('class', 'valor_card')
       divValor.innerHTML`R$ ${parseFloat(elem.valor_unitario).toFixed()}`
    })        
 }

