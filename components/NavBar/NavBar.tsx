import Image from 'next/image';
import Link from 'next/link';
import { Spacer, Text, useTheme } from '@nextui-org/react';

import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {

	const { theme } = useTheme();

	return <div className={styles.NavBar} style={{ backgroundColor: theme?.colors.gray900.value }}>
		<Image
			src={ 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png' }
			alt=''
			width={70}
			height={70}
		/>

		<Link href='/'>
			<Text h1 css={{ display: 'inline-block' }} color='white'>P</Text>
			<Text css={{ display: 'inline-block' }} color='white'>okemon</Text>
		</Link>

		<Spacer css={{ flex: 1 }} />

		<Link href='/favorites'>
			<Text color='white'>Favoritos</Text>
		</Link>
	</div>;
};

export default NavBar;
