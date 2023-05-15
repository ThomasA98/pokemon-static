import { NextPage, GetStaticProps } from 'next'
import { Button, Grid } from '@nextui-org/react'
import { Layout } from '@/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/';

interface HomeProps {
  pokemons: SmallPokemon[]
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  return (
    <Layout pokemonName='' title='Listado de pokemons' >

      <Grid.Container gap={ 2 } justify='flex-start'>{pokemons.map(
        ({ id, img, name, url }) =>
          <PokemonCard
            key={ name }
            id={ id }
            img={ img }
            name={ name }
            url={ url }
          />
        )
      }</Grid.Container>

      <Button color={'gradient'}>hola mundo</Button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon', {
    params: {
      limit: 151
    }
  })

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home;