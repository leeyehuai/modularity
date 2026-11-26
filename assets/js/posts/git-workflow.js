/* 文章模块：团队 Git 工作流实践 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'git-workflow',
    title: '团队 Git 工作流实践',
    desc: '分支模型、提交规范、rebase 与 merge 的分工，以及一份合并前的检查清单。',
    major: '编程语言',
    category: '工程化',
    tags: ['工程化', 'Git', '协作'],
    date: '2026-11-02',
    minutes: 7,
    content: `
<p>多人协作时，Git 历史的质量会直接影响排查效率。这篇笔记是一套经过实践检验的最小约定。</p>

<h2>分支模型</h2>
<p>主干 + 短生命周期特性分支，是最容易维护的模型：main 永远可发布，feature 分支存活不超过几天，合并前必须通过 CI。</p>

<pre><code class="language-bash">git switch -c feat/cache-header main
git push -u origin feat/cache-header</code></pre>

<h2>提交信息规范</h2>
<p>采用 Conventional Commits，让提交记录可被工具解析，直接生成变更日志。</p>

<pre><code class="language-bash">git commit -m "feat(cache): add immutable cache for hashed assets"
git commit -m "fix(router): handle empty slug without crash"</code></pre>

<div class="table-wrap"><table>
<thead><tr><th>type</th><th>用途</th></tr></thead>
<tbody>
<tr><td>feat</td><td>新功能</td></tr>
<tr><td>fix</td><td>缺陷修复</td></tr>
<tr><td>docs</td><td>仅文档变更</td></tr>
<tr><td>refactor</td><td>不改变行为的重构</td></tr>
<tr><td>perf</td><td>性能优化</td></tr>
<tr><td>chore</td><td>构建、依赖、脚手架</td></tr>
</tbody>
</table></div>

<h2>rebase 还是 merge</h2>
<p>本地整理提交用 rebase，保持线性历史；合并到主干用 squash merge，一次变更对应一条提交，回滚干净。不要对已被他人基于其开发的分支强推。</p>

<pre><code class="language-bash">git fetch origin
git rebase origin/main
# 解决冲突后
git add .
git rebase --continue</code></pre>

<h2>合并前检查清单</h2>
<ul>
<li>CI 全绿，新增逻辑有测试覆盖；</li>
<li>变更描述写清「为什么」，而不只是「改了什么」；</li>
<li>没有调试代码、临时 console、被注释掉的旧实现；</li>
<li>涉及数据库或配置的变更，附带回滚方案。</li>
</ul>

<h2>发布与回滚</h2>
<p>每次发布打 tag 并记录对应 commit。线上出问题时优先 revert 生成反向提交，而不是 reset 主干，后者会破坏其他人的历史。</p>

<pre><code class="language-bash">git tag -a v1.4.0 -m "release 1.4.0"
git push origin v1.4.0

git revert 3f9c1ab --no-edit</code></pre>

<blockquote><p>判断一次提交是否合格的标准：半年后的自己，能否只看提交信息就明白当时为什么这么改。</p></blockquote>
`
  }
);
