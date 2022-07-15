let numero = prompt("Introduce un numero")

if(numero>50){
    numero=50
}
if(numero<1){
    numero=1
}

for(i=0; i <= numero; i++){
    //console.log(i)
    document.write("<br>")

    escribirLinea(i)
}

function escribirLinea(i){
    for(j = 0; j < i; j++){
        document.write(i)
    }
}