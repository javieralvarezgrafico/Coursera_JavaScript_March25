var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true); // True: Indica si la solicitud es asíncrona (true) o síncrona (false)
xhr.responseType = 'json'; // Informa al objeto XMLHttpRequest que la respuesta esperada del servidor debe estar en formato JSON.

xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Formas de Lograrlo:';
  
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Beneficios:';
  
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
  
        articlesDiv.appendChild(articleDiv);
      });
}

xhr.send();


// TAREA DE PRÁCTICA
var xhr2 = new XMLHttpRequest();
var url = './news.json';
xhr2.open('GET', url, true); 
xhr2.responseType = 'json';

xhr2.onload = function() {
    var noticias = xhr2.response.news; // Recuperar el array de noticias
    var noticiasDiv = document.getElementById('div_noticias'); // Obtener el contenedor de noticias

    noticias.forEach(function(noticia) {
        var noticiaDiv = document.createElement('div');
        noticiaDiv.classList.add('new');

        var title = document.createElement('h2');
        title.textContent = noticia.title;

        // Cambiar la descripción a <h3>
        var description = document.createElement('h3');
        description.textContent = noticia.description;

        // Crear el contenido como párrafos normales
        var contentDiv = document.createElement('div');
        noticia.content.forEach(function(item) {
            var contentParagraph = document.createElement('p');
            contentParagraph.textContent = item;
            contentDiv.appendChild(contentParagraph);
        });

        // Añadir todos los elementos al contenedor principal de la noticia
        noticiaDiv.appendChild(title);
        noticiaDiv.appendChild(description);  // Descripción ahora es un h3
        noticiaDiv.appendChild(contentDiv);   // Mostrar el contenido como párrafos

        // Añadir la noticia al contenedor general de noticias
        noticiasDiv.appendChild(noticiaDiv);
    });
}

xhr2.send();
