'use client';

interface ModeSwitcherProps {
  mode: string;
  onModeChange: (mode: 'standard' | 'ascii' | 'phone') => void;
}

const modes = [
  {
    id: 'standard',
    icon: '🔤',
    label: 'Standard (A1Z26)',
    description: 'Convert using A=1, B=2, ... Z=26'
  },
  {
    id: 'ascii',
    icon: '💻',
    label: 'ASCII',
    description: 'Convert using ASCII character codes'
  },
  {
    id: 'phone',
    icon: '📱',
    label: 'Phone Keypad',
    description: 'Convert using phone keypad numbers'
  },
];

export default function ModeSwitcher({ mode, onModeChange }: ModeSwitcherProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => onModeChange(m.id as 'standard' | 'ascii' | 'phone')}
          className={`flex-1 p-4 rounded-lg border-2 transition-all text-left ${
            mode === m.id
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-2">
            <span className="text-xl">{m.icon}</span>
            <div>
              <div className="font-medium leading-none">{m.label}</div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">{m.description}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
