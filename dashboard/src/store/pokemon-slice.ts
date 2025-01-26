import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@src/interfaces/pokeapi';
import { getLocalStore } from '@src/utils/store';

const STORE_FAVORITES_KEY = 'favorites';

interface PokemonState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonState = {
  favorites: {},
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemon(state, { payload }: PayloadAction<SimplePokemon>) {
      state.favorites[payload.id!] = { ...payload };
    },
    removePokemon(state, { payload }: PayloadAction<string>) {
      if (!state.favorites[payload]) return;

      delete state.favorites[payload];

    },
    initializeFavorites(state, { payload }: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = payload;
    }
  }
})

export const { addPokemon, removePokemon, initializeFavorites } = pokemonSlice.actions;

export default pokemonSlice.reducer;
