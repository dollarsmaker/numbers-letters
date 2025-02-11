'use client';

import { useEffect, useState } from 'react';
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
    { input: 'HELLO', description: 'Multiple letters: H=8, E=5, etc.' },
  ],
  ascii: [
    { input: 'ABC', description: 'Convert text to ASCII codes' },
    { input: '65 66 67', description: 'Convert ASCII codes to text' },
    { input: '72 73 33', description: 'ASCII codes for "Hi!"' },
  ],
  phone: [
    { input: 'HI', description: 'H=44 (press twice), I=444' },
    { input: '44 444', description: 'Phone keypad: 44=H, 444=I' },
    { input: '22 2 8', description: 'Phone keypad: B A T (22=B, 2=A, 8=T)' },
  ],
};

type DemoSectionProps = {
  mode: 'standard' | 'ascii' | 'phone';
};

export default function DemoSection({ mode }: DemoSectionProps) {
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
        const lettersResult = convertNumberToLetters(example.input, mode);
        setResult({
          toNumbers: '',
          toLetters: lettersResult
        });
      } else {
        const numbersResult = convertLettersToNumber(example.input, mode);
        setResult({
          toNumbers: numbersResult,
          toLetters: ''
        });
      }
    } catch {
      setResult({ toNumbers: 'Error', toLetters: 'Error' });
    }
  }, [currentExample, mode]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-500">Example {currentExample + 1}/{examples[mode].length}</span>
            <code className="px-2 py-0.5 bg-white border border-gray-200 rounded text-sm font-mono text-blue-600">
              {examples[mode][currentExample].input}
            </code>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {examples[mode][currentExample].description}
          </p>
        </div>
        <button
          onClick={() => setCurrentExample((current) => (current + 1) % examples[mode].length)}
          className="flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Next
          <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {result.toNumbers && (
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="text-sm font-medium text-gray-500 mb-1">To Numbers:</div>
            <div className="font-mono text-sm bg-blue-50 text-blue-700 p-2 rounded">
              {result.toNumbers}
            </div>
          </div>
        )}
        {result.toLetters && (
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="text-sm font-medium text-gray-500 mb-1">To Letters:</div>
            <div className="font-mono text-sm bg-green-50 text-green-700 p-2 rounded">
              {result.toLetters}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
