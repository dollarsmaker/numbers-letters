'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModeSwitcher from '@/components/ModeSwitcher';
import DemoSection from '@/components/DemoSection';
import { useState, useEffect } from 'react';
import { convertLettersToNumber, convertNumberToLetters } from '@/utils/converters';

type ConversionMode = 'standard' | 'ascii' | 'phone';

export default function Home() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<ConversionMode>('standard');
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
        // 检查输入是否主要是数字
        const isNumberInput = /^[\d\s,.-]+$/.test(input.trim());
        
        if (isNumberInput) {
          // 如果输入主要是数字，只做数字到字母的转换
          const toLetters = convertNumberToLetters(input, mode);
          setNumberResult(toLetters);
          setLetterResult('');
          setOutputStats({
            chars: toLetters.length,
            bytes: new Blob([toLetters]).size
          });
        } else {
          // 如果输入包含字母，只做字母到数字的转换
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with SEO-optimized content */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
              Numbers to Letters Converter
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl text-center">
              Convert between numbers and letters instantly. Our free online numbers to letters converter 
              supports multiple formats including standard A1Z26, ASCII codes, and phone keypad notation.
            </p>
          </div>
        </div>

        {/* Main Converter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              {/* Mode Selection */}
              <ModeSwitcher mode={mode} onModeChange={setMode} />
              
              {/* Converter Interface */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                    className="w-full h-64 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                            >
                              Copy
                            </button>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-md font-mono text-sm">
                            {letterResult || 'No output'}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Numbers to Letters</span>
                            <button
                              onClick={() => handleCopyToClipboard(numberResult)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Copy
                            </button>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-md font-mono text-sm">
                            {numberResult || 'No output'}
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

          {/* Reference Table */}
          <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reference Table</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                {mode === 'standard' && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-sm">
                    {Array.from({ length: 26 }, (_, i) => (
                      <div key={i} className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                        <span className="font-medium">{String.fromCharCode(65 + i)}</span>
                        <span className="text-gray-400 mx-1">=</span>
                        <span className="font-mono">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                )}
                {mode === 'ascii' && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-sm">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((char) => (
                      <div key={char} className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                        <span className="font-medium">{char}</span>
                        <span className="text-gray-400 mx-1">=</span>
                        <span className="font-mono">{char.charCodeAt(0)}</span>
                      </div>
                    ))}
                  </div>
                )}
                {mode === 'phone' && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 text-sm">
                    {[
                      { key: '2', value: 'ABC' },
                      { key: '3', value: 'DEF' },
                      { key: '4', value: 'GHI' },
                      { key: '5', value: 'JKL' },
                      { key: '6', value: 'MNO' },
                      { key: '7', value: 'PQRS' },
                      { key: '8', value: 'TUV' },
                      { key: '9', value: 'WXYZ' },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                        <span className="font-medium">{item.key}</span>
                        <span className="text-gray-400 mx-1">=</span>
                        <span className="font-mono">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Examples Section */}
          <section id="examples" className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Standard Mode</h3>
                  <DemoSection mode="standard" />
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">ASCII Mode</h3>
                  <DemoSection mode="ascii" />
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Phone Mode</h3>
                  <DemoSection mode="phone" />
                </div>
              </div>
            </div>
          </section>

          {/* Feature Cards */}
          <div id="features" className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Conversion</h3>
              <p className="text-gray-600">Instantly see your conversion results as you type, with support for multiple formats.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">File Upload</h3>
              <p className="text-gray-600">Process large text files with our batch conversion feature. Support for .txt files.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Copy & Share</h3>
              <p className="text-gray-600">Easily copy results to clipboard and share with others. Perfect for collaboration.</p>
            </div>
          </div>

           {/* Content Sections with Visual Elements */}
           <div className="mt-16 space-y-16">
              <section className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Convert Numbers to Letters</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Our numbers to letters converter is a versatile tool that helps you convert between 
                      different number and letter formats. Whether you need to convert numbers to letters 
                      for coding projects, puzzle solving, or educational purposes, our converter provides 
                      quick and accurate results.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-700">
                        <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Support for multiple conversion modes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Real-time conversion results
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Easy to use interface
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-8 lg:p-12">
                    <div className="prose prose-blue max-w-none">
                      <h3>Multiple Conversion Modes</h3>
                      <ul>
                        <li>
                          <strong>Standard (A1Z26):</strong> Convert letters to their position in the alphabet 
                          (A=1, B=2, ..., Z=26) and vice versa.
                        </li>
                        <li>
                          <strong>ASCII Codes:</strong> Convert text to ASCII character codes and back.
                        </li>
                        <li>
                          <strong>Phone Keypad:</strong> Convert between letters and phone keypad numbers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                  <div className="bg-gray-50 p-8 lg:p-12 lg:order-2">
                    <div className="prose prose-blue max-w-none">
                      <h3>Common Uses</h3>
                      <ul>
                        <li>Cryptography and code breaking</li>
                        <li>Educational activities and math games</li>
                        <li>Programming and development tasks</li>
                        <li>Phone number memorization</li>
                        <li>Puzzle creation and solving</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 lg:order-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Features and Applications</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Our numbers to letters converter is designed to be versatile and user-friendly,
                      making it perfect for a wide range of applications. From educational purposes
                      to professional use, our tool provides the features you need.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-700">
                        <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                          1
                        </span>
                        <span>Select your conversion mode</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                          2
                        </span>
                        <span>Enter your input text or numbers</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                          3
                        </span>
                        <span>Get instant conversion results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
