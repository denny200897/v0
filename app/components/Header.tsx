import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-8">
          <li><Link href="/" className="text-lg font-semibold hover:text-gray-200 transition duration-300">首頁</Link></li>
          <li><Link href="/about" className="text-lg font-semibold hover:text-gray-200 transition duration-300">關於</Link></li>
          <li><Link href="/blog" className="text-lg font-semibold hover:text-gray-200 transition duration-300">部落格</Link></li>
        </ul>
      </nav>
    </header>
  )
}

