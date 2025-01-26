import { JSX } from 'react';

interface Props<T = unknown> {
  list: T[];
  renderFn: (arg: T) => JSX.Element;
}

export const ListComponent = <T,>({
  list,
  renderFn,
}: Props<T>): JSX.Element => {
  if (list.length === 0) {
    return (
      <p className='text-center px-4 py-2 font-medium text-xl'>
        No Pokemons found
      </p>
    );
  }

  return (
    <div className='flex flex-col gap-2'>
      {list.map((item) => renderFn(item))}
    </div>
  );
};
