'use client';
import { updateTodo } from '@/helpers/todos';
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface Props {
  todo: Todo;
}

export const TodoStatus = ({ todo }: Props) => {
  const router = useRouter();
  return (
    <p
      onClick={() => {
        updateTodo(todo.id, { ...todo, done: !todo.done }).then(() => {
          router.refresh();
        });
      }}
      className={`h-auto flex-1 rounded-full cursor-pointer transition duration-300 ${
        todo.done
          ? 'bg-green-500/40 hover:bg-green-500 active:bg-yellow-500'
          : 'bg-yellow-500/40 hover:bg-yellow-500 active:bg-green-500'
      }`}
    ></p>
  );
};
