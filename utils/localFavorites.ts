const toggleFavorite = (id: number) => {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    const pokemonsId = favorites.includes(id)
        ? favorites.filter(pokeId => pokeId !== id)
        : [...favorites, id];

    localStorage.setItem('favorites', JSON.stringify(pokemonsId));
}

const existInFavorites = (id: number): boolean => {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const functions = {
    toggleFavorite,
    existInFavorites,
    pokemons
}

export default functions;