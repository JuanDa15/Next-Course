'use client';

import { setCookie } from 'cookies-next/client';
import { useState } from 'react';

interface Props {
  tabs: string[];
  selected: number;
}

export const TabBar = ({ tabs = [], selected = 0 }: Props) => {
  const [selectedTab, setSelectedTab] = useState(selected);

  const handleClick = (index: number) => {
    setSelectedTab(index);
    setCookie('selectedTab', index.toString(), {
      httpOnly: false,
    });
  };

  return (
    <div className='inline-flex justify-start rounded-lg shadow-md bg-zinc-800 p-2'>
      {tabs.map((tab, index) => (
        <div
          key={`tab_${index}`}
          className={`cursor-pointer   hover:bg-blue-700 px-4 py-2 rounded text-white inline-block transition-all duration-300 ${
            selectedTab === index ? 'bg-blue-700' : ''
          }`}
          onClick={() => handleClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};
