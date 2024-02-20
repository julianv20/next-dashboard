'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from '..'
import { useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  )

  const [pokemons, setpokemons] = useState(favoritePokemons)

  return (
    <>
      {pokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  )
}

export const NotFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline className="text-red-500" size={32} />
      <span className="text-2xl font-bold text-neutral-100">
        No hay favoritos
      </span>
    </div>
  )
}
