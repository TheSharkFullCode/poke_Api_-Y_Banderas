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


// ----[pintar Bandera Cart con cada Pais.]-----------------------------------------------------------------
// ----[pintar Bandera Cart con cada Pais.]-----------------------------------------------------------------

let arrayCountries = [];

async function getUrls() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    const urls = data.map(country => country.flags.png);

    const mainDiv = document.createElement("div");
    mainDiv.style.width = "100%";
    mainDiv.style.display = "flex";
    mainDiv.style.gap = "50px"
    mainDiv.style.flexWrap = "wrap";
    mainDiv.style.overflow = "auto";
    document.body.appendChild(mainDiv);

    
    data.forEach((country, index) => {
    

      const { name, population, region, capital } = country;

      const div = document.createElement("div");
      div.style.width = "200px";
      div.style.height = "340px";
      div.style.border = "solid #F7F7F7";
      div.style.borderRadius = "8px";
      div.style.margin = "10px";
      div.style.padding = "10px";

      const img = document.createElement("img");
      img.style.width = "190px"
      img.src = urls[index];

      const spanName = document.createElement("span");
      spanName.textContent = `Name: ${name.common}`;
      spanName.style.fontWeight = "bold";
      spanName.style.display = "block";
      spanName.style.marginBottom = "10px";

      const spanCapital = document.createElement("span");
      spanCapital.textContent = `Capital: ${capital}`;
      spanCapital.style.display = "block";
      spanCapital.style.marginBottom = "10px";

      const spanRegion = document.createElement("span");
      spanRegion.textContent = `Region: ${region}`;
      spanRegion.style.display = "block";
      spanRegion.style.marginBottom = "10px";

      const spanPopulation = document.createElement("span");
      spanPopulation.textContent = `Population: ${population}`;
      spanPopulation.style.display = "block";
      spanPopulation.style.marginBottom = "10px";

      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#F9F8F5';
      });
      
      div.addEventListener('mouseout', () => {
        div.style.backgroundColor = '';

      });


        const button = document.createElement("button");
        button.textContent = "more information"

      // button.addEventListener("click",()=>{

      //   arrayCountries.push(data)
      //   localStorage.setItem("countries",JSON.stringify(arrayCountries))

      // })
      button.addEventListener("click", () => {

        const selectedCountry = data[index];

        arrayCountries.unshift(selectedCountry);
        
        localStorage.setItem("countries", JSON.stringify(arrayCountries));


      });

      div.appendChild(img);
      div.appendChild(spanName);
      div.appendChild(spanCapital);
      div.appendChild(spanRegion);
      div.appendChild(spanPopulation);
      div.appendChild(button);
      mainDiv.appendChild(div);
      
    });

  } catch (error) {
    console.log(error);
  }
}

getUrls();
    



// const button = document.createElement("button");
// button.textContent = "More Information";
// button.addEventListener("click", () => {
//   getInfo();
// });
// ----------------------------------------------------------------------------------------------
// const button = document.createElement("button");
// button.textContent = "More Information";
// button.addEventListener("click", () => {
//   getInfo();
// });











