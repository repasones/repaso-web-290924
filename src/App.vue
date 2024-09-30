<script>
import pokemonListComponent from './pokemon/components/pokemon-list.component.vue';
import toolbarComponent from './public/toolbar.component.vue'

export default {
    components: {
        pokemonListComponent,
        toolbarComponent
    }
}
</script>

<template>
    <toolbarComponent />
    <pokemonListComponent />
</template>

<style scoped></style>
