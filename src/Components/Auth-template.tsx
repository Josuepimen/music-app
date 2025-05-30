
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function AuthTemplate({ children }: Props) {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white p-4"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-2xl w-full max-w-md border border-[#333333]">
        <div className="flex justify-center mb-6">
          <img src="/src/assets/Logo.jpeg" alt="Logo" className="h-14 w-auto" />
        </div>
        {children}
      </div>
    </div>
  );
}
