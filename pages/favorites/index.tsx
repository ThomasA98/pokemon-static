import { NoFavorites } from '@/components'
import { FavoritePokemons } from '@/components';
import { Layout } from '@/layouts'
import { localFavorites } from '@/utils';
import { NextPage } from 'next'
import { useEffect, useState } from 'react';

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout pokemonName='' title='favorites' >
      {
        favoritePokemons.length === 0
        ? <NoFavorites />
        : <FavoritePokemons pokemonsId={ favoritePokemons } />
      }
    </Layout>
  )
}

export default FavoritesPage