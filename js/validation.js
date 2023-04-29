const form = document.getElementById('form')
const inputs = document.querySelectorAll('.requered')
const spans = document.querySelectorAll('.span-requared')
const emailREGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const button = document.getElementById('#btn')

function setError(index){
    inputs[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}

function setSucess(index){
    inputs[index].style.border = ''
    spans[index].style.display = 'none'
}

function nameValidate () {
    if(inputs[0].value.length < 3) {
        setError(0)
    }
    else{
        setSucess(0)
    }
}

function emailValidate () {
    if(emailREGEX.test(inputs[1].value)) {
        setSucess(1)
    }
    else{
        setError(1)
    }
}