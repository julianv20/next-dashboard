import Image from 'next/image'
import { SimplePokemon } from '..'
import Link from 'next/link'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div
      className="relative flex flex-col justify-end items-center text-neutral-900 
    border-4 border-[#FDD701] rounded-2xl   bg-[#171A3B] min-h-[350px] "
    >
      <div className="bg-gradient-to-bl from-slate-800 to-violet-900 h-full w-full rounded-t-2xl p-5 border-b-4 border-[#FDD701]">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          width={50}
          height={50}
          alt={pokemon.name}
          priority={false}
          className="absolute bottom-36 right-0 w-full h-4/6"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <span className="text-[#FFFFFF] uppercase text-2xl font-mono">
          {pokemon.name}
        </span>
        <div className="flex gap-2">
          <Link
            className="text-neutral-800 mt-5 text-xs font-semibold bg-[#FDD701]  rounded-lg p-2 hover:bg-[#fdd7019c] transition-colors"
            href={`/dashboard/pokemons/${pokemon.name}`}
          >
            Mas informacion
          </Link>
          <Link
            className="text-neutral-800 mt-5 text-xs font-semibold bg-[#FDD701]  rounded-lg p-2 hover:bg-[#fdd7019c] transition-colors"
            href={''}
          >
            No es favorito
          </Link>
        </div>
      </div>
    </div>
  )
}
