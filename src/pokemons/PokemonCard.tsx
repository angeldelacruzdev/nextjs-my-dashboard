import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../app/interfaces";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

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
            <Link
              href="/dashboard/main"
              className="px-4 py-2 hover:bg-gray-100 flex"
            >
              <div className="text-red-600">
                <IoHeartOutline />
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Marcar como favorito
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
            </Link>
          </div>
          <div className="">
            <button className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
              <p className="text-sm font-medium text-gray-800 leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="h-4 w-4 text-gray-800 fill-current animate-spin"
                  width={32}
                  height={32}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"
                  />
                </svg>{" "}
                Logout
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
