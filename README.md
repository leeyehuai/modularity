# 前端手记 · Frontend Notes

一个零依赖、零构建的静态博客 / 文档站点。只使用原生 HTML、CSS 与 JavaScript，
部署时直接上传静态文件即可。

- 线上地址：https://leeyehuai.github.io/modularity/
- 前端仓库：https://github.com/leeyehuai/modularity
- 后端：Cloudflare Worker（notes-api）+ GitHub Issues 数据库

## 功能

| 模块 | 说明 |
|-|-|
| 首页 | Hero 区、统计信息、文章卡片网格、分类/标签筛选 |
| 文章详情 | 自动生成的右侧目录、阅读进度条、上一篇/下一篇 |
| 搜索 | 顶栏搜索框，按标题、摘要、分类、标签实时过滤（快捷键 `/`） |
| 代码块 | 内置语法高亮（JS / TS / CSS / HTML / Bash / JSON）与一键复制 |
| 主题 | 浅色 / 深色切换，选择持久化到 localStorage |
| 响应式 | ≤1024px 侧边栏转为抽屉导航，≤720px 单列布局 |
| 路由 | 基于 `location.hash`，刷新与分享链接均可直接打开 |

## 目录结构

```text
.
├── index.html          # 应用外壳：顶栏、侧边栏容器、主视图
├── 404.html            # 独立错误页
└── assets/
    ├── css/style.css   # 全部样式（含深浅主题变量）
    └── js/
        ├── posts.js    # 文章注册入口：初始化 window.POSTS
        ├── posts/      # 每篇文章一个独立模块，便于单独检查与修改
        │   ├── power-system-analysis-review.js
        │   ├── power-electronics-review.js
        │   ├── css-layout-modern.js
        │   ├── js-event-loop.js
        │   ├── http-cache-strategy.js
        │   ├── typescript-generics.js
        │   ├── web-performance-checklist.js
        │   └── git-workflow.js
        ├── highlight.js  # 轻量语法高亮器
        └── app.js        # 路由、渲染、搜索、目录、主题
```

## 本地预览

无需安装依赖。在项目根目录启动任意静态服务器即可，例如：

```bash
python -m http.server 8080
# 或
npx serve .
```

然后访问 http://localhost:8080 。

## 新增一篇笔记

每篇文章一个模块，放在 `assets/js/posts/` 下。新建 `assets/js/posts/my-note.js`：

```js
/* 文章模块：我的笔记 */
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: 'my-note',            // URL 片段，需唯一
  title: '文章标题',
  desc: '列表页展示的摘要',
  category: '分类名',
  tags: ['标签1', '标签2'],
  date: '2026-12-01',         // YYYY-MM-DD，列表按此倒序
  minutes: 6,                 // 阅读时长
  content: `<p>正文 HTML</p>
<h2>小节标题</h2>
<pre><code class="language-js">console.log('hi');</code></pre>`
});
```

然后在 `index.html` 底部、`posts.js` 之后、`app.js` 之前引入这个模块：

```html
<script src="assets/js/posts.js"></script>
<script src="assets/js/posts/my-note.js"></script>
<script src="assets/js/highlight.js"></script>
<script src="assets/js/app.js"></script>
```

`posts.js` 只负责初始化 `window.POSTS`；每个模块自行注册文章。`<h2>` / `<h3>` 会自动生成目录锚点，带 `language-*` 类的代码块会自动高亮并加上复制按钮。

## 部署

本项目属于静态站点，构建产物就是仓库内的这些文件本身：

1. 将 `index.html`、`404.html`、`assets/` 一并上传至站点根目录；
2. 无需构建命令，也无需 Node.js 运行时；
3. 入口页建议设置为不缓存（或短缓存），静态资源可长缓存；
4. 发版后如需灰度回滚，重新上传上一版本文件即可。

## 说明

站点所有逻辑均在浏览器端完成，没有后端接口与数据库依赖，因此可以在任意静态托管
环境（对象存储、CDN、静态站点服务）中运行。
