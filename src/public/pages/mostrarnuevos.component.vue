<template>
    <div v-for="pokemon in pokemones">
        <pokemonCardComponent :pokemon="pokemon" />
    </div>
</template>

<script>
import pokemonCardComponent from '../../pokemon/components/pokemon-card.component.vue';
import { PokemonFakeAPI } from '../../pokemon/services/pokemon-fakeapi.service';
import { Pokemon } from '../../pokemon/model/pokemon.entity';

export default {
    name: 'PokemonList',
    components: {
        pokemonCardComponent
    },
    data() {
        return {
            api: new PokemonFakeAPI(),
            pokemones: []
        };
    },
    created() {
        this.api.getAllPokemon().then(response => {
            const data = response.data;

            this.pokemones = data.map(pokemon => new Pokemon(pokemon))
        }
        ).catch(e => alert("Error"));

        this.api.getPokemonById(1).then(response => {
            const data = response.data;
            console.log(data);
        })

        this.api.getPokemonByName("PEPE").then(response => {
            const data = response.data;
            console.log(data);
        })

        this.api.getPokemonByIdName(6, "PEPE").then(response => {
            const data = response.data;
            console.log(data);
        })

        /* this.api.delete(1).then(response => {
            const data = response.data;
            console.log(data);
        }) */
    }
};
</script>

<style scoped></style>