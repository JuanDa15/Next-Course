import { auth } from '@/auth/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function DashboardComponent() {
  const session = await auth();

  if (!session) {
    redirect('/auth');
  }

  return (
    <div className='p-4'>
      <div className='bg-gray-700 p-3 rounded-md'>
        <div className='flex items-center space-x-4'>
          <Image
            src={session.user!.image!}
            alt='Profile'
            width={64}
            height={64}
            className='w-16 h-16 rounded-full'
          />
          <div className='flex flex-col'>
            <p className='text-white text-lg font-semibold'>
              {session.user!.name}
            </p>
            <p>
              <small className='text-white/60'>
                <b>Expires: </b>
                {Intl.DateTimeFormat('es-CO', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                }).format(new Date(session.expires))}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
