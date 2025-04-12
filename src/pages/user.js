import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function UserPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
    setName('User'); // Replace with real name from API if needed
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }} // 👈 your image
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-xl text-center">
       <center> <h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1>
       <h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold"> {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1><h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1>
       <h1 className="text-3xl font-bold">Welcome, {name} 🎉</h1>
      </center>

      </div>
    </div>
  );
}
