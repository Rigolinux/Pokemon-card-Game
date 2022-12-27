<!-- eslint-disable prettier/prettier -->
<template>
  <div v-if="!pokemon">
    <h1>Loading...</h1>
  </div>
  <div v-else>
    <h1>How is that pokemon</h1>
    <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <pokemon-options :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <template v-if="showAnswer">
      <h2>{{ message }}</h2>

      <button @click="newGame">Nuevo Juego</button>
    </template>

    <h3>Aciertos {{ counter }}</h3>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemon: null,
      pokemonArr: [],
      showPokemon: false,
      showAnswer: false,
      message: "",
      counter: 0,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(id) {
      this.showPokemon = true;
      if (id === this.pokemon.id) {
        this.showAnswer = true;
        this.message = `Correcto es un ${this.pokemon.name}`;
        this.counter++;
      } else {
        this.showAnswer = true;
        this.message = `Incorrecto, es un ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showAnswer = false;
      this.showPokemon = false;
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.showPokemon = false;

    this.mixPokemonArray();
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style></style>
