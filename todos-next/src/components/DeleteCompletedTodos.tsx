'use client';

import { deleteCompletedTodos } from '@/helpers/todos';
import { DeleteBtn } from './DeleteButton';
import { useRouter } from 'next/navigation';

export const DeleteCompletedTodos = () => {
  const router = useRouter();

  const onClick = async () => {
    deleteCompletedTodos().then(() => {
      router.refresh();
    });
  };

  return <DeleteBtn text='Delete Completed' onClick={onClick} />;
};
