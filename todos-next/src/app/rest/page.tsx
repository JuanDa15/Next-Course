import { DeleteCompletedTodos } from '@/components/DeleteCompletedTodos';
import { TodoForm } from '@/components/TodoForm';
import { ToDoGrid } from '@/components/TodoGrid';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rest TODOS',
  description: 'Todos using Rest',
};

export default async function RestTodos() {
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
