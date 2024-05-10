
import { Favoritepokemons, } from "@/components/pokemons";

export const metadata = {
  title: "Página De Pokemones Estática",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, magni",
};

export default async function FavoritesPage() {
  return (
    <div>
      <div className="flex flex-col">
        <span className="text-4xl my-2">
          Pokémons Favoritos{" "}
          <small className="text-blue-500">Global State</small>
        </span>
        <Favoritepokemons />
      </div>
    </div>
  );
}
