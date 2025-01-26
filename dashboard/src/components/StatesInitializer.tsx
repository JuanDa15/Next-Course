'use client';

import { useAppDispatch } from '@src/store';
import { initializeFavorites } from '@src/store/pokemon-slice';
import { PropsWithChildren, useEffect } from 'react';

export default function StatesInitializer({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);
  return <>{children}</>;
}
