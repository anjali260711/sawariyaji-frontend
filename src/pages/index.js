import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login or any default page
    router.push('/login');
  }, []);

  return <p>Redirecting...</p>;
}
