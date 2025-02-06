import Link from 'next/link';

export const SideBarItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <li className=' hover:bg-zinc-950 hover:text-white hover:underline transition-all'>
      <Link className='px-2 py-4 inline-block w-full h-full' href={href}>
        {text}
      </Link>
    </li>
  );
};
