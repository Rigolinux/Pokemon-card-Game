/* eslint-disable prettier/prettier */
import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe("PokemonPicture", () => {
  test("Debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen oculta y el pokemon 100", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });
    const imgs = wrapper.findAll("img");
    
    expect(imgs[0].exists()).toBeTruthy();

    expect(imgs[1]).toBe(undefined)
    expect(imgs[0].element.src).toContain("100.svg");
    expect(imgs[0].classes("hidden-pokemon")).toBe(true);
  });

  test("Debe de mostrar el pokemon si showpokemon:true", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });
    const imgs = wrapper.findAll("img");

    expect(imgs[0].exists()).toBeTruthy();
    expect(imgs[1].exists()).toBeTruthy();
    expect(imgs[1].classes("fade-in")).toBe(true);
  });
});
