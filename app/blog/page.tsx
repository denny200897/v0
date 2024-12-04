import Link from 'next/link'

// 這裡我們模擬一些部落格文章數據
const posts = [
  { id: 1, title: '我的第一篇部落格文章', date: '2023-06-01', excerpt: '這是我的第一篇部落格文章，分享了我開始寫作的原因和期望。' },
  { id: 2, title: '學習 React 的心得', date: '2023-06-15', excerpt: '在這篇文章中，我分享了我學習 React 的經驗和一些有用的資源。' },
  { id: 3, title: 'TypeScript 入門指南', date: '2023-07-01', excerpt: '這是一篇為初學者準備的 TypeScript 入門指南，涵蓋了基本概念和實用技巧。' },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">部落格</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                閱讀更多 →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

