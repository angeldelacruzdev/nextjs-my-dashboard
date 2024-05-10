import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/interfaces';


interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = () => {

//     // if (typeof localStorage === 'undefined') return {};

//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')

//     return favorites
// }

const initialState: PokemonsState = {
    favorites: {}
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;

            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id]

            } else {
                state.favorites[id] = pokemon
            }
            //TODO: No se debe de hacer en redux
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))

        },
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload;
        }

    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions

export default pokemonSlice.reducer