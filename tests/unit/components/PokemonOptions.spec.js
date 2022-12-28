/* eslint-disable prettier/prettier */
import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";

import { pokemonsList } from "../mocks/pokemons";

describe("PokemonOptions", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions,{
            props: {
                pokemons : pokemonsList
            },
        });

    });
  test("Debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();

  });
  test("Debe de mostrar 4 opciones de pokemons", () => {
    const liElements = wrapper.findAll("li");
    expect(liElements.length).toBe(4);
    expect(liElements[0].text()).toBe("bulbasaur");
    expect(liElements[1].text()).toBe("ivysaur");
    expect(liElements[2].text()).toBe("venusaur");
    expect(liElements[3].text()).toBe("charmander");
  });
    test("Debe de emitir el evento 'select' con sus respectivos parametros al hacer click", () => {
        const [li1, li2, li3, li4] = wrapper.findAll("li");
        li1.trigger("click");
        li2.trigger("click");
        li3.trigger("click");
        li4.trigger("click");
        expect(wrapper.emitted("select").length).toBe(4);
        expect(wrapper.emitted("select")[0]).toEqual([1]);
    });
});
