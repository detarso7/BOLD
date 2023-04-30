// Seleção das tags 

const form = document.getElementById('form')
const inputs = document.querySelectorAll('.requered')
const spans = document.querySelectorAll('.span-requared')

// Definir a variável "emailREGEX" para uma expressão regular que verifica se o valor 
//inserido em um input corresponde ao formato de um endereço de email

const emailREGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// Definir a função "setError" para aplicar um estilo que indica um erro 
//ao input com o índice fornecido e mostrar a mensagem de erro correspondente

function setError(index){
    inputs[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}

// Definir a função "setSuccess" para remover o estilo de erro do input com o 
//índice fornecido e ocultar a mensagem de erro correspondente

function setSucess(index){
    inputs[index].style.border = ''
    spans[index].style.display = 'none'
}

// Definir a função "nameValidate" para verificar se o valor inserido no primeiro 
//input tem pelo menos 3 caracteres e aplicar o estilo correspondente

function nameValidate () {
    if(inputs[0].value.length < 3) {
        setError(0)
    }
    else{
        setSucess(0)
    }
}

// Definir a função "emailValidate" para verificar se o valor inserido no segundo input
//corresponde ao formato de um endereço de email e aplicar o estilo correspondente

function emailValidate () {
    if(emailREGEX.test(inputs[1].value)) {
        setSucess(1)
    }
    else{
        setError(1)
    }
}