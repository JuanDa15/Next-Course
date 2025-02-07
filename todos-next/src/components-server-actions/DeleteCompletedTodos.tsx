'use client';

import { deleteCompletedTodos } from '@/actions/todo-actions';
import { DeleteBtn } from '@/components/DeleteButton';

export const DeleteCompletedTodos = () => {
  const onClick = async () => {
    await deleteCompletedTodos();
  };
  return <DeleteBtn text='Delete Completed' onClick={onClick} />;
};
