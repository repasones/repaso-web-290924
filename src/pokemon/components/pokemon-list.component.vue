<template>
    <div v-for="pokemon in pokemones">
        <pokemonCardComponent :pokemon="pokemon" />
    </div>
</template>

<script>
import pokemonCardComponent from './pokemon-card.component.vue';
import { PokemonAPI } from '../services/pokemon-api.service';
import { Pokemon } from '../model/pokemon.entity';

export default {
    name: 'PokemonList',
    components: {
        pokemonCardComponent
    },
    data() {
        return {
            api: new PokemonAPI(),
            pokemones: []
        };
    },
    created() {
        this.api.getAllPokemon().then(
            response => {
                const data = response.data;
                const results = data.results;

                const names = results.map(r => r.name)

                names.forEach(name => {
                    this.api.getPokemonByName(name).then(response => {
                        const data = response.data;
                        const pokemon = new Pokemon(data);
                        this.pokemones.push(pokemon);
                    })
                });

            }
        ).catch(e => alert("Error"));


    }
};
</script>

<style scoped></style>