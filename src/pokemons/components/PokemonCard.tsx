'use client'
import Image from 'next/image'
import { SimplePokemon } from '..'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { toggleFavorite } from '@/store/pokemons/pokemons'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon
  const isFavorite = useAppSelector((state) => !!state.pokemons[id])

  const dispatch = useAppDispatch()

  const handleToggleFavorite = () => {
    console.log(pokemon)
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <div
      className="relative flex flex-col justify-end items-center text-neutral-900 
    border-4 border-[#FDD701] rounded-2xl  min-h-[350px] bg-neutral-800"
    >
      <div className=" h-full w-full rounded-t-2xl p-5 border-b-4 border-[#FDD701]">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={50}
          height={50}
          alt={name}
          priority={false}
          className="absolute bottom-36 right-0 w-full h-4/6"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <span className="text-[#FFFFFF] uppercase text-2xl font-mono">
          {name}
        </span>
        <Link
          className="text-neutral-800 mt-5 text-xs font-semibold bg-[#FDD701]  rounded-lg p-2 hover:bg-[#fdd7019c] transition-colors"
          href={`/dashboard/pokemons/${name}`}
        >
          Mas informacion
        </Link>
        <div
          className="absolute bottom-0 right-0 mb-2 mr-2 cursor-pointer"
          onClick={handleToggleFavorite}
        >
          {isFavorite ? (
            <IoHeart className="w-6 h-6 text-red-600" />
          ) : (
            <IoHeartOutline className="w-6 h-6 text-red-600" />
          )}
        </div>
      </div>
    </div>
  )
}
