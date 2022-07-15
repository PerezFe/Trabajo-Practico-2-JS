let palabra
let resultado=""

confirm("Desea introducir una palabra?");

while ((palabra=prompt())!=null) {
    resultado+= "-"+palabra
}

document.write(resultado); 