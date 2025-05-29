// src/Pages/Register.tsx
import { useState } from 'react';
import AuthTemplate from '../Components/Auth-template';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro con:', email, password);
    // Aquí iría tu lógica de backend/API
  };

  return (
    <AuthTemplate>
      <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#666] rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#666] rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#00aaff] w-full py-2 font-bold rounded hover:bg-[#0088cc] text-black"
        >
          Register
        </button>
      </form>
    </AuthTemplate>
  );
}
