import { Sidebar } from '@src/components/Sidebar';
import { JSX } from 'react';

export default function DashboarLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <>
      <div className='min-h-screen'>
        <Sidebar />
        <div className='p-4 xl:ml-80 h-screen'>
          <div className='mt-12'>{children}</div>
        </div>
      </div>
    </>
  );
}
