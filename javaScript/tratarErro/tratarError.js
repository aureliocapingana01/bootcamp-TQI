function validarArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os paramentros")

        if (typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object")

        if (typeof num !== 'number') throw new TypeError("O numero precisa ser do tipo Number")

        if (arr.length !== num) throw new RangeError("Tamanho invalido")

        return arr
    }

    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um referenceError")
            console.log(e.message)
    
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um typeError")
            console.log(e.message)
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um rangeError")
            console.log(e.message)
        }
        else{
            console.log("Ocorreu um erro não esperado:" + e)
        }
    }
}
console.log(validarArray(5))
