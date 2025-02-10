'use client';

interface ModeSwitcherProps {
  mode: string;
  onModeChange: (mode: 'standard' | 'ascii' | 'phone') => void;
}

const modes = [
  { id: 'standard', icon: '🔤', label: 'Standard' },
  { id: 'ascii', icon: '💻', label: 'ASCII' },
  { id: 'phone', icon: '📱', label: 'Phone' },
];

export default function ModeSwitcher({ mode, onModeChange }: ModeSwitcherProps) {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-white shadow-lg rounded-full py-2 px-1">
        <div className="space-y-4">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => onModeChange(m.id as 'standard' | 'ascii' | 'phone')}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                mode === m.id
                  ? 'bg-blue-500 text-white shadow-md transform scale-110'
                  : 'hover:bg-gray-100'
              }`}
              title={m.label}
            >
              <span className="text-xl">{m.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
