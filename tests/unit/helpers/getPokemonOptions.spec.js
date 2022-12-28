/* eslint-disable prettier/prettier */
import getPokemonOptions, {
  getPokemonNames,
  getPokemons,
} from "@/helpers/getPokemonOptions";
import { pokemonsList } from "../mocks/pokemons";

describe("getPokemonOptions", () => {
  test("Debe de retornar un arreglo de números", () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(500);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[499]).toBe(500);
  });
  test("Debe de retornar un arreglo de 4 elementos", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual(pokemonsList);
  });
  test("Debe de retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions();

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      },
    ]);
  });
});
