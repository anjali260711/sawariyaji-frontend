// src/pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Sawariyaji!</h1>
      <p>
        <Link href="/login">Go to Login</Link>
      </p>
    </div>
  );
}
