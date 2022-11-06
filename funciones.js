'use strict'

//CONSTANTES Y VARIABLES
const ticket = 200;
let multiplicadorDescuento;
const btnResumen = document.getElementById("btnResumen");
const btnReset = document.getElementById("btnReset");
const inputCategoria = document.getElementById("categoria");
const inputCantidad = document.getElementById("cantidad");
const textoValor = document.getElementById("precioFinalHTML");

const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const inputMail = document.getElementById("email")


//PROGRAMA
function verValorFinal() {
    if (inputCategoria.value === "Estudiante") {
        multiplicadorDescuento = 0.2;
    } else if (inputCategoria.value === "Trainee") {
        multiplicadorDescuento = 0.5;
    } else if (inputCategoria.value === "Junior") {
        multiplicadorDescuento = 0.85;
    } else {
        multiplicadorDescuento = 1;
    }
    if (inputCantidad.value <= 0) {
        alert("Indique una cantidad válida");
    } else {
        let valorFinal = ticket * multiplicadorDescuento * inputCantidad.value;
        console.log(valorFinal);
        textoValor.innerHTML = `Total a pagar: $${valorFinal}`;
    }
}

function borrarTodo() {
    document.getElementById("nombre").value = ''
    document.getElementById("apellido").value = ''
    document.getElementById("nombre").value = ''
    document.getElementById("email").value = ''
    document.getElementById("cantidad").value = ''
    document.getElementById("categoria").value = document.getElementById("option-default").value
    
}

btnReset.onclick = borrarTodo;
btnResumen.onclick = verValorFinal;


















// let precioFinal = ticket * multiplicadorDescuento * cantidadElegida;
// console.log(precioFinal)

// document.getElementById("precioFinalHTML").innerHTML = "Total a pagar: $" + precioFinal;


