// Pedir un valor del 1 al 50
        //comprobar que no sea mayor de 50 
        //comprobar que no sea menor a 1
// Recorrer de forma invertida i
    //Escribir j veces i

    let numero = prompt("Escbribe un numero del 1 al 50")

    if(numero>50){
        numero=50
    }
    if(numero<1){
        numero=1
    }
    
    
    for(i=numero; i > 0; i--){
        //console.log(i)
        document.write("<br>")
    
        escribirLinea(i)
    }
    
    function escribirLinea(i){
        for(j = 0; j < i; j++){
            document.write(i)
        }
    }