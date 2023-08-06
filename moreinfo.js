function sayhello(Nombre) {
        console.log(`hola es un placer:${Nombre}`);       
}
sayhello("Juan");
// ------------------------------------------------------------------------>
// const urls = data.map(country => country.flags.png);         
// const div = document.createElement("div");
// const img = document.createElement("img");
// img.src = urls[0]; // Aquí asumimos que quieres mostrar la primera bandera, puedes ajustarlo según tus necesidades
// img.alt = "country flag";
//Cuando del al boton mas info, voy a llamar a mi funcion, getinfo y voy a iterar sobre my array y mostrar la info en el body.

let moreInfo = JSON.parse(localStorage.getItem('countries'));
console.log(moreInfo);

const mainDiv = document.createElement("div");
mainDiv.style.width = "100%";
mainDiv.style.display = "flex";
mainDiv.style.gap = "50px"
mainDiv.style.flexWrap = "wrap";
// mainDiv.style.overflow = "auto";
document.body.appendChild(mainDiv);

const urls = moreInfo.map(country => country.flags.png);

moreInfo.forEach((country,index) => {  

  const { name, population, region, subregion,capital,currencies,languages,borders } = country;

  const img = document.createElement("img");
  img.style.width = "190px";
  img.src = urls[index];

  const div = document.createElement("div");
  div.style.width = "200px";
  div.style.height = "340px";
  div.style.border = "solid #F7F7F7";
  div.style.borderRadius = "8px";
  div.style.margin = "10px";
  div.style.padding = "10px";

  const spanName = document.createElement("span");
  spanName.textContent = `Name native: ${name.common}`;
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

  const spanSubregion = document.createElement("span")
  spanSubregion.textContent = `Sub Region: ${subregion}`;
  spanSubregion.style.display = "block";
  spanSubregion.style.marginBottom = "10px"


  const spanPopulation = document.createElement("span");
  spanPopulation.textContent = `Population: ${population}`;
  spanPopulation.style.display = "block";
  spanPopulation.style.marginBottom = "10px";

  const spanCurrencies = document.createElement("span");
  spanCurrencies.textContent = `Currencies: ${currencies}`;
  spanCurrencies.style.display = "block";
  spanCurrencies.style.marginBottom = "10px";

  const spanLanguages = document.createElement("span");
  spanLanguages.textContent = `Languages: ${languages}`;
  spanLanguages.style.display = "block";
  spanLanguages.style.marginBottom = "10px";

  const spanBorders = document.createElement("span");
  spanBorders.textContent = `Borders: ${borders}`;
  spanBorders.style.display = "block";
  spanBorders.style.marginBottom = "10px";

  div.appendChild(img);
  div.appendChild(spanName);
  div.appendChild(spanCapital);
  div.appendChild(spanRegion);
  div.appendChild(spanSubregion);
  div.appendChild(spanPopulation);
  div.appendChild(spanCurrencies);
  div.appendChild(spanLanguages);
  div.appendChild(spanBorders);
  mainDiv.appendChild(div);
});





























// async function getInfo() {
//     try{
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const data = await response.json();

//     }catch(error){
//         console.log(error);
//     }
    
// }

// moreInfo.forEach((country, index) => {


//     const img = document.createElement("img");
//     img.src = country.flags.png;
//     document.body.appendChild(img);
  
//   });

  let addgetInfo = moreInfo.map((country,index)=>{

    

  })

