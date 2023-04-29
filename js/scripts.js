const hidenButton = document.getElementsByClassName('hiden')
const sectionHiden = document.getElementsByClassName('products-2')

function onClickHiden(){
    sectionHiden[0].style.display = 'flex'
    hidenButton[0].style.display = 'none'
}