import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '../';

interface FavoritePokemonsProps {
	pokemonsId: number[]
}

const FavoritePokemons: React.FC<FavoritePokemonsProps> = ({ pokemonsId }) => {
	return <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
	{
	  pokemonsId.map(pokeId =>
		<FavoriteCardPokemon  key={ pokeId } pokemonId={ pokeId } />
	  )
	}
  </Grid.Container>;
};

export default FavoritePokemons;
