import { JSX } from 'react';

export const HeartIcon = ({
  fill = 'none',
  stroke = 'currentColor',
}): JSX.Element => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={fill}
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
    </svg>
  );
};
