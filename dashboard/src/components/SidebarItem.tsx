'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  text: string;
  href: string;
  icon: JSX.Element;
}

export const SidebarItem = ({ text, href, icon }: Props): JSX.Element => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li>
      <Link href={href} aria-current='page'>
        <button
          className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize text-white ${
            isActive && 'bg-gradient-to-tr from-blue-600 to-blue-400 '
          }`}
          type='button'
        >
          {icon}
          <p className='block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize'>
            {text}
          </p>
        </button>
      </Link>
    </li>
  );
};
