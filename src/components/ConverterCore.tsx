'use client';

import { useState, useEffect } from 'react';
import { convertLettersToNumber, convertNumberToLetters } from '@/utils/converters';

type ConversionMode = 'standard' | 'ascii' | 'phone';

interface ConverterCoreProps {
  mode: ConversionMode;
  showModeInfo?: boolean;
}

export default function ConverterCore({ mode, showModeInfo = false }: ConverterCoreProps) {
  const [input, setInput] = useState('');
  const [letterResult, setLetterResult] = useState('');
  const [numberResult, setNumberResult] = useState('');
  const [error, setError] = useState('');
  const [autoConvert, setAutoConvert] = useState(true);
  const [inputStats, setInputStats] = useState({ chars: 0, bytes: 0 });
  const [outputStats, setOutputStats] = useState({ chars: 0, bytes: 0 });

  useEffect(() => {
    if (!input) {
      setLetterResult('');
      setNumberResult('');
      setError('');
      setInputStats({ chars: 0, bytes: 0 });
      setOutputStats({ chars: 0, bytes: 0 });
      return;
    }

    setInputStats({
      chars: input.length,
      bytes: new Blob([input]).size
    });

    if (autoConvert) {
      try {
        setError('');
        const isNumberInput = /^[\d\s,.-]+$/.test(input.trim());

        if (isNumberInput) {
          const toLetters = convertNumberToLetters(input, mode);
          setNumberResult(toLetters);
          setLetterResult('');
          setOutputStats({
            chars: toLetters.length,
            bytes: new Blob([toLetters]).size
          });
        } else {
          const toNumbers = convertLettersToNumber(input, mode);
          setLetterResult(toNumbers);
          setNumberResult('');
          setOutputStats({
            chars: toNumbers.length,
            bytes: new Blob([toNumbers]).size
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLetterResult('');
        setNumberResult('');
      }
    }
  }, [input, mode, autoConvert]);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInput(e.target?.result as string || '');
      };
      reader.readAsText(file);
    }
  };

  const getModeInfo = () => {
    switch (mode) {
      case 'standard':
        return {
          title: 'Standard (A1Z26)',
          description: 'Convert using A=1, B=2, ... Z=26'
        };
      case 'ascii':
        return {
          title: 'ASCII',
          description: 'Convert using ASCII character codes'
        };
      case 'phone':
        return {
          title: 'Phone Keypad',
          description: 'Convert using phone keypad numbers'
        };
    }
  };

  const modeInfo = getModeInfo();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        {showModeInfo && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900">{modeInfo.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{modeInfo.description}</p>
          </div>
        )}

        {/* Converter Interface */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Input
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setInput('')}
                  className="text-gray-400 hover:text-gray-600"
                  title="Clear input"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <label className="cursor-pointer text-gray-400 hover:text-gray-600">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".txt"
                  />
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </label>
              </div>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-64 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Enter text or numbers to convert..."
            />
            <div className="text-sm text-gray-500">
              {inputStats.chars} characters | {inputStats.bytes} bytes
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Output
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={autoConvert}
                    onChange={(e) => setAutoConvert(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">Auto-convert</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              {error ? (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                  {error}
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Letters to Numbers</span>
                      <button
                        onClick={() => handleCopyToClipboard(letterResult)}
                        className="text-blue-600 hover:text-blue-800"
                        disabled={!letterResult}
                      >
                        Copy
                      </button>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md font-mono text-sm text-gray-900 min-h-[100px]">
                      {letterResult || <span className="text-gray-400">No output</span>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Numbers to Letters</span>
                      <button
                        onClick={() => handleCopyToClipboard(numberResult)}
                        className="text-blue-600 hover:text-blue-800"
                        disabled={!numberResult}
                      >
                        Copy
                      </button>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md font-mono text-sm text-gray-900 min-h-[100px]">
                      {numberResult || <span className="text-gray-400">No output</span>}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="text-sm text-gray-500">
              {outputStats.chars} characters | {outputStats.bytes} bytes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
