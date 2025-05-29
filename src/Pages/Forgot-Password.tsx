
import { useState } from 'react';
import AuthTemplate from '../Components/Auth-template';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de API que envía correo
    alert(`Se ha enviado un enlace de recuperación a ${email}`);
  };

  return (
    <AuthTemplate>
      <h2 className="text-2xl font-bold text-center mb-4">Forgot Password?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#666] rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#00aaff] w-full py-2 font-bold rounded hover:bg-[#0088cc] text-black"
        >
          Send Recovery Link
        </button>
      </form>
    </AuthTemplate>
  );
}
