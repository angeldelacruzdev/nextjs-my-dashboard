'use client'
import { Provider } from "react-redux";
import { AppStore, store } from "./";
import { useRef } from "react";
import { setFavoritePokemons } from "./pokemons/pokemonSlice";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {

  const storeRef = useRef<AppStore>()

 
  if (!storeRef.current) {
    storeRef.current = store()
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
    storeRef.current.dispatch(setFavoritePokemons(favorites))
  }
  return <Provider store={storeRef.current}>{children}</Provider>
};

export default Providers;
