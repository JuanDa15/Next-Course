import { auth } from '@/auth/auth';
import { DeleteCompletedTodos } from '@/components-server-actions/DeleteCompletedTodos';
import { TodoForm } from '@/components-server-actions/TodoForm';
import { ToDoGrid } from '@/components-server-actions/TodoGrid';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function ServerActions() {
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
