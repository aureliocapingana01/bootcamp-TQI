let currentNumberWrapper = document.getElementById('currentNumber')

let currentNumber = 0

function increment(){
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber

    if(currentNumber > 10){
        alert("Erro excesso no contador")
        currentNumberWrapper.innerHTML = 0
    }
}
function decrement(){
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber

    if(currentNumber < 0){
        alert("Erro numeros negativos")
        currentNumberWrapper.innerHTML = 0
        getElementById(decrement).style = 'blue'
    }
}