import { SimplePokemon } from '../interfaces/pokeapi';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FavoriteButton } from './FavoriteButton';

interface Props extends SimplePokemon {
  useNameNavigation?: boolean;
}

export const PokemonListItem = ({
  name,
  id,
  useNameNavigation = false,
}: Props): JSX.Element => {
  return (
    <div className='flex flex-row gap-4 items-center justify-between bg-slate-900 rounded-md px-2 py-4'>
      <div className='flex flex-row gap-4 items-center'>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={48}
          height={48}
          alt={name}
          priority={false}
          loading='lazy'
        />
        <p className='text-lg font-semibold'>{name}</p>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <FavoriteButton id={id!} name={name} />
        <Link
          className='bg-blue-500 text-white px-4 py-2 rounded-md justify-self-end'
          href={`/dashboard/pokemons/${useNameNavigation ? name : id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};
