import React, { useState, type FC } from 'react';
import { Menu, X, ChevronDown, Instagram, Twitter, Twitch, Facebook, Youtube, Disc } from 'lucide-react';
import logo from '../assets/Logo.png';

interface NavItem {
  label: string;
  submenu?: string[];
}

const COLORS = {
  bg: '#000000',
  text: '#fdfdfd',
  primary: '#1e90ff',
  subtext: '#383838',
};

const COMMON_BTN = 'flex items-center justify-between w-full font-medium transition-colors hover:text-[var(--primary)]';

const navItems: NavItem[] = [
  { label: 'Music', submenu: ['Our Music', 'Instinct', 'Uncaged', 'Silk'] },
  { label: 'Artist' },
  {
    label: 'About',
    submenu: ['About Music', 'Diversity & Inclusion', 'Code of Ethics', 'Environmental', 'Contact Us', 'Careers'],
  },
  { label: 'New' },
  { label: 'Events', submenu: ['Music Events', 'Experience', 'Upcoming Events'] },
  { label: 'Programmin', submenu: ['MusicTV', 'Call of the Wild', 'Silk Showcase'] },
  { label: 'Gold' },
  { label: 'Partners' },
  { label: 'Press' },
  { label: 'Player' },
  { label: 'Shop' },
  { label: 'Lost Civilization' },
];

// Mapeo para iconos de redes sociales con Lucide
const socialIconMap: Record<string, FC<{ size?: number; color?: string }>> = {
  instagram: Instagram,
  twitter: Twitter,
  twitch: Twitch,
  facebook: Facebook,
  youtube: Youtube,
  discord: Disc,
};

const socialIcons = ['instagram','twitter','twitch','facebook','discord','youtube'];

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const [subs, setSubs] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => setSubs(prev => ({ ...prev, [label]: !prev[label] }));

  return (
    <>
      <div style={{ background: COLORS.bg }} className="w-full flex justify-end p-4">
        <button onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={28} color={COLORS.primary} />
        </button>
      </div>

      {open && (
        <div
          style={{ background: COLORS.bg, color: COLORS.text }}
          className="fixed inset-y-0 right-0 w-96 shadow-lg z-50 flex flex-col"
          role="dialog" aria-modal="true"
        >
          {/* Header */}
          <div className="relative flex items-center p-5 h-28 flex-shrink-0">
            <img src={logo} alt="Logo" className="h-24 object-contain" />
            <button
              onClick={() => setOpen(false)}
              className="ml-auto p-1"
              style={{ color: COLORS.primary }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable content */}
          <div
            className="flex-1 overflow-y-auto px-5 pb-5"
            style={{ scrollbarWidth: 'thin', scrollbarColor: `${COLORS.primary} transparent` }}
          >
            <nav className="flex flex-col gap-5">
              {navItems.map(({ label, submenu }) => (
                <div key={label}>
                  <button
                    onClick={() => submenu && toggle(label)}
                    className={COMMON_BTN}
                    style={{ color: COLORS.text, '--primary': COLORS.primary } as React.CSSProperties}
                    aria-expanded={!!subs[label]}
                  >
                    <span>{label}</span>
                    {submenu && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${subs[label] ? 'rotate-180' : ''}`}
                        color={COLORS.primary}
                      />
                    )}
                  </button>
                  {submenu && subs[label] && (
                    <div className="ml-5 mt-2 flex flex-col gap-2 text-sm" style={{ color: COLORS.subtext }}>
                      {submenu.map(s => (
                        <button key={s} className="text-left hover:text-[var(--primary)] transition-colors">
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Redes sociales con iconos */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              {socialIcons.map(name => {
                const Icon = socialIconMap[name];
                return (
                  <div
                    key={name}
                    className="bg-[var(--text)] text-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-[var(--primary)] hover:text-white transition-colors"
                    style={{ '--text': COLORS.text, '--primary': COLORS.primary } as React.CSSProperties}
                    aria-label={name}
                  >
                    {Icon ? <Icon size={18} /> : name}
                  </div>
                );
              })}
            </div>

            {/* Sign in / Sign up */}
            <div className="mt-6 text-center text-sm" style={{ color: COLORS.primary }}>
              <a href="#" className="hover:underline">Sign In</a>
              <a href="#" className="ml-4 hover:underline">Sign Up</a>
            </div>
          </div>

          <style>{`
            div::-webkit-scrollbar {
              width: 8px;
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
            div::-webkit-scrollbar-thumb {
              background-color: ${COLORS.primary};
              border-radius: 10px;
              border: 2px solid transparent;
              background-clip: content-box;
            }
            div::-webkit-scrollbar-thumb:hover {
              background-color: #0f6acc;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Navbar;
