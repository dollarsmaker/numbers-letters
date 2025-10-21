import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConverterCore from '@/components/ConverterCore';
import FeedbackButton from '@/components/FeedbackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A1Z26 Converter | Letters to Numbers (A=1, Z=26) - Free Online Tool',
  description: 'Free A1Z26 cipher converter. Convert letters to numbers (A=1, B=2, Z=26) and decode A1Z26 codes instantly. Perfect for puzzles and cryptography.',
  metadataBase: new URL('https://numletter.com'),
  alternates: {
    canonical: 'https://numletter.com/a1z26-converter'
  },
  openGraph: {
    title: 'A1Z26 Converter | Letters to Numbers (A=1, Z=26)',
    description: 'Free A1Z26 cipher converter. Convert letters to numbers (A=1, B=2, Z=26) and decode A1Z26 codes instantly.',
    url: 'https://numletter.com/a1z26-converter',
    siteName: 'NumLetter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A1Z26 Converter | Letters to Numbers (A=1, Z=26)',
    description: 'Free A1Z26 cipher converter. Convert letters to numbers and decode A1Z26 codes instantly.',
  }
};

export default function A1Z26ConverterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
              A1Z26 Cipher Converter
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl text-center">
              Convert letters to numbers using the A1Z26 cipher (A=1, B=2, C=3, ... Z=26).
              Perfect for puzzles, cryptography, and educational purposes.
            </p>
          </div>
        </div>

        {/* Converter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ConverterCore mode="standard" />

          {/* Reference Table */}
          <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">A1Z26 Reference Table</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-sm">
                  {Array.from({ length: 26 }, (_, i) => (
                    <div key={i} className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium text-gray-900">{String.fromCharCode(65 + i)}</span>
                      <span className="text-gray-400 mx-1">=</span>
                      <span className="font-mono text-gray-900">{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What is A1Z26 Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is A1Z26 Cipher?</h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg text-gray-600 mb-4">
                  The A1Z26 cipher is a simple substitution cipher that replaces each letter with its
                  corresponding position in the alphabet. &apos;A&apos; becomes 1, &apos;B&apos; becomes 2, and so on until &apos;Z&apos;
                  which becomes 26.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  This cipher is also known as the &quot;letter-to-number cipher&quot; or &quot;alphabet position cipher.&quot;
                  It&apos;s one of the simplest encryption methods and is often used in puzzles, geocaching,
                  escape rooms, and educational contexts.
                </p>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Examples</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 1: Simple Word</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">HELLO</span>
                    {' → '}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">8 5 12 12 15</span>
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 2: Full Sentence</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">HELLO WORLD</span>
                    {' → '}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">8 5 12 12 15  23 15 18 12 4</span>
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 3: Decoding Numbers</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">3 15 4 5</span>
                    {' → '}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">CODE</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cryptography & Code Breaking</h3>
                    <p className="text-gray-600 mt-1">Decode secret messages and learn basic encryption concepts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Puzzles & Games</h3>
                    <p className="text-gray-600 mt-1">Create and solve puzzles for escape rooms, treasure hunts, and brain teasers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Educational Activities</h3>
                    <p className="text-gray-600 mt-1">Teach children about the alphabet, numbers, and basic coding concepts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Geocaching</h3>
                    <p className="text-gray-600 mt-1">Decode coordinates and clues in geocaching adventures.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use the A1Z26 Converter</h2>
              <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Converting Letters to Numbers (Encoding)</h3>
                <ol className="space-y-3 mb-6">
                  <li className="text-gray-700">
                    <strong>Enter your text:</strong> Type or paste any text containing letters (A-Z) into the input box.
                  </li>
                  <li className="text-gray-700">
                    <strong>Automatic conversion:</strong> The A1Z26 converter will automatically transform each letter to its corresponding number (A=1, B=2, C=3, through Z=26).
                  </li>
                  <li className="text-gray-700">
                    <strong>Copy your result:</strong> Click the &quot;Copy&quot; button to save the converted numbers to your clipboard.
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Converting Numbers to Letters (Decoding)</h3>
                <ol className="space-y-3 mb-6">
                  <li className="text-gray-700">
                    <strong>Enter numbers:</strong> Type numbers between 1-26, separated by spaces (e.g., &quot;8 5 12 12 15&quot;).
                  </li>
                  <li className="text-gray-700">
                    <strong>Decode instantly:</strong> The letter to number converter will translate each number back to its corresponding letter.
                  </li>
                  <li className="text-gray-700">
                    <strong>Get your message:</strong> See the decoded text appear instantly and copy it for use.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the A1Z26 cipher?</h3>
                  <p className="text-gray-600">
                    The A1Z26 cipher (also known as the letter-number cipher or alphabet position cipher) is a simple
                    substitution cipher where each letter is replaced by its position in the alphabet. A becomes 1,
                    B becomes 2, and so on until Z which becomes 26. It&apos;s one of the most basic forms of encryption
                    and is commonly used in puzzles, educational settings, and geocaching.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I decode A1Z26 numbers?</h3>
                  <p className="text-gray-600">
                    To decode A1Z26 numbers to letters, simply enter the numbers (1-26) separated by spaces into our
                    converter. For example, entering &quot;8 5 12 12 15&quot; will give you &quot;HELLO&quot;. Our A1Z26 decoder
                    automatically recognizes number input and converts it back to letters.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s the difference between A1Z26 and other ciphers?</h3>
                  <p className="text-gray-600">
                    Unlike Caesar cipher or Atbash cipher, A1Z26 uses direct numerical substitution rather than
                    letter shifting. While ROT13 shifts letters by 13 positions, A1Z26 simply assigns each letter
                    its position number. This makes it easier to learn but also easier to decrypt, making it perfect
                    for beginners and educational purposes.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this for lowercase letters?</h3>
                  <p className="text-gray-600">
                    Yes! Our A1Z26 converter automatically handles both uppercase and lowercase letters. Both &quot;A&quot; and
                    &quot;a&quot; will convert to 1, and both &quot;Z&quot; and &quot;z&quot; will convert to 26. The converter treats all letters
                    the same regardless of case.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is the A1Z26 converter free to use?</h3>
                  <p className="text-gray-600">
                    Absolutely! Our A1Z26 cipher converter is completely free with no registration required. You can
                    convert unlimited text, upload files, and use all features without any cost. It works directly in
                    your browser for maximum privacy and security.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Keywords Section */}
          <section className="mt-16 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Terms & Keywords</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'A1Z26 cipher', 'letter to number', 'number to letter', 'alphabet cipher',
                  'A=1 Z=26', 'letter number code', 'alphabet position', 'simple substitution cipher',
                  'A1Z26 decoder', 'A1Z26 encoder', 'letter number converter', 'alphabet to numbers',
                  'numbers to alphabet', 'letter cipher', 'alphabet code', 'A1Z26 translation',
                  'decode A1Z26', 'encode A1Z26', 'letter position cipher', 'number cipher'
                ].map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/ascii-converter" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600 mb-2">ASCII Converter</h3>
                  <p className="text-sm text-gray-600">Convert text to ASCII character codes and back.</p>
                </Link>
                <Link href="/phone-keypad-converter" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600 mb-2">Phone Keypad Converter</h3>
                  <p className="text-sm text-gray-600">Convert letters using T9 phone keypad notation.</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Feedback Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Help Us Improve</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your feedback is incredibly valuable to us! If you have suggestions, found a bug, or want to request new features, please let us know.
                </p>
                <div className="flex justify-center">
                  <FeedbackButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
