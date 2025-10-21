import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConverterCore from '@/components/ConverterCore';
import FeedbackButton from '@/components/FeedbackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ASCII Converter | Text to ASCII Code & ASCII to Text - Free Tool',
  description: 'Convert text to ASCII character codes and decode ASCII to text instantly. Free online ASCII converter with full ASCII table reference.',
  metadataBase: new URL('https://numletter.com'),
  alternates: {
    canonical: 'https://numletter.com/ascii-converter'
  },
  openGraph: {
    title: 'ASCII Converter | Text to ASCII Code & ASCII to Text',
    description: 'Convert text to ASCII character codes and decode ASCII to text instantly. Free online ASCII converter.',
    url: 'https://numletter.com/ascii-converter',
    siteName: 'NumLetter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASCII Converter | Text to ASCII Code & ASCII to Text',
    description: 'Convert text to ASCII character codes and decode ASCII to text instantly.',
  }
};

export default function ASCIIConverterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
              ASCII Converter
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl text-center">
              Convert text to ASCII character codes and decode ASCII codes back to text.
              Free, fast, and easy to use.
            </p>
          </div>
        </div>

        {/* Converter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ConverterCore mode="ascii" />

          {/* ASCII Table */}
          <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ASCII Table (Printable Characters)</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-sm mb-6">
                  <div className="col-span-full">
                    <h3 className="font-semibold text-gray-700 mb-2">Numbers (0-9)</h3>
                  </div>
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium text-gray-900">{i}</span>
                      <span className="text-gray-400 mx-1">=</span>
                      <span className="font-mono text-gray-900">{48 + i}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-sm mb-6">
                  <div className="col-span-full">
                    <h3 className="font-semibold text-gray-700 mb-2">Uppercase Letters (A-Z)</h3>
                  </div>
                  {Array.from({ length: 26 }, (_, i) => (
                    <div key={i} className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium text-gray-900">{String.fromCharCode(65 + i)}</span>
                      <span className="text-gray-400 mx-1">=</span>
                      <span className="font-mono text-gray-900">{65 + i}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-sm">
                  <div className="col-span-full">
                    <h3 className="font-semibold text-gray-700 mb-2">Lowercase Letters (a-z)</h3>
                  </div>
                  {Array.from({ length: 26 }, (_, i) => (
                    <div key={i} className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium text-gray-900">{String.fromCharCode(97 + i)}</span>
                      <span className="text-gray-400 mx-1">=</span>
                      <span className="font-mono text-gray-900">{97 + i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What is ASCII Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ASCII?</h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg text-gray-600 mb-4">
                  ASCII (American Standard Code for Information Interchange) is a character encoding
                  standard that represents text in computers and other devices. Each character is
                  assigned a unique number from 0 to 127.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Developed in the 1960s, ASCII became the foundation for character encoding in modern
                  computing. It includes letters (A-Z, a-z), numbers (0-9), punctuation marks, and
                  control characters.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">ASCII Character Ranges:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>0-31: Control characters (non-printable)</li>
                    <li>32-47: Symbols and punctuation</li>
                    <li>48-57: Numbers (0-9)</li>
                    <li>65-90: Uppercase letters (A-Z)</li>
                    <li>97-122: Lowercase letters (a-z)</li>
                    <li>123-127: Additional symbols</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Examples</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 1: Simple Text</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">Hi</span>
                    {' → '}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">72 105</span>
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 2: Word with Numbers</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">Code123</span>
                    {' → '}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">67 111 100 101 49 50 51</span>
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 3: Decoding ASCII</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">72 101 108 108 111</span>
                    {' → '}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">Hello</span>
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
                    <h3 className="font-semibold text-gray-900">Programming & Development</h3>
                    <p className="text-gray-600 mt-1">Debug character encoding issues and understand text representation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Transmission</h3>
                    <p className="text-gray-600 mt-1">Convert text for protocols that require ASCII codes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Learning & Education</h3>
                    <p className="text-gray-600 mt-1">Teach computer science fundamentals and character encoding.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cryptography</h3>
                    <p className="text-gray-600 mt-1">Convert messages for encryption and decryption processes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use the ASCII Converter</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Text to ASCII Code Conversion</h3>
                  <p className="text-gray-600 mb-2">
                    Converting text to ASCII codes is simple with our ASCII converter tool. Just type any text,
                    and each character will be converted to its ASCII code value. For example, the letter &quot;A&quot;
                    converts to ASCII code 65, while &quot;a&quot; converts to 97.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ASCII to Text Decoding</h3>
                  <p className="text-gray-600 mb-2">
                    To decode ASCII codes back to text, enter ASCII numbers separated by spaces. Our ASCII decoder
                    will instantly convert the codes to readable characters. This is perfect for decoding ASCII
                    messages or debugging character encoding issues.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ASCII Converter FAQ</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What does ASCII stand for?</h3>
                  <p className="text-gray-600">
                    ASCII stands for American Standard Code for Information Interchange. It&apos;s a character encoding
                    standard that assigns numeric codes to letters, numbers, and symbols. The ASCII table includes
                    128 characters, with codes ranging from 0 to 127.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the ASCII code for common characters?</h3>
                  <p className="text-gray-600">
                    Common ASCII codes include: Space (32), 0-9 (48-57), A-Z (65-90), a-z (97-122). Special characters
                    like ! (33), @ (64), and # (35) also have specific ASCII values. Use our ASCII chart above for
                    a complete reference.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I convert ASCII to text?</h3>
                  <p className="text-gray-600">
                    To convert ASCII to text, enter the ASCII numbers (separated by spaces) into our converter.
                    For example, &quot;72 101 108 108 111&quot; converts to &quot;Hello&quot;. Our ASCII to text converter handles
                    the conversion automatically.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s the difference between ASCII and Unicode?</h3>
                  <p className="text-gray-600">
                    ASCII uses 7 bits and supports 128 characters, mainly for English text. Unicode is a much larger
                    character set that includes characters from all world languages, emojis, and symbols. ASCII is
                    a subset of Unicode, so ASCII codes are the same in both systems.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this ASCII converter free?</h3>
                  <p className="text-gray-600">
                    Yes! Our ASCII code converter is completely free to use with no limits. Convert text to ASCII,
                    decode ASCII to text, and access the full ASCII table reference without any registration or fees.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Terms Section */}
          <section className="mt-16 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ASCII-Related Terms</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'ASCII converter', 'text to ASCII', 'ASCII to text', 'ASCII code',
                  'ASCII table', 'ASCII chart', 'ASCII decoder', 'ASCII encoder',
                  'character encoding', 'ASCII values', 'ASCII characters', 'ASCII codes list',
                  'convert to ASCII', 'ASCII translation', 'ASCII alphabet', 'ASCII numbers',
                  'ASCII symbols', 'ASCII generator', 'ASCII code converter', 'ASCII online'
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
                <Link href="/a1z26-converter" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600 mb-2">A1Z26 Converter</h3>
                  <p className="text-sm text-gray-600">Convert letters to numbers (A=1, B=2, Z=26).</p>
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
