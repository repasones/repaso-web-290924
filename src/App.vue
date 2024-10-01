<script>
import pokemonListComponent from './pokemon/components/pokemon-list.component.vue';
import toolbarComponent from './public/components/toolbar.component.vue'

export default {
    components: {
        pokemonListComponent,
        toolbarComponent
    }
}
</script>

<template>
    <toolbarComponent />
    <router-view />
    <!-- <pokemonListComponent /> -->
</template>

<style scoped></style>
