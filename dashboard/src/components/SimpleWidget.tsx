import Link from 'next/link';
import { JSX } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  icon: JSX.Element;
  href?: string;
}

export const SimpleWidget = ({
  title = 'Default title',
  subtitle = 'Default subtitle',
  icon,
  href,
}: Props): JSX.Element => {
  return (
    <div className='p-4 border border-slate-900 bg-slate-950 rounded-md shadow-md shadow-slate-900'>
      <h5 className='text-base text-center font-semibold'>Counter</h5>
      <hr className='my-2' />
      <div className='grid grid-cols-4 gap-2 px-8'>
        {icon && <div className='col-span-1 grid items-center'>{icon}</div>}
        <div className='col-span-3 text-left'>
          <p className='text-3xl font-semibold'>{title}</p>
          <small className='text-white/60'>{subtitle}</small>
        </div>
      </div>
      {href && (
        <div className='flex flex-row justify-end'>
          <Link
            href={href}
            className='bg-slate-900 text-white rounded-md p-2 mt-2 '
          >
            Click me
          </Link>
        </div>
      )}
    </div>
  );
};
