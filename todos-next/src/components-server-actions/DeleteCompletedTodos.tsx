'use client';

import { deleteCompletedTodos } from '@/actions/todo-actions';
import { DeleteBtn } from '@/components/DeleteButton';
import { getSession } from 'next-auth/react';

export const DeleteCompletedTodos = () => {
  const onClick = async () => {
    const session = await getSession();
    if (!session) return;
    await deleteCompletedTodos(session.user?.id as string);
  };
  return <DeleteBtn text='Delete Completed' onClick={onClick} />;
};
