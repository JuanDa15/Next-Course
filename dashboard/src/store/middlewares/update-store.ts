import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getLocalStore, setLocalStore } from "@src/utils/store";

const STORE_FAVORITES_KEY = 'favorites';

export const updateStoreMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => {
    return (action: Action) => {
      next(action)
      const { pokemons } = state.getState() as RootState
      if (['pokemons/addPokemon', 'pokemons/removePokemon'].includes(action.type)) {
        setLocalStore(STORE_FAVORITES_KEY, pokemons.favorites);
      }
    }
  }
}

export const initFavoritesMiddleware = () => {
  return (next: Dispatch) => {
    return (action: any) => {
      if (action.type === 'pokemons/initializeFavorites') {
        let favorites = {}
        favorites = getLocalStore(STORE_FAVORITES_KEY) ?? {}
        action.payload = favorites
      }
      next(action)
    }
  }
}