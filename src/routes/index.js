import { createRouter, createWebHistory } from "vue-router";
import pokemonListComponent from '../pokemon/components/pokemon-list.component.vue'
import page404 from '../public/pages/404.component.vue'
import homeComponent from "../public/pages/home.component.vue";
import crearpokemonComponent from "../public/pages/crearpokemon.component.vue";
import mostrarnuevosComponent from "../public/pages/mostrarnuevos.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: homeComponent },
        { path: '/lista', component: pokemonListComponent },
        { path: '/crear', component: crearpokemonComponent },
        { path: '/mostrar', component: mostrarnuevosComponent },
        { path: '/:pathMatch(.*)*', component: page404 }
    ]
});

export default router;