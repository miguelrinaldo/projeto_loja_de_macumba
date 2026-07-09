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
   //PERCORRENDO O ARRAY PRODUTOS E FILTRANDO AS SEÇÕES
   const secoesFiltrada = new Map()

   produtos.forEach((elem, i)=>{
      //CRIANDO A CHAVE O VALOR DA COLEÇÃO 
       secoesFiltrada.set(elem.id_secao, elem)
   })
     //CONVERTENDO O MAP EM ARRAY
      const secoesMenu = Array.from(secoesFiltrada.values())
     //RETORNADO O ARRAY CONVERTIDO
      return secoesMenu
 
 }

 //MONTANDO OS LINKS SEÇÕES 
 const montarSecoes = ()=>{
    //PEGANDO O ELEMENTO DO DOM
    const ulMenu = document.querySelector('#menu-secoes')
    //LIMPANDO O ELEMENTO ulMenu
    ulMenu.innerHTML = ''
    //PERCORRENDO O ARRAY DA SEÇÕES FILTRADA
    listarSecoes().forEach((elem, i) =>{
      //CRIANDO O ELEMENTO li
      const liSecao = document.createElement('li')
      //CRIANDO O ELEMENTO a 
      const aSecao = document.createElement('a')
      aSecao.setAttribute('class', 'lnk-secao')
      aSecao.innerHTML = elem.secoesFiltrada
      //CAPTURANDO O CLICK DO LINKD
      aSecao.addEventListener('click',()=>{
      //PARA TESTE
         console.log(elem.id_secao)
      })
      //ADICIONANDO O ELEMENTO FILHO a NO ELEMENTO li
      ulMenu.appendChild(aSecao)
      //ADICIONANDO O ELEMENTO FILHO li NO ELEMENTO DO DOM ul
      ulMenu.appendChild(liSecao)
    })
 }

 montarSecoes()



