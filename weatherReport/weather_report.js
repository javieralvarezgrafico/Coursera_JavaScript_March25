function showweatherDetails(event) {
    event.preventDefault();  // Previene el comportamiento por defecto del formulario
    
    // Obtén el valor de la ciudad desde el input
    const city = document.getElementById('city').value;
    
    // Verifica que la ciudad no esté vacía
    if (!city) {
        alert("Por favor ingresa una ciudad.");
        return;  // Detener ejecución si no hay ciudad
    }

    const apiKey = 'a83f2da67094368bfbbf6ba7ee77fa08';

    // Crea la URL de la API con la ciudad proporcionada
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Verifica si se encontró la ciudad y los datos
            if (data.length === 0) {
                alert("Ciudad no encontrada.");
                return;
            }
            
            const lat = data[0].lat;  // Obtiene la latitud del primer (y único) resultado al ser una sola ciudad cada vez
            const lon = data[0].lon;  // Obtiene la longitud del primer (y único) resultado al ser una sola ciudad cada vez


            // Ahora, obtenemos la información del clima usando lat y lon
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

            return fetch(apiUrl);
        })
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);


/*
ENUNCIADO ORIGINAL TAREA (NO FUNCIONABA NI CON LAS ENTRADAS CORRECTAS)

function showweatherDetails(event) {
      event.preventDefault();  // Correcto: previene el envío del formulario, pero no estaba llamado correctamente
}

const city = document.getElementById('city').value;  // Obtiene el valor de la ciudad desde el formulario
      const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Reemplaza 'YOUR_API_KEY' con tu clave API real
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  // La URL de la API de OpenWeatherMap

fetch(apiUrl)
        .then(response => response.json())  // La respuesta de la API se convierte en JSON
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;  // Muestra la información del clima
        })
        .catch(error => console.error('Error al obtener los datos:', error));  // Añadir un manejo de errores para capturar posibles fallos

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );  // Problema: El evento 'submit' se ejecuta antes de que la ciudad sea capturada

PROBLEMAS:

1. **El evento `submit` se dispara antes de capturar la ciudad**: El código actualmente captura el valor de la ciudad `const city = document.getElementById('city').value;` fuera de la función `showweatherDetails`. Esto significa que el valor de la ciudad no se actualiza cuando el formulario se envía. El valor de la ciudad debería ser obtenido dentro de la función `showweatherDetails`, cuando el formulario es enviado.

2. **Falta manejo de errores en la respuesta de la API**: No se está gestionando el caso en que la API no responda correctamente o cuando la ciudad no existe (lo que puede devolver un error o un estado vacío). Deberías agregar un bloque `.catch()` para manejar estos errores y mostrar un mensaje adecuado al usuario.

3. **Problema potencial con la API Key**: Asegúrate de que la clave de la API (`apiKey`) esté activa y sea válida. Si la clave está incorrecta o caducada, la API no devolverá los datos esperados.

4. **Posible problema con la URL de la API**: Si la variable `city` está vacía o no se está capturando correctamente, la URL generada por `apiUrl` será incorrecta y causará un error al hacer la petición.

Posible solución:

- Mueve la captura de la ciudad dentro de la función `showweatherDetails` para asegurarte de que siempre se obtiene el valor correcto cuando el usuario envíe el formulario.
- Agrega manejo de errores al `fetch` para capturar y mostrar cualquier fallo en la obtención de los datos.
*/
