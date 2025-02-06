import { SideBarItem } from './SideBarItem';

const items = [
  {
    href: '/rest',
    text: 'Rest TODOS',
  },
  {
    href: '/server-actions',
    text: 'Server Actions Todos',
  },
];

export const Sidebar = () => {
  return (
    <ul className='min-w-[200px] bg-zinc-900 flex flex-col'>
      {items.map((item) => (
        <SideBarItem key={item.href} {...item} />
      ))}
    </ul>
  );
};
