import { signOut } from '@/auth/auth';

export const SideBarLogOut = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({
          redirect: true,
          redirectTo: '/auth',
        });
      }}
    >
      <button
        type='submit'
        className='hover:bg-blue-700 hover:text-white hover:underline transition-all px-2 py-4 inline-block w-full h-full'
      >
        Logout
      </button>
    </form>
  );
};
