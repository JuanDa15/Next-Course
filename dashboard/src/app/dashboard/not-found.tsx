import Link from 'next/link';
import { JSX } from 'react';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-4 font-bold'>404 - Not Found</h1>
      <hr className='border-b border-b-gray-500 h-[1px] w-full my-4' />
      <p className='text-xl text-center'>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href='/dashboard/pokemons'
        className='px-4 py-2 mt-8 bg-blue-500 text-white rounded-md'
      >
        Go to pokemons
      </Link>
    </div>
  );
}
