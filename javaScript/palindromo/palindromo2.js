function palindromo2(string){
    if(!string) return "Erro, string não existente"
    // !string, verifica se a string existe 

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return "Falso, não é um Palindromo"
            //!==, se é igual ou difente, faz uma comparação 
        }
    }
    return "Verdadeiro, é um palindromo"
}
console.log(palindromo2("roma me em amor"));