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
import { Pokemon } from '../model/pokemon.entity';

export default {
    name: 'PokemonCard',
    props: {
        pokemon: {
            type: Pokemon,
            required: true
        }
    },
}
</script>

<style scoped></style>