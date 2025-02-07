import { Todo as TodoType } from '@prisma/client';
import { TodoStatus } from './TodoStatus';
import { DeleteTodo } from './DeleteTodo';

interface Props {
  todo: TodoType;
}

export const TodoComponent = ({ todo }: Props) => {
  return (
    <li
      className='px-4 py-2 bg-neutral-700 w-[600px] rounded-md '
      key={todo.id}
    >
      <div className='flex flex-row'>
        <div className='flex-1'>
          <small>{todo.title}</small>
          <p className='text-neutral-400'>
            <b>{todo.description}</b>
          </p>
        </div>
        <div className='flex items-center space-x-2'>
          <DeleteTodo id={todo.id} />
        </div>
      </div>
      <div className='flex justify-end gap-4'>
        <TodoStatus todo={{ ...todo }} />
        <small className='text-neutral-400 text-xs'>
          {todo.updatedAt.toDateString()}
        </small>
      </div>
    </li>
  );
};
