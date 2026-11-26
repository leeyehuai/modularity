/* 文章模块：现代 CSS 布局：Grid 与 Flexbox 的取舍 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'css-layout-modern',
    title: '现代 CSS 布局：Grid 与 Flexbox 的取舍',
    desc: '很多人把 Grid 和 Flexbox 当成二选一的竞争关系，其实它们解决的是不同维度的问题。这篇笔记给出一套稳定的判断标准与常见组合。',
    major: '编程语言',
    category: 'CSS',
    tags: ['CSS', '布局', '响应式'],
    date: '2026-11-20',
    minutes: 8,
    content: `
<p>很多人把 Grid 和 Flexbox 当成二选一的竞争关系，其实它们解决的是不同维度的问题。本文给出一套稳定的判断标准，以及可以直接抄的布局组合。</p>

<h2>先分清一维还是二维</h2>
<p>Flexbox 的核心是「沿一条主轴分配空间」，擅长处理一行或一列内部的对齐与伸缩；Grid 则先定义行列轨道，再把子元素放进二维网格里。</p>
<p>判断标准很简单：如果你在描述布局时用到了「第几行、第几列」，用 Grid；如果只是「依次排开、两端对齐、剩余空间怎么分」，用 Flex。</p>

<h3>Flexbox 的典型场景</h3>
<ul>
<li>导航栏：logo 居左、菜单居中、按钮居右；</li>
<li>表单行：标签、输入框、校验提示排成一行；</li>
<li>卡片内部：标题在上、操作在下，中间自动撑开。</li>
</ul>

<pre><code class="language-css">.navbar {
  display: flex;
  align-items: center;
  gap: 16px;
}

.navbar .spacer {
  flex: 1; /* 把右侧按钮推到末端 */
}

.card {
  display: flex;
  flex-direction: column;
  min-height: 220px;
}

.card .foot {
  margin-top: auto; /* 固定在卡片底部 */
}</code></pre>

<h3>Grid 的典型场景</h3>
<p>当需要「响应式列数 + 严格对齐」时，<code>auto-fill</code> 与 <code>minmax()</code> 的组合几乎是最短写法：列数随容器宽度自动变化，不需要写任何媒体查询。</p>

<pre><code class="language-css">.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: 18px;
}</code></pre>

<h2>对齐属性的心智模型</h2>
<p>两套体系里最容易混淆的是轴的方向。记住这张对照表，基本不会再用错属性。</p>

<div class="table-wrap"><table>
<thead><tr><th>场景</th><th>主轴 / 行内方向</th><th>交叉轴 / 块方向</th></tr></thead>
<tbody>
<tr><td>Flex 容器</td><td>justify-content</td><td>align-items</td></tr>
<tr><td>Grid 容器</td><td>justify-items</td><td>align-items</td></tr>
<tr><td>单个子项（Grid）</td><td>justify-self</td><td>align-self</td></tr>
<tr><td>内容整体偏移</td><td>place-content</td><td>place-content</td></tr>
</tbody>
</table></div>

<h2>两个高频坑</h2>
<h3>1. gap 优于 margin 拼缝</h3>
<p>使用 <code>gap</code> 后，最后一行不会多出一个无用的边距，也不用处理 <code>:last-child</code>。Flex 与 Grid 都已完整支持。</p>

<h3>2. 子项被内容撑破</h3>
<p>Grid 的 <code>1fr</code> 隐含 <code>minmax(auto, 1fr)</code>，长英文单词或代码会撑破轨道。想让它正常省略，必须写成 <code>minmax(0, 1fr)</code>。</p>

<pre><code class="language-css">.layout {
  display: grid;
  grid-template-columns: 268px minmax(0, 1fr);
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}</code></pre>

<blockquote><p>实践经验：先用 Grid 画出页面骨架（侧边栏 + 内容区），再用 Flex 处理骨架内部的排列，两者冲突最少。</p></blockquote>

<h2>小结</h2>
<ul>
<li>骨架、行列对齐、栅格系统 → Grid；</li>
<li>线性排列、空间分配、单行内对齐 → Flex；</li>
<li>嵌套使用是常态，不需要纠结「只能选一个」。</li>
</ul>
`
  }
);
