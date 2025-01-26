import { WidgetsGrid } from '@src/components/WidgetsGrid';
import { JSX } from 'react';

export default function DashboardPage(): JSX.Element {
  return (
    <div className='w-full min-h-screen'>
      <h1 className='text-3xl font-semibold'>Dashboard</h1>
      <hr className='my-4' />
      <WidgetsGrid />
    </div>
  );
}
