import { auth } from '@/auth/auth';
import { DeleteCompletedTodos } from '@/components/DeleteCompletedTodos';
import { TodoForm } from '@/components/TodoForm';
import { ToDoGrid } from '@/components/TodoGrid';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Rest TODOS',
  description: 'Todos using Rest',
};

export default async function RestTodos() {
  const session = await auth();

  if (!session) {
    return redirect('/api/auth/signin');
  }

  const todos = await prisma.todo.findMany({
    where: {
      userId: session?.user?.id,
    },
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
