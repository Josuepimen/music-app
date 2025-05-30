import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import pianoImage from '../assets/piano.jpeg';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/dashboard');
    } else {
      alert('Completa todos los campos, por favor.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white p-4"
      style={{
        backgroundImage: `url(${pianoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="bg-[#1a1a1a]/90 p-8 rounded-lg shadow-2xl w-full max-w-md border border-[#333333]">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Create Account</h1>

        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block text-[#999999] text-xs font-semibold mb-1 uppercase">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#00aaff] border border-[#3a3a3a] text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#999999] text-xs font-semibold mb-1 uppercase">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#00aaff] border border-[#3a3a3a] text-sm"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#00aaff] hover:bg-[#0088cc] transition-colors p-2.5 px-6 rounded-md font-bold text-sm text-black uppercase tracking-wide"
          >
            Register
          </button>
        </form>

        <p className="text-center text-[#999999] mt-6 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-[#00aaff] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
