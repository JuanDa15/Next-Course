'use client';
import { useAppDispatch, useAppSelector } from '@src/store';
import { JSX, useEffect } from 'react';
import { increment, initCounter, setLoading } from '@store/counter-slice';
import { SpinnerIcon } from '@src/icons/SpinnerIcon';

interface Props {
  initialValue?: number;
}

const getCounterValue = async () => {
  const response = await fetch('/api/counter');
  const data = await response.json();
  return data.count;
};

export const Counter = ({ initialValue = 0 }: Props): JSX.Element => {
  const count = useAppSelector(({ counter }) => counter.count);
  const loading = useAppSelector(({ counter }) => counter.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCounterValue().then((value) => {
      dispatch(initCounter(value));
      dispatch(setLoading(false));
    });
  }, [dispatch]);

  const handleClick = (val: number) => {
    dispatch(increment(val));
  };

  return (
    <>
      <span className='text-5xl my-4'>{loading ? <SpinnerIcon /> : count}</span>
      <div className='flex flex-row gap-2'>
        <button
          type='button'
          className='bg-red-500 text-white px-4 py-2 rounded'
          onClick={() => handleClick(-1)}
        >
          -1
        </button>
        <button
          type='button'
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => handleClick(+1)}
        >
          +1
        </button>
      </div>
    </>
  );
};
