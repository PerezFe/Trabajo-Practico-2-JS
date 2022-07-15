let fraseInicial = prompt("Ingrese una frase");
let cVocales = contadorVocales(fraseInicial)


document.write("Tu palabra es: \"" + fraseInicial + "\"<br>")
document.write("El numero de vocales es " + cVocales)


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
    let cantidadLetras = frase.length
    let cVocales = 0
    for(let i=0; i < cantidadLetras; i++ ){
        let flag = esVocal(frase[i]);
        if(flag){
            cVocales++
        }
    }
    return cVocales;
} 