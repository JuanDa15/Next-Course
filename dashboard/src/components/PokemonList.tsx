'use client';
import { SimplePokemon } from '@src/interfaces/pokeapi';
import { ListComponent } from './List';
import { PokemonListItem } from './PokemonListItem';
import { useAppSelector } from '@src/store';

export const FavoritePokemons = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);

  return (
    <ListComponent<SimplePokemon>
      list={Array.from(Object.values(favorites))}
      renderFn={(item) => <PokemonListItem key={item.name} {...item} />}
    />
  );
};
