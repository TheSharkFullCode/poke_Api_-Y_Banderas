// En este proyectito usaremos lo aprendido hasta ahora de asincronía y uso de APIs para combinarlo con nuestros conocimientos del DOM.

// Tenéis aquí un ejemplo de cómo debería verse la aplicación, para que os sirva de guía.

// Instrucciones
// Para realizar este proyectos usaremos la API REST Countries. Encontrarás la documentación aquí: 

// La API devuelve información sobre todos los países del mundo. El objetivo es que, usándola, seas capaz de mostrar una card por cada país del mundo con la siguiente información:

// Bandera del país.
// Nombre.
// Población.
// Región.
// Capital.
// Botón con el texto "More".

// Cuando se haga click en el botón, deberás abrir una nueva página HTML que contenga en la url la información necesaria para buscar en la API ese país en concreto. Habrá que tomar los datos de la url y usarlos para hacer la petición a la API, para a continuación mostrar:

// Nombre.
// Nombre en idioma nativo.
// Población.
// Región.
// Subregión.
// Capital.
// Monedas.
// Idiomas.
// Países con los que hace frontera.
// ------[-Api sobre todo los paises de mundo]---------------------------------------------------------------->
// ------[-Api sobre todo los paises de mundo]---------------------------------------------------------------->

async function fetchUrl() {
  
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data);
  
}

fetchUrl();
// ----[pintar Bandera Cart con cada Pais.]-----------------------------------------------------------------
// ----[pintar Bandera Cart con cada Pais.]-----------------------------------------------------------------

async function getFlagcontries(){
  try{
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json()

    
    
    
  }catch(error){
    alert("Error al cargar la información");
  }


}


















