# 模块笔记 MODULARITY · 部署总结

> 部署完成日期：2026-11-26
> 架构：GitHub Pages（前端静态站）+ Cloudflare Worker（后端 API）+ GitHub Issues（数据库）

---

## 一、线上地址

| 组件 | 地址 / 位置 | 状态 |
|---|---|---|
| 🌐 公开网站（所有人访问） | https://leeyehuai.github.io/modularity/ | ✅ 已上线 |
| ⚙️ 后端 Worker（API 服务） | https://notes-api.3229573185.workers.dev | ✅ 已运行 |
| 🗄️ 文章数据库 | GitHub 私有仓库 `notes-db` 的 Issues | ✅ 已连通 |
| 📁 前端源码仓库 | https://github.com/leeyehuai/modularity | ✅ Public |

---

## 二、系统架构

```
读者浏览器
   │
   ├─ 打开 https://leeyehuai.github.io/modularity/
   │     （GitHub Pages 托管的静态网页）
   │
   └─ 发文 / 登录 / 注册
         │
         ▼
   Cloudflare Worker（notes-api）
         │  藏着 GitHub Token，前端拿不到
         ▼
   GitHub Issues（notes-db 仓库）
         ├─ 一篇文章 = 一个 Issue（label: post）
         ├─ 一个用户 = 一个 Issue（label: user:xxx）
         └─ 密码 PBKDF2 哈希存储
```

---

## 三、两套内容的更新规则（重要）

### 1. 静态网页文件（改外观/布局/写死的笔记）

- **存储位置**：GitHub 仓库 `leeyehuai/modularity`
- **更新方式**：本地改完 → 拖文件上传到 GitHub → 1-2 分钟自动构建
- **影响**：网页长什么样、有哪些写死的文章、样式配色

### 2. 动态内容（用户发的文章、注册的账号）

- **存储位置**：GitHub 私有仓库 `notes-db` 的 Issues
- **更新方式**：**不用手动上传**，网页上点「发文/注册」自动通过 Worker 入库
- **影响**：任何人刷新页面都能看到最新数据

> 💡 两者完全解耦：上传静态文件不会动到用户数据，用户发文也不会动到静态文件。

---

## 三点五、跨设备同步确认（2026-11-26 新增）

站点打开后会每 30 秒轮询一次 Worker 的 `/api/version` 接口，自动对比两类版本号：

| 版本号 | 含义 | 变化时的行为 |
|---|---|---|
| `staticCommit` | 静态网站仓库 `leeyehuai/modularity` main 分支最新 commit SHA | 弹出底部通知条「网站内容已在其他设备/渠道更新」+ 「立即刷新」按钮，点击后带时间戳重载页面（绕过 CDN 缓存） |
| `postsMaxAt` | 用户文章库（Issues）最新更新时间戳 | 静默重新拉取 `/api/posts`，文章列表即时更新，并轻提示「检测到新发布的文章，已为你同步最新内容」 |

实现位置：
- 后端接口：[worker/worker.js](worker/worker.js) → `if (path === '/api/version')`
- 前端轮询：[assets/js/community.js](assets/js/community.js) → `pollVersion()` / `stopPollVersion()`
- 提示条 UI：[assets/js/app.js](assets/js/app.js) → `showSyncToast()`

**部署步骤**：
1. 把 `worker/worker.js` 完整内容粘贴到 Cloudflare Dashboard → `notes-api` → `Edit code` → `Deploy`
2. 把改动过的 `assets/js/app.js`、`assets/js/community.js` 上传到 GitHub 仓库 `leeyehuai/modularity`
3. 等 GitHub Pages 自动构建（1-2 分钟），所有设备下次打开时即可自动完成同步确认

---

## 四、日常维护操作

### 改网页外观 / 新增一篇写死的笔记

1. 本地修改文件（如 `assets/css/style.css`、`assets/js/posts/xxx.js`）
2. 打开 https://github.com/leeyehuai/modularity
3. 点 `+` → `Upload files` → 把改动的文件拖进去
4. 点 `Commit changes` → 等 1-2 分钟自动生效

### 后端 Worker 需要修改

1. 登录 https://dash.cloudflare.com
2. Workers & Pages → `notes-api` → `Edit code`
3. 改完点 `Deploy`

### 环境变量（不要泄露）

在 Cloudflare Dashboard → Worker → Settings → Variables：

| 变量 | 说明 |
|---|---|
| `GITHUB_TOKEN` | GitHub PAT（需要 Issues 读写权限） |
| `REPO_OWNER` | `leeyehuai` |
| `REPO_NAME` | `notes-db` |
| `SESSION_SECRET` | 登录签名密钥 |

---

## 五、常见问题

| 问题 | 原因 | 解决 |
|---|---|---|
| 打开网站 404 | 文件名拼错 / Pages 没配置 | 确认仓库有 `index.html`，Settings→Pages 选 main/root |
| 发文提示「离线模式」 | Worker 连不上 | 检查 `community.js` 第 16 行的 API_BASE 是否正确 |
| 发文报「昵称或密码错误」 | 本地账号表与云端不同步 | 先注册，再登录；或清 localStorage 重试 |
| 改了文件但网页没变 | CDN 缓存 | 强制刷新 Ctrl+F5，或等 5 分钟 |

---

## 六、本地开发预览

```bash
# 在项目根目录执行任一命令，然后访问 http://localhost:8080
python -m http.server 8080
# 或
npx serve .
```

---

## 七、目录结构

```text
Website Deployment/
├── index.html              # 网页入口
├── 404.html                # 错误页
├── README.md               # 项目说明（含线上地址）
├── DEPLOY.md               # 本文件（部署总结）
├── worker/
│   └── worker.js           # Cloudflare Worker 后端代码（不上传到 Pages）
└── assets/
    ├── css/style.css       # 全部样式
    ├── images/logo.png     # 网站图标
    └── js/
        ├── app.js          # 路由/渲染/搜索/主题
        ├── community.js    # 登录/发文/云端同步（对接 Worker）
        ├── posts.js        # 文章注册入口
        └── posts/          # 每篇写死的笔记一个文件
```
