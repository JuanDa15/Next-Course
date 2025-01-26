import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter-slice'
import pokemonReducer from './pokemon-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { initFavoritesMiddleware, updateStoreMiddleware } from "./middlewares/update-store";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(updateStoreMiddleware)
    .concat(initFavoritesMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector