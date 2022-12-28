/* eslint-disable prettier/prettier */
import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemonsList } from "../mocks/pokemons";

describe("PokemonPage", () => {
  // eslint-disable-next-line no-unused-vars
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("Debe de hacer match con el snapshot", () => {});

  test("debe llamar mixPokemonArray al montar", () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      "mixPokemonArray"
    );
    mount(PokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test("debe de hacer match cuando exista un pokemon", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemon: pokemonsList[0],
          pokemonArr: pokemonsList,
          showPokemon: false,
          showAnswer: false,
          message: "",
          counter: 0,
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar los componentes PokemonPicture y PokemonOptions", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemon: pokemonsList[0],
          pokemonArr: pokemonsList,
          showPokemon: true,
          showAnswer: true,
          message: "",
          counter: 0,
        };
      },
    });
    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes('pokemonid')).toEqual("1");
    expect(options.attributes('pokemons')).not.toBeUndefined();

  });

  test("Pruebas con check answer ",async()=>{
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemon: pokemonsList[0],
          pokemonArr: pokemonsList,
          showPokemon: true,
          showAnswer: true,
          message: "",
          counter: 0,
        };
      },
    });

    //executes the function
/*     await wrapper.vm.checkAnswer(1);
    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.vm.message).toBe(`Correcto es un ${pokemonsList[0].name}`);
 */
    await wrapper.vm.checkAnswer(6);
    expect(wrapper.vm.message).toBe(`Incorrecto, es un ${pokemonsList[0].name}`);
  })
});
