// Crear un for del 1 al 500
        //imprimir el valor de i
        //Verificar si es multiplo de 4, imprimir en pantalla si es multipo de 4    
        //Verificar si es multiplo de 9, imprimir en pantalla si es multipo de 9
        // cada 5 lineas separar con un --------------------

        let contador = 0

        for(i = 1; i <= 500; i++){
            document.write(i)
        
            if(i % 4 == 0){
                document.write(" Es multiplo de 4")
            }
            if(i % 9 == 0){
                document.write(" Es multiplo de 9")
            }
            document.write("<br>")
        
            if(i % 5 == 0){
                document.write("<br>---------------------------------------- <br>")
            }
        }