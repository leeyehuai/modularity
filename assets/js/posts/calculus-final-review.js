/* 文章模块：高等数学期末复习笔记：极限、导数、积分全梳理与题型实战 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'calculus-final-review',
    title: '高等数学期末复习笔记：极限、导数、积分全梳理与题型实战',
    desc: '按同济版体系梳理「极限连续—一元微分—一元积分—多元微分—多元积分—微分方程」六大板块，含知识地图、7 张示意图、综合公式速查表、高频易错点与 36 道期末自测题（选择/填空/判断/简答/计算五类）。',
    major: '数学',
    category: '高等数学',
    tags: ['高等数学', '期末复习', '微积分', '学习笔记'],
    date: '2026-11-28',
    minutes: 30,
    content: `
<p>高等数学（同济版体系）的期末考试，命题非常固定：<strong>极限计算、导数与中值定理、积分换元与分部、二重积分换序、二阶常系数微分方程</strong>几乎是每套卷子的"五大件"。真正拉开分差的不是偏题怪题，而是基础定理的条件、等价无穷小的适用时机、积分区域怎么画图。这篇笔记按"极限连续 → 一元微分 → 一元积分 → 多元微分 → 多元积分 → 微分方程"的主线把全书压缩一遍，每章给出定义定理、公式表、易错点和示意图，最后附上五类共 36 道自测题，建议先自己写再展开对照。</p>

<h2>知识地图：一条主线串起全部内容</h2>
<p>先建立全局观。微积分的逻辑链条非常清晰：极限是地基，导数与积分是两块大厦，多元部分只是把这套工具搬到了 n 维空间，微分方程则是积分学的应用出口。</p>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="高等数学知识地图主线图">
  <defs>
    <marker id="cf-arrow-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/>
    </marker>
  </defs>
  <text x="380" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="var(--text)">微积分主线：极限 → 微分 → 积分 → 应用</text>

  <rect x="15" y="52" width="108" height="130" rx="10" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="69" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent)">① 极限连续</text>
  <text x="69" y="104" text-anchor="middle" font-size="11.5" fill="var(--text-2)">左右极限</text>
  <text x="69" y="126" text-anchor="middle" font-size="11.5" fill="var(--text-2)">两个重要极限</text>
  <text x="69" y="148" text-anchor="middle" font-size="11.5" fill="var(--text-2)">等价无穷小</text>
  <text x="69" y="170" text-anchor="middle" font-size="11.5" fill="var(--text-2)">间断点分类</text>

  <rect x="140" y="52" width="108" height="130" rx="10" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="194" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent)">② 一元微分</text>
  <text x="194" y="104" text-anchor="middle" font-size="11.5" fill="var(--text-2)">导数定义</text>
  <text x="194" y="126" text-anchor="middle" font-size="11.5" fill="var(--text-2)">链式法则</text>
  <text x="194" y="148" text-anchor="middle" font-size="11.5" fill="var(--text-2)">三大中值定理</text>
  <text x="194" y="170" text-anchor="middle" font-size="11.5" fill="var(--text-2)">泰勒/洛必达</text>

  <rect x="265" y="52" width="108" height="130" rx="10" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="319" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent)">③ 一元积分</text>
  <text x="319" y="104" text-anchor="middle" font-size="11.5" fill="var(--text-2)">不定积分表</text>
  <text x="319" y="126" text-anchor="middle" font-size="11.5" fill="var(--text-2)">换元/分部</text>
  <text x="319" y="148" text-anchor="middle" font-size="11.5" fill="var(--text-2)">牛莱公式</text>
  <text x="319" y="170" text-anchor="middle" font-size="11.5" fill="var(--text-2)">面积/体积</text>

  <rect x="390" y="52" width="108" height="130" rx="10" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="444" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent)">④ 多元微分</text>
  <text x="444" y="104" text-anchor="middle" font-size="11.5" fill="var(--text-2)">偏导/全微分</text>
  <text x="444" y="126" text-anchor="middle" font-size="11.5" fill="var(--text-2)">链式法则</text>
  <text x="444" y="148" text-anchor="middle" font-size="11.5" fill="var(--text-2)">隐函数求导</text>
  <text x="444" y="170" text-anchor="middle" font-size="11.5" fill="var(--text-2)">拉格朗日</text>

  <rect x="515" y="52" width="108" height="130" rx="10" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="569" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent)">⑤ 多元积分</text>
  <text x="569" y="104" text-anchor="middle" font-size="11.5" fill="var(--text-2)">二重积分</text>
  <text x="569" y="126" text-anchor="middle" font-size="11.5" fill="var(--text-2)">直角/极坐标</text>
  <text x="569" y="148" text-anchor="middle" font-size="11.5" fill="var(--text-2)">三重积分</text>
  <text x="569" y="170" text-anchor="middle" font-size="11.5" fill="var(--text-2)">换序画图</text>

  <rect x="640" y="52" width="108" height="130" rx="10" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="694" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent)">⑥ 微分方程</text>
  <text x="694" y="104" text-anchor="middle" font-size="11.5" fill="var(--text-2)">可分离变量</text>
  <text x="694" y="126" text-anchor="middle" font-size="11.5" fill="var(--text-2)">一阶线性</text>
  <text x="694" y="148" text-anchor="middle" font-size="11.5" fill="var(--text-2)">二阶常系数</text>
  <text x="694" y="170" text-anchor="middle" font-size="11.5" fill="var(--text-2)">特征根法</text>

  <line x1="123" y1="117" x2="137" y2="117" stroke="var(--accent)" stroke-width="2" marker-end="url(#cf-arrow-1)"/>
  <line x1="248" y1="117" x2="262" y2="117" stroke="var(--accent)" stroke-width="2" marker-end="url(#cf-arrow-1)"/>
  <line x1="373" y1="117" x2="387" y2="117" stroke="var(--accent)" stroke-width="2" marker-end="url(#cf-arrow-1)"/>
  <line x1="498" y1="117" x2="512" y2="117" stroke="var(--accent)" stroke-width="2" marker-end="url(#cf-arrow-1)"/>
  <line x1="623" y1="117" x2="637" y2="117" stroke="var(--accent)" stroke-width="2" marker-end="url(#cf-arrow-1)"/>

  <text x="380" y="216" text-anchor="middle" font-size="12" fill="var(--muted)">每学一块都要问自己：极限怎么算？导数怎么求？积分怎么积？能不能搬到二元？</text>
</svg>
<figcaption>图 1　高等数学知识地图：六大板块环环相扣，考试命题也严格按此顺序分配分值。</figcaption>
</figure>

<h2>一、函数、极限与连续</h2>

<h3>1.1 核心定义与定理</h3>
<p><strong>极限定义（ε–δ 语言）</strong>：设 f(x) 在 x<sub>0</sub> 某去心邻域有定义，若对任意 ε &gt; 0，存在 δ &gt; 0，当 0 &lt; |x − x<sub>0</sub>| &lt; δ 时恒有 |f(x) − A| &lt; ε，则称 lim<sub>x→x₀</sub> f(x) = A。期末考试一般不直接考 ε–δ 证明，但<strong>左极限、右极限</strong>几乎每年都考：lim<sub>x→x₀</sub> f(x) = A 存在的充分必要条件是左极限 f(x<sub>0</sub><sup>−</sup>) 与右极限 f(x<sub>0</sub><sup>+</sup>) 都存在且相等。分段函数在分界点、含 |x|、含 e<sup>1/x</sup>、含 arctan(1/x) 的极限，一律要分左右。</p>

<p><strong>两个重要极限</strong>（必须背到肌肉记忆）：</p>
<ul>
<li>lim<sub>x→0</sub> sin(x) / x = 1（"0/0 型，分子正弦分母自变量，等价"）；</li>
<li>lim<sub>x→∞</sub> (1 + 1/x)<sup>x</sup> = e，等价写法 lim<sub>t→0</sub> (1 + t)<sup>1/t</sup> = e（"1<sup>∞</sup> 型，凑底数加 1、指数取倒数"）。</li>
</ul>

<p><strong>无穷小比较</strong>：设 α、β 是同一过程的无穷小。若 lim α/β = 0，称 α 是 β 的高阶无穷小；若为 ∞，称低阶；若为 c ≠ 0，称同阶；若为 1，称等价，记作 α ~ β。<strong>等价无穷小替换只能在乘除因子上用，不能在加减项上直接用</strong>——这是全书第一大失分点。</p>

<p><strong>连续性</strong>：f(x) 在 x<sub>0</sub> 连续 ⟺ lim<sub>x→x₀</sub> f(x) = f(x<sub>0</sub>)，即"极限值 = 函数值"。<strong>间断点分类</strong>是高频考点：</p>
<ul>
<li><strong>第一类间断点</strong>：左右极限都存在。左右相等 → <strong>可去间断点</strong>（如 sinx/x 在 0）；左右不等 → <strong>跳跃间断点</strong>（如符号函数在 0）。</li>
<li><strong>第二类间断点</strong>：左右极限至少一个不存在。常见 <strong>无穷间断点</strong>（如 1/x 在 0）与 <strong>振荡间断点</strong>（如 sin(1/x) 在 0）。</li>
</ul>

<p><strong>闭区间连续函数的性质</strong>（四大定理，简答/证明常考）：</p>
<ol>
<li><strong>有界性与最值定理</strong>：闭区间上连续函数必有界且取得最大、最小值；</li>
<li><strong>介值定理</strong>：f 在 [a,b] 连续，f(a) ≠ f(b)，则对介于 f(a)、f(b) 之间的任一值 μ，存在 ξ ∈ (a,b) 使 f(ξ) = μ；</li>
<li><strong>零点定理（根的存在定理）</strong>：f 在 [a,b] 连续，f(a)·f(b) &lt; 0，则存在 ξ ∈ (a,b) 使 f(ξ) = 0；</li>
<li>一致连续性（康托定理）：闭区间上连续函数必一致连续。</li>
</ol>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="间断点分类示意图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">间断点分类：先算左右极限，再对号入座</text>

  <line x1="40" y1="190" x2="720" y2="190" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="380" y1="50" x2="380" y2="210" stroke="var(--line)" stroke-width="1.5"/>

  <path d="M60 120 Q 200 120 360 120" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="380" cy="120" r="4" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="2"/>
  <path d="M400 120 Q 560 120 700 120" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="380" y="228" text-anchor="middle" font-size="11.5" fill="var(--muted)">可去间断点：左右极限相等但 ≠ 函数值（或无定义）</text>

  <path d="M60 160 Q 200 160 360 160" fill="none" stroke="var(--text-2)" stroke-width="2.5"/>
  <circle cx="380" cy="160" r="4" fill="var(--bg-soft)" stroke="var(--text-2)" stroke-width="2"/>
  <circle cx="380" cy="90" r="4" fill="var(--text-2)"/>
  <path d="M400 90 Q 560 90 700 90" fill="none" stroke="var(--text-2)" stroke-width="2.5" stroke-dasharray="6 4"/>
</svg>
<figcaption>图 2　左：可去间断点（左右极限相等）；右：跳跃间断点（左右极限存在但不等，空心到实心的"台阶"）。两者都属第一类。</figcaption>
</figure>

<h3>1.2 等价无穷小替换表（x → 0 时）</h3>
<table class="table-wrap">
<tr><th>原式</th><th>等价无穷小</th><th>原式</th><th>等价无穷小</th></tr>
<tr><td>sin x</td><td>~ x</td><td>tan x</td><td>~ x</td></tr>
<tr><td>arcsin x</td><td>~ x</td><td>arctan x</td><td>~ x</td></tr>
<tr><td>ln(1 + x)</td><td>~ x</td><td>e<sup>x</sup> − 1</td><td>~ x</td></tr>
<tr><td>a<sup>x</sup> − 1</td><td>~ x ln a</td><td>1 − cos x</td><td>~ x<sup>2</sup> / 2</td></tr>
<tr><td>(1 + x)<sup>α</sup> − 1</td><td>~ α x</td><td>x − sin x</td><td>~ x<sup>3</sup> / 6</td></tr>
</table>
<p>使用口诀：<strong>"乘除随意换，加减要小心"</strong>。例如求 lim<sub>x→0</sub> (tan x − sin x) / x<sup>3</sup>，若直接把 tan x、sin x 都换成 x，分子变成 0，就错了；正确做法是先提取公因子：tan x − sin x = tan x(1 − cos x) ~ x · x<sup>2</sup>/2 = x<sup>3</sup>/2，极限 = 1/2。</p>

<h3>1.3 易错点</h3>
<ol>
<li>看到 e<sup>1/x</sup>、arctan(1/x)、|x| 在 x = 0 处求极限，<strong>必须分左右</strong>，e<sup>1/x</sup> 在 0<sup>−</sup> 趋于 0，在 0<sup>+</sup> 趋于 +∞。</li>
<li>等价无穷小替换用在加减项上会出错，除非有定理保证（如整体替换后阶数不变）。</li>
<li>"lim (1+1/x)<sup>x</sup> = e" 的 x 必须是趋于 ∞ 的，不能写成 x → 0；反过来 (1+t)<sup>1/t</sup> 是 t → 0。</li>
<li>间断点分类前要先看函数在该点<strong>有没有定义</strong>、<strong>左右极限是否存在</strong>，再判断类型，不要凭"看起来像"。</li>
<li>零点定理只给"存在性"，不给唯一性；证明方程有根，构造 F(x) 后必须验证闭区间连续 + 端点异号。</li>
</ol>

<h2>二、一元函数微分学</h2>

<h3>2.1 导数与微分的定义</h3>
<p><strong>导数定义</strong>：f ′(x<sub>0</sub>) = lim<sub>Δx→0</sub> [f(x<sub>0</sub> + Δx) − f(x<sub>0</sub>)] / Δx = lim<sub>x→x₀</sub> [f(x) − f(x<sub>0</sub>)] / (x − x<sub>0</sub>)。<strong>可导必连续，连续不一定可导</strong>（反例：|x| 在 0 连续但不可导）。左导数 f′<sub>−</sub>(x<sub>0</sub>) 与右导数 f′<sub>+</sub>(x<sub>0</sub>) 都存在且相等 ⟺ 可导。</p>
<p><strong>微分</strong>：dy = f ′(x) dx。当 Δx 很小时，Δy ≈ dy，即 f(x<sub>0</sub> + Δx) ≈ f(x<sub>0</sub>) + f ′(x<sub>0</sub>)Δx，这是近似计算与线性化的基础。</p>

<h3>2.2 基本导数表与求导法则</h3>
<table class="table-wrap">
<tr><th>函数</th><th>导数</th><th>函数</th><th>导数</th></tr>
<tr><td>C（常数）</td><td>0</td><td>x<sup>μ</sup></td><td>μ x<sup>μ−1</sup></td></tr>
<tr><td>sin x</td><td>cos x</td><td>cos x</td><td>−sin x</td></tr>
<tr><td>tan x</td><td>sec<sup>2</sup> x</td><td>cot x</td><td>−csc<sup>2</sup> x</td></tr>
<tr><td>sec x</td><td>sec x tan x</td><td>csc x</td><td>−csc x cot x</td></tr>
<tr><td>a<sup>x</sup></td><td>a<sup>x</sup> ln a</td><td>e<sup>x</sup></td><td>e<sup>x</sup></td></tr>
<tr><td>log<sub>a</sub> x</td><td>1 / (x ln a)</td><td>ln x</td><td>1 / x</td></tr>
<tr><td>arcsin x</td><td>1 / √(1 − x<sup>2</sup>)</td><td>arccos x</td><td>−1 / √(1 − x<sup>2</sup>)</td></tr>
<tr><td>arctan x</td><td>1 / (1 + x<sup>2</sup>)</td><td>arccot x</td><td>−1 / (1 + x<sup>2</sup>)</td></tr>
</table>
<p><strong>四则运算法则</strong>：(u ± v)′ = u′ ± v′；(uv)′ = u′v + uv′；(u/v)′ = (u′v − uv′) / v<sup>2</sup>。<strong>复合函数链式法则</strong>：y = f(u)，u = g(x)，则 dy/dx = f ′(u)·g ′(x)，一层一层剥，"由外到内，层层求导再相乘"。<strong>对数求导法</strong>对付幂指函数 y = u(x)<sup>v(x)</sup>：两边取 ln 再求导。</p>

<h3>2.3 三大中值定理（证明题核心）</h3>
<table class="table-wrap">
<tr><th>定理</th><th>条件</th><th>结论（存在 ξ ∈ (a,b)）</th></tr>
<tr><td>罗尔定理</td><td>f 在 [a,b] 连续、(a,b) 可导、f(a) = f(b)</td><td>f ′(ξ) = 0</td></tr>
<tr><td>拉格朗日中值定理</td><td>f 在 [a,b] 连续、(a,b) 可导</td><td>f(b) − f(a) = f ′(ξ)(b − a)</td></tr>
<tr><td>柯西中值定理</td><td>f、g 在 [a,b] 连续、(a,b) 可导，g′ ≠ 0</td><td>[f(b)−f(a)] / [g(b)−g(a)] = f ′(ξ) / g ′(ξ)</td></tr>
</table>
<p>三者是"包含关系"：罗尔是拉格朗日的特例，拉格朗日是柯西的特例。<strong>拉格朗日是最常用的</strong>，证明不等式、推导单调性都靠它。</p>

<h3>2.4 洛必达法则与泰勒公式</h3>
<p><strong>洛必达法则</strong>：仅对 0/0 型或 ∞/∞ 型有效，条件是"分子分母分别求导后极限存在（或为 ∞）"。每次使用前先检查类型、先化简（等价无穷小、约因子），<strong>洛必达不是万能的</strong>，遇循环（如 e<sup>x</sup> + e<sup>−x</sup> 类）要换泰勒展开。</p>
<p><strong>泰勒公式（带皮亚诺余项，x → 0）</strong>：</p>
<div class="formula">e<sup>x</sup> = 1 + x + x<sup>2</sup>/2! + x<sup>3</sup>/3! + o(x<sup>3</sup>)<br>
sin x = x − x<sup>3</sup>/3! + o(x<sup>3</sup>)<br>
cos x = 1 − x<sup>2</sup>/2! + x<sup>4</sup>/4! + o(x<sup>4</sup>)<br>
ln(1 + x) = x − x<sup>2</sup>/2 + x<sup>3</sup>/3 + o(x<sup>3</sup>)<br>
(1 + x)<sup>α</sup> = 1 + αx + α(α−1)/2 · x<sup>2</sup> + o(x<sup>2</sup>)</div>
<p>求极限的高阶玩法：当等价无穷小不够用（分子是同阶相减），就把分子分母同时展开到<strong>第一个非零项</strong>，系数比就是答案。</p>

<h3>2.5 单调性、极值、凹凸、拐点、渐近线</h3>
<ul>
<li><strong>单调性</strong>：f ′(x) &gt; 0 → 单调递增；f ′(x) &lt; 0 → 单调递减。</li>
<li><strong>极值必要条件</strong>：可导极值点必有 f ′(x<sub>0</sub>) = 0（驻点）。<strong>第一充分条件</strong>：看 f ′ 在 x<sub>0</sub> 左右是否变号（左正右负 → 极大；左负右正 → 极小）；<strong>第二充分条件</strong>：f ′(x<sub>0</sub>) = 0，f ″(x<sub>0</sub>) &lt; 0 → 极大，f ″(x<sub>0</sub>) &gt; 0 → 极小。</li>
<li><strong>凹凸性</strong>：f ″(x) &gt; 0 → 凹（开口向上，形如 ∪）；f ″(x) &lt; 0 → 凸（开口向下，形如 ∩）。<strong>拐点</strong>是凹凸性改变的点，必要条件 f ″(x<sub>0</sub>) = 0 或不存在，且两侧 f ″ 变号。</li>
<li><strong>渐近线</strong>：水平渐近线 y = A ⟺ lim<sub>x→∞</sub> f(x) = A；垂直渐近线 x = x<sub>0</sub> ⟺ lim<sub>x→x₀</sub> f(x) = ∞；斜渐近线 y = kx + b，其中 k = lim<sub>x→∞</sub> f(x)/x，b = lim<sub>x→∞</sub> [f(x) − kx]。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="单调性与凹凸性示意图">
  <line x1="60" y1="200" x2="700" y2="200" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="80" y1="30" x2="80" y2="215" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M100 170 Q 220 150 320 120 Q 420 90 500 100 Q 580 110 680 60" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="320" cy="120" r="5" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="2"/>
  <text x="335" y="110" font-size="11.5" fill="var(--text-2)">极大值点 f′=0，左正右负</text>
  <circle cx="500" cy="100" r="5" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="2"/>
  <text x="512" y="122" font-size="11.5" fill="var(--text-2)">拐点 f″=0，凹凸切换</text>
  <text x="180" y="90" font-size="11.5" fill="var(--muted)">f″&gt;0 凹段</text>
  <text x="560" y="170" font-size="11.5" fill="var(--muted)">f″&lt;0 凸段</text>
</svg>
<figcaption>图 3　极值点看一阶导数变号，拐点看二阶导数变号；注意极值点不一定是拐点，拐点也不一定是极值点。</figcaption>
</figure>

<h3>2.6 易错点</h3>
<ol>
<li>"可导必连续"的逆命题不成立；讨论 f(x) = |x − a| 在 a 处的可导性，要分左右导数。</li>
<li>洛必达法则只对 0/0、∞/∞ 型，其他类型要先变形；用之前先化简，否则越洛越繁。</li>
<li>极值点要求 f ′(x<sub>0</sub>) = 0 <strong>或 f ′(x<sub>0</sub>) 不存在</strong>，不要漏掉不可导点（如 |x| 在 0）。</li>
<li>拐点是"点"(x<sub>0</sub>, f(x<sub>0</sub>))，不是 x<sub>0</sub>；写答案时要写出完整坐标。</li>
<li>拉格朗日中值定理的 ξ 是开区间 (a,b) 内的某一点，不是任意点。</li>
</ol>

<h2>三、一元函数积分学</h2>

<h3>3.1 不定积分基本公式表</h3>
<p>不定积分是导数的逆运算：∫ f(x) dx = F(x) + C，其中 F′(x) = f(x)。<strong>结果必须带任意常数 C</strong>，漏 C 是阅卷第一扣分项。</p>
<table class="table-wrap">
<tr><th>积分</th><th>结果</th><th>积分</th><th>结果</th></tr>
<tr><td>∫ 0 dx</td><td>C</td><td>∫ x<sup>μ</sup> dx</td><td>x<sup>μ+1</sup> / (μ+1) + C (μ ≠ −1)</td></tr>
<tr><td>∫ 1/x dx</td><td>ln|x| + C</td><td>∫ a<sup>x</sup> dx</td><td>a<sup>x</sup> / ln a + C</td></tr>
<tr><td>∫ e<sup>x</sup> dx</td><td>e<sup>x</sup> + C</td><td>∫ sin x dx</td><td>−cos x + C</td></tr>
<tr><td>∫ cos x dx</td><td>sin x + C</td><td>∫ sec<sup>2</sup> x dx</td><td>tan x + C</td></tr>
<tr><td>∫ csc<sup>2</sup> x dx</td><td>−cot x + C</td><td>∫ sec x tan x dx</td><td>sec x + C</td></tr>
<tr><td>∫ 1/(1+x<sup>2</sup>) dx</td><td>arctan x + C</td><td>∫ 1/√(1−x<sup>2</sup>) dx</td><td>arcsin x + C</td></tr>
<tr><td>∫ tan x dx</td><td>−ln|cos x| + C</td><td>∫ cot x dx</td><td>ln|sin x| + C</td></tr>
<tr><td>∫ 1/(a<sup>2</sup>+x<sup>2</sup>) dx</td><td>(1/a) arctan(x/a) + C</td><td>∫ 1/√(a<sup>2</sup>−x<sup>2</sup>) dx</td><td>arcsin(x/a) + C</td></tr>
</table>

<h3>3.2 定积分的性质与牛顿–莱布尼茨公式</h3>
<p>定积分 ∫<sub>a</sub><sup>b</sup> f(x) dx 是"和式的极限"：∫<sub>a</sub><sup>b</sup> f(x) dx = lim<sub>λ→0</sub> Σ f(ξ<sub>i</sub>) Δx<sub>i</sub>。常用性质：</p>
<ul>
<li><strong>线性性</strong>：∫<sub>a</sub><sup>b</sup> [αf + βg] dx = α∫<sub>a</sub><sup>b</sup> f dx + β∫<sub>a</sub><sup>b</sup> g dx；</li>
<li><strong>区间可加</strong>：∫<sub>a</sub><sup>b</sup> = ∫<sub>a</sub><sup>c</sup> + ∫<sub>c</sub><sup>b</sup>；</li>
<li><strong>保号性</strong>：f(x) ≥ 0 ⇒ ∫<sub>a</sub><sup>b</sup> f dx ≥ 0（a &lt; b）；</li>
<li><strong>估值定理</strong>：m(b−a) ≤ ∫<sub>a</sub><sup>b</sup> f dx ≤ M(b−a)；</li>
<li><strong>积分中值定理</strong>：存在 ξ ∈ [a,b] 使 ∫<sub>a</sub><sup>b</sup> f(x) dx = f(ξ)(b − a)。</li>
</ul>
<p><strong>牛顿–莱布尼茨公式</strong>（微积分基本定理）：若 F′(x) = f(x) 且 f 在 [a,b] 连续，则 ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)。变上限积分求导：d/dx ∫<sub>a</sub><sup>x</sup> f(t) dt = f(x)；更一般地，d/dx ∫<sub>φ(x)</sub><sup>ψ(x)</sup> f(t) dt = f(ψ(x))ψ′(x) − f(φ(x))φ′(x)。</p>

<h3>3.3 换元积分法与分部积分法</h3>
<p><strong>第一类换元（凑微分）</strong>：∫ f[φ(x)]φ′(x) dx = ∫ f(u) du，u = φ(x)。常见凑法：xdx = d(x<sup>2</sup>/2)，dx/x = d(ln x)，e<sup>x</sup>dx = d(e<sup>x</sup>)，sin x dx = −d(cos x)。</p>
<p><strong>第二类换元</strong>对付根式：√(a<sup>2</sup> − x<sup>2</sup>) 令 x = a sin t；√(a<sup>2</sup> + x<sup>2</sup>) 令 x = a tan t；√(x<sup>2</sup> − a<sup>2</sup>) 令 x = a sec t。<strong>定积分换元必换限</strong>：换元后上下限跟着换，最后不用回代。</p>
<p><strong>分部积分</strong>：∫ u dv = uv − ∫ v du。选择 u 的口诀"反对幂指三"：反三角函数、对数、幂函数、指数、三角函数——排在前面的优先作 u。</p>

<h3>3.4 反常积分</h3>
<ul>
<li><strong>无穷限反常积分</strong>：∫<sub>a</sub><sup>+∞</sup> f(x) dx = lim<sub>b→+∞</sub> ∫<sub>a</sub><sup>b</sup> f(x) dx，极限存在则收敛。</li>
<li><strong>无界函数反常积分（瑕积分）</strong>：瑕点在端点时定义同上，用极限处理。</li>
<li><strong>p 判别法（记结论）</strong>：∫<sub>1</sub><sup>+∞</sup> 1/x<sup>p</sup> dx 当 p &gt; 1 收敛、p ≤ 1 发散；∫<sub>0</sub><sup>1</sup> 1/x<sup>p</sup> dx 当 p &lt; 1 收敛、p ≥ 1 发散。</li>
</ul>

<h3>3.5 定积分的几何应用</h3>
<ul>
<li><strong>平面图形面积（直角坐标）</strong>：A = ∫<sub>a</sub><sup>b</sup> |f(x) − g(x)| dx，先求交点定上下限；</li>
<li><strong>绕 x 轴旋转体体积</strong>：V = π ∫<sub>a</sub><sup>b</sup> f<sup>2</sup>(x) dx（圆盘法）；</li>
<li><strong>绕 y 轴旋转</strong>（柱壳法）：V = 2π ∫<sub>a</sub><sup>b</sup> x·f(x) dx；</li>
<li><strong>平面曲线弧长</strong>：s = ∫<sub>a</sub><sup>b</sup> √(1 + [f ′(x)]<sup>2</sup>) dx。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="面积与旋转体体积示意图">
  <line x1="60" y1="200" x2="700" y2="200" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="80" y1="40" x2="80" y2="215" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M120 180 Q 220 80 330 120 T 520 90" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M120 180 L 120 190 L 520 190 L 520 90 Z" fill="var(--bg-soft)" stroke="none"/>
  <path d="M120 180 Q 220 80 330 120 T 520 90" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="120" y1="180" x2="120" y2="190" stroke="var(--line)" stroke-dasharray="3 3"/>
  <line x1="520" y1="90" x2="520" y2="190" stroke="var(--line)" stroke-dasharray="3 3"/>
  <text x="300" y="160" font-size="12" fill="var(--text-2)">阴影面积 A = ∫[a,b] f(x) dx</text>
  <text x="300" y="228" text-anchor="middle" font-size="11.5" fill="var(--muted)">绕 x 轴旋转：V = π ∫[a,b] f²(x) dx，截面是半径为 f(x) 的圆盘</text>
</svg>
<figcaption>图 4　定积分几何意义：曲边梯形面积与旋转体体积，关键是先求曲线交点确定积分区间。</figcaption>
</figure>

<h3>3.6 易错点</h3>
<ol>
<li>不定积分结果<strong>必须 + C</strong>；定积分换元<strong>必须换限</strong>，这两条是每年阅卷的重灾区。</li>
<li>对称区间 [−a,a] 上：奇函数积分 = 0，偶函数积分 = 2∫<sub>0</sub><sup>a</sup>，先看奇偶性再动笔。</li>
<li>分部积分 u、dv 选反会越积越繁；记"反对幂指三"。</li>
<li>反常积分先判瑕点（被积函数无界的点），漏判瑕点会把普通定积分算错。</li>
<li>圆盘法与柱壳法不要混淆：绕 x 轴用 πf²(x) dx，绕 y 轴且对 x 积分用 2πxf(x) dx。</li>
</ol>

<h2>四、多元函数微分学</h2>

<h3>4.1 偏导数与全微分</h3>
<p><strong>偏导数</strong>：z = f(x,y)，对 x 的偏导 f<sub>x</sub> = lim<sub>Δx→0</sub> [f(x+Δx, y) − f(x, y)] / Δx，求法是把 y 当常数对 x 求导。<strong>全微分</strong>：dz = f<sub>x</sub> dx + f<sub>y</sub> dy。可微的充分条件：两个偏导数<strong>连续</strong>；可微 ⇒ 偏导存在 ⇒ 连续？不对——注意层级关系是：<strong>偏导连续 ⇒ 可微 ⇒ 连续且偏导存在</strong>，但"偏导存在"推不出"连续"，也推不出"可微"，这是选择题常客。</p>

<h3>4.2 多元复合函数链式法则</h3>
<p>z = f(u, v)，u = u(x,y)，v = v(x,y)，则：</p>
<div class="formula">∂z/∂x = (∂z/∂u)(∂u/∂x) + (∂z/∂v)(∂v/∂x)<br>
∂z/∂y = (∂z/∂u)(∂u/∂y) + (∂z/∂v)(∂v/∂y)</div>
<p>画"变量依赖树"：z 到 u、v，u、v 再到 x、y；每条路径相乘、各路径相加。全导数情形 z = f(u,v)，u = u(t)，v = v(t)：dz/dt = (∂z/∂u)(du/dt) + (∂z/∂v)(dv/dt)。</p>

<h3>4.3 隐函数求导</h3>
<p>方程 F(x,y) = 0 确定 y = y(x)，则 dy/dx = −F<sub>x</sub> / F<sub>y</sub>（F<sub>y</sub> ≠ 0）。方程 F(x,y,z) = 0 确定 z = z(x,y)，则 ∂z/∂x = −F<sub>x</sub> / F<sub>z</sub>，∂z/∂y = −F<sub>y</sub> / F<sub>z</sub>。<strong>求 F<sub>x</sub>、F<sub>y</sub> 时把所有变量平等看待</strong>，这是和"把 z 当 x、y 的函数直接求导"法最大的区别。</p>

<h3>4.4 多元极值与条件极值</h3>
<ul>
<li><strong>无条件极值</strong>：先求驻点（f<sub>x</sub> = 0、f<sub>y</sub> = 0），再用二阶充分条件：令 A = f<sub>xx</sub>，B = f<sub>xy</sub>，C = f<sub>yy</sub>，判别式 Δ = AC − B<sup>2</sup>。Δ &gt; 0 且 A &gt; 0 → 极小值；Δ &gt; 0 且 A &lt; 0 → 极大值；Δ &lt; 0 → 不是极值；Δ = 0 → 失效，另作讨论。</li>
<li><strong>条件极值（拉格朗日乘数法）</strong>：求 z = f(x,y) 在约束 φ(x,y) = 0 下的极值，构造 L = f(x,y) + λφ(x,y)，解方程组 L<sub>x</sub> = 0、L<sub>y</sub> = 0、L<sub>λ</sub> = 0。实际问题中比较各候选点的函数值即可。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="条件极值拉格朗日法示意图">
  <line x1="60" y1="200" x2="700" y2="200" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="80" y1="40" x2="80" y2="215" stroke="var(--line)" stroke-width="1.5"/>
  <ellipse cx="380" cy="125" rx="230" ry="60" fill="none" stroke="var(--text-2)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="610" y="100" font-size="11.5" fill="var(--text-2)">等值线 f(x,y)=c</text>
  <path d="M200 190 Q 380 30 560 190" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="566" y="196" font-size="11.5" fill="var(--accent)">约束 φ(x,y)=0</text>
  <circle cx="330" cy="118" r="5" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="2"/>
  <text x="250" y="100" font-size="11.5" fill="var(--muted)">相切点：梯度平行，拉格朗日条件</text>
  <text x="380" y="228" text-anchor="middle" font-size="11.5" fill="var(--muted)">最优处等值线与约束曲线相切，∇f 与 ∇φ 共线</text>
</svg>
<figcaption>图 5　拉格朗日乘数法的几何意义：条件极值点处目标函数等值线与约束曲线相切。</figcaption>
</figure>

<h3>4.5 易错点</h3>
<ol>
<li>"偏导数存在"推不出"函数连续"，也推不出"可微"；要证可微必须验证 Δz − (f<sub>x</sub>dx + f<sub>y</sub>dy) 是 ρ 的高阶无穷小。</li>
<li>链式法则漏项：z 经中间变量到自变量，每条路径都要写，少一条路径整题作废。</li>
<li>隐函数公式 ∂z/∂x = −F<sub>x</sub>/F<sub>z</sub> 中，求 F<sub>x</sub> 时 z 是独立变量，不能先把 z 当作 x 的函数。</li>
<li>Δ = AC − B<sup>2</sup> &lt; 0 时是"鞍点"，不是极值；Δ = 0 时结论失效，不能硬套。</li>
</ol>

<h2>五、多元函数积分学</h2>

<h3>5.1 二重积分的概念与性质</h3>
<p>二重积分 ∬<sub>D</sub> f(x,y) dσ 是"曲顶柱体体积"：和式极限 lim Σ f(ξ<sub>i</sub>,η<sub>i</sub>) Δσ<sub>i</sub>。性质与定积分类似（线性、区域可加、保号、中值定理）。<strong>几何意义</strong>：f(x,y) ≥ 0 时就是以 D 为底、曲面 z = f(x,y) 为顶的柱体体积。</p>

<h3>5.2 直角坐标与极坐标</h3>
<p><strong>X–型区域</strong>（a ≤ x ≤ b，φ<sub>1</sub>(x) ≤ y ≤ φ<sub>2</sub>(x)）：</p>
<div class="formula">∬<sub>D</sub> f(x,y) dσ = ∫<sub>a</sub><sup>b</sup> dx ∫<sub>φ₁(x)</sub><sup>φ₂(x)</sup> f(x,y) dy</div>
<p><strong>Y–型区域</strong>（c ≤ y ≤ d，ψ<sub>1</sub>(y) ≤ x ≤ ψ<sub>2</sub>(y)）：</p>
<div class="formula">∬<sub>D</sub> f(x,y) dσ = ∫<sub>c</sub><sup>d</sup> dy ∫<sub>ψ₁(y)</sub><sup>ψ₂(y)</sup> f(x,y) dx</div>
<p><strong>极坐标变换</strong>：x = r cos θ，y = r sin θ，dσ = r dr dθ（<strong>那个 r 绝对不能丢</strong>）。使用时机：积分域是圆、圆环、扇形，或被积函数含 x<sup>2</sup> + y<sup>2</sup>。r 与 θ 的范围由 D 决定：</p>
<ul>
<li>圆心在原点、半径 R 的圆盘：0 ≤ θ ≤ 2π，0 ≤ r ≤ R；</li>
<li>圆域 (x−a)<sup>2</sup> + y<sup>2</sup> ≤ a<sup>2</sup>（圆心 (a,0)、半径 a）：−π/2 ≤ θ ≤ π/2，0 ≤ r ≤ 2a cos θ；</li>
<li>圆域 x<sup>2</sup> + (y−b)<sup>2</sup> ≤ b<sup>2</sup>：0 ≤ θ ≤ π，0 ≤ r ≤ 2b sin θ。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="极坐标二重积分区域示意图">
  <line x1="80" y1="200" x2="700" y2="200" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="380" y1="30" x2="380" y2="215" stroke="var(--line)" stroke-width="1.5"/>
  <circle cx="380" cy="140" r="80" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="380" y1="140" x2="448" y2="95" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="440" y="80" font-size="12" fill="var(--text-2)">r</text>
  <path d="M410 140 A 30 30 0 0 0 404 122" fill="none" stroke="var(--muted)" stroke-width="1.2"/>
  <text x="416" y="128" font-size="11.5" fill="var(--muted)">θ</text>
  <text x="500" y="150" font-size="12" fill="var(--text-2)">圆盘：0≤θ≤2π，0≤r≤R</text>
  <text x="120" y="150" font-size="12" fill="var(--text-2)">dσ = r dr dθ（雅可比行列式）</text>
  <text x="380" y="230" text-anchor="middle" font-size="11.5" fill="var(--muted)">先由"穿入穿出"定 r 的上下限（关于 θ 的函数），再定 θ 的范围</text>
</svg>
<figcaption>图 6　极坐标二重积分：面积元素 dσ = r dr dθ；r 的上下限用射线从原点穿入穿出区域来确定。</figcaption>
</figure>

<h3>5.3 二重积分换序</h3>
<p>换序是期末必考：先根据累次积分的上下限<strong>反画出积分区域 D</strong>，再按相反顺序重新定限。例如 ∫<sub>0</sub><sup>1</sub> dx ∫<sub>x</sub><sup>1</sup> f dy，画出 D：0 ≤ x ≤ 1，x ≤ y ≤ 1（即 y = x 上方、y = 1 下方的三角形），换序为 ∫<sub>0</sub><sup>1</sup> dy ∫<sub>0</sub><sup>y</sup> f dx。画图永远是第一步，不要硬背。</p>

<h3>5.4 三重积分</h3>
<p>三重积分 ∭<sub>Ω</sub> f dV。直角坐标"先一后二"：∭ = ∬<sub>D</sub> [∫<sub>z₁(x,y)</sub><sup>z₂(x,y)</sup> f dz] dxdy。<strong>柱坐标</strong>（含 x<sup>2</sup>+y<sup>2</sup>、旋转体）：dV = r dr dθ dz；<strong>球坐标</strong>（球域、被积含 x<sup>2</sup>+y<sup>2</sup>+z<sup>2</sup>）：dV = ρ<sup>2</sup> sin φ dρ dφ dθ。</p>

<h3>5.5 曲线积分与曲面积分初步</h3>
<ul>
<li><strong>第一类曲线积分（对弧长）</strong>：∫<sub>L</sub> f(x,y) ds，ds = √(x′(t)<sup>2</sup> + y′(t)<sup>2</sup>) dt，与方向无关；</li>
<li><strong>第二类曲线积分（对坐标）</strong>：∫<sub>L</sub> P dx + Q dy，<strong>与方向有关</strong>，反向要变号；</li>
<li><strong>格林公式</strong>：∮<sub>L</sub> P dx + Q dy = ∬<sub>D</sub> (∂Q/∂x − ∂P/∂y) dxdy，L 取正向（逆时针）。这是把闭合曲线积分转化为二重积分的利器；</li>
<li><strong>两类曲面积分</strong>：第一类对面积 dS，第二类对坐标，会考高斯公式（∯ 闭曲面 = ∭ 散度）的简单情形。</li>
</ul>

<h3>5.6 易错点</h3>
<ol>
<li>极坐标面积元素 dσ = r dr dθ，<strong>漏掉雅可比 r</strong> 是最高频错误；</li>
<li>换序前不画图、凭感觉写限，十有八九错；</li>
<li>第二类曲线积分反向要变号，格林公式要求 L 闭合且取正向，不闭合要"补线"再减回去；</li>
<li>三重积分柱坐标 dV = r dr dθ dz，球坐标 dV = ρ<sup>2</sup> sin φ dρ dφ dθ，两个雅可比因子不同，别记混。</li>
</ol>

<h2>六、常微分方程</h2>

<h3>6.1 一阶微分方程</h3>
<ul>
<li><strong>可分离变量</strong>：dy/dx = f(x)g(y)，分离为 dy/g(y) = f(x) dx，两边积分；</li>
<li><strong>齐次方程</strong>：dy/dx = φ(y/x)，令 u = y/x，化为可分离变量；</li>
<li><strong>一阶线性</strong>：y′ + P(x)y = Q(x)，通解公式：
<div class="formula">y = e<sup>−∫P dx</sup> [ ∫ Q(x) e<sup>∫P dx</sup> dx + C ]</div>
Q(x) ≡ 0 时为齐次线性，解为 y = C e<sup>−∫P dx</sup>；</li>
<li><strong>伯努利方程</strong>：y′ + P(x)y = Q(x)y<sup>n</sup>，令 z = y<sup>1−n</sup> 化为一阶线性。</li>
</ul>

<h3>6.2 二阶常系数线性微分方程</h3>
<p><strong>齐次</strong>：y″ + py′ + qy = 0。写出特征方程 r<sup>2</sup> + pr + q = 0，按根的三种情况写通解：</p>
<table class="table-wrap">
<tr><th>特征根情况</th><th>通解形式</th></tr>
<tr><td>两个不等实根 r<sub>1</sub> ≠ r<sub>2</sub></td><td>y = C<sub>1</sub> e<sup>r₁x</sup> + C<sub>2</sub> e<sup>r₂x</sup></td></tr>
<tr><td>重实根 r<sub>1</sub> = r<sub>2</sub> = r</td><td>y = (C<sub>1</sub> + C<sub>2</sub>x) e<sup>rx</sup></td></tr>
<tr><td>共轭复根 r = α ± iβ</td><td>y = e<sup>αx</sup>(C<sub>1</sub> cos βx + C<sub>2</sub> sin βx)</td></tr>
</table>
<p><strong>非齐次</strong>：y″ + py′ + qy = f(x)。解的结构：<strong>通解 = 齐次通解 + 一个特解 y*</strong>。特解用待定系数法：</p>
<ul>
<li>f(x) = e<sup>λx</sup> P<sub>m</sub>(x)：设 y* = x<sup>k</sup> e<sup>λx</sup> Q<sub>m</sub>(x)，λ 不是特征根 k=0、是单根 k=1、是重根 k=2，Q<sub>m</sub> 是与 P<sub>m</sub> 同次的待定多项式；</li>
<li>f(x) = e<sup>λx</sup>[P<sub>l</sub>(x)cos ωx + P<sub>n</sub>(x)sin ωx]：设 y* = x<sup>k</sup> e<sup>λx</sup>[R<sub>m</sub>(x)cos ωx + S<sub>m</sub>(x)sin ωx]，λ ± iω 是特征根时 k = 1，否则 k = 0，m = max(l,n)。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="二阶常系数方程特征根与解的形态示意图">
  <line x1="60" y1="190" x2="700" y2="190" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="120" y1="30" x2="120" y2="205" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M130 60 Q 200 120 260 100 T 380 90" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="255" y="70" text-anchor="middle" font-size="11.5" fill="var(--accent)">复根：振荡衰减 e^{αx}cosβx</text>
  <path d="M430 185 Q 500 100 560 60" fill="none" stroke="var(--text-2)" stroke-width="2.5"/>
  <text x="520" y="170" text-anchor="middle" font-size="11.5" fill="var(--text-2)">实根：指数增长/衰减</text>
  <text x="380" y="230" text-anchor="middle" font-size="11.5" fill="var(--muted)">先解特征方程，再按三种根的形态直接套通解表</text>
</svg>
<figcaption>图 7　特征根形态与解曲线：实根对应指数函数，复根对应衰减（或发散）振荡。</figcaption>
</figure>

<h3>6.3 易错点</h3>
<ol>
<li>分离变量时若 g(y) = 0 的解被除丢，要补回（如 y′ = y<sup>2</sup> 中 y = 0 也是解）；</li>
<li>一阶线性公式中 e<sup>∫P dx</sup> 的积分<strong>不要加 C</strong>（取一个原函数即可），常数 C 在最后统一加；</li>
<li>非齐次特解的 x<sup>k</sup> 升降幂：λ 是几重特征根就乘 x 的几次方，漏掉会导致特解代入恒为 0；</li>
<li>共轭复根要写成 e<sup>αx</sup>(C<sub>1</sub>cos βx + C<sub>2</sub>sin βx)，不要保留虚数形式。</li>
</ol>

<h2>七、综合公式速查表</h2>
<p>考前一晚把这张表从头到尾过一遍，每条公式都要能说出"用在哪、什么时候失效"。</p>
<table class="table-wrap">
<tr><th>板块</th><th>公式/结论</th><th>使用要点</th></tr>
<tr><td>两个重要极限</td><td>lim sinx/x = 1（x→0）；lim (1+1/x)^x = e（x→∞）</td><td>凑 0/0 与 1^∞ 两种基本型</td></tr>
<tr><td>等价无穷小</td><td>sinx~tanx~arcsinx~arctanx~ln(1+x)~e^x−1~x；1−cosx~x²/2；(1+x)^α−1~αx</td><td>只在乘除因子替换</td></tr>
<tr><td>洛必达法则</td><td>lim f/g = lim f′/g′</td><td>仅 0/0、∞/∞，先化简再用</td></tr>
<tr><td>导数定义</td><td>f′(x₀) = lim [f(x₀+h)−f(x₀)]/h</td><td>分段点、抽象函数题直接套</td></tr>
<tr><td>链式法则</td><td>dy/dx = f′(u)·g′(x)</td><td>由外到内层层相乘</td></tr>
<tr><td>中值定理</td><td>f(b)−f(a) = f′(ξ)(b−a)</td><td>证不等式、证等式的万能桥</td></tr>
<tr><td>泰勒展开</td><td>e^x、sinx、cosx、ln(1+x)、(1+x)^α</td><td>展开到第一个非零项</td></tr>
<tr><td>牛顿–莱布尼茨</td><td>∫[a,b] f dx = F(b)−F(a)</td><td>f 连续、F′ = f</td></tr>
<tr><td>换元/分部</td><td>∫ f[φ]φ′dx = ∫ f(u)du；∫u dv = uv−∫v du</td><td>定积分换元必换限；u 取"反对幂指三"</td></tr>
<tr><td>面积/体积</td><td>A=∫|f−g|dx；V=π∫f²(x)dx</td><td>先求交点定限</td></tr>
<tr><td>全微分</td><td>dz = f_x dx + f_y dy</td><td>偏导连续才保证可微</td></tr>
<tr><td>隐函数求导</td><td>∂z/∂x = −F_x/F_z</td><td>求 F_x 时三变量平等</td></tr>
<tr><td>极值判别</td><td>Δ = AC − B²</td><td>Δ&gt;0 看 A；Δ&lt;0 鞍点</td></tr>
<tr><td>拉格朗日</td><td>L = f + λφ</td><td>解 L 各偏导 = 0</td></tr>
<tr><td>二重积分</td><td>∬_D f dxdy；极坐标 dσ = r dr dθ</td><td>先画图定限，别丢 r</td></tr>
<tr><td>格林公式</td><td>∮Pdx+Qdy = ∬(Q_x−P_y)dxdy</td><td>曲线闭合、取正向</td></tr>
<tr><td>一阶线性方程</td><td>y = e^{−∫Pdx}[∫Q e^{∫Pdx} dx + C]</td><td>先标准化为 y′+Py=Q</td></tr>
<tr><td>二阶常系数齐次</td><td>特征方程按三种根写通解</td><td>重根乘 x，复根配 sin/cos</td></tr>
<tr><td>非齐次特解</td><td>y* = x^k e^{λx} Q_m(x)</td><td>λ 是 k 重特征根就乘 x^k</td></tr>
</table>

<h2>八、高频易错点总清单</h2>
<ol>
<li>极限含 e^{1/x}、arctan(1/x)、|x| 在 0 处不分左右。</li>
<li>等价无穷小替换用在加减项上，如 (tanx−sinx)/x³ 直接换得 0。</li>
<li>不定积分漏 +C；定积分换元不换限。</li>
<li>洛必达法则用在非 0/0、非 ∞/∞ 型，或用完不化简导致循环。</li>
<li>极值点漏掉不可导点；拐点只写横坐标不写纵坐标。</li>
<li>对称区间积分不先看奇偶性，硬算半个场的积分。</li>
<li>极坐标二重积分漏掉雅可比 r。</li>
<li>二重积分换序不画图，凭感觉写上下限。</li>
<li>隐函数求导公式中求 F_x 时把 z 当作 x 的函数。</li>
<li>二阶非齐次特解忘乘 x^k（λ 是特征根时），代入后恒为 0 还查不出原因。</li>
<li>格林公式用在不闭合曲线上——应先补线再用，最后减去补线部分。</li>
<li>拉格朗日乘数法忘记对 λ 求偏导（即忘记写约束条件 = 0）。</li>
</ol>

<h2>九、考前十条速记</h2>
<ul>
<li>看到 x→0 就想：能不能用等价无穷小？能不能凑两个重要极限？</li>
<li>看到 0/0、∞/∞ 就想：先化简，再洛必达，不行上泰勒。</li>
<li>分段函数分界点：左导 = 右导才叫可导。</li>
<li>证方程有根：闭区间连续 + 端点异号（零点定理）。</li>
<li>证不等式：拉格朗日中值定理或函数单调性。</li>
<li>积分先看：奇偶？对称区间？能不能凑微分？</li>
<li>分部积分 u 的选择：反对幂指三。</li>
<li>二重积分：先画图，再看能不能极坐标，换序必反画区域。</li>
<li>偏导存在 ≠ 可微；可微 ⟺ 偏导连续（充分）。</li>
<li>微分方程：先认类型，一阶先标准化，二阶先写特征方程。</li>
</ul>

<blockquote>
<p>复习建议：高等数学的期末卷 80% 分值来自基础题。把上面的公式表和易错清单过两遍，再把五类自测题按"先写后对"的方式做一遍，比刷新题更有效。考场上遇到卡壳的计算题，先回到最朴素的定义——极限用定义想左右、积分用牛莱公式找原函数、方程先认类型——大部分所谓的"难题"都会立刻现出原形。祝考试顺利。</p>
</blockquote>

<h2>十、期末自测：五类题型</h2>
<p>下面 36 道题按期末常考难度编写。建议先拿草稿纸自己做，再展开对照答案与解析。计算题务必写出完整步骤，阅卷按步给分。</p>

<h3>10.1 选择题</h3>

<details><summary>1. 极限 lim<sub>x→0</sub> (sin 3x) / (tan 5x) =（　）　A. 3/5　B. 5/3　C. 1　D. 0</summary><p><strong>答案：A。</strong>x→0 时 sin 3x ~ 3x，tan 5x ~ 5x，比值 = 3/5。B 把分子分母系数颠倒；C 误以为正弦正切极限恒为 1（那是 sinx/x）；D 误把 tan 5x 当作无穷大。</p></details>

<details><summary>2. 当 x→0 时，下列无穷小中与 x 不等价的是（　）　A. ln(1+2x) / 2　B. e<sup>2x</sup> − 1 再除以 2　C. 1 − cos x　D. arcsin x</summary><p><strong>答案：C。</strong>1 − cos x ~ x²/2，是 x 的二阶无穷小，不等价。A：ln(1+2x) ~ 2x，除以 2 后 ~ x；B：e^{2x}−1 ~ 2x，除以 2 后 ~ x；D：arcsin x ~ x。</p></details>

<details><summary>3. 函数 f(x) = (x² − 1) / (x − 1) 在 x = 1 处的间断点类型是（　）　A. 连续点　B. 可去间断点　C. 跳跃间断点　D. 无穷间断点</summary><p><strong>答案：B。</strong>x→1 时 f(x) = (x+1)(x−1)/(x−1) → 2，左右极限存在且相等，但 f(1) 无定义，属可去间断点。A 错在 f(1) 不存在、不连续；C 错在左右极限相等；D 错在极限为有限值 2 而非无穷。</p></details>

<details><summary>4. 设 f(x) 在 x = a 处可导，则 lim<sub>h→0</sub> [f(a+h) − f(a−h)] / (2h) =（　）　A. f′(a)　B. 2f′(a)　C. f′(a)/2　D. 0</summary><p><strong>答案：A。</strong>拆成 [f(a+h)−f(a)]/(2h) + [f(a)−f(a−h)]/(2h)，两项各为 f′(a)/2，合计 f′(a)。B、C 系数错算；D 误判分子为 0。注意：此极限存在<strong>不一定</strong>能推出可导，但题设已给可导，故成立。</p></details>

<details><summary>5. 函数 y = x³ − 3x 的极小值点是（　）　A. x = −1　B. x = 0　C. x = 1　D. x = ±1</summary><p><strong>答案：C。</strong>y′ = 3x² − 3 = 0 得 x = ±1；y″ = 6x，在 x = 1 处 y″ = 6 &gt; 0 为极小，在 x = −1 处 y″ = −6 &lt; 0 为极大。A 是极大值点；B 不是驻点；D 把两个驻点混为极值点且不分大小。</p></details>

<details><summary>6. 设 z = x²y + xy²，则 ∂z/∂x =（　）　A. 2xy + y²　B. x² + 2xy　C. 2xy + 2xy　D. x²y</summary><p><strong>答案：A。</strong>对 x 求偏导时 y 视为常数：∂(x²y)/∂x = 2xy，∂(xy²)/∂x = y²。B 是对 y 求偏导的结果；C 重复加和；D 完全没求导。</p></details>

<details><summary>7. 二重积分 ∬<sub>D</sub> dxdy（D 为 x² + y² ≤ 4）的值为（　）　A. 4π　B. 2π　C. 8π　D. 16π</summary><p><strong>答案：A。</strong>被积函数为 1 时二重积分等于区域面积，半径 2 的圆盘面积 = π·2² = 4π。B 误用半径 2 的周长思路；C、D 系数或半径平方算错。</p></details>

<details><summary>8. 微分方程 y″ − 4y′ + 4y = 0 的通解是（　）　A. y = C₁e^{2x} + C₂e^{−2x}　B. y = (C₁ + C₂x)e^{2x}　C. y = e^{2x}(C₁cos 2x + C₂sin 2x)　D. y = C₁e^{2x}</summary><p><strong>答案：B。</strong>特征方程 r² − 4r + 4 = (r−2)² = 0，重根 r = 2，通解 y = (C₁ + C₂x)e^{2x}。A 对应两不等实根；C 对应共轭复根；D 漏掉第二个线性无关解。</p></details>

<h3>10.2 填空题</h3>

<details><summary>1. lim<sub>x→∞</sub> (1 + 2/x)<sup>x</sup> = ________。</summary><p><strong>答案：e²。</strong>(1+2/x)^x = [(1+2/x)^{x/2}]² → e²。</p></details>

<details><summary>2. lim<sub>x→0</sub> (1 − cos x) / x² = ________。</summary><p><strong>答案：1/2。</strong>1 − cos x ~ x²/2，比值 = 1/2。</p></details>

<details><summary>3. 曲线 y = ln x 在点 (1, 0) 处的切线方程为 ________。</summary><p><strong>答案：y = x − 1。</strong>y′ = 1/x，在 x = 1 处斜率 k = 1，切线 y − 0 = 1·(x − 1)。</p></details>

<details><summary>4. ∫ x e^{x²} dx = ________。</summary><p><strong>答案：(1/2)e^{x²} + C。</strong>凑微分：x dx = d(x²/2)，令 u = x²/2，则 ∫ e^{x²} d(x²/2) = (1/2)e^{x²} + C。</p></details>

<details><summary>5. ∫<sub>0</sub><sup>π/2</sup> sin x dx = ________。</summary><p><strong>答案：1。</strong>[−cos x]<sub>0</sub><sup>π/2</sup> = 0 − (−1) = 1。</p></details>

<details><summary>6. 设 z = e^{xy}，则全微分 dz = ________。</summary><p><strong>答案：dz = e^{xy}(y dx + x dy)。</strong>∂z/∂x = ye^{xy}，∂z/∂y = xe^{xy}。</p></details>

<details><summary>7. 交换积分次序：∫<sub>0</sub><sup>1</sup> dx ∫<sub>0</sub><sup>x</sup> f(x,y) dy = ________。</summary><p><strong>答案：∫<sub>0</sub><sup>1</sup> dy ∫<sub>y</sub><sup>1</sup> f(x,y) dx。</strong>区域 D：0 ≤ x ≤ 1，0 ≤ y ≤ x（直线 y = x 下方的三角形），按 Y–型写为 0 ≤ y ≤ 1，y ≤ x ≤ 1。</p></details>

<details><summary>8. 微分方程 y′ = 2xy 的通解为 ________。</summary><p><strong>答案：y = Ce^{x²}。</strong>分离变量 dy/y = 2x dx，积分得 ln|y| = x² + C₁，即 y = Ce^{x²}。</p></details>

<h3>10.3 判断题</h3>

<details><summary>1. 若 lim<sub>x→x₀</sub> f(x) 存在，则 f(x) 在 x₀ 处必有定义。</summary><p><strong>答案：×。</strong>极限是"去心邻域"的概念，与 f(x₀) 是否有定义无关，例如 sin x / x 在 0 处无定义但极限为 1。</p></details>

<details><summary>2. 若 f(x) 在 x₀ 处可导，则 f(x) 在 x₀ 处必连续。</summary><p><strong>答案：√。</strong>可导是比连续更强的条件，可导 ⇒ 连续。</p></details>

<details><summary>3. 若 f′(x₀) = 0，则 x₀ 必为 f(x) 的极值点。</summary><p><strong>答案：×。</strong>驻点不一定是极值点，例如 f(x) = x³ 在 x = 0 处 f′(0) = 0 但不是极值点（两侧同为增）。</p></details>

<details><summary>4. 若 f(x) 在 [a,b] 上连续且 f(a)·f(b) &lt; 0，则 (a,b) 内至少存在一个 ξ 使 f(ξ) = 0。</summary><p><strong>答案：√。</strong>这正是零点定理的标准条件与结论。</p></details>

<details><summary>5. 若 f(x) 在 [a,b] 上可积，则 f(x) 在 [a,b] 上必连续。</summary><p><strong>答案：×。</strong>可积条件比连续弱：有界且只有有限个间断点的函数也可积，例如符号函数在 [−1,1] 上可积。</p></details>

<details><summary>6. 二元函数 z = f(x,y) 在 (x₀,y₀) 处的两个偏导数都存在，则函数在该点必连续。</summary><p><strong>答案：×。</strong>偏导存在推不出连续（经典反例 f(x,y) = xy/(x²+y²)，f(0,0)=0，两偏导在原点为 0 但不连续）。</p></details>

<details><summary>7. 二重积分 ∬<sub>D</sub> f(x,y) dxdy 的值只与被积函数和积分区域 D 有关，与积分变量记号无关。</summary><p><strong>答案：√。</strong>积分变量是哑变量，∬ f(x,y) dxdy = ∬ f(u,v) dudv。</p></details>

<details><summary>8. 微分方程 y″ + y = 0 的通解为 y = C₁cos x + C₂sin x。</summary><p><strong>答案：√。</strong>特征方程 r² + 1 = 0，根 r = ±i（α=0，β=1），通解正是 e^{0}(C₁cos x + C₂sin x)。</p></details>

<h3>10.4 简答题</h3>

<details><summary>1. 简述极限存在、连续、可导、可微四者之间的蕴含关系。</summary><p><strong>答题要点：</strong></p><ul>
<li>一元情形：可微 ⟺ 可导；可导 ⇒ 连续；连续 ⇒ 极限存在；</li>
<li>反向均不成立：连续不一定可导（|x| 在 0），极限存在不一定连续（可去间断点）；</li>
<li>多元情形：可微 ⇒ 偏导存在且连续；偏导存在推不出可微也推不出连续。</li>
</ul></details>

<details><summary>2. 简述等价无穷小替换法则及其使用限制。</summary><p><strong>答题要点：</strong></p><ul>
<li>α ~ β 且 lim αf 存在时，lim αf = lim βf（乘除因子可替换）；</li>
<li>加减项中不能随意替换，否则可能改变主项（反例：(tan x − sin x)/x³）；</li>
<li>常见替换：sin x ~ tan x ~ arcsin x ~ arctan x ~ ln(1+x) ~ e^x−1 ~ x；1−cos x ~ x²/2。</li>
</ul></details>

<details><summary>3. 叙述拉格朗日中值定理，并说明它与罗尔定理的关系。</summary><p><strong>答题要点：</strong></p><ul>
<li>条件：f 在 [a,b] 连续、(a,b) 内可导；结论：存在 ξ ∈ (a,b) 使 f(b) − f(a) = f′(ξ)(b−a)；</li>
<li>罗尔定理是其特例：当 f(a) = f(b) 时结论退化为 f′(ξ) = 0；</li>
<li>应用：证等式、证不等式、推导单调性与泰勒公式。</li>
</ul></details>

<details><summary>4. 简述定积分换元积分法的法则及"换元必换限"的原因。</summary><p><strong>答题要点：</strong></p><ul>
<li>∫<sub>a</sub><sup>b</sup> f(x) dx，令 x = φ(t)，t 从 α 到 β（φ(α) = a，φ(β) = b），则 ∫<sub>a</sub><sup>b</sup> f(x) dx = ∫<sub>α</sub><sup>β</sup> f[φ(t)]φ′(t) dt；</li>
<li>换元后积分上下限必须换成新变量的对应范围，因为积分区间已随变量替换同步改变；</li>
<li>与不定积分不同，定积分换元后<strong>不必回代</strong>，直接对新变量算到新的上下限。</li>
</ul></details>

<details><summary>5. 简述格林公式的内容及使用条件。</summary><p><strong>答题要点：</strong></p><ul>
<li>设闭区域 D 由分段光滑正向曲线 L 围成，P、Q 在 D 上具有一阶连续偏导，则 ∮<sub>L</sub> P dx + Q dy = ∬<sub>D</sub> (∂Q/∂x − ∂P/∂y) dxdy；</li>
<li>条件：L 闭合、取正向（逆时针）、P、Q 偏导连续；</li>
<li>不闭合时可"补线"成闭合曲线，用格林公式后再减去补线积分。</li>
</ul></details>

<details><summary>6. 简述二阶常系数非齐次线性微分方程解的结构，以及求特解的待定系数法要点。</summary><p><strong>答题要点：</strong></p><ul>
<li>解的结构：通解 = 对应齐次方程的通解 + 非齐次的一个特解 y*；</li>
<li>齐次通解由特征方程根的三种情况（不等实根、重根、共轭复根）写出；</li>
<li>自由项为 e^{λx}P_m(x) 时设 y* = x^k e^{λx} Q_m(x)，λ 是 k 重特征根就乘 x^k；</li>
<li>含 sin/cos 时按 λ ± iω 是否为特征根决定是否乘 x。</li>
</ul></details>

<h3>10.5 计算题</h3>

<details><summary>1. 求极限 lim<sub>x→0</sub> (e^{x²} − 1) / (x sin x)。</summary><p><strong>解：</strong>x→0 时，e^{x²} − 1 ~ x²，sin x ~ x，因此 x sin x ~ x²。</p><div class="formula">原式 = lim<sub>x→0</sub> x² / (x · x) = lim<sub>x→0</sub> x² / x² = 1</div><p>结果为 1。注意：此处分子分母都是乘除因子，等价无穷小替换合法；不要用洛必达，否则越洛越繁。</p></details>

<details><summary>2. 求不定积分 ∫ x cos x dx。</summary><p><strong>解：</strong>被积函数是"幂 × 三角"，按"反对幂指三"取 u = x（幂排在指、三之前？此处三角在最后，故 u 选幂函数 x），dv = cos x dx。</p><div class="formula">u = x，dv = cos x dx ⇒ du = dx，v = sin x<br>
∫ x cos x dx = x sin x − ∫ sin x dx = x sin x + cos x + C</div><p>结果为 x sin x + cos x + C。别忘了 + C；检验：(x sin x + cos x)′ = sin x + x cos x − sin x = x cos x，正确。</p></details>

<details><summary>3. 求由 y = x² 与 y = x 所围平面图形绕 x 轴旋转所得旋转体的体积。</summary><p><strong>解：</strong>先求交点：x² = x 得 x = 0 或 x = 1，积分区间 [0,1]。在 [0,1] 上 x ≥ x²，外半径 R = x，内半径 r = x²，用" washer 垫圈法"。</p><div class="formula">V = π ∫<sub>0</sub><sup>1</sup> [R² − r²] dx = π ∫<sub>0</sub><sup>1</sup> (x² − x⁴) dx<br>
= π [ x³/3 − x⁵/5 ]<sub>0</sub><sup>1</sup> = π (1/3 − 1/5) = 2π/15</div><p>结果为 V = 2π/15。注意是两条曲线之间的区域旋转，必须用外半径平方减内半径平方，不能只 π∫f² dx。</p></details>

<details><summary>4. 求微分方程 y″ − 2y′ − 3y = 3x + 1 的通解。</summary><p><strong>解：</strong>第一步解齐次：特征方程 r² − 2r − 3 = 0，即 (r−3)(r+1) = 0，得 r₁ = 3，r₂ = −1。齐次通解 Y = C₁e^{3x} + C₂e^{−x}。</p><div class="formula">第二步求特解：自由项 3x + 1 是一次多项式（对应 λ = 0），<br>
λ = 0 不是特征根，设 y* = ax + b。<br>
y*′ = a，y*″ = 0，代入：0 − 2a − 3(ax + b) = 3x + 1<br>
比较系数：−3a = 3 ⇒ a = −1；−2a − 3b = 1 ⇒ 2 − 3b = 1 ⇒ b = 1/3<br>
y* = −x + 1/3</div><p>通解为 y = C₁e^{3x} + C₂e^{−x} − x + 1/3。注意 λ = 0 不是特征根，所以不乘 x；若设成二次就白算了。</p></details>

<details><summary>5. 交换二重积分次序并计算 I = ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x</sub><sup>1</sup> e^{−y²} dy。</summary><p><strong>解：</strong>内层 e^{−y²} 无初等原函数，必须换序。区域 D：0 ≤ x ≤ 1，x ≤ y ≤ 1，即三角形 0 ≤ y ≤ 1，0 ≤ x ≤ y。</p><div class="formula">I = ∫<sub>0</sub><sup>1</sup> dy ∫<sub>0</sub><sup>y</sup> e^{−y²} dx = ∫<sub>0</sub><sup>1</sup> e^{−y²} · [x]<sub>0</sub><sup>y</sup> dy<br>
= ∫<sub>0</sub><sup>1</sup> y e^{−y²} dy = [ −(1/2)e^{−y²} ]<sub>0</sub><sup>1</sup> = (1 − e^{−1}) / 2</div><p>结果为 I = (1 − e^{−1})/2 ≈ 0.316。本题是换序思想的经典题：先积 x 把 e^{−y²} 当常数提出，内层积分出来一个 y，正好凑微分。</p></details>

<details><summary>6. 设方程 e^{z} = xyz 确定隐函数 z = z(x,y)，求 ∂z/∂x 与全微分 dz。</summary><p><strong>解：</strong>令 F(x,y,z) = e^{z} − xyz = 0。求偏导时三变量平等：F<sub>x</sub> = −yz，F<sub>y</sub> = −xz，F<sub>z</sub> = e^{z} − xy。</p><div class="formula">∂z/∂x = −F<sub>x</sub>/F<sub>z</sub> = yz / (e^{z} − xy)<br>
∂z/∂y = −F<sub>y</sub>/F<sub>z</sub> = xz / (e^{z} − xy)<br>
dz = [yz / (e^{z} − xy)] dx + [xz / (e^{z} − xy)] dy</div><p>结果如上。注意分母 F<sub>z</sub> = e^{z} − xy ≠ 0 时公式成立；也可两边直接对 x 求导（把 z 当作 x,y 的函数）验证：e^{z}z<sub>x</sub> = yz + xy·z<sub>x</sub>，移项即得相同结果。</p></details>

`
  }
);
