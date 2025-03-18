let count = 0; // Initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Mostrar el conteo en el HTML
}

function increaseCount() {
  count++; // Incrementar el count en 1
  displayCount(); // Mostrar el count
  checkCountValue(); // Verificar el valor del count y mostrar mensajes
}

function checkCountValue() {
  if (count === 10) {
    alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
  } else if (count === 20) {
    alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
  }
}

// TAREA DE PRÁCTICA - BOTÓN REINICIAR CONTEO
function resetCount(){
    count = 0;
    document.getElementById('countDisplay').innerHTML=count;
    alert("¡El conteo de seguidores ha sido restablecido a cero!");
}