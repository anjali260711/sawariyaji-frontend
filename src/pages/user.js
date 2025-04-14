import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function UserPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
    setName('User'); // You can replace with actual name from API
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-black">Welcome, {name} 🎉</h1>
      </div>
    </div>
  );
}
