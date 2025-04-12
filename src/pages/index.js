import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Sawariyaji!</h1>
      <Link href="/login">Login</Link> | <Link href="/signup">Sign Up</Link>
    </div>
  );
}
