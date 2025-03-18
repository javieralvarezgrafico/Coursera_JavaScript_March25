let grocery1;
let grocery2;
let grocery3;

function calculateTotal(){
    // Agregué || 0 para evitar que NaN se propague si el usuario deja un campo vacío.
    // Si parseFloat devuelve NaN porque el campo esté vacío, se sustituye automáticamente por 0.
    // El OR devuelve el primer valor que sea verdadero, enotnces como NaN sería falso, cogería entonces el 0.
    grocery1 = parseFloat(document.getElementById("grocery1").value) || 0;
    grocery2 = parseFloat(document.getElementById("grocery2").value) || 0;
    grocery3 = parseFloat(document.getElementById("grocery3").value) || 0;

    let sumaTotal = grocery1 + grocery2 + grocery3;

    document.getElementById("resultado").innerText = "The total amount is: $" + sumaTotal.toFixed(2);
    // OTRA MANERA: document.getElementById("resultado").innerText = `The total amount is: $${sumaTotal.toFixed(2)}`;
    // El uso de toFixed(2) es para mostrar siempre dos decimales en el resultado.
}