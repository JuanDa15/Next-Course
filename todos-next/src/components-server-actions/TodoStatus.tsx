'use client';
import { toggleTodoAction } from '@/actions/todo-actions';
import { Todo } from '@prisma/client';
import { startTransition, useOptimistic } from 'react';

interface Props {
  todo: Todo;
}

export const TodoStatus = ({ todo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      done: newCompleteValue,
    })
  );
  const onToggleTodo = () => {
    try {
      startTransition(async () => {
        toggleTodoOptimistic(!todoOptimistic.done);
        await toggleTodoAction(todoOptimistic.id, {
          ...todoOptimistic,
          done: !todoOptimistic.done,
        });
      });
    } catch (error: any) {
      startTransition(() => {
        toggleTodoOptimistic(todoOptimistic.done);
      });
    }
  };
  return (
    <p
      onClick={onToggleTodo}
      className={`h-auto flex-1 rounded-full cursor-pointer transition duration-300 ${
        todoOptimistic.done
          ? 'bg-green-500/40 hover:bg-green-500 active:bg-yellow-500'
          : 'bg-yellow-500/40 hover:bg-yellow-500 active:bg-green-500'
      }`}
    ></p>
  );
};
