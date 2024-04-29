let posicionCarrusel = 1;
imgSeleccion(posicionCarrusel);

function cambio(direccion) {
    console.log(direccion, posicionCarrusel);
    if(direccion === "izquierda" ) {
        if(posicionCarrusel === 1){
            posicionCarrusel = 0;
            imgSeleccion(posicionCarrusel); 
            } else if (posicionCarrusel === 0) {
                posicionCarrusel = 2;
                imgSeleccion(posicionCarrusel);
            } else{
                posicionCarrusel = 1;
                imgSeleccion(posicionCarrusel);
                }  
        } else if (direccion === "derecha"){
            if(posicionCarrusel === 1){
                posicionCarrusel = 2;
                imgSeleccion(posicionCarrusel);
                } else if(posicionCarrusel === 0){
                    posicionCarrusel = 1;
                    imgSeleccion(posicionCarrusel);
                } else {
                    posicionCarrusel = 0;
                    imgSeleccion(posicionCarrusel);
                }           
        }
}

function imgSeleccion(num) {
    let miDiv = document.getElementById("miDiv");
    if (num === 0) {
        miDiv.style.backgroundImage = "url('/Python/TPO-PythonFS-C24261-G01/img/001.jpg')";
        console.log("imagen: " + num);
    } else if (num === 1) {
        miDiv.style.backgroundImage = "url('/Python/TPO-PythonFS-C24261-G01/img/002.jpg')";
        console.log("imagen: " + num);
    } else if (num === 2) {
        miDiv.style.backgroundImage = "url('/Python/TPO-PythonFS-C24261-G01/img/003.jpg')";
        console.log("imagen: " + num);
    } else {
        return False;
    }

}