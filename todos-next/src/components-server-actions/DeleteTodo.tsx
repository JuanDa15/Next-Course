'use client';
import { DeleteBtn } from '@/components/DeleteButton';
import { deleteTodoAction } from '@/actions/todo-actions';

interface Props {
  id: string;
}

export const DeleteTodo = ({ id }: Props) => {
  const onClick = async () => {
    deleteTodoAction(id).then(() => {});
  };
  return <DeleteBtn text='Delete' onClick={onClick} />;
};
