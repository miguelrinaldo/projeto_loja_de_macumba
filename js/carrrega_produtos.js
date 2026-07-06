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

       const h3Valor = document.createElement('h3')
       h3ValorValor.setAttribute('class', 'valor_card')
       h3ValorValor.innerHTML`R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

       const btnCard = document.createElement('button')
       btnCard.setAttribute('class', 'btn_card')
       btnCard.innerHTML = 'Adicionar'

       divCard.appendChild(imgProduto)
       divCard.appendChild(h2Titulo)
       divCard.appendChild(h3Valor)
       divCard.appendChild(btnCard)
       section_cards.appendChild(divCard)
       
       

       

    })        
 }

 listaProdutos()

