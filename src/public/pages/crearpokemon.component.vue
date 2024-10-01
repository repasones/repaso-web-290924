<template>
    <div class="crearpokemon">
        <h1>Create a New Pokemon</h1>
        <form>
            <label for="">Name</label>
            <input type="text" v-model="name">

            <label for="">Sprite</label>
            <input type="text" v-model="sprites">

            <label for="">Type 1</label>
            <input type="text" v-model="type1">

            <label for="">Type 2</label>
            <input type="text" v-model="type2">

            <pv-button @click="crear()">Create</pv-button>
        </form>
    </div>
</template>

<script>
import { Pokemon } from "../../pokemon/model/pokemon.entity"
import { PokemonFakeAPI } from "../../pokemon/services/pokemon-fakeapi.service";

export default {
    name: 'CrearPokemon',
    data() {
        return {
            name: '',
            sprites: '',
            type1: '',
            type2: '',
            api: new PokemonFakeAPI()
        };
    },
    methods: {
        crear() {
            console.log(this.name, this.sprite, this.type1, this.type2)

            const nuevo = new Pokemon({
                name: this.name,
                sprites: {
                    front_default: this.sprites
                },
                types: [
                    {
                        type: {
                            name: this.type1
                        }
                    },
                    {
                        type: {
                            name: this.type2
                        }
                    }
                ]
            })

            this.api.create(nuevo)
                .then(response => {
                    if (response.status == 201) {
                        alert("CREADO")
                    }
                })
                .catch(e => alert("CREADO"))
        }
    }
};
</script>

<style scoped></style>