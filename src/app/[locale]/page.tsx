'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { convertNumberToLetters, convertLettersToNumber } from '@/utils/converters';

export default function HomePage() {
  const t = useTranslations('Home');
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'standard' | 'ascii' | 'phone'>('standard');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      setError('');
      // 自动检测输入类型
      const isNumberInput = /^\d+$/.test(input);
      const conversionResult = isNumberInput 
        ? convertNumberToLetters(input, mode)
        : convertLettersToNumber(input, mode);
      setResult(conversionResult);
    } catch (err) {
      setResult('');
      setError(err instanceof Error ? err.message : t('errorInvalid'));
    }
  };

  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      
      {/* 模式选择 */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {['standard', 'ascii', 'phone'].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m as any)}
            className={`p-2 rounded ${
              mode === m 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {t(`${m}Mode`)}
          </button>
        ))}
      </div>

      {/* 输入/输出区域 */}
      <div className="space-y-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          placeholder={t('inputPlaceholder')}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          {t('convertBtn')}
        </button>

        {error && (
          <div className="text-red-600 p-3 bg-red-50 rounded">{error}</div>
        )}

        {result && (
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold mb-2">转换结果：</h3>
            <code className="text-lg break-all">{result}</code>
          </div>
        )}
      </div>
    </main>
  );
}