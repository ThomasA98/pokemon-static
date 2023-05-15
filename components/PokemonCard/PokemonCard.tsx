import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '@/interfaces';

import styles from './PokemonCard.module.css';
import { NextRouter, useRouter } from 'next/router';

const redirection = (router: NextRouter, page: string) => {
	router.push(`/name/${ page }`)
}

export interface PokemonCardProps extends SmallPokemon { }

const PokemonCard: React.FC<PokemonCardProps> = ({ id, img, name, url }) => {

	const router = useRouter();

	return <Grid xs={6} sm={3} md={2} xl={1}>
		<Card
			hoverable
			clickable
			onClick={() => redirection(router, name)}>
			<Card.Body css={{ p: 1 }}>
				<Card.Image src={img} width="100%" height={140} />
			</Card.Body>
			<Card.Footer>
				<Row justify='space-between'>
					<Text transform='capitalize'>{name}</Text>
					<Text>{id}</Text>
				</Row>
			</Card.Footer>
		</Card>
	</Grid>;
};

export default PokemonCard;
