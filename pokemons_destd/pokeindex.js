// Un Charizard se ha comido nuestra pokedex y ahora necesitamos hacer un reporte manual del pokemón electabuzz. Su id, para que lo busques en la pokeapi es 125.

// Los estilos del reporte son a su discreción

// Necesitamos pintar en el DOM la mayoria de su información y en este orden:

// Nombre
// Id
// Experiencia base
// Altura
// Peso
// Lista de los juegos en los que ha aparecido
// Tipo ( fire, water ...)
// Lista de sus movimientos ( NO 'abilities')
// Item que usa
// Lista de las áreas de localización
// Galeria de TODAS sus imagenes, exceptuando las imagenes dentro del objeto versions en sprites
// Una Card de Stats que va a tener las siguientes características:
// HP
// Ataque
// Defensa
// Ataque especial
// Defensa especial
// Velocidad
// DATO : No pueden haber valores fijos, todos los campos deben ser rellenados con variables, de manera que si se busca la información de otro pokemón, el reporte se adapte a su información

function sayHello(){
    console.log('kiubo pued');
}
sayHello()
// --------------------------------------------------------------------------
// fetch("https://pokeapi.co/api/v2/pokemon")--------------------------------------------------------------------------


const getPokemonData = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/105/");
        const data = await response.json();

        //   console.log(data);
       
       
    const input = document.createElement("input");
    input.textContent = "searc"
    
    const mainDiv = document.createElement("div");
    console.log("🚀 ~ file: pokeindex.js:59 ~ getPokemonData ~ mainDiv:", mainDiv)
    mainDiv.id = "miDiv";
    mainDiv.style.border = "solid red"
    mainDiv.style.width = "400px"
    mainDiv.style.height = "200px"
    mainDiv.style.margin = "auto"
    // mainDiv.style.marginTop = "90px"

    const divInfo =  document.createElement("div");
    divInfo.classList="info"
    divInfo.style.border = "solid blue";
    console.log("🚀 ~ file: pokeindex.js:70 ~ getPokemonData ~ divInfo:", divInfo)
    // divInfo.style.border = "solid red"
    divInfo.style.width = "400px"
    divInfo.style.height = "100px"
    divInfo.style.margin = "auto"
    divInfo.style.marginTop = "90px"

    const img = document.createElement("img");
    const img2 = document.createElement("img");
    const imgSrc = data.sprites.front_default;
    const imgSrc2 = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
    img.src = imgSrc;
    img2.src = imgSrc2;
    // const electabuzz = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];




    
    const miDiv = document.getElementById("miDiv");

    // input.value=nombre;
    mainDiv.appendChild(input);
    divInfo.appendChild(img);
    divInfo.appendChild(img2);
    document.body.appendChild(divInfo);
    document.body.appendChild(mainDiv);
    // miDiv.style.borderColor = "solid red"
        
      const nombre = data.name;

      const id = data.id;

      const experienciaBase = data.base_experience;
      const altura = data.height;
      const peso = data.weight;

      const juegos = data.game_indices.map((juego) => juego.version.name);
        // const juegos = data.game_indices.map((juego)=> juego.version.name);
      const tipos = data.types.map((tipo) => tipo.type.name);
        // const tipos = data.types.map((tipo)=> tipo.types.name)
      const movimientos = data.moves.map((movimiento) => movimiento.move.name);
        //const movimientos = data.moves.map((movimiento)=> movimiento.move.name)
      
      console.log("Nombre:", nombre);
      console.log("Id:", id);
      console.log("Experiencia base:", experienciaBase);
      console.log("Altura:", altura);
      console.log("Peso:", peso);
      console.log("Lista de juegos en los que ha aparecido:", juegos);
      console.log("Tipo:", tipos);
      console.log("Lista de movimientos:", movimientos);


    } catch (error) {
      console.log(error);
    }
    
   

  };
  
  getPokemonData();





