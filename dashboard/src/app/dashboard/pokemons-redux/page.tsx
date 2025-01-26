import { FavoritePokemons } from '@src/components/PokemonList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'List of all Pokemons',
};

export default async function PokemonsPage() {
  return (
    <div className='w-full h-full flex flex-col gap-2 pb-4'>
      <h1 className='text-3xl font-bold'>Pokemons Favoritos</h1>
      <hr className='border-b border-b-slate-100' />
      <FavoritePokemons />
    </div>
  );
}
