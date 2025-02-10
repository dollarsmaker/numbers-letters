'use client';

import { useState, useEffect } from 'react';
import { convertLettersToNumber, convertNumberToLetters } from '@/utils/converters';

interface DemoExample {
  input: string;
  description: string;
  output?: {
    toNumbers?: string;
    toLetters?: string;
  };
}

const examples: Record<string, DemoExample[]> = {
  standard: [
    { input: 'ABC', description: 'Letters to numbers: A=1, B=2, C=3' },
    { input: '1 2 3', description: 'Numbers to letters: 1=A, 2=B, 3=C' },
    { input: 'HELLO', description: 'Multiple letters: H=8, E=5, L=12, etc.' },
  ],
  ascii: [
    { input: 'Hi!', description: 'Text with punctuation' },
    { input: '72 73', description: 'ASCII codes for "Hi"' },
    { input: '32 64 35', description: 'Space, @, and # symbols' },
  ],
  phone: [
    { input: 'HELLO', description: 'Phone keypad: H=4, E=3, L=5, L=5, O=6' },
    { input: '43556', description: 'Numbers to letters on phone keypad' },
    { input: '1-800-HELP', description: 'Common phone number format' },
  ],
};

export default function DemoSection({ mode }: { mode: 'standard' | 'ascii' | 'phone' }) {
  const [currentExample, setCurrentExample] = useState(0);
  const [result, setResult] = useState({ toNumbers: '', toLetters: '' });

  useEffect(() => {
    setCurrentExample(0);
  }, [mode]);

  useEffect(() => {
    const example = examples[mode][currentExample];
    try {
      const isNumberInput = /^[\d\s,.-]+$/.test(example.input.trim());
      if (isNumberInput) {
        setResult({
          toNumbers: '',
          toLetters: convertNumberToLetters(example.input, mode)
        });
      } else {
        setResult({
          toNumbers: convertLettersToNumber(example.input, mode),
          toLetters: ''
        });
      }
    } catch {
      setResult({ toNumbers: 'Error', toLetters: 'Error' });
    }
  }, [currentExample, mode]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-500">Example {currentExample + 1}/{examples[mode].length}:</span>
            <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
              {examples[mode][currentExample].input}
            </code>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {examples[mode][currentExample].description}
          </p>
        </div>
        <button
          onClick={() => setCurrentExample((current) => (current + 1) % examples[mode].length)}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          Next
          <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {result.toNumbers && (
          <div className="space-y-1">
            <div className="text-xs font-medium text-gray-500">To Numbers:</div>
            <div className="font-mono text-sm bg-blue-50 text-blue-700 p-2 rounded">
              {result.toNumbers}
            </div>
          </div>
        )}
        {result.toLetters && (
          <div className="space-y-1">
            <div className="text-xs font-medium text-gray-500">To Letters:</div>
            <div className="font-mono text-sm bg-green-50 text-green-700 p-2 rounded">
              {result.toLetters}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
