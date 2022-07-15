
let numero = 1

for(i=numero; i <= 30; i++){
    //console.log(i)
    document.write("<br>")

    escribirLinea(i)
}

function escribirLinea(i){
    for(j = 0; j < i; j++){
        document.write(i)
    }
}