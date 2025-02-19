import { signIn } from '@/auth/auth';

export default function SignIn() {
  return (
    <ul>
      <li>
        <form
          action={async () => {
            'use server';
            await signIn('github');
          }}
        >
          <button type='submit'>Signin with GitHub</button>
        </form>
      </li>
      <li>
        <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          <button type='submit'>Signin with Google</button>
        </form>
      </li>
    </ul>
  );
}
