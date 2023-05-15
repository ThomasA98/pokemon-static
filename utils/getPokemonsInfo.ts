import { pokeApi } from "@/api"
import { Pokemon } from "@/interfaces"

export const getPokemonInfo = async (endpoint: string) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${endpoint}`)

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }

}