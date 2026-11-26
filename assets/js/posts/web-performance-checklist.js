/* 文章模块：Web 性能优化清单（2026 版） */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'web-performance-checklist',
    title: 'Web 性能优化清单（2026 版）',
    desc: '围绕 LCP、INP、CLS 三个核心指标，整理一份能直接照着做的优化清单与监控代码。',
    major: '编程语言',
    category: '性能',
    tags: ['性能', 'Core Web Vitals', '优化'],
    date: '2026-11-07',
    minutes: 8,
    content: `
<p>优化的前提是测量。先把「感觉慢」变成具体数字，改动才有验收标准。</p>

<h2>三个核心指标</h2>
<div class="table-wrap"><table>
<thead><tr><th>指标</th><th>含义</th><th>良好阈值</th></tr></thead>
<tbody>
<tr><td>LCP</td><td>最大内容绘制时间</td><td>&lt; 2.5s</td></tr>
<tr><td>INP</td><td>交互到下一次绘制</td><td>&lt; 200ms</td></tr>
<tr><td>CLS</td><td>累计布局偏移</td><td>&lt; 0.1</td></tr>
</tbody>
</table></div>

<h2>资源加载</h2>
<ul>
<li>关键 CSS 内联，非关键样式异步加载；</li>
<li>首屏不需要的 JS 用动态 import() 拆分；</li>
<li>第三方域名提前 <code>preconnect</code>，首屏大图 <code>preload</code>。</li>
</ul>

<pre><code class="language-html">&lt;link rel="preconnect" href="https://cdn.example.com" crossorigin&gt;
&lt;link rel="preload" as="image" href="/hero.avif" fetchpriority="high"&gt;</code></pre>

<h2>图片</h2>
<p>使用 AVIF / WebP，配合 srcset 输出多尺寸；首屏大图提高优先级，其余懒加载，并始终写死宽高以避免布局偏移。</p>

<pre><code class="language-html">&lt;img
  src="/cover-800.avif"
  srcset="/cover-400.avif 400w, /cover-800.avif 800w, /cover-1600.avif 1600w"
  sizes="(max-width: 720px) 100vw, 800px"
  width="800" height="450"
  loading="lazy" decoding="async"
  alt="封面图"&gt;</code></pre>

<h2>JS 体积</h2>
<p>体积问题的根因通常是「一次打包全部代码」。按路由分割、去除不需要的 polyfill、排查重复依赖（同一个包多个版本）三步做完，通常能减少三成以上。</p>

<h2>渲染与交互</h2>
<ol>
<li>长列表用虚拟滚动，避免一次渲染上千个节点；</li>
<li>高频事件用 requestAnimationFrame 节流，输入搜索用防抖；</li>
<li>避免布局抖动：不在循环里读写交替，先批量读再批量写。</li>
</ol>

<h2>监控代码</h2>
<pre><code class="language-js">new PerformanceObserver((list) =&gt; {
  for (const entry of list.getEntries()) {
    report('lcp', entry.startTime);
  }
}).observe({ type: 'largest-contentful-paint', buffered: true });</code></pre>

<blockquote><p>清单的价值不在长，而在执行顺序：先修影响 LCP 的资源问题，再修 INP 的长任务，最后处理 CLS 的尺寸声明。</p></blockquote>
`
  }
);
