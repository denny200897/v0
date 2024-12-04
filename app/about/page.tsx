import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">關於我</h1>
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="個人照片"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="prose lg:prose-xl max-w-2xl mx-auto">
          <p className="text-xl mb-4 text-gray-600">
            你好！我是一名熱愛技術和創新的開發者。我喜歡探索新的技術並分享我的知識。
          </p>
          <p className="text-xl mb-4 text-gray-600">
            在這個網站上，你可以找到我的部落格文章、項目和一些關於我的個人信息。
          </p>
          <h2 className="text-3xl font-semibold mt-8 mb-4 text-purple-600">我的技能</h2>
          <ul className="list-disc list-inside text-left text-gray-600">
            <li>前端開發 (React, Vue, Angular)</li>
            <li>後端開發 (Node.js, Python, Java)</li>
            <li>數據庫 (MySQL, MongoDB, PostgreSQL)</li>
            <li>雲服務 (AWS, Google Cloud, Azure)</li>
            <li>DevOps & CI/CD</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

