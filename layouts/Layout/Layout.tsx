import Head from "next/head";

import { NavBar } from "@/components";

import styles from './Layout.module.css';

export type LayoutProps = {
	children: React.ReactNode
	pokemonName: string
	title?: string
}

const origin = typeof window === "undefined" ? '' : window.location.origin;

export const Layout: React.FC<LayoutProps> = ({ children, pokemonName, title }) => {
	return (<>
	<Head>
		<title>{ title ?? 'Pokemon App' }</title>
		<meta name="author" content="Thomas"/>
		<meta name="description" content={`Informacion sobre el pokemon ${ pokemonName }`}/>
		<meta name="keywords" content="xxx, pokemon, pokedex" />

		<meta property="og:title" content={ `Información sobre ${ pokemonName }` } />
		<meta property="og:description" content={ `Esta esla pagina sobre ${ pokemonName }` } />
		<meta property="og:image" content={ `${ origin }/img/banner.png` } />

	</Head>

		<NavBar />

	<main className={styles.Main}>
		{ children }
	</main>

	</>);
};