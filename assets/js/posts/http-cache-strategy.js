/* 文章模块：HTTP 缓存策略完全指南 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'http-cache-strategy',
    title: 'HTTP 缓存策略完全指南',
    desc: '强缓存、协商缓存、指纹文件名的配合方式，以及一份可以直接用的 Nginx 配置。',
    major: '编程语言',
    category: '网络',
    tags: ['网络', '性能', 'HTTP'],
    date: '2026-11-14',
    minutes: 7,
    content: `
<p>缓存配错的代价很高：要么每次访问都全量下载，要么发版后用户死活看不到新页面。这篇笔记把两级缓存和工程实践串起来。</p>

<h2>两级缓存：强缓存与协商缓存</h2>
<p>浏览器请求资源时，先判断强缓存是否新鲜：新鲜就直接用本地副本，请求都不会发出。不新鲜才带上验证器发起协商请求，由服务端返回 304（继续用本地）或 200（返回新内容）。</p>

<div class="table-wrap"><table>
<thead><tr><th>类型</th><th>关键响应头</th><th>是否发出请求</th></tr></thead>
<tbody>
<tr><td>强缓存</td><td>Cache-Control: max-age / immutable</td><td>否</td></tr>
<tr><td>协商缓存</td><td>ETag / If-None-Match</td><td>是，命中返回 304</td></tr>
<tr><td>协商缓存</td><td>Last-Modified / If-Modified-Since</td><td>是，命中返回 304</td></tr>
</tbody>
</table></div>

<h2>Cache-Control 常用指令</h2>
<ul>
<li><code>max-age=31536000</code>：一年内直接用本地副本，适合带内容指纹的静态资源；</li>
<li><code>no-cache</code>：允许缓存，但每次使用前都要协商；</li>
<li><code>no-store</code>：完全不写入缓存，适合含敏感信息的接口；</li>
<li><code>immutable</code>：有效期内连刷新都不必验证，进一步减少请求。</li>
</ul>

<h2>一份可直接使用的配置</h2>

<pre><code class="language-bash"># 带内容 hash 的构建产物，一年强缓存
location ~* \\.(js|css|woff2|avif|png)$ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}

# 入口 HTML 必须协商，否则用户永远拿到旧版本
location = /index.html {
  add_header Cache-Control "no-cache";
}</code></pre>

<h2>ETag 与 Last-Modified 怎么选</h2>
<p>Last-Modified 精度只到秒，内容改回原样时也无法表达；ETag 基于内容计算，精度更高。但要注意集群环境必须保证同一文件在各节点算出相同 ETag，否则会出现缓存反复失效。</p>

<h2>前端工程上的组合</h2>
<ol>
<li>入口 HTML 用 no-cache，保证发版立即生效；</li>
<li>JS / CSS / 图片用内容哈希命名 + 一年强缓存；</li>
<li>GET 接口按业务容忍度设置 max-age 或 ETag；</li>
<li>需要主动失效时改文件名，而不是去刷 CDN。</li>
</ol>

<blockquote><p>线上事故里最常见的一类：HTML 被强缓存，用户看到旧页面却加载了新的 JS，直接白屏。先检查入口文档的缓存头。</p></blockquote>
`
  }
);
