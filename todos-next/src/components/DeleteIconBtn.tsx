'use client';

import { removeProductFromCart } from '@/helpers/cart';
import { IconButton } from './IconBtn';
import { useRouter } from 'next/navigation';

interface Props {
  id: number;
}
export const DeleteIconBtn = ({ id }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    removeProductFromCart(id);
    router.refresh();
  };
  return (
    <IconButton action={handleClick} className='text-red-500 '>
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
        <path d='M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
        <path d='M12.5 17h-6.5v-14h-2' />
        <path d='M6 5l14 1l-1 7h-13' />
        <path d='M16 19h6' />
      </svg>
    </IconButton>
  );
};
