function palindromo1(string){
    if(!string) return "String inexistente"

    return string.split("").reverse().join("") === string
}
console.log(palindromo1("ama"))
