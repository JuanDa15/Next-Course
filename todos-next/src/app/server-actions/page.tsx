import { DeleteCompletedTodos } from '@/components-server-actions/DeleteCompletedTodos';
import { TodoForm } from '@/components-server-actions/TodoForm';
import { ToDoGrid } from '@/components-server-actions/TodoGrid';
import prisma from '@/lib/prisma';

export default async function ServerActions() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <TodoForm />
      <div className='flex justify-end w-[600px]'>
        <DeleteCompletedTodos />
      </div>
      <ToDoGrid todos={todos} />
    </>
  );
}
