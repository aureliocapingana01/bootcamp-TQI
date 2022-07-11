function operador(n1, n2){
    const saolIguais = n1 === n2
    const soma = n1 + n2
    
    return saolIguais ? "são iguais" : "Não são iguais"
}
console.log(operador(3,3))