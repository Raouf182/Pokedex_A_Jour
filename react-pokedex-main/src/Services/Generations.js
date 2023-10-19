import axios from "axios";

function getGenerations(){
    return axios.get("https://pokeapi.co/api/v2/generation/")
}



function getGen(){
    return axios.get("https://pokeapi.co/api/v2/generation/"+gen+"/")
}

export default {
    getGenerations,
    getGen,
}