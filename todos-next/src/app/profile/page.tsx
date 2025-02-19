'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          <h2 className='text-xl font-semibold'>Loading...</h2>
          <p className='text-gray-500'>
            Please wait while we load your profile.
          </p>
        </div>
      </div>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-red-600'>Access Denied</h2>
          <p className='text-gray-500'>
            You do not have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='p-4'>
      <div className='bg-gray-700 p-3 rounded-md'>
        <div className='flex items-center space-x-4'>
          <Image
            src={session!.user!.image!}
            alt='Profile'
            width={64}
            height={64}
            className='w-16 h-16 rounded-full'
          />
          <div className='flex flex-col'>
            <p className='text-white text-lg font-semibold'>
              {session!.user!.name}
            </p>
            <p>
              <small className='text-white/60'>
                <b>Expires: </b>
                {Intl.DateTimeFormat('es-CO', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                }).format(new Date(session!.expires))}
              </small>
            </p>
          </div>
        </div>

        <code>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </code>
      </div>
    </div>
  );
}
