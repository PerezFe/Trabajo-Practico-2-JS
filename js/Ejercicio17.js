let fraseInicial = prompt("Ingrese una frase");
let indice = contadorVocales(fraseInicial);


if(indice != -1){
    document.write(`El indice de la primera vocal es ${indice}`)
}else{
    document.write("El texto no contiene Vocales")
}

function esVocal(letra){
    result = false;
    switch(letra){
        case 'a':
            result=true
            break
        case 'e':
            result=true
            break
        case 'i':
            result=true
            break
        case 'o':
            result=true
            break
        case 'u':
            result=true
            break
    }
    return result;
}

function contadorVocales(frase){
    frase = frase.toLowerCase();
    for(let i=0; i < frase.length; i++ ){
        if (esVocal(frase[i])){
            return i;
        }

    }
    return -1;
} 