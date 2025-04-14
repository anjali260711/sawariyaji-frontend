import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.jpg")', // replace with your image file path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        textAlign: 'center',
        paddingTop: '20%',
      }}
    >
      <h1>Welcome to RTU KOTA!</h1>
      <div style={{ marginTop: '20px' }}>
        <Link href="/login">
          <span style={{ marginRight: '10px', textDecoration: 'underline', cursor: 'pointer' }}>Login</span>
        </Link>
        |
        <Link href="/signup">
          <span style={{ marginLeft: '10px', textDecoration: 'underline', cursor: 'pointer' }}>Sign Up</span>
        </Link>
      </div>
    </div>
  );
}
