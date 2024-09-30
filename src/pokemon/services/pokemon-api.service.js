import axios from 'axios';

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

//https://pokeapi.co/api/v2/pokemon/{id or name}/

export class PokemonAPI {
    getPokemon(id) {
        return http.get(`${id}`);
        //https://pokeapi.co/api/v2/pokemon/15/asd
    }
}