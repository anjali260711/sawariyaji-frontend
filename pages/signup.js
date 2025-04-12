import { useState } from 'react';
import API from '../utils/api';
import InputField from '../components/InputField';

export default function Signup() {
  const [form, setForm] = useState({ name: '', rollNumber: '', mobile: '', email: '', branch: '' });
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [msg, setMsg] = useState('');

  const handleSendOTP = async () => {
    try {
      await API.post('/auth/send-otp', { mobile: form.mobile });
      setStep(2);
    } catch (err) {
      setMsg('Error sending OTP');
    }
  };

  const handleVerify = async () => {
    try {
      await API.post('/auth/verify-otp', { ...form, otp });
      setMsg('Signup successful!');
    } catch (err) {
      setMsg('Verification failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">User Signup</h1>
      {step === 1 ? (
        <>
          <InputField label="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
          <InputField label="Roll Number" onChange={e => setForm({ ...form, rollNumber: e.target.value })} />
          <InputField label="Mobile" onChange={e => setForm({ ...form, mobile: e.target.value })} />
          <InputField label="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
          <InputField label="Branch" onChange={e => setForm({ ...form, branch: e.target.value })} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSendOTP}>Send OTP</button>
        </>
      ) : (
        <>
          <InputField label="Enter OTP" onChange={e => setOtp(e.target.value)} />
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleVerify}>Verify OTP</button>
        </>
      )}
      {msg && <p className="mt-4 text-red-500">{msg}</p>}
    </div>
  );
}
