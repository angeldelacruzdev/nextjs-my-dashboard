
'use client'
import { useEffect, useState } from "react";

import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store/hooks";

export const Favoritepokemons = () => {

    const favoritePokemons = useAppSelector(state => state.pokemons.favorites);

    return (
        <>
            {Object.values(favoritePokemons).length === 0 ? <PokemonGrid pokemons={Object.values(favoritePokemons)} /> : <NoFavorites />}
        </>
    )
}


export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline className="text-red-500 text-5xl" />
            <span>No hay favoritos</span>
        </div>
    )
}
