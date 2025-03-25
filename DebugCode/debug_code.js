function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = operation(num1, num2);

        // TAREA PRÁCTICA
        // Asignamos los valores manualmente a tres variables
        const multiplication = result[0]; // Multiplicación
        const sum = result[1]; // Suma
        const division = result[2]; // División
        // Mostrar los resultados
        displayResult(multiplication, sum, division);

    } else {
        displayResult('Please enter valid numbers');
    }
}

/* TAREA DE PRÁCTICA:
Necesitas realizar operaciones aritméticas como suma,
multiplicación y división simultáneamente utilizando la misma función.

Además, necesitas verificar el flujo del código,
que dependerá de la operación aritmética que estés realizando primero.

También, intenta asignar un valor en forma de caracteres
y observa cómo se muestra este valor utilizando el depurador.*/

function operation(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // TAREA DE PRÁCTICA
    // Evitar división por cero
    let divisionResult = (b !== 0) ? a / b : 'Undefined (division by zero)';
    return [a * b, a + b, divisionResult];
}

function displayResult(result1, result2, result3) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    // TAREA DE PRÁCTICA
    resultElement.textContent = `The result is: Multiplication: ${result1}, Sum: ${result2}, Division: ${result3}, `;
}
        