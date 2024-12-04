import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">
          歡迎來到我的個人網站
        </h1>
        <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
          這裡是我分享思想和創作的地方。請隨意瀏覽我的部落格文章和項目。</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">最新部落格文章</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">React 18 新特性解析</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">使用 Next.js 13 構建現代應用</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">TypeScript 高級技巧</a></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">精選項目</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">個人理財追蹤器</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">AI 驅動的寫作助手</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">開源貢獻可視化工具</a></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

