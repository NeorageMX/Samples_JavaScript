"use strict"

//  Var for Global Variables
var nombre = "Neorage_Var";
const pi = 3.1416;

// pi = 15; Trows error

console.log(nombre);

function saludo(){
    //  Let for Local Variables
    let nombre="Neo_Func";
    console.log(nombre);

    let edad = 37;
    console.log(edad);
}

saludo();