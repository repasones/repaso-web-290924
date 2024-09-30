<!-- Card provides header, title, subtitle, content and footer as the named templates to place content. -->
<template>
    <pv-card>
        <template #header>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        </template>
        <template #title>
            <h1>name: {{ pokemon.name }}</h1>
        </template>
        <template #content>
            <h2>id: {{ pokemon.id }}</h2>
            <p>types:</p>

            <div v-for="types in pokemon.types">
                <p>{{ types.type.name }}</p>
            </div>
        </template>
    </pv-card>
</template>

<script>
import { PokemonAPI } from '../services/pokemon-api.service';
import { Pokemon } from '../model/pokemon.entity';

export default {
    name: 'PokemonCard',
    data() {
        return {
            api: new PokemonAPI(),
            idPokemon: 50,
            pokemon: null
        }
    },
    /* async */
    created() {
        this.api.getPokemon(this.idPokemon).then(
            response => {
                const data = response.data;
                //console.log(data);

                this.pokemon = new Pokemon(data);
            }
        ).catch(e => alert("Error"));

        /*  try {
             const response = await this.api.getPokemon(this.idPokemon);
             const data = response.data;
 
             console.log(response);
             console.log(data);
         }
         catch (e) {
             alert(e);
         } */
    }
}
</script>

<style scoped></style>