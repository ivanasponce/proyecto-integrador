/*alert("bienvenidos");

/*alert("bienvenidos");*/

/*confirm("Estas seguro de continuar?")

/*window.location = "https://www.educacionit.com/";

/*el signo = le reasigna el valor a algo, por ej cambiar la url*/

/*alert(window.location)*/

/*window.prompt("¿que edad tienes?", "18") ;*/

/*console.error("hola mundo");*/

//console.assert(1 > 2, "que uno no es mayor a dos")

//let a = 5;  /*5 es una variable, let lo indica*/

//a= "chau"

//const b = "chau 2" //const indica que es una constate

//console.log(a) /*con el console.log se imprime el valor de la consola*/

//console.log(b)

//let a= 10;
//let x= 5;
//let c= "hola"
//let d= true;
//let e= null;
//let f= x-a;

//console.log(f);
//console.log(typeof(f)) //aca le pregunto q tipo de dato es , si es un string, un numero o indefinido poir ejemplo b que


//un false siempre es 0 y un true siempre es 1

//-----------------------------
//ESTRUCTURA COND SIMPLE -- IF

//let numA = 10;
//let num =50;
//let valorBooleano =true;

//comparacion estricta de igualdad
//if(numA ===10) {
//    window.document.write("<p>el valor y el tipo de datos son iguales</p>")}

//comparacion estricta de desgualdad
//if (numA !== "10") {
//    window.document.write("<p>el valor  es igual pero el tipo de datos es distinto</p>")
//}

//-------------------------------------------------

//ESTRUC CONDICIONAL DOBLE IF + ELSE

//let numA = 10;
//let num =50;
//let valorBooleano =false;


//DETERMINAR SI ES MAYOR DE EDAD
//if (numA >= 18) {
//    window.document.write("<p>es mayor de edad</p>");
//} else { window.document.write("<p>es menor de edad</p>") }

//------------------------------------------------

//ESTRUCTURA CONDICIONAL ANIDADA IF + IF

//let edad= 6;


//DETERMINAR SI ES MAYOR DE EDAD (18)

//if (edad >= 18) {
//    window.document.write("<p>es mayor de edad</p>");
 
//un condicional anidado si se cumple el if de arriba
 //   if (edad >= 65) {
 //       window.document.write("<p>es jubilado</p>");
 //   }

//} else { window.document.write("<p>es menor de edad</p>") }


//un condicional anidado si se cumple el else
//if (edad <= 7) {
//    window.document.write("<p>es un niño</p>");
//}

//--------------------------------------------------------

//ESTRUCTURA CONDICIONAL MULTIPLE IF + ELSE IF


//let puntaje=window.prompt("Indica tu pje actual;");
//let nivelActual= null; //null sirve para cuando no tenemos el vlor

//if(puntaje<=1000) {
//    nivelActual="Estas en el nivel 1"} 
    
//    else if (puntaje<=2000) {
//    nivelActual= "Estas en el nivel 2"}

//    else if (puntaje<=2000) {
//   nivelActual= "Estas en el nivel 2"}

//    else if (puntaje <= 3000) {
//    nivelActual = "Estas en el nivel 3"}

//window.document.write(nivelActual);


//para suprimir por ej se puede poner---- else if (puntaje >1000 && >=2000
//window.document.write(nivelActual);

//------------------------

//ESTRUCTURA CICLICA

//let contador =5; //inicio

//while (contador <10) 
//{
//    document.write("<p> Iteracion : 😸" + contador + "</p>");
//   contador++;
    
//}

//document.write("<p>Fin de instrucciones</p>")

//----------------------------------------------------------------------------

//ESTRUCTURA CICLICA REPETIR PARA(incrementar)

//for (let i = 0; i < 10; i++) { //se lee que i va a empezar con 0 y termina en 10
    
//    if (i===5) ; continue     //se lee, que arranque en 0 y termine en 10 pero omita el 5
    
//    document.write("<p> gato 1:" + i + "</p>")}

//ESTRUCTURA CICLICA REPETIR PARA(decrementar)
//for (let i = 10; i > 0; i--) {
//    document.write("<p> gato 2:" + i + "</p>")}



//-----------------------------------------------------------------
//ESTRUCTURA SELECTIVA MULTIPLE

let nivel= Number(window.prompt("Indica tu nivel actual;"));
let categoria= null; //null sirve para cuando no tenemos el vlor

switch (nivel) {                 //en key lo que sta entre partensesis se pone la variable, lo q yo quiero evaluar
   case 1:
    categoria = "tu categoria es inicial"
    break;

    case 2:
        categoria = "tu categoria es intermedia"
        break;            //uso el break para separar categorias, sino va a tomar siempre la de abajo

    case 3:
        categoria= "tu categoria es avanzada"
        break;

    default:
        categoria= "es pro"  //al default no hace fala ponerle break, solo al case
      
}


window.document.write(categoria); //esto imprime





//if(puntaje <=1000) {
//    nivelActual = "Estas en el nivel 1";
//}else if (puntaje > 1000 && puntaje <= 2000) {
//  nivelActual= "Estas en el nivel 2"
//}else if (puntaje > 2000 && puntaje <= 3000) {
//    nivelActual = "Estas en el nivel 3"
//}

//window.document.write(nivelActual);

