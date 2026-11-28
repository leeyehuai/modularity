# 模块笔记 MODULARITY · 部署总结

> 最后更新：2026-11-28
> 架构：GitHub Pages（前端静态站）+ Cloudflare Worker（后端 API）+ GitHub Issues（数据库）

---

## 一、线上地址

| 组件 | 地址 / 位置 | 状态 |
|---|---|---|
| 🌐 公开网站（所有人访问） | https://leeyehuai.github.io/modularity/ | ✅ 已上线 |
| 🔐 登录 / 注册页 | https://leeyehuai.github.io/modularity/auth.html | ✅ 已上线 |
| 👁️ 只读模式（不播封面，直接进） | https://leeyehuai.github.io/modularity/?guest=1 | ✅ 已上线 |
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
- **影响**：网页长什么样、有哪些写死的文章、样式配色、封面行为

### 2. 动态内容（用户发的文章、注册的账号）

- **存储位置**：GitHub 私有仓库 `notes-db` 的 Issues
- **更新方式**：**不用手动上传**，网页上点「发文/注册」自动通过 Worker 入库
- **影响**：任何人刷新页面都能看到最新数据

> 💡 两者完全解耦：上传静态文件不会动到用户数据，用户发文也不会动到静态文件。

---

## 四、封面（Splash）行为规则（2026-11-28 定稿）

### 规则总览

| 场景 | 行为 |
|---|---|
| **首次打开**（关浏览器再开） | 播一次封面 → 分流 |
| **登录成功跳回** `?from=auth` | **不播**，直接进主界面 |
| **注册成功跳回** `?from=auth` | **不播**，直接进主界面 |
| **只读模式** `?guest=1` | **不播**，直接进主界面（柔和淡入） |
| **会话内刷新 F5** | **不播**，直接进主界面 |
| **未登录用户** | 播封面 → 跳 auth.html |

### 实现机制

- **打标**：`sessionStorage.fn-splash-shown = '1'`，播完/跳回时打标
- **跳过**：head 内联脚本 + splash.js 双重检测，已打标或 `?from=auth` / `?guest=1` 直接隐藏并移除封面元素
- **版本号**：改动后必须升级 `splash.js?v=XX` 版本号，强制浏览器刷新缓存

### 相关文件

| 文件 | 作用 |
|---|---|
| [index.html](index.html) | head 内联脚本：sessionStorage 检测、打标、隐藏封面 |
| [assets/js/splash.js](assets/js/splash.js) | 封面编排：播放、分流、跳过逻辑 |
| [assets/css/splash.css](assets/css/splash.css) | 封面样式、隐藏规则 |
| [assets/video/splash.mp4](assets/video/splash.mp4) | 封面视频（已去除右下角水印） |

---

## 五、跨设备同步确认（2026-11-26 上线）

站点打开后每 30 秒轮询 Worker 的 `/api/version` 接口：

| 版本号 | 含义 | 变化时的行为 |
|---|---|---|
| `staticCommit` | 仓库 main 分支最新 commit SHA | 弹出通知条「网站内容已在其他设备更新」+ 立即刷新 |
| `postsMaxAt` | 文章库最新更新时间戳 | 静默拉取新文章，轻提示同步完成 |

---

## 六、日常维护操作

### 改网页外观 / 新增一篇写死的笔记

1. 本地修改文件
2. 打开 https://github.com/leeyehuai/modularity
3. 点 `+` → `Upload files` → 把改动的文件拖进去
4. 点 `Commit changes` → 等 1-2 分钟自动生效

### 改封面逻辑

1. 修改 `index.html` / `splash.js` / `splash.css`
2. **升级 `splash.js?v=XX` 版本号**（重要！否则浏览器缓存旧代码）
3. 上传这 3 个文件到 GitHub
4. 等 Pages 构建，硬刷新（Ctrl+Shift+R）验证

### 后端 Worker 需要修改

1. 登录 https://dash.cloudflare.com
2. Workers & Pages → `notes-api` → `Edit code`
3. 改完点 `Deploy`

### 环境变量（不要泄露）

| 变量 | 说明 |
|---|---|
| `GITHUB_TOKEN` | GitHub PAT（需要 Issues 读写权限） |
| `REPO_OWNER` | `leeyehuai` |
| `REPO_NAME` | `notes-db` |
| `SESSION_SECRET` | 登录签名密钥 |

---

## 七、常见问题

| 问题 | 原因 | 解决 |
|---|---|---|
| 打开网站 404 | 文件名拼错 / Pages 没配置 | 确认仓库有 `index.html`，Settings→Pages 选 main/root |
| 发文提示「离线模式」 | Worker 连不上 | 检查 `community.js` 的 API_BASE 是否正确 |
| 改了文件但网页没变 | CDN 缓存 / 没升级版本号 | 硬刷新 Ctrl+Shift+R；JS/CSS 改完必须升级 `?v=XX` |
| 登录成功后还播封面 | 没上传最新 splash.js | 确认线上 `splash.js?v=14`，硬刷新清缓存 |
| 封面视频还有水印 | 上传了旧版 splash.mp4 | 确认线上 splash.mp4 大小为 852 KB 左右 |

---

## 八、本地开发预览

```bash
# 方法 1：Node（推荐）
node _preview_server.js
# 访问 http://localhost:8899

# 方法 2：Python
python -m http.server 8080
```

---

## 九、目录结构

```text
Website Deployment/
├── index.html              # 网页入口（含封面检测内联脚本）
├── auth.html               # 登录/注册页
├── 404.html                # 错误页
├── README.md               # 项目说明
├── DEPLOY.md               # 本文件
├── worker/                 # Cloudflare Worker 后端（不上传 Pages）
│   └── worker.js
└── assets/
    ├── css/
    │   ├── style.css       # 全部样式
    │   └── splash.css      # 封面样式
    ├── images/logo.png     # 网站图标
    ├── video/
    │   └── splash.mp4      # 封面视频（无水印版）
    └── js/
        ├── app.js          # 路由/渲染/搜索/主题
        ├── community.js    # 登录/发文/云端同步
        ├── splash.js       # 封面编排（会话内只播一次）
        ├── posts.js        # 文章注册入口
        └── posts/          # 每篇写死的笔记一个文件
```
