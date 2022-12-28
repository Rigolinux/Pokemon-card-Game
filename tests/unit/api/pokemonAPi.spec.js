/* eslint-disable prettier/prettier */
import pokeapi from "@/api/pokemonApi";

describe("Pokemon API", () => {
  test("Axios debe de estar configurado", () => {
    expect(pokeapi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon");
  });
});
