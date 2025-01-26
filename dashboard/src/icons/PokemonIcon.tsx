import { JSX } from 'react';

export const PokemonIcon = (): JSX.Element => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      width='24'
      height='24'
      strokeWidth='2'
    >
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
      <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
      <path d='M3 12h6'></path>
      <path d='M15 12h6'></path>
    </svg>
  );
};
