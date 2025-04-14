import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <center><h1>Welcome to RTU KOTA!</h1></center>
      <Link href="/login">Login</Link> | <Link href="/signup">Sign Up</Link>
    </div>
  );
}
