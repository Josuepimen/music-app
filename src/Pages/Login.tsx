import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter, FaSpotify, FaApple } from 'react-icons/fa';

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
        backgroundImage: `url('URL_DE_TU_IMAGEN_DE_FONDO')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-2xl w-full max-w-md border border-[#333333]">
        {/* Monstercat Logo Placeholder */}
        <div className="flex justify-center mb-6"> {/* Espacio reducido */}
          {/* Aquí puedes colocar tu SVG o componente de imagen para el logo de Monstercat */}
          <img src="URL_DEL_LOGO_MONSTERCAT" alt="Monstercat Logo" className="h-14 w-auto" /> {/* Altura reducida */}
        </div>

        <h1 className="text-2xl font-normal mb-1 text-center text-[#e0e0e0]"> {/* Tamaño y peso de fuente ajustados */}
          SIGN IN TO
        </h1>
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white"> {/* Tamaño ajustado */}
          MONSTERCAT
        </h1>

        <p className="text-center text-[#999999] mb-6 text-sm"> 
          Don't have an account?{' '}
          <a href="#" className="text-[#00aaff] hover:underline">
            Create an account
          </a>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4"> 
          <div>
            <label htmlFor="email" className="block text-[#999999] text-xs font-semibold mb-1 uppercase"> {/* Espacio reducido */}
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#00aaff] border border-[#3a3a3a] text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#999999] text-xs font-semibold mb-1 uppercase"> {/* Espacio reducido */}
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#00aaff] border border-[#3a3a3a] text-sm"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] cursor-pointer">
                &#x1F441; 
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3"> 
            <a href="#" className="text-[#999999] text-xs hover:underline">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="bg-[#00aaff] hover:bg-[#0088cc] transition-colors p-2.5 px-6 rounded-md font-bold text-sm text-black uppercase tracking-wide" 
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center my-6"> {/* Espacio reducido */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#333333]"></div>
          </div>
          <span className="relative z-10 bg-[#1a1a1a] px-3 text-[#999999] uppercase text-xs font-semibold"> {/* Padding horizontal reducido */}
            Or Sign In With
          </span>
        </div>

        <div className="flex justify-center space-x-2"> {/* Espacio reducido */}
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors border border-[#3a3a3a]"> {/* Tamaño reducido */}
            <FaFacebookF size={16} className="text-[#cccccc]" /> 
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors border border-[#3a3a3a]">
            <FaGoogle size={16} className="text-[#cccccc]" />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors border border-[#3a3a3a]">
            <FaTwitter size={16} className="text-[#cccccc]" />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors border border-[#3a3a3a]">
            <FaSpotify size={16} className="text-[#cccccc]" />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors border border-[#3a3a3a]">
            <FaApple size={16} className="text-[#cccccc]" />
          </button>
        </div>
      </div>
    </div>
  );
}