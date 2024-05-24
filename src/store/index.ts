import { Middleware, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/CounterSlice";
import PokemonReducer from "./pokemons/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middlewares/localStorageMiddleware";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     pokemons: PokemonReducer
//   },

//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
// });


export const store = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemons: PokemonReducer
    },
  })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']