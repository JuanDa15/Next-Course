import { Todo } from '@prisma/client';
import { TodoComponent } from './TodoComponent';

interface Props {
  todos: Todo[];
}

export const ToDoGrid = ({ todos = [] }: Props) => {
  if (todos.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-full p-4 bg-neutral-800'>
        <p className='text-center text-neutral-400 mt-4 text-lg'>
          No todos found
        </p>
        <p className='text-center text-neutral-500 mt-2'>
          You can add new todos by clicking the{' '}
          <span className='text-blue-400'>Add Todo</span> button.
        </p>
      </div>
    );
  }

  return (
    <ul className='flex flex-col items-start gap-2 p-4'>
      {todos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
