'use client';

import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  action: () => void;
  className?: string;
}

export const IconButton = ({ children, action, className = '' }: Props) => {
  return (
    <button
      className={`p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 active:bg-gray-300 transition-all duration-300 ${className}`}
      type='button'
      onClick={action}
    >
      {children}
    </button>
  );
};
