'use client';
import { useRouter } from 'next/navigation';
import { DeleteBtn } from './DeleteButton';
import { deleteTodo } from '@/helpers/todos';

interface Props {
  id: string;
}

export const DeleteTodo = ({ id }: Props) => {
  const router = useRouter();

  const onClick = async () => {
    deleteTodo(id).then(() => {
      router.refresh();
    });
  };
  return <DeleteBtn text='Delete' onClick={onClick} />;
};
