import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConverterCore from '@/components/ConverterCore';
import FeedbackButton from '@/components/FeedbackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Phone Keypad Converter | T9 Text Input & Letters to Numbers',
  description: 'Convert letters to phone keypad numbers (T9 style). Free online tool for converting text using mobile phone keypad notation (2=ABC, 3=DEF).',
  metadataBase: new URL('https://numletter.com'),
  alternates: {
    canonical: 'https://numletter.com/phone-keypad-converter'
  },
  openGraph: {
    title: 'Phone Keypad Converter | T9 Text Input & Letters to Numbers',
    description: 'Convert letters to phone keypad numbers (T9 style). Free online tool for T9 text conversion.',
    url: 'https://numletter.com/phone-keypad-converter',
    siteName: 'NumLetter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phone Keypad Converter | T9 Text Input',
    description: 'Convert letters to phone keypad numbers using T9 notation.',
  }
};

export default function PhoneKeypadConverterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
              Phone Keypad Converter
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl text-center">
              Convert letters using T9 phone keypad notation. Perfect for learning old-school texting,
              phone number memorization, and puzzle creation.
            </p>
          </div>
        </div>

        {/* Converter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ConverterCore mode="phone" />

          {/* Phone Keypad Layout */}
          <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Phone Keypad Layout</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="max-w-md mx-auto">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { num: '1', letters: '' },
                      { num: '2', letters: 'ABC' },
                      { num: '3', letters: 'DEF' },
                      { num: '4', letters: 'GHI' },
                      { num: '5', letters: 'JKL' },
                      { num: '6', letters: 'MNO' },
                      { num: '7', letters: 'PQRS' },
                      { num: '8', letters: 'TUV' },
                      { num: '9', letters: 'WXYZ' },
                      { num: '*', letters: '' },
                      { num: '0', letters: ' ' },
                      { num: '#', letters: '' },
                    ].map((key) => (
                      <div
                        key={key.num}
                        className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors"
                      >
                        <div className="text-2xl font-bold text-gray-900">{key.num}</div>
                        <div className="text-xs text-gray-500 mt-1">{key.letters}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Table */}
          <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conversion Reference</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { key: '2', letters: ['A (2)', 'B (22)', 'C (222)'] },
                    { key: '3', letters: ['D (3)', 'E (33)', 'F (333)'] },
                    { key: '4', letters: ['G (4)', 'H (44)', 'I (444)'] },
                    { key: '5', letters: ['J (5)', 'K (55)', 'L (555)'] },
                    { key: '6', letters: ['M (6)', 'N (66)', 'O (666)'] },
                    { key: '7', letters: ['P (7)', 'Q (77)', 'R (777)', 'S (7777)'] },
                    { key: '8', letters: ['T (8)', 'U (88)', 'V (888)'] },
                    { key: '9', letters: ['W (9)', 'X (99)', 'Y (999)', 'Z (9999)'] },
                  ].map((item) => (
                    <div key={item.key} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-lg font-bold text-blue-600 mb-2">Key {item.key}</div>
                      <ul className="space-y-1">
                        {item.letters.map((letter, idx) => (
                          <li key={idx} className="text-sm text-gray-700 font-mono">
                            {letter}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What is T9 Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is T9 / Phone Keypad Input?</h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg text-gray-600 mb-4">
                  T9 (Text on 9 keys) is a predictive text input method used on mobile phones with
                  numeric keypads. Before smartphones with touchscreens, people used number keys to
                  type letters by pressing each key multiple times.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  For example, to type the letter &apos;C&apos;, you would press the &apos;2&apos; key three times (since
                  2 = ABC). To type &apos;HELLO&apos;, you would press: 44 33 555 555 666
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How It Works:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Each number key (2-9) represents 3-4 letters</li>
                    <li>Press a key once for the first letter, twice for the second, etc.</li>
                    <li>Key 7 has 4 letters (PQRS), key 9 has 4 letters (WXYZ)</li>
                    <li>Multiple presses of the same key create different letters</li>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 1: Simple Word</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">HI</span>
                    {' → '}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">44 444</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">H = press 4 twice, I = press 4 three times</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 2: Full Word</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">HELLO</span>
                    {' → '}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">44 33 555 555 666</span>
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 3: Word with S</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">SOS</span>
                    {' → '}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">7777 666 7777</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">S = press 7 four times (PQRS)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Example 4: Decoding</h3>
                  <p className="text-gray-600">
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">8 33 99 8</span>
                    {' → '}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">TEXT</span>
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
                    <h3 className="font-semibold text-gray-900">Learning Old-School Texting</h3>
                    <p className="text-gray-600 mt-1">Practice and understand how people texted before smartphones.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number Memorization</h3>
                    <p className="text-gray-600 mt-1">Convert phone numbers to memorable words and phrases.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Puzzles & Games</h3>
                    <p className="text-gray-600 mt-1">Create phone-based puzzles and decode messages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nostalgia & History</h3>
                    <p className="text-gray-600 mt-1">Experience how mobile communication evolved over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use the Phone Keypad Converter</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Converting Letters to Phone Keypad Numbers</h3>
                  <p className="text-gray-600 mb-2">
                    Type any text and our T9 converter will transform each letter to phone keypad notation.
                    For example, &quot;ABC&quot; becomes &quot;2 22 222&quot; - showing how many times you&apos;d press the 2 key
                    for each letter. This phone number converter handles all letters A-Z automatically.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Decoding Phone Keypad to Letters</h3>
                  <p className="text-gray-600 mb-2">
                    Enter phone keypad codes (like &quot;44 33 555 555 666&quot;) and our T9 decoder will convert them
                    back to letters (&quot;HELLO&quot;). This is perfect for decoding old phone messages or understanding
                    phone number mnemonics like 1-800-FLOWERS.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">T9 / Phone Keypad FAQ</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is T9 texting?</h3>
                  <p className="text-gray-600">
                    T9 (Text on 9 keys) is a predictive text technology used on mobile phone keypads before
                    touchscreen smartphones. Each number key (2-9) represents multiple letters, and you press
                    the key multiple times to select different letters. For example, press 2 once for A, twice
                    for B, three times for C.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I type letters on a phone keypad?</h3>
                  <p className="text-gray-600">
                    On a traditional phone keypad, each number maps to 3-4 letters: 2=ABC, 3=DEF, 4=GHI, 5=JKL,
                    6=MNO, 7=PQRS, 8=TUV, 9=WXYZ. Press the key repeatedly to cycle through its letters. Our
                    phone keypad letters converter shows the exact pattern for any text.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What letters are on which number keys?</h3>
                  <p className="text-gray-600">
                    The phone number to letters mapping: 2=ABC, 3=DEF, 4=GHI, 5=JKL, 6=MNO, 7=PQRS, 8=TUV, 9=WXYZ.
                    Note that 7 and 9 each have 4 letters (PQRS and WXYZ), while others have 3. Keys 0 and 1
                    typically don&apos;t have letters.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you decode phone number mnemonics?</h3>
                  <p className="text-gray-600">
                    Phone number mnemonics like 1-800-FLOWERS work by mapping letters to their corresponding
                    number keys. Our phone number letters converter can translate these vanity numbers into
                    their numeric equivalents and vice versa, making it easy to remember or decode phone numbers.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this T9 converter free?</h3>
                  <p className="text-gray-600">
                    Yes! Our phone keypad text converter is completely free to use. Convert unlimited text to
                    T9 notation, decode phone keypad numbers, and learn the phone keyboard letter system without
                    any cost or registration required.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Terms Section */}
          <section className="mt-16 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Phone Keypad Related Terms</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'T9 converter', 'phone keypad', 'phone keyboard letters', 'T9 texting',
                  'phone number to letters', 'letters to phone numbers', 'T9 decoder', 'mobile keypad',
                  'phone number converter', 'vanity numbers', 'phone number mnemonics', 'keypad letters',
                  'T9 input', 'mobile phone keyboard', 'number pad letters', 'phone letter code',
                  'T9 keyboard', 'phone alphabet', 'keypad to text', 'text to keypad'
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
                <Link href="/ascii-converter" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600 mb-2">ASCII Converter</h3>
                  <p className="text-sm text-gray-600">Convert text to ASCII character codes and back.</p>
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
