// Seleciona todos os elementos
const hidenButton = document.getElementsByClassName('hiden') 
const sectionHiden = document.getElementsByClassName('products-2')

// Cria uma função chamada "onClickHiden"
function onClickHiden(){
    sectionHiden[0].style.display = 'flex' // Define a propriedade "display" do primeiro elemento da variável "sectionHiden" como "flex"
    hidenButton[0].style.display = 'none' // Define a propriedade "display" do primeiro elemento da variável "hidenButton" como "none"
}