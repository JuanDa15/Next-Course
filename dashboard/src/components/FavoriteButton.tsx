'use client';

import { HeartIcon } from '@src/icons/HeartIcon';
import { useAppDispatch, useAppSelector } from '@src/store';
import { addPokemon, removePokemon } from '@src/store/pokemon-slice';

interface Props {
  id: string;
  name: string;
}

export const FavoriteButton = ({ id, name }: Props) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removePokemon(id));
    } else {
      dispatch(addPokemon({ id, name }));
    }
  };

  return (
    <button
      type='button'
      className='p-2 rounded-full hover:bg-gray-500/40 transition-colors'
      onClick={handleClick}
    >
      <HeartIcon
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke='currentColor'
      />
    </button>
  );
};
