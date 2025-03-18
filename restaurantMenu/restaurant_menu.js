const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

/*
  Usamos el método .map() para recorrer cada elemento del array breakfastMenu.
  - 'item' representa el valor actual del array en cada iteración (Ej: "Pancakes", "Eggs Benedict", etc.).
  - 'index' representa la posición del elemento dentro del array (comenzando desde 0).
  - La función de flecha devuelve una cadena de texto HTML con un párrafo <p> numerado.
  - El 'index + 1' se usa para que la numeración comience en 1 en lugar de 0.
  
  El resultado de .map() será un nuevo array de strings, por ejemplo:
  [
    "<p>Item 1: Pancakes</p>",
    "<p>Item 2: Eggs Benedict</p>",
    "<p>Item 3: Oatmeal</p>",
    "<p>Item 4: Frittata</p>"
  ]
*/
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
// .join('') convierte el array de strings en una sola cadena de texto sin comas intermedias.
/*
  Explicación de .join(''):
  - El método .join() une todos los elementos de un array en un solo string.
  - Si no se especifica un separador, usa una coma por defecto.
  - En este caso, pasamos una cadena vacía ('') para que los elementos se unan sin separadores.
  - Esto asegura que el resultado sea una sola cadena continua de HTML en lugar de un array.

  Sin .join(''), el resultado seguiría siendo un array de strings, lo que no funcionaría correctamente en innerHTML.
*/

/*
  Ahora, insertamos la cadena generada dentro del elemento HTML con id 'breakfastMenuItems'.
  - document.getElementById() selecciona el elemento con el id especificado.
  - innerHTML asigna la cadena HTML generada para que se muestre en la página.
*/
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';

for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;