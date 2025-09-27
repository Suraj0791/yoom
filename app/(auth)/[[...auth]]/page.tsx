import { SignIn, SignUp } from '@clerk/nextjs';

interface AuthPageProps {
  params: {
    auth?: string[];
  };
}

export default function AuthPage({ params }: AuthPageProps) {
  const authType = params.auth?.[0];

  if (authType === 'sign-up') {
    return (
      <main className="flex h-screen w-full items-center justify-center">
        <SignUp />
      </main>
    );
  }

  // Default to sign-in for any other route or sign-in
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
}