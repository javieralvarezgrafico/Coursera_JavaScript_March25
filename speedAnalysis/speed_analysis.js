let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Establecer el texto de prueba
    document.getElementById("inputText").value = testText;

    // Reiniciar resultados y temporizador
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Cambiar el texto y la funcionalidad del botón
    var button = document.getElementById("btn");
    button.innerHTML = "Finalizar Prueba";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Deshabilitar la entrada del usuario
    document.getElementById("userInput").readOnly = true;

    // Calcular el tiempo transcurrido y las palabras por minuto (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // en segundos
    var userTypedText = document.getElementById("userInput").value;

    // Dividir el texto usando regex para contar las palabras correctamente
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Valor predeterminado

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Mostrar los resultados
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Resultados de la Prueba de Escritura:</h2>" +
        "<p>Palabras Escribidas: " + typedWords + "</p>" +
        "<p>Tiempo Transcurrido: " + timeElapsed.toFixed(2) + " segundos</p>" +
        "<p>Palabras Por Minuto (WPM): " + wpm + "</p>";

    // Reiniciar el botón
    var button = document.getElementById("btn");
    button.innerHTML = "Iniciar Prueba";
    button.onclick = startTest;
}