/* eslint-disable prettier/prettier */
import pokeapi from "@/api/pokemonApi";
export const getPokemons = () => {
  const pokemonsArray = Array.from(Array(500));

  return pokemonsArray.map((_, index) => index + 1);
};

const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    const pokemons = mixedPokemons.slice(0, 4)
    const pokemonwithname = await getPokemonNames(pokemons);

    return pokemonwithname;
  
};
export const getPokemonNames = async([a,b,c,d]=[]) => {
    //send all requests at once
    const pokemonNames = [];
    const promises = [a,b,c,d].map(id => pokeapi.get(`/${id}`));
    await Promise.all(promises).then((responses) => {
        responses.forEach((response) => {
            pokemonNames.push({ id:response.data.id,name: response.data.name});
        });
       
    });
    return pokemonNames;
}

export default getPokemonOptions;
