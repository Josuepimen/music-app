import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pianoImage from '../assets/piano.jpeg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const navigate = useNavigate();

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6 dígitos
  };

  const handleSendCode = async () => {
    if (!email) return alert('Por favor ingresa tu correo electrónico.');

    const codeGenerated = generateCode();
    setSentCode(codeGenerated);
    setShowCodeInput(true);

    // Aquí se conectará la API de envío de correo
    const res = await fetch('http://localhost:3001/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code: codeGenerated }),
    });

    const data = await res.json();
    if (data.success) {
      alert('Código enviado al correo.');
    } else {
      alert('Error al enviar el código.');
    }
  };

  const handleVerifyCode = () => {
    if (code === sentCode) {
      alert('Código correcto. Redirigiendo...');
      navigate('/reset-password', { state: { email } });
    } else {
      alert('Código incorrecto');
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
      <div className="bg-[#1a1a1a]/90 p-8 rounded-lg shadow-2xl w-full max-w-sm border border-[#333333]">
        <h2 className="text-xl font-semibold mb-6 text-center">Recuperar Contraseña</h2>

        <input
          type="email"
          placeholder="Ingresa tu email"
          className="w-full mb-4 p-3 rounded bg-[#2a2a2a] text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!showCodeInput ? (
          <button onClick={handleSendCode} className="w-full bg-[#00aaff] p-2 rounded hover:bg-[#0088cc] transition-colors">
            Enviar Código
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Ingresa el código"
              className="w-full mb-4 p-3 rounded bg-[#2a2a2a] text-white"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleVerifyCode} className="w-full bg-[#00aaff] p-2 rounded hover:bg-[#0088cc] transition-colors">
              Verificar Código
            </button>
          </>
        )}
      </div>
    </div>
  );
}
