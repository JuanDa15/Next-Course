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
];

export const Sidebar = () => {
  return (
    <ul className='min-w-[200px] bg-neutral-600 flex flex-col'>
      {items.map((item) => (
        <SideBarItem key={item.href} {...item} />
      ))}
      <SideBarLogOut />
    </ul>
  );
};
