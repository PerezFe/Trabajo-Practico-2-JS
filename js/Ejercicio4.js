let numero; 
let resultado = 0
let numeroCrudo;


while ( (numeroCrudo = prompt("Introduce un nro")) != null) {
    numero = parseInt(numeroCrudo)
    if(!(isNaN(numero))){
        resultado += numero
    }else{
        alert("No ingresaste un nro valido")
    }

}

document.write(resultado) 