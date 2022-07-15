//ingresar un dni
//de estar entre 0 y 99999999
//calcular el resto de la division entera entre el nro y el nro 23
//el resultado de 0 a 22, corresponde a una de las sig letras (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// si el dni cargado no es un nro mostrar con un alert
//repetir el proceso hasta que el usuario presione cancelar




do{
    let numero = parseInt(prompt("Ingrese un nro de DNI, entre (0 y 99999999)"));
    console.log(numero)
    if( numero => 0 && numero <= 99999999){

        let resultado = numero % 23;
        console.log(resultado)

    switch(resultado){
        case 0:
            document.write("La letra que corresponde a su DNI la T, DNI ingresador" + numero)
            break;
        case 1:
            document.write("La letra que corresponde a su DNI la R, DNI ingresador" + numero)
            break;
        case 2:
            document.write("La letra que corresponde a su DNI la W, DNI ingresador" + numero)
            break;
        case 3:
            document.write("La letra que corresponde a su DNI la A, DNI ingresador" + numero)
            break;
        case 4:
            document.write("La letra que corresponde a su DNI la G, DNI ingresador" + numero)
            break;
        case 5:
            document.write("La letra que corresponde a su DNI la M, DNI ingresador" + numero)
            break;
        case 6:
            document.write("La letra que corresponde a su DNI la Y, DNI ingresador" + numero)
            break;
        case 7:
            document.write("La letra que corresponde a su DNI la F, DNI ingresador" + numero)
            break;
        case 8:
            document.write("La letra que corresponde a su DNI la P, DNI ingresador" + numero)
            break;
        case 9:
            document.write("La letra que corresponde a su DNI la D, DNI ingresador" + numero)
            break;
        case 10:
            document.write("La letra que corresponde a su DNI la X, DNI ingresador" + numero)
            break;
        case 11:
            document.write("La letra que corresponde a su DNI la B, DNI ingresador" + numero)
            break;
        case 12:
            document.write("La letra que corresponde a su DNI la N, DNI ingresador" + numero)
            break;
        case 13:
            document.write("La letra que corresponde a su DNI la J, DNI ingresador" + numero)
            break;
        case 14:
            document.write("La letra que corresponde a su DNI la Z, DNI ingresador" + numero)
            break;
        case 15:
            document.write("La letra que corresponde a su DNI la S, DNI ingresador" + numero)
            break;
        case 16:
            document.write("La letra que corresponde a su DNI la Q, DNI ingresador" + numero)
            break;
        case 17:
            document.write("La letra que corresponde a su DNI la V, DNI ingresador" + numero)
            break;
        case 18:
            document.write("La letra que corresponde a su DNI la H, DNI ingresador" + numero)
            break;
        case 19:
            document.write("La letra que corresponde a su DNI la L, DNI ingresador" + numero)
            break;
        case 20:
            document.write("La letra que corresponde a su DNI la C, DNI ingresador" + numero)
            break;
        case 21:
            document.write("La letra que corresponde a su DNI la K, DNI ingresador" + numero)
            break;
        case 22:
            document.write("La letra que corresponde a su DNI la E, DNI ingresador" + numero)
            break;
        default:
            alert("Ingresaste una opcion erronea")
    }

    }else{
        alert("El numero que ingresaste no es valido")
    }

}while(confirm("Desea ingresar un DNI?")) 