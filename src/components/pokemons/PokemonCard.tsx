'use client'

import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../../app/interfaces";
import Image from "next/image";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import { toggleFavorite } from "@/store/pokemons/pokemonSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/store/hooks";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  const store = useAppStore()

  const isFavorite = useAppSelector((state) => state.pokemons.favorites[`${id}`])
  const dispatch = useAppDispatch()


  const onToggle = () => {
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <>
      {/* component */}
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            <div className="flex justify-center">
              <Image
                key={pokemon.id}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={100}
                height={100}
                alt={pokemon.name}
              />
            </div>
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {name}
            </p>

            <div className="mt-5">
              <Link
                href={`/dashboard/pokemon/${id}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Leer más
              </Link>
            </div>
          </div>
          <div className="border-b">
            <div
              onClick={onToggle}
              className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
            >
              <div className="text-red-600">
                {isFavorite ? <IoHeart /> : <IoHeartOutline />}

              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {isFavorite ? 'Es favorito' : 'No Es favorito'}
                </p>
                <p className="text-xs text-gray-500">Click para cambiar a favorito</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
