//PEGANDO O INPUT CEP DO DOM
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO AO PERDER O FOCO
inputCep.addEventListener('change', (evt) =>{
const numCep = evt.targer.value.replace(/\D/g,'')

   if (numCep != 8){
    alert('CEP INVÁLIDO !!!')
    return

   }

   

})

//BUSCAR OS DADOS DO CEP NO VIACEP
const buscarDados = async (cep) =>{
    //TENTA BUSCAS OS DADOS NO VIA CEP
    try{

        //https://viacep.com.br/ws/01001000/json/

        //https://viacep.com.br/ws/01001000/json/

    
     
        //BUSCAR OS DADOS NO VIA CEP
        const reponse = await fetch(`https://viacep.com.br/ws/01001000/json/`)

        //CONVERTE OS DADOS NO FORMATO json
        const dadosEndereco = response.json

        //CHAMA A FUNÇÃO exibeDados
        exibeDados(dadosEndereco)

        //CASO HAJA ALGUM ERRO É CAPTURADO PELO catch
    }catch(erro){
        console.log('ERRO APRESENTADO', erro.message)
    }
}

//OBJETO LITERAL CAMPOS QUE CRIA CADA CHAVE QUE SEJA UM UNPUT DO DOM
const campos = {
    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector('#bairro'),
    localidade: document.querySelector('#localidade'),
    uf: document.querySelector('#uf'),

}

//FUNÇÃO EXIBE DADOS
const exibeDados = (objDados) => {
    //PEGA A DIV PAI DOS ELEMEMTOS DO ENDEREÇO
    const divEndereco = document.querySelector('#div-dados-endereco')

    //REMOVE A DIV
    divEndereco.classList.remove('oculto')

    document.querySelector('#logradouro').value = objDados.logradouro,
    document.querySelector('#bairro').value = objDados.bairro,
    document.querySelector('#localidade').value = objDados.localidade,
    document.querySelector('#uf').value = objDados.uf



    for (let chave in objDados)
    //ATRIBUIR O VAlor AO INPUT
    campos[chave] = objDados 

    //BLOQUEIA OS INPUTS. NÃO PERMITE QUE O USUARIO APAGUE OS VALORES 
    campos[chave].disabled = objDados[chave]
}
