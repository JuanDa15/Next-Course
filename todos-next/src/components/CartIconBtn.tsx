'use client';
import { useRouter } from 'next/navigation';
import { IconButton } from './IconBtn';

interface Props {
  currentItems: number;
}

export const CartIconBtn = ({ currentItems }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/products/cart');
  };
  return (
    <IconButton action={handleClick}>
      <span className='bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
        {currentItems}
      </span>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l14 1l-1 7h-13' />
      </svg>
    </IconButton>
  );
};
