import { FavoritePokemons } from '@/pokemons'

export const metadata = {
  title: 'Favorite pokemons',
  description: 'List of favorite pokemons'
}

const PokemonsPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-neutral-100">
        Pokemons favoritos
      </span>

      <FavoritePokemons />
    </div>
  )
}

export default PokemonsPage
