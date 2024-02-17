import { PokemonGrid, PokemonsResponse } from "@/pokemons";

export const metadata = {
  title: "Favorite pokemons",
  description: "List of favorite pokemons",
};

const getPokemons = async (limit = 20, offset = 0) => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  console.log(data);

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getbPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-[#252525]">Pokemons favoritos</span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
