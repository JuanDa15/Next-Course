import { TabBar } from '@/components/TabBar';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Cookies',
  description: 'Cookies page',
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const selectedTab = cookieStore.get('selectedTab');
  return (
    <div className=''>
      <div className='p-4 bg-neutral-700'>
        <h1 className='text-2xl font-bold py-4'>Tabs</h1>
        <TabBar
          tabs={['tab 1', 'tab 2', 'tab 3', 'tab 4']}
          selected={parseInt(selectedTab?.value ?? '0')}
        />
      </div>
    </div>
  );
}
