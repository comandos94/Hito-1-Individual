// Explica qué tipado (débil o fuerte) se aplica en Javascript.
// Respuesta ejercicio 1: Javascript es un lenguaje de tipado débil, debido a que las variables se declaran sin un tipo específico, los valores insertados en esas variables pueden modificarse y realizar operaciones entre ellas sin necesitar realizar una conversión. 
//  ejemplo  declarar variables de distintos tipos y el desarrollador en ningún momento especifica el tipo de dato. 
let nombre = "celia";
//  utilizamos la palabra reservada let para declarar una variable.
// En el caso de los objetos el tipado es algo más fuerte debido a que la declaración es más precisa pero sigue siendo tipado débil.
let ejemploArray = [];
let ejemploObjeto = {};
// Aunque los desarrolladores no especifican el tipo de dato introducido, Javascript internamente los asigna automáticamente.
// También se demuestra que Javascript es un lenguaje débilmente tipado debido a que se realiza la coerción de datos.
// La coerción de datos puede llegar a ser un problema, debido a que el intérprete realiza de manera automática la conversión de datos y al realizar ciertas operaciones puede dar problemas. A continuación muestro un ejemplo de coerción de datos.
console.log("El resultado1 es: ");
console.log(1+1+1); // El resultado es 3 debido a que estamos realizando una suma de 3 numeros.

console.log("El resultado2 es: ");
console.log(1+1+"1"); // El resultado es 21  
console.log("1"+1+1); // El resultado es 111 


// Realiza un ejemplo con declaración de diferentes variables: texto, numéricas, booleanas y de listas. Identifica correctamente el tipo de dato de cada una.

// Declaración de variables
let texto = "me llamo celia";
let numero = 88;
let Decimales = 1.1;
let comprobar = false;
let listaObjetos = ["arbol", "mesa", "coche"];

// Muestro por consola mediante la sentencia console.log() .
console.log("La variable texto es de tipo " + typeof(texto))
console.log("La variable numero es de tipo " + typeof(numero))
console.log("La variable numeroDecimales es de tipo " + typeof(Decimales))
console.log("La variable bandera es de tipo " + typeof(comprobar))
console.log("La variable listaPersonas es de tipo " + typeof(listaObjetos))



// Explica la diferencia entre let, var y const con un ejemplo.
//  let: te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.
//  Var: se utiliza para declarar una variable y adicionalmente se puede inicializar el valor de esta variable. Por ejemplo: var i = 0 . Podemos decir que: Las variables declaradas con var son procesadas antes de la ejecución del código.
//  const: Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara. Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.



// Bloque de código con variables var
// Explicación variables Var: Mediante la palabra reservada var creamos una variable local y se hereda a scopes diferentes. Si la variable se declara fuera de una función tendrá un ámbito global, aunque si creas una variable con var dentro de una funcion, no existirá fuera de esa función.

var edad = 88;
console.log(edad); // Su valor es 88

if(true){
    var edad = 70;
    console.log(edad); // Su valor es 70
}

console.log(edad); // Su valor es 70

var prueba = "si ";
console.log(prueba); // Su valor es "si"

if(true){
    var prueba = "no "; 
    console.log(prueba); // Su valor es "no"
}

console.log(prueba); // Su valor es "no"


// Bloque de código con variables let
// let: La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente, puede ser inicializada con algún valor.

let edad = 88;
console.log(edad); // Su valor es 88

if(true){
    let edad = 70;
    console.log(edad); // Su valor es 70
}

console.log(edad); // Su valor es 88

let prueba = "si ";
console.log(prueba); // Su valor es "si"

if(true){
    let prueba = "no "; 
    console.log(prueba); // Su valor es "no"
}

console.log(prueba); // Su valor es "si"

// Bloque de código con const
const lado = 4;
console.log("El lado es  " + lado); // Su valor es 4

