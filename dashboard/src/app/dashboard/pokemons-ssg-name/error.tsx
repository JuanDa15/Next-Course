'use client';

import { JSX, useEffect } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function PokemonsError({ error, reset }: Props): JSX.Element {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='w-full h-screen'>
      <h1 className='text-3xl font-bold text-center mt-20'>
        An error occurred
      </h1>
      <p className='text-center mt-10'>{error.message}</p>
      <button
        className='block mx-auto mt-10 px-4 py-2 bg-blue-500 text-white rounded'
        onClick={reset}
      >
        Retry
      </button>
    </div>
  );
}
