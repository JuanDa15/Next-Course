'use client';
import { useAppSelector } from '@src/store';
import { SimpleWidget } from './SimpleWidget';
import { PokemonIcon } from '@src/icons/PokemonIcon';

export const WidgetsGrid = () => {
  const count = useAppSelector(({ counter }) => counter.count);
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      <SimpleWidget
        subtitle='Counter'
        title={count.toString()}
        icon={<PokemonIcon />}
        href='/dashboard/counter'
      />
    </div>
  );
};
