import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});


export class PokemonFakeAPI {
    getPokemonById(id) {
        return http.get(`nuevos?id=${id}`);
    }

    getPokemonByName(name) {
        return http.get(`nuevos?name=${name}`);
        //http.get(`nuevos?id=${id}&name=${name}`);
    }

    getPokemonByIdName(id, name) {
        return http.get(`nuevos?id=${id}&name=${name}`);
    }

    getAllPokemon() {
        return http.get("nuevos");
    }

    create(nuevo) {
        return http.post("nuevos", nuevo)
    }

    delete(id) {
        return http.delete(`nuevos/${id}`)
    }
}