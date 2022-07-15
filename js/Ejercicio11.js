let numeroPersonas = parseInt(prompt("Cuantas personas desea cargar?"))
let edades = [];
let nombres = [];


for(i=0; i< numeroPersonas; i++){
    let nombreCrudo = prompt(`Introduce el nombre ${i+1}`)
    let edadCruda = parseInt(prompt(`Introduce la edad ${i+1}`))
    edades.push(edadCruda);
    nombres.push(nombreCrudo);
}

console.log(edades)
console.log(nombres)


//pedir 3 edades
//pedir 3 nombres
// asociar las 3 edades con los 3 nombres
//imprimir el nombre con la mayor edad


// let edad1 = parseInt(prompt("Introduce una primer edad"));
// let edad2 = parseInt(prompt("Introduce una segunda edad"));
// let edad3 = parseInt(prompt("Introduce una tercera edad"));

// let nombre1 = prompt("Introduce un primer nombre");
// let nombre2 = prompt("Introduce un segundo nombre");
// let nombre3 = prompt("Introduce un tercer nombre");

// let edades = [edad1, edad2, edad3];
// let nombres = [nombre1, nombre2, nombre3];


let indice = mayor(edades);
console.log(indice)
document.write(`El mayor es ${nombres[indice]} edad: ${edades[indice]}`)


///////////////////////////////////////////////////////////////////

// recorrer el arreglo de edades
// comparar la edad i con la mayor edad almacenada
            // en caso de ser mayor almacenar la nueva edad mayor y el indice
// devolver el indice de edad mayor


function mayor(arreglos){
    let indiceMayor = -1;
    let edadMayor = -1;
    for(i = 0; i<arreglos.length; i++){
        if(arreglos[i]>edadMayor){
            edadMayor = arreglos[i]
            indiceMayor = i
        }
    }
    return indiceMayor;
}