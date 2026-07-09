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

//FILTRANDO AS SEÇÕES COM A COLEÇÃO map
 const listarSecoes = () => {
   const secoesFiltrada = new Map()

   produtos.forEach((elem, i)=>{
       secoesFiltrada.set(elem.id_secao, elem)
   })

      const secoesMenu = Array.from(secoesFiltrada.values())

      return secoesMenu
 
 }

 //MONTANDO OS LINKS SEÇÕES 
 const montarSecoes = ()=>{
    //PEGANDO O ELEMENTO DO DOM
    const ulMenu = document.querySelector('#menu-secoes')
    ulMenu.innerHTML = ''

    listarSecoes().forEach((elem, i) =>{
      const liSecao = document.createElement('li')

      const aSecao = document.createElement('a')
      aSecao.setAttribute('class', 'lnk-secao')
      aSecao.innerHTML = elem.secoesFiltrada
      aSecao.addEventListener('click',()=>{
         //PARA TESTE
         console.log(elem.id_secao)
      })

      ulMenu.appendChild(aSecao)

      ulMenu.appendChild(liSecao)
    })
 }

 montarSecoes()



