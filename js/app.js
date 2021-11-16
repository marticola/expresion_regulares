"use strict"

// Nodos
const expreg = document.querySelector("#expreg"); //Nodo (HTMLSelectElement) para seleccionar la expresión regular
const message = document.querySelector(".message"); // Nodo (HTMLDivElement) 

// Funciones
const buscarXurxo = (mensaje) => {
    // Busqueda exacta en una cadena
    const patron = /xurxo/; // objeto de expresion regular
    // Busqueda con mayusculas y minusculas --con flags
    const patronMayMin = /xurxo/i;
    let cadena = prompt("Dame tu nombre"); //String
    if(cadena===null){ //pulsé el botón cancelar
        return;
    }
    if(patronMayMin.test(cadena)){
        message.innerHTML = `El texto <strong> xurxo </strong> se encuentra en la cadena`
    }else{
        message.innerHTML = `El texto <strong> xurxo </strong> no coincide con el texto de búsqueda "${cadena}"`
    }
}

/**
 * Validamos un código postal con expresion regular
 */

/**
 * @param {object} patron Expresion regular con formato literal /xxxx/
 */
const validarCP = (patron) => {
    let cp = prompt("Dame un CP");
    if(cp===null) //si le damos a cancelar
        return;
    if(patron.test(cp)){
        message.innerHTML = `${cp} es un CP válido`
    }else{
        message.innerHTML = `${cp} es un CP NO válido`
    }
}


// // Evento
// expreg.addEventListener(
//     "change",
//     () => {
//         console.log("ok")
//     }
// );

// Evento del selector (select)
expreg.onchange = (e) => {
    // capturo el value del nodo (que es un select)
    switch(e.target.value){
        case "1":
            // instrucciones
            buscarXurxo("Voy a buscar a");
            break;
        case "2":
            validarCP(/^[0-9][0-9][0-9][0-9][0-9]$/);
            break;
        default:
            //alert("No existe la opcion")
            break;
    }
}