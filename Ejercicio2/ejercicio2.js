// Modifica los contenidos de cada uno de los elementos utilizando Javascript mediante acceso al Document Object Model

function crearFila(event) {
    
    event.preventDefault();

    let container = document.getElementById("container");
    let contenidoTabla = document.getElementById("contenidoTabla");
    let tabla = document.getElementById("tabla");

    let marcaCoche = document.getElementById("marcaCoche").value;
    let modeloCoche = document.getElementById("modeloCoche").value;
    let fechaMatriculacion = document.getElementById("fechaMatriculacion").value;
    let telefonoContacto = document.getElementById("telefonoContacto").value;  
    console.log("La prueba es " + marcaCoche + " " + modeloCoche + " " + fechaMatriculacion + " " + telefonoContacto);


    var fila = document.createElement("tr");
    //fila.setAttribute("id", "fila1");
    fila.innerHTML = "<td>" + marcaCoche +"</td>" + "<td>" + modeloCoche +"</td>" + "<td>" + fechaMatriculacion +"</td>" + "<td>" + telefonoContacto +"</td>";
    tabla.append(fila);

}


function rotarImagen() {
    //.imagen:hover {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
    let container = document.getElementById("container");

    var imagen = document.createElement("img");
    // Agrego atributos a la imagen
    imagen.setAttribute("src", "../img/coche.jpg");
    imagen.setAttribute("alt", "coche");
    imagen.setAttribute("id", "coche");

    // Añado la imagen antes del primer hijo del elemento
    container.prepend(imagen);
    
}


// Realiza al menos tres ejemplos de manejo de BOM (Browser Object Model). Por ejemplo, identificar navegador, consultar dimesiones de ventana, mostrar listado de páginas visitadas ...

    
    let navegadorWeb = window.navigator;
    console.log(navegadorWeb);

    
    console.log("nombre del explorador web " + navegadorWeb.appCodeName);
    console.log("Lsu versión es " + navegadorWeb.appVersion);
    

    
    let screenObj = window.screen;
    console.log(screenObj);
    
   
    
    console.log("Ancho:  " + screenObj.availWidth);

    console.log("Alto: " + screenObj.availHeight);

    let ventana = window.frames;
    console.log(ventana);
    console.log("La función para crear una fila es " + ventana.crearFila);

