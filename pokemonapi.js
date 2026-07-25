const btn = document.getElementById('btndex');
btn.addEventListener ('click', async function (){
const input = document.getElementById('inpoke');
const value = input.value
const results= await getData(value);

const card = document.getElementById ("pokemon-name");
const pokemonspecies = await fetch(results["species"] ["url"])
let pokemonDesc = await pokemonspecies.json();

pokemonDesc = pokemonDesc ["flavor_text_entries"][30]["flavor_text"]

card.innerHTML = `
<p>${results.name} </p>
<img src="${results.sprites.front_default}"/>
<p>${pokemonDesc}</p>
`

console.log(results.name)
console.log(results.types)
console.log(results.sprites.front_default)
console.log (pokemonDesc)
});

async function getData(value) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + value;
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;

   
     } catch (error) {
    console.error(error.message);
    
    
  }

}
//  let pokemonName = value ['name'];
//     let pokemonType = value ['type'];
//     let pokemonImg = value ['Img'];
//     response = await fetch(value ['species'] ['url']);
//     let pokemonDesc = await response.json();
//     pokemonDesc = pokemonDesc ["flavor_text_entries"][9]["flavor_text"];
//     pokedex [num] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType, "desc" : pokemonDesc};







// got show the result in the html and put the pokedex on css
// need to display on html, use 