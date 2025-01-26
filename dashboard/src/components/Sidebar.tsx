import { JSX } from 'react';
import { SidebarItem } from './SidebarItem';
import Image from 'next/image';
import { HomeIcon } from '../icons/HomeIcon';
import { CalculatorIcon } from '../icons/CalculatorIcon';
import { PokemonIcon } from '../icons/PokemonIcon';

const sidebarItems = [
  {
    text: 'dashboard',
    icon: <HomeIcon />,
    href: '/dashboard',
  },
  {
    text: 'Counter',
    icon: <CalculatorIcon />,
    href: '/dashboard/counter',
  },
  {
    text: 'Pokemons',
    icon: <PokemonIcon />,
    href: '/dashboard/pokemons',
  },
  {
    text: 'Pokemons-ssg',
    icon: <PokemonIcon />,
    href: '/dashboard/pokemons-ssg',
  },
  {
    text: 'Pokemons-ssg-name',
    icon: <PokemonIcon />,
    href: '/dashboard/pokemons-ssg-name',
  },
  {
    text: 'Pokemons-Redux',
    icon: <PokemonIcon />,
    href: '/dashboard/pokemons-redux',
  },
];

export const Sidebar = (): JSX.Element => {
  return (
    <>
      <aside className='bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0'>
        <div className='relative border-b border-white/20'>
          <a className='flex items-center gap-4 py-4 px-2' href='#/'>
            <h6 className='block antialiased tracking-normal font-sans font-semibold leading-relaxed text-white text-2xl'>
              Dashboard
            </h6>
          </a>

          <div className='my-4'>
            <p className='opacity-60'>
              <small>Welcome back</small>
            </p>
            <a href='' className='flex row items-center justify-start gap-4'>
              <Image
                className='w-10 h-10 rounded-full'
                width={40}
                height={40}
                src='https://randomuser.me/api/portraits/thumb/men/75.jpg'
                alt='jhon_doe_profile'
              />
              <b>Jhon doe</b>
            </a>
          </div>
        </div>
        <div className='m-4'>
          <ul className='mb-4 flex flex-col gap-1'>
            {sidebarItems.map(({ text, href, icon }) => (
              <SidebarItem text={text} key={text} href={href} icon={icon} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
