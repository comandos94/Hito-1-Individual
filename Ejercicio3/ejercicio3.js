// En una página web almacena información utilizando cookies, localStorage y sessionStorage y explica brevemente sus diferencias

    // Crear cookies
    document.cookie = "marcaCoche=Audi;expires=Tue, 10 may 2022 00:00:00 UTC; secure";
    console.log(document.cookie);

    // Crear localStorage
    let listaCoche = ["Audi", "Porsche", "Masserati", "BMW"];
    localStorage.setItem("listaCoche", listaCoche);   
    
    // Crear sessionStorage
    
    sessionStorage.setItem("Coche", "MiAudi");

    // Explicación localStorage y sessionStorage
    // localStorage y sessionStorage: ¿qué son? localStorage y sessionStorage son propiedades que acceden al objeto Storage y tienen la función de almacenar datos de manera local, la diferencia entre éstas dos es que localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina.    

    // Explicacion cookies
    // Una cookie es simplemente un pequeño archivo de texto que es almacenado en nuestro explorador. Este contiene ciertos datos: Un name-value que contiene la información a almacenar. Una fecha de expiracion, que define cuando será borrada la cookie.


// En qué carpeta de Windows se almacena cada dato

    // ¿Dónde se almacenan las cookies?
    //  se almacenan en el ordenador del usuario. La información se almacena en el ordenador del usuario a petición del servidor web, directamente desde la propia página web con JavaScript.
    

    // ¿Dónde se almacena localStorage?
    // Las cookies se almacenan en la ruta que hayamos indicado.


    // ¿Dónde se almacena sessionStorage?
    // Las cookies se almacenan en la misma pero esta se llama sessionStorage.


// Consultar los datos de cookies, localStorage y sessionStorage de la web

    // Recupero los datos almacenados en las cookies
    let leerCookie = document.cookie; 
    console.log("mi cookie es " + leerCookie);

    // Recupero los datos almacenados en localStorage
    let leerLocal = localStorage.getItem("listaCoche"); 
    console.log("Mi  localStorage  es " + leerLocal);

    // Recupero los datos almacenados en sessionStorage
    let leerSesion = sessionStorage.getItem("listaCoche"); 
    console.log("Mi sessionStorage  es " + leerSesion);
