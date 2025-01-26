import { Counter } from '@src/components/Counter';
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'A simple counter page',
};

export default function CounterPage(): JSX.Element {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h3 className='text-xl font-bold'>Counter</h3>
      <Counter />
    </div>
  );
}
