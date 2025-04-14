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
      console.error(err); // now err is used
      setMsg('Invalid credentials');
    }
    
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <center><h1 className="text-xl font-bold mb-4">Login</h1></center>
      <InputField label="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <InputField label="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
      {msg && <p className="mt-4 text-red-500">{msg}</p>}
    </div>
  );
}
