import { PokemonsResponse, SimplePokemon } from "@/app/interfaces";
import { PokemonGrid } from "@/pokemons";
import Image from "next/image";

const getPokemons = async (
  limit = 100,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);
  return (
    <div>
      <h1>Hello Pokemons Page</h1>

      <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de Pokémons</span>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
