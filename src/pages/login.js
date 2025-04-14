import { useState } from 'react';
import API from '../utils/api';
import { useRouter } from 'next/router';
import InputField from '../components/InputField';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);

      if (res.data.role === 'admin') router.push('/admin');
      else router.push('/user');
    } catch (err) {
      console.error(err);
      setMsg('Invalid credentials');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/login.jpg")', // Make sure bg.jpg is in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md">
        <center><h1 className="text-xl font-bold mb-4 text-black">Login</h1></center>
        <InputField
          label="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <InputField
          label="Password"
          type="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4" onClick={handleLogin}>
          Login
        </button>
        {msg && <p className="mt-4 text-red-500 text-center">{msg}</p>}
      </div>
    </div>
  );
}
