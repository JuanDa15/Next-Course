'use client';

import { createTodoAction } from '@/actions/todo-actions';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export const TodoForm = () => {
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    ) as { description: string; title: string };

    const session = await getSession();
    await createTodoAction({ ...value, userId: session?.user?.id as string });
    (e.target as HTMLFormElement).reset();
    router.refresh();
  };

  return (
    <form
      className='w-[600px] p-4 flex flex-row gap-4 ml-4'
      onSubmit={onSubmit}
    >
      <div className='w-full flex flex-col gap-2'>
        <input
          type='text'
          placeholder='Title'
          name='title'
          required
          className='p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600'
          minLength={3}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          required
          className='p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600'
          minLength={3}
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Add
      </button>
    </form>
  );
};
