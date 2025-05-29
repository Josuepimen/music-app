// src/Pages/ResetPassword.tsx
import { useState } from 'react';
import AuthTemplate from '../Components/Auth-template';
import { useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [params] = useSearchParams();
  const token = params.get('token');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí envías el `token` y `password` a tu backend
    alert('Contraseña actualizada exitosamente');
  };

  return (
    <AuthTemplate>
      <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#666] rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#666] rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#00aaff] w-full py-2 font-bold rounded hover:bg-[#0088cc] text-black"
        >
          Reset Password
        </button>
      </form>
    </AuthTemplate>
  );
}
