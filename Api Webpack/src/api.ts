import { characters } from "./Card/types/types";

export const getCharacters = async(): Promise<Array<characters>> => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);
    return data.results;
}