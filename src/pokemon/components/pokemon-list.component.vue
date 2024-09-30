<template>
    <pokemonCardComponent :pokemon="pokemones[0]" />
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
        //TODO
        this.api.getAllPokemon().then(
            response => {
                const data = response.data;
                const results = data.results;

                const names = results.map(r => r.name)

                this.pokemones = names.map(
                    n => this.api.getPokemonByName(n)
                        .then(poke => new Pokemon(poke))
                        .catch(e => alert(e))
                );
                console.log(this.pokemones);
            }
        ).catch(e => alert("Error"));


    }
};
</script>

<style scoped></style>