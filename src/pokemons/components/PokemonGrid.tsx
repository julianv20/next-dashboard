import { SimplePokemon } from '..'
import { PokemonCard } from './PokemonCard'

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-5">
      {pokemons.map((pokemon: SimplePokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
// grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-5
