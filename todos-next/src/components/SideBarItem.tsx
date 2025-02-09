'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideBarItem = ({ href, text }: { href: string; text: string }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li
      className={`hover:bg-blue-700 hover:text-white hover:underline transition-all ${
        isActive ? 'bg-blue-700 text-white font-semibold' : ''
      }`}
    >
      <Link className='px-2 py-4 inline-block w-full h-full' href={href}>
        {text}
      </Link>
    </li>
  );
};
