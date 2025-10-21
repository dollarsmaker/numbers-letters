'use client';

import Link from 'next/link';

interface ModeSwitcherProps {
  mode: string;
  onModeChange: (mode: 'standard' | 'ascii' | 'phone') => void;
}

const modes = [
  {
    id: 'standard',
    icon: '🔤',
    label: 'Standard (A1Z26)',
    description: 'Convert using A=1, B=2, ... Z=26',
    link: '/a1z26-converter'
  },
  {
    id: 'ascii',
    icon: '💻',
    label: 'ASCII',
    description: 'Convert using ASCII character codes',
    link: '/ascii-converter'
  },
  {
    id: 'phone',
    icon: '📱',
    label: 'Phone Keypad',
    description: 'Convert using phone keypad numbers',
    link: '/phone-keypad-converter'
  },
];

export default function ModeSwitcher({ mode, onModeChange }: ModeSwitcherProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {modes.map((m) => (
        <div key={m.id} className="flex-1">
          <button
            onClick={() => onModeChange(m.id as 'standard' | 'ascii' | 'phone')}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              mode === m.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-start gap-2">
              <span className="text-xl">{m.icon}</span>
              <div className="flex-1">
                <div className={`font-medium leading-none ${
                  mode === m.id ? 'text-blue-700' : 'text-gray-900'
                }`}>
                  {m.label}
                </div>
                <div className="text-sm text-gray-500 mt-1 leading-tight">{m.description}</div>
              </div>
            </div>
          </button>
          <Link
            href={m.link}
            className="block mt-2 text-center text-xs text-blue-600 hover:text-blue-800 hover:underline"
          >
            View dedicated page →
          </Link>
        </div>
      ))}
    </div>
  );
}
