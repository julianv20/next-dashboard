import { SimplePokemon } from '@/pokemons'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
  [key: string]: SimplePokemon
}

const initialState: PokemonsState = {
  // '1': { id: '1', name: 'Bulbasur' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload
      const { id } = pokemon

      // Check if the pokemon is already in favorites
      if (!!state[id]) {
        // Remove the pokemon from favorites
        const { [id]: removedPokemon, ...newState } = state
        return newState
      } else {
        // Add the pokemon to favorites
        state[id] = pokemon
        return state
      }
    }
  }
})

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer
