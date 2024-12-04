import { notFound } from 'next/navigation'
import Link from 'next/link'

// 這裡我們模擬一些部落格文章數據
const posts = [
  { 
    id: 1, 
    title: '我的第一篇部落格文章', 
    date: '2023-06-01', 
    content: `
      <p>大家好，歡迎來到我的部落格！</p>
      
      <p>作為一名熱愛技術的開發者，我一直想要有一個屬於自己的平台來分享我的想法、經驗和學習心得。今天，這個願望終於實現了。</p>
      
      <p>在這個部落格中，我計劃涵蓋以下主題：</p>
      
      <ul>
        <li>前端開發技術（React, Vue, Angular等）</li>
        <li>後端開發經驗（Node.js, Python, Java等）</li>
        <li>數據庫和雲服務的最佳實踐</li>
        <li>DevOps和持續集成/持續部署（CI/CD）的心得</li>
        <li>新興技術趨勢和個人見解</li>
      </ul>
      
      <p>我希望通過這個部落格不僅能夠記錄自己的成長，也能夠幫助到其他正在學習和工作的開發者。如果你有任何問題、建議或者想法，歡迎在評論區留言或者直接聯繫我。</p>
      
      <p>讓我們一起在這個快速發展的技術世界中學習和成長吧！</p>
      
      <p>謝謝大家的支持！</p>
    `
  },
  { 
    id: 2, 
    title: '學習 React 的心得', 
    date: '2023-06-15', 
    content: `
      <p>在過去的幾個月裡，我深入學習了React，這是一個由Facebook開發的強大的JavaScript庫。今天，我想分享一下我的學習心得和一些有用的資源。</p>
      
      <h2>為什麼選擇React？</h2>
      
      <p>React的組件化思想、虛擬DOM和單向數據流等特性，使得構建大型、高性能的Web應用變得更加容易。此外，React龐大的生態系統和活躍的社區也是它的一大優勢。</p>
      
      <h2>學習過程</h2>
      
      <p>我的學習過程大致如下：</p>
      
      <ol>
        <li>掌握JavaScript ES6+的新特性</li>
        <li>學習React基礎概念（組件、JSX、props、state等）</li>
        <li>理解React生命週期和Hooks</li>
        <li>學習React Router進行前端路由</li>
        <li>使用Redux或Context API進行狀態管理</li>
        <li>實踐項目，並學習最佳實踐和性能優化</li>
      </ol>
      
      <h2>有用的資源</h2>
      
      <ul>
        <li>官方文檔：始終是最好的學習資源</li>
        <li>Udemy上的"React - The Complete Guide"課程</li>
        <li>FreeCodeCamp的React課程</li>
        <li>Kent C. Dodds的博客和課程</li>
        <li>React社區的Discord和Reddit</li>
      </ul>
      
      <p>學習React是一個持續的過程，我仍在不斷學習新的知識和技巧。如果你也在學習React，希望這篇文章能給你一些啟發。讓我們一起在React的世界中探索吧！</p>
    `
  },
  { 
    id: 3, 
    title: 'TypeScript 入門指南', 
    date: '2023-07-01', 
    content: `
      <p>TypeScript作為JavaScript的超集，為我們提供了靜態類型檢查、更好的開發工具支持和更清晰的代碼結構。今天，我想為大家提供一個TypeScript的入門指南。</p>
      
      <h2>什麼是TypeScript？</h2>
      
      <p>TypeScript是由Microsoft開發的開源程式語言，它是JavaScript的超集，這意味著任何有效的JavaScript代碼都是有效的TypeScript代碼。TypeScript添加了可選的靜態類型和基於類的面向對象編程等特性。</p>
      
      <h2>為什麼使用TypeScript？</h2>
      
      <ul>
        <li>更好的錯誤檢測：在編譯時就能發現潛在的錯誤</li>
        <li>更好的IDE支持：自動完成、重構等功能更加強大</li>
        <li>更易於維護：類型聲明使代碼更加自文檔化</li>
        <li>更好的團隊協作：明確的接口定義使協作更加順暢</li>
      </ul>
      
      <h2>TypeScript基礎</h2>
      
      <h3>1. 基本類型</h3>
      
      <pre><code>
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10]; // 元組
      </code></pre>
      
      <h3>2. 接口</h3>
      
      <pre><code>
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
      </code></pre>
      
      <h3>3. 類</h3>
      
      <pre><code>
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
      </code></pre>
      
      <h2>開始使用TypeScript</h2>
      
      <ol>
        <li>安裝Node.js</li>
        <li>使用npm安裝TypeScript：npm install -g typescript</li>
        <li>創建一個.ts文件並編寫TypeScript代碼</li>
        <li>編譯TypeScript：tsc yourfile.ts</li>
        <li>運行生成的JavaScript文件</li>
      </ol>
      
      <p>這只是TypeScript的冰山一角，還有很多高級特性等待你去探索。希望這個入門指南能夠幫助你開始TypeScript之旅。祝學習愉快！</p>
    `
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-12">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← 返回部落格列表
        </Link>
      </div>
    </article>
  )
}

