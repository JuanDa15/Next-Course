'use client';

interface Props {
  onClick: () => void;
  text: string;
}

export const DeleteBtn = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='text-red-500 bg-transparent border-none cursor-pointer font-bold hover:text-red-700 hover:underline'
    >
      {text}
    </button>
  );
};
