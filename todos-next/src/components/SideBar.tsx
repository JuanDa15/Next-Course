import { auth } from '@/auth/auth';
import { SideBarLogOut } from './LogOut';
import { SideBarItem } from './SideBarItem';

const items = [
  {
    href: '/dashboard',
    text: 'Home',
  },
  {
    href: '/rest',
    text: 'Rest TODOS',
  },
  {
    href: '/server-actions',
    text: 'Server Actions Todos',
  },
  {
    href: '/cookies',
    text: 'Cookies',
  },
  {
    href: '/products',
    text: 'Products',
  },
  {
    href: '/profile',
    text: 'Profile',
  },
];

export const Sidebar = async () => {
  const session = await auth();
  return (
    <ul className='min-w-[200px] bg-neutral-600 flex flex-col'>
      {items.map((item) => (
        <SideBarItem key={item.href} {...item} />
      ))}
      {session && <SideBarLogOut />}
    </ul>
  );
};
