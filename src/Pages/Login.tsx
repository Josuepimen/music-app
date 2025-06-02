import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter, FaSpotify, FaApple } from 'react-icons/fa';
import pianoImage from '../assets/piano.jpeg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/dashboard');
    } else {
      alert('Por favor, completa todos los campos.');
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
      <div className="bg-[#1a1a1a]/90 p-8 rounded-lg shadow-2xl w-full max-w-md border border-[#333333] relative">
        {/* Logo en la parte superior izquierda  */}
        <div className=" top-2 left-2 ">
          <img src="/src/assets/Logo (1).png" alt="Noxis Logo" className="h-12 w-auto" />
        </div>

        <h1 className="text-4xl font-normal mb-1 text-right  text-[#e0e0e0]">
          SIGN IN 
        </h1>


        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block text-[#999999] text-xs font-semibold mb-1 uppercase">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#00aaff] border border-[#3a3a3a] text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#999999] text-xs font-semibold mb-1 uppercase">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#00aaff] border border-[#3a3a3a] text-sm"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] cursor-pointer">
            
              </span>
        <p className="text-center text-[#999999] mb-6 text-sm mt-2">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#00aaff] hover:underline">
            Create an account
          </Link>
        </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <Link to="/forgot-password" className="text-[#999999] text-xs hover:underline">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-[#00aaff] hover:bg-[#0088cc] transition-colors p-2.5 px-6 rounded-md font-bold text-sm text-black uppercase tracking-wide"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#333333]"></div>
          </div>
          <span className="relative z-10 bg-[#1a1a1a] px-3 text-[#999999] uppercase text-xs font-semibold">
            Or Sign In With
          </span>
        </div>

        <div className="flex justify-center space-x-2">
          {[FaFacebookF, FaGoogle, FaTwitter, FaSpotify, FaApple].map((Icon, index) => (
            <button
              key={index}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors border border-[#3a3a3a]"
            >
              <Icon size={16} className="text-[#cccccc]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
