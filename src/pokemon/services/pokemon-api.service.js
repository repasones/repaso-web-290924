import axios from 'axios';

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

//https://pokeapi.co/api/v2/pokemon/{id or name}/

export class PokemonAPI {
    getPokemonById(id) {
        return http.get(`pokemon/${id}`);
        //https://pokeapi.co/api/v2/pokemon/15/asd
    }

    getPokemonByName(name) {
        return http.get(`pokemon/${name}`);
        //https://pokeapi.co/api/v2/pokemon/15/asd
    }

    getAllPokemon() {
        return http.get("pokemon?limit=100&offset=0");
        //https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
    }
}