// pedir al usuario fila y un nro de columnas
//dibujar una tabla
// cada celda debe tener un nro descendente de multiplicar filas por columnas

const filas = parseInt(prompt("Ingrese un nro de filas"));
const columnas = parseInt(prompt("Ingrese un nro de columnas"));
let resultado = filas * columnas;

document.write(`<table><tbody>`)

//se encarga de dibujar las filas
for(let indiceFila = 0; indiceFila < filas; indiceFila++){
    document.write(`<tr>`)
    // dibuja las columnas
    for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
        document.write(`<td>${resultado}</td>`)
        resultado--;
    }
    document.write(`</tr>`)
}

document.write(`</tbody></table>`)