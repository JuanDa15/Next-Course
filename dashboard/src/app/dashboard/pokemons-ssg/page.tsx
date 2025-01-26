import { Metadata } from 'next';
import { getPokemons } from '@src/services/poke-api';
import { ListComponent } from '@src/components/List';
import { SimplePokemon } from '@src/interfaces/pokeapi';
import { PokemonListItem } from '@src/components/PokemonListItem';

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'List of all Pokemons',
};

export default async function PokemonsPage() {
  const { results } = await getPokemons(15);
  return (
    <div className='w-full h-full flex flex-col gap-2 pb-4'>
      <h1 className='text-3xl font-bold'>Pokemons</h1>
      <hr className='border-b border-b-slate-100' />

      <ListComponent<SimplePokemon>
        list={results}
        renderFn={(item) => <PokemonListItem key={item.name} {...item} />}
      />
    </div>
  );
}
