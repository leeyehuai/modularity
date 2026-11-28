/* 文章模块：考研数学一笔记·概率论与数理统计 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'kaoyan-math1-gailv-tongji',
    title: '考研数学一笔记·概率论与数理统计：考点、公式与题型速查',
    desc: '按数学一大纲系统梳理概率论八章核心考点（随机事件与概率、一维与多维随机变量及其分布、数字特征、大数定律与中心极限定理）与数理统计三章（抽样分布、参数估计、假设检验），附重要分布表、易错点、示意图、公式速查大表，以及选择8题、填空8题、判断6题、简答5题、计算8题共35道专项习题，适合强化与冲刺阶段速查。',
    major: '数学',
    category: '考研数学',
    tags: ['考研数学一', '概率论', '数理统计', '复习笔记'],
    date: '2026-11-28',
    minutes: 30,
    content: `
<p>概率论与数理统计在数学一中约占 <strong>22%（33 分）</strong>，题型固定：两道选择、一道填空、一道解答大题（多为二维随机变量、数字特征、参数估计三类之一）。与高数、线代相比，它的<strong>计算难度不高，但概念性极强</strong>——分布函数是否连续、密度是否归一、独立与不相关、两类错误，这些“一句话概念题”才是真正的失分点。本笔记按大纲八章顺序，把定义、公式、性质、易错点和示意图一次梳理到位，最后附 35 道专项习题。</p>

<blockquote><p>复习建议：概率的精髓是“分布决定一切”。拿到任何一个随机变量，先问自己三件事——它的分布律（或密度）是什么？期望和方差是多少？它与别的变量是否独立？把这三件事练成条件反射，大题基本不会跑偏。</p></blockquote>

<h2>第 1 章　随机事件和概率</h2>
<p>本章是整个概率论的语言层。古典概型、加法公式、条件概率、全概率与贝叶斯、独立性五大块，几乎每年都以选择或填空形式出现。</p>

<h3>1.1 核心考点</h3>
<ul>
<li><strong>随机事件的关系与运算</strong>：包含 A ⊂ B、和事件 A ∪ B（A + B）、积事件 A ∩ B（AB）、差事件 A − B = A − AB、互不相容（AB = ∅）、对立事件（A ∪ B = Ω 且 AB = ∅，记 B = Ā）。运算律满足交换律、结合律、分配律，以及<strong>德摩根律</strong>：overline(A ∪ B) = ĀB̄，overline(AB) = Ā ∪ B̄。</li>
<li><strong>概率的公理化定义</strong>：对随机试验 E 的每一事件 A 赋予实数 P(A)，满足：非负性 P(A) ≥ 0；规范性 P(Ω) = 1；可列可加性——互不相容事件列 A<sub>1</sub>, A<sub>2</sub>, … 有 P(∪A<sub>i</sub>) = Σ P(A<sub>i</sub>)。</li>
<li><strong>古典概型</strong>：样本空间有限、每个基本事件等可能。P(A) = A 包含的基本事件数 / 基本事件总数。常用排列组合公式：C(n,k) = n! / [k!(n−k)!]，A(n,k) = n!/(n−k)!。</li>
<li><strong>几何概型</strong>：样本空间为可度量的几何区域 Ω，P(A) = A 的度量 / Ω 的度量（长度、面积、体积）。</li>
<li><strong>加法公式</strong>：P(A ∪ B) = P(A) + P(B) − P(AB)。推广到三个事件：P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(AB) − P(AC) − P(BC) + P(ABC)。特别地，A 与 B 互不相容时 P(AB) = 0，简化为 P(A ∪ B) = P(A) + P(B)。</li>
<li><strong>条件概率</strong>：P(B | A) = P(AB) / P(A)（要求 P(A) &gt; 0）。条件概率满足概率的全部公理。</li>
<li><strong>乘法公式</strong>：P(AB) = P(A)·P(B | A) = P(B)·P(A | B)。推广：P(A<sub>1</sub>A<sub>2</sub>…A<sub>n</sub>) = P(A<sub>1</sub>)P(A<sub>2</sub>|A<sub>1</sub>)P(A<sub>3</sub>|A<sub>1</sub>A<sub>2</sub>)…P(A<sub>n</sub>|A<sub>1</sub>…A<sub>n−1</sub>)。</li>
<li><strong>全概率公式</strong>：设 B<sub>1</sub>, B<sub>2</sub>, …, B<sub>n</sub> 为 Ω 的一个划分（两两互不相容且并集为 Ω，且 P(B<sub>i</sub>) &gt; 0），则 P(A) = Σ<sub>i=1..n</sub> P(B<sub>i</sub>)·P(A | B<sub>i</sub>)。</li>
<li><strong>贝叶斯公式</strong>：P(B<sub>k</sub> | A) = P(B<sub>k</sub>)P(A | B<sub>k</sub>) / Σ<sub>i</sub> P(B<sub>i</sub>)P(A | B<sub>i</sub>)。分子是“先验概率 × 似然”，分母是全概率。</li>
<li><strong>事件独立性</strong>：A、B 相互独立 ⟺ P(AB) = P(A)P(B)。多个事件相互独立要求：任意有限个的积事件概率等于各自概率之积（比“两两独立”更强）。若 A、B 独立，则 A 与 B̄、Ā 与 B、Ā 与 B̄ 也分别独立。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="概率加法与乘法公式关系图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">加法公式与乘法公式的关系（韦恩图视角）</text>
  <circle cx="240" cy="130" r="80" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <circle cx="340" cy="130" r="80" fill="none" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="205" y="130" text-anchor="middle" font-size="13" font-weight="700" fill="var(--text)">A</text>
  <text x="375" y="130" text-anchor="middle" font-size="13" font-weight="700" fill="var(--text)">B</text>
  <text x="290" y="134" text-anchor="middle" font-size="11" fill="var(--text-2)">AB</text>
  <text x="240" y="222" text-anchor="middle" font-size="11.5" fill="var(--text-2)">P(A ∪ B) = P(A) + P(B) − P(AB)</text>
  <rect x="480" y="60" width="240" height="46" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="600" y="80" text-anchor="middle" font-size="12" fill="var(--text)">独立：P(AB) = P(A)P(B)</text>
  <text x="600" y="97" text-anchor="middle" font-size="11" fill="var(--muted)">P(B|A) = P(B)，P(A|B) = P(A)</text>
  <rect x="480" y="122" width="240" height="46" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="600" y="142" text-anchor="middle" font-size="12" fill="var(--text)">不独立：P(AB) = P(A)P(B|A)</text>
  <text x="600" y="159" text-anchor="middle" font-size="11" fill="var(--muted)">已知 A 发生后 B 的“更新概率”</text>
  <rect x="480" y="184" width="240" height="36" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="600" y="206" text-anchor="middle" font-size="11.5" fill="var(--text)">全概率：P(A) = Σ P(B<sub>i</sub>)P(A|B<sub>i</sub>)</text>
</svg>
<figcaption>图 1.1　加法、乘法、全概率与独立性的逻辑关系</figcaption>
</figure>

<h3>1.2 易错点</h3>
<ol>
<li>把“P(B | A)”与“P(A | B)”搞混。条件概率中“已知的事件”在竖线右边，一定要先锁定样本空间已缩小到 A。</li>
<li>事件独立与事件互不相容混淆：当 P(A) &gt; 0 且 P(B) &gt; 0 时，独立与互不相容<strong>不能同时成立</strong>（独立则 P(AB) = P(A)P(B) &gt; 0，相容）。</li>
<li>全概率公式的划分必须满足“两两互不相容且并集为 Ω”，漏项或重复都会出错。</li>
<li>古典概型中用排列还是组合要统一：分子分母的样本空间必须一致（都有序或都无序）。</li>
<li>贝叶斯公式的分子分母不要漏乘先验概率 P(B<sub>k</sub>)，直接写 P(A | B<sub>k</sub>) 是常见错误。</li>
</ol>

<h2>第 2 章　一维随机变量及其分布</h2>
<p>本章是概率的“代数化”核心：把随机现象用一个取值于实数的变量 X 描述，并用分布律 / 密度 / 分布函数把它“全部装下”。八大常见分布必须背熟期望、方差与表达式。</p>

<h3>2.1 核心考点</h3>
<ul>
<li><strong>分布律（离散型）</strong>：P{X = x<sub>k</sub>} = p<sub>k</sub>，k = 1, 2, …。性质：p<sub>k</sub> ≥ 0；Σ p<sub>k</sub> = 1。</li>
<li><strong>概率密度（连续型）</strong>：存在非负可积函数 f(x)，使对任意 a ≤ b 有 P{a &lt; X ≤ b} = ∫<sub>a</sub><sup>b</sup> f(x)dx。性质：f(x) ≥ 0；∫<sub>−∞</sub><sup>+∞</sup> f(x)dx = 1。注意：连续型随机变量取单点值的概率为 0，因此区间端点是否包含不影响概率。</li>
<li><strong>分布函数</strong>：F(x) = P{X ≤ x}。性质：0 ≤ F(x) ≤ 1；F(−∞) = 0，F(+∞) = 1；F(x) 单调不减；F(x) 右连续。对连续型有 F(x) = ∫<sub>−∞</sub><sup>x</sup> f(t)dt，且在 f 的连续点有 F′(x) = f(x)。</li>
<li><strong>常见离散分布</strong>：
<ul>
<li>0-1 分布（伯努利分布）：P{X = 1} = p，P{X = 0} = 1 − p。E(X) = p，D(X) = p(1−p)。</li>
<li>二项分布 B(n, p)：P{X = k} = C(n,k) p<sup>k</sup>(1−p)<sup>n−k</sup>，k = 0, 1, …, n。E(X) = np，D(X) = np(1−p)。它是 n 次独立重复伯努利试验中成功次数的分布。</li>
<li>泊松分布 P(λ)：P{X = k} = λ<sup>k</sup>e<sup>−λ</sup> / k!，k = 0, 1, 2, …。E(X) = D(X) = λ。当 n 很大、p 很小时，B(n,p) 近似于 P(λ = np)。</li>
<li>几何分布 Ge(p)：P{X = k} = (1−p)<sup>k−1</sup>p，k = 1, 2, …（首次成功的试验次数）。E(X) = 1/p，D(X) = (1−p)/p<sup>2</sup>。具有无记忆性。</li>
<li>超几何分布 H(n, M, N)：N 件产品中有 M 件次品，任取 n 件中的次品数。当 N 很大时近似于 B(n, M/N)。</li>
</ul>
</li>
<li><strong>常见连续分布</strong>：
<ul>
<li>均匀分布 U(a, b)：f(x) = 1/(b−a)，a &lt; x &lt; b。E(X) = (a+b)/2，D(X) = (b−a)<sup>2</sup>/12。</li>
<li>指数分布 E(λ)：f(x) = λe<sup>−λx</sup>，x &gt; 0；F(x) = 1 − e<sup>−λx</sup>。E(X) = 1/λ，D(X) = 1/λ<sup>2</sup>。具有无记忆性：P{X &gt; s+t | X &gt; s} = P{X &gt; t}。</li>
<li>正态分布 N(μ, σ<sup>2</sup>)：f(x) = 1/(σ√(2π)) · exp[−(x−μ)<sup>2</sup>/(2σ<sup>2</sup>)]。E(X) = μ，D(X) = σ<sup>2</sup>。标准化：Z = (X − μ)/σ ~ N(0, 1)。</li>
</ul>
</li>
<li><strong>3σ 准则</strong>：X ~ N(μ, σ<sup>2</sup>) 时，P{|X − μ| &lt; σ} ≈ 0.6826，P{|X − μ| &lt; 2σ} ≈ 0.9544，P{|X − μ| &lt; 3σ} ≈ 0.9974。落在 (μ − 3σ, μ + 3σ) 之外的概率仅约 0.26%。</li>
<li><strong>随机变量函数的分布</strong>：若 Y = g(X)。离散型：直接由 X 的分布律列出 Y 的取值及对应概率（相同值合并）。连续型：分布函数法——F<sub>Y</sub>(y) = P{g(X) ≤ y} = ∫<sub>{x: g(x) ≤ y}</sub> f<sub>X</sub>(x)dx，再对 y 求导得 f<sub>Y</sub>(y)。当 g 严格单调时可用公式 f<sub>Y</sub>(y) = f<sub>X</sub>(h(y))·|h′(y)|，其中 x = h(y) 是 y = g(x) 的反函数。</li>
</ul>

<h3>2.2 八大常见分布表</h3>
<div class="table-wrap"><table>
<thead><tr><th>分布</th><th>记号</th><th>分布律 / 密度</th><th>期望</th><th>方差</th></tr></thead>
<tbody>
<tr><td>0-1 分布</td><td>B(1, p)</td><td>P{X=1}=p，P{X=0}=1−p</td><td>p</td><td>p(1−p)</td></tr>
<tr><td>二项分布</td><td>B(n, p)</td><td>C(n,k) p<sup>k</sup>(1−p)<sup>n−k</sup></td><td>np</td><td>np(1−p)</td></tr>
<tr><td>泊松分布</td><td>P(λ)</td><td>λ<sup>k</sup>e<sup>−λ</sup>/k!</td><td>λ</td><td>λ</td></tr>
<tr><td>几何分布</td><td>Ge(p)</td><td>(1−p)<sup>k−1</sup>p，k=1,2,…</td><td>1/p</td><td>(1−p)/p<sup>2</sup></td></tr>
<tr><td>均匀分布</td><td>U(a, b)</td><td>1/(b−a)，a&lt;x&lt;b</td><td>(a+b)/2</td><td>(b−a)<sup>2</sup>/12</td></tr>
<tr><td>指数分布</td><td>E(λ)</td><td>λe<sup>−λx</sup>，x&gt;0</td><td>1/λ</td><td>1/λ<sup>2</sup></td></tr>
<tr><td>正态分布</td><td>N(μ, σ<sup>2</sup>)</td><td>1/(σ√(2π)) exp[−(x−μ)<sup>2</sup>/(2σ<sup>2</sup>)]</td><td>μ</td><td>σ<sup>2</sup></td></tr>
<tr><td>超几何分布</td><td>H(n, M, N)</td><td>C(M,k)C(N−M,n−k)/C(N,n)</td><td>n·M/N</td><td>n·(M/N)(1−M/N)·(N−n)/(N−1)</td></tr>
</tbody>
</table></div>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="分布律与密度对比图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">离散型分布律 vs 连续型概率密度</text>
  <line x1="60" y1="190" x2="360" y2="190" stroke="var(--muted)" stroke-width="1.2"/>
  <line x1="60" y1="190" x2="60" y2="50" stroke="var(--muted)" stroke-width="1.2"/>
  <rect x="100" y="140" width="16" height="50" fill="var(--accent)" opacity="0.8"/>
  <rect x="150" y="90" width="16" height="100" fill="var(--accent)" opacity="0.8"/>
  <rect x="200" y="60" width="16" height="130" fill="var(--accent)" opacity="0.8"/>
  <rect x="250" y="100" width="16" height="90" fill="var(--accent)" opacity="0.8"/>
  <rect x="300" y="150" width="16" height="40" fill="var(--accent)" opacity="0.8"/>
  <text x="200" y="210" text-anchor="middle" font-size="11.5" fill="var(--text-2)">离散型：纵轴是概率 p<sub>k</sub>，柱高之和 = 1</text>
  <line x1="420" y1="190" x2="720" y2="190" stroke="var(--muted)" stroke-width="1.2"/>
  <line x1="420" y1="190" x2="420" y2="50" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M430,190 Q500,185 540,120 Q580,60 610,60 Q640,60 680,120 Q720,185 725,190 L725,190 L430,190 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="575" y="210" text-anchor="middle" font-size="11.5" fill="var(--text-2)">连续型：曲线下方面积 = 1，单点概率 = 0</text>
</svg>
<figcaption>图 2.1　分布律（左）与密度（右）的本质区别</figcaption>
</figure>

<h3>2.3 易错点</h3>
<ol>
<li>忘记对密度函数 f(x) 做归一化验证：∫f(x)dx = 1 是求未知参数 C 的核心方程。</li>
<li>分布函数 F(x) 的取值范围必须含端点（右连续），且在跳跃点处等于左极限 + 跳跃高度。</li>
<li>连续型随机变量 Y = g(X) 的分布函数法中，积分区域 {x : g(x) ≤ y} 容易写错，建议画草图辅助。</li>
<li>正态分布标准化时，Z = (X − μ)/σ 的分母是 σ（标准差）而不是 σ<sup>2</sup>。</li>
<li>几何分布与指数分布的无记忆性是“对时间/次数的剩余等待时间分布不变”，不要误认为“已经发生的不影响未来概率”这句话在离散型里同样适用于其他分布。</li>
</ol>

<h2>第 3 章　多维随机变量及其分布</h2>
<p>二维随机变量是数学一解答题的最高频考点：联合密度、边缘密度、条件密度、独立性判断、和的分布，套路固定但计算量大。</p>

<h3>3.1 核心考点</h3>
<ul>
<li><strong>联合分布函数</strong>：F(x, y) = P{X ≤ x, Y ≤ y}。性质：对每个变量单调不减；F(−∞, y) = F(x, −∞) = 0；F(+∞, +∞) = 1；右连续；矩形概率 P{a &lt; X ≤ b, c &lt; Y ≤ d} = F(b,d) − F(a,d) − F(b,c) + F(a,c)。</li>
<li><strong>联合概率密度（连续型）</strong>：f(x, y) ≥ 0；∫∫ f(x,y)dxdy = 1；对任意平面区域 D，P{(X,Y) ∈ D} = ∫∫<sub>D</sub> f(x,y)dxdy。</li>
<li><strong>边缘分布</strong>：f<sub>X</sub>(x) = ∫<sub>−∞</sub><sup>+∞</sup> f(x, y)dy，f<sub>Y</sub>(y) = ∫<sub>−∞</sub><sup>+∞</sup> f(x, y)dx。离散情形：p<sub>i·</sub> = Σ<sub>j</sub> p<sub>ij</sub>，p<sub>·j</sub> = Σ<sub>i</sub> p<sub>ij</sub>。</li>
<li><strong>条件分布</strong>：f<sub>Y|X</sub>(y | x) = f(x, y) / f<sub>X</sub>(x)（要求 f<sub>X</sub>(x) &gt; 0）。离散情形：P{Y = y<sub>j</sub> | X = x<sub>i</sub>} = p<sub>ij</sub> / p<sub>i·</sub>。</li>
<li><strong>独立性</strong>：X 与 Y 相互独立 ⟺ F(x, y) = F<sub>X</sub>(x)·F<sub>Y</sub>(y) ⟺ f(x, y) = f<sub>X</sub>(x)·f<sub>Y</sub>(y)（连续型）。等价说法：对任意可测集 A、B，P{X ∈ A, Y ∈ B} = P{X ∈ A}P{Y ∈ B}。</li>
<li><strong>二维均匀分布</strong>：f(x, y) = 1/S(D)，(x, y) ∈ D（S(D) 为区域 D 的面积）；区域外为 0。</li>
<li><strong>二维正态分布 N(μ<sub>1</sub>, μ<sub>2</sub>, σ<sub>1</sub><sup>2</sup>, σ<sub>2</sub><sup>2</sup>, ρ)</strong>：密度含指数项 −1/[2(1−ρ<sup>2</sup>] · [(x−μ<sub>1</sub>)<sup>2</sup>/σ<sub>1</sub><sup>2</sup> − 2ρ(x−μ<sub>1</sub>)(y−μ<sub>2</sub>)/(σ<sub>1</sub>σ<sub>2</sub>) + (y−μ<sub>2</sub>)<sup>2</sup>/σ<sub>2</sub><sup>2</sup>]。重要性质：①边缘分布仍是正态，X ~ N(μ<sub>1</sub>, σ<sub>1</sub><sup>2</sup>)、Y ~ N(μ<sub>2</sub>, σ<sub>2</sub><sup>2</sup>)，与 ρ 无关；②X 与 Y 独立 ⟺ ρ = 0；③条件分布仍是正态；④线性组合 aX + bY 仍为正态。</li>
<li><strong>Z = X + Y 的分布（连续型卷积）</strong>：f<sub>Z</sub>(z) = ∫<sub>−∞</sub><sup>+∞</sup> f(x, z − x) dx。当 X、Y 独立时，f<sub>Z</sub>(z) = ∫<sub>−∞</sub><sup>+∞</sup> f<sub>X</sub>(x)·f<sub>Y</sub>(z − x) dx。特例：独立正态变量之和仍为正态：X ~ N(μ<sub>1</sub>, σ<sub>1</sub><sup>2</sup>)、Y ~ N(μ<sub>2</sub>, σ<sub>2</sub><sup>2</sup>) ⟹ X + Y ~ N(μ<sub>1</sub> + μ<sub>2</sub>, σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup>)。</li>
<li><strong>M = max(X, Y) 与 N = min(X, Y)</strong>：当 X、Y 独立时，F<sub>M</sub>(z) = F<sub>X</sub>(z)·F<sub>Y</sub>(z)；F<sub>N</sub>(z) = 1 − [1 − F<sub>X</sub>(z)][1 − F<sub>Y</sub>(z)]。推广到 n 个独立同分布变量：F<sub>max</sub>(z) = [F(z)]<sup>n</sup>，F<sub>min</sub>(z) = 1 − [1 − F(z)]<sup>n</sup>。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="二维正态分布相关结构示意图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">二维正态分布的等高椭圆与相关系数 ρ</text>
  <line x1="80" y1="200" x2="700" y2="200" stroke="var(--muted)" stroke-width="1.2"/>
  <line x1="380" y1="50" x2="380" y2="210" stroke="var(--muted)" stroke-width="1.2"/>
  <ellipse cx="380" cy="130" rx="120" ry="45" fill="none" stroke="var(--accent)" stroke-width="1.6" transform="rotate(-20 380 130)"/>
  <ellipse cx="380" cy="130" rx="80" ry="30" fill="none" stroke="var(--accent)" stroke-width="1.2" transform="rotate(-20 380 130)"/>
  <line x1="280" y1="165" x2="480" y2="95" stroke="var(--text-2)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="530" y="90" font-size="11.5" fill="var(--text-2)">ρ &gt; 0：正相关</text>
  <text x="530" y="110" font-size="11" fill="var(--muted)">椭圆沿右上—左下方向</text>
  <text x="100" y="60" font-size="11.5" fill="var(--text-2)">ρ = 0：椭圆退化为正圆</text>
  <text x="100" y="80" font-size="11" fill="var(--muted)">此时 X、Y 独立（仅限二维正态）</text>
  <text x="100" y="225" font-size="11.5" fill="var(--text-2)">边缘分布恒为正态，与 ρ 无关</text>
</svg>
<figcaption>图 3.1　二维正态分布等高线随 ρ 的变化</figcaption>
</figure>

<h3>3.2 易错点</h3>
<ol>
<li>由联合密度求边缘密度时，积分限必须严格按 f(x, y) 的非零区域确定，不能默认从 −∞ 到 +∞。</li>
<li>“独立”与“不相关”在一般情形下不等价，但在<strong>二维正态</strong>这一特例下等价（ρ = 0 ⟺ 独立）。</li>
<li>二维均匀分布求概率时，用面积比，不要试图先积分密度。</li>
<li>卷积公式 f<sub>Z</sub>(z) = ∫f<sub>X</sub>(x)f<sub>Y</sub>(z−x)dx 中，积分限由 f<sub>X</sub>(x) 与 f<sub>Y</sub>(z−x) 同时非零的 x 范围决定，必须分区间讨论。</li>
<li>max/min 公式只在 X、Y <strong>相互独立</strong>时成立，不能用于一般联合分布。</li>
</ol>

<h2>第 4 章　随机变量的数字特征</h2>
<p>本章把“分布”压缩成几个数——期望、方差、协方差、相关系数。大题常以“已知联合密度，求 E(X)、D(X)、Cov(X,Y)、ρ<sub>XY</sub>”的形式出现。</p>

<h3>4.1 核心考点</h3>
<ul>
<li><strong>数学期望</strong>：离散型 E(X) = Σ x<sub>k</sub>p<sub>k</sub>（要求绝对收敛）；连续型 E(X) = ∫<sub>−∞</sub><sup>+∞</sup> x f(x)dx。随机变量函数 Y = g(X) 的期望：E[g(X)] = Σ g(x<sub>k</sub>)p<sub>k</sub> 或 ∫ g(x)f(x)dx。二维情形 E[g(X,Y)] = ∫∫ g(x,y)f(x,y)dxdy。</li>
<li><strong>期望的性质</strong>：E(C) = C；E(aX + bY) = aE(X) + bE(Y)（无条件成立）；X、Y 独立时 E(XY) = E(X)·E(Y)。</li>
<li><strong>方差</strong>：D(X) = E{[X − E(X)]<sup>2</sup>} = E(X<sup>2</sup>) − [E(X)]<sup>2</sup>。标准差 σ(X) = √D(X)。</li>
<li><strong>方差的性质</strong>：D(C) = 0；D(aX + b) = a<sup>2</sup>D(X)；D(X ± Y) = D(X) + D(Y) ± 2Cov(X,Y)；X、Y 独立时 D(X ± Y) = D(X) + D(Y)。</li>
<li><strong>协方差</strong>：Cov(X, Y) = E{[X − E(X)][Y − E(Y)]} = E(XY) − E(X)E(Y)。性质：Cov(X, Y) = Cov(Y, X)；Cov(aX, bY) = ab·Cov(X,Y)；Cov(X<sub>1</sub>+X<sub>2</sub>, Y) = Cov(X<sub>1</sub>, Y) + Cov(X<sub>2</sub>, Y)。</li>
<li><strong>相关系数</strong>：ρ<sub>XY</sub> = Cov(X, Y) / [σ(X)σ(Y)]。性质：|ρ<sub>XY</sub>| ≤ 1；|ρ<sub>XY</sub>| = 1 ⟺ X 与 Y 以概率 1 呈线性关系（Y = aX + b）。ρ = 0 称 X 与 Y 不相关。</li>
<li><strong>不相关与独立的关系</strong>：独立 ⟹ 不相关（即 ρ<sub>XY</sub> = 0）；反之不成立（反例：X ~ U(−1,1)，Y = X<sup>2</sup>，Cov(X,Y) = 0 但 X、Y 不独立）。但对二维正态而言，独立 ⟺ 不相关。</li>
<li><strong>矩</strong>：k 阶原点矩 E(X<sup>k</sup>)；k 阶中心矩 E{[X − E(X)]<sup>k</sup>}。方差是 2 阶中心矩；协方差是 X、Y 的 2 阶混合中心矩。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="数字特征关系图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">期望、方差、协方差、相关系数的关系</text>
  <rect x="60" y="60" width="150" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="135" y="85" text-anchor="middle" font-size="12.5" fill="var(--text)">E(X) 期望</text>
  <rect x="300" y="60" width="150" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="375" y="85" text-anchor="middle" font-size="12.5" fill="var(--text)">D(X) = E(X²) − E(X)²</text>
  <rect x="540" y="60" width="170" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="625" y="85" text-anchor="middle" font-size="12.5" fill="var(--text)">Cov(X,Y) = E(XY) − E(X)E(Y)</text>
  <line x1="210" y1="80" x2="300" y2="80" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="255" y="72" text-anchor="middle" font-size="10.5" fill="var(--muted)">由定义</text>
  <line x1="450" y1="80" x2="540" y2="80" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="495" y="72" text-anchor="middle" font-size="10.5" fill="var(--muted)">同一思路</text>
  <rect x="300" y="140" width="180" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="390" y="165" text-anchor="middle" font-size="12" fill="var(--text)">ρ<sub>XY</sub> = Cov / [σ(X)σ(Y)]</text>
  <line x1="625" y1="100" x2="450" y2="140" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="380" y="210" text-anchor="middle" font-size="11.5" fill="var(--text-2)">独立 ⟹ 不相关；不相关 ⟹ 独立（仅二维正态）</text>
</svg>
<figcaption>图 4.1　数字特征之间的推导链条</figcaption>
</figure>

<h3>4.2 易错点</h3>
<ol>
<li>计算 D(X) 时错用 D(aX) = a·D(X)，正确是 a<sup>2</sup>D(X)。</li>
<li>把 E(XY) = E(X)E(Y) 无条件使用；该等式成立当且仅当 X、Y 独立（或 Cov = 0）。</li>
<li>ρ<sub>XY</sub> 的分子分母都要带 σ，不能只用 Cov 比较两个变量的线性相关强弱。</li>
<li>求 E(X<sup>2</sup>) 时，不能用 [E(X)]<sup>2</sup> 代替；两者相差正是方差。</li>
<li>“D(X + Y) = D(X) + D(Y)”只有在独立（或不相关）时成立，一般情形要加 2Cov(X,Y)。</li>
</ol>

<h2>第 5 章　大数定律和中心极限定理</h2>
<p>本章考点固定：切比雪夫不等式、三个大数定律、两个中心极限定理。多以选择填空形式出现，记忆重于计算。</p>

<h3>5.1 核心考点</h3>
<ul>
<li><strong>切比雪夫不等式</strong>：设 E(X) = μ，D(X) = σ<sup>2</sup>，则对任意 ε &gt; 0，P{|X − μ| ≥ ε} ≤ σ<sup>2</sup>/ε<sup>2</sup>。等价形式 P{|X − μ| &lt; ε} ≥ 1 − σ<sup>2</sup>/ε<sup>2</sup>。它给出了任意分布下偏差概率的上界。</li>
<li><strong>依概率收敛</strong>：X<sub>n</sub> →<sup>P</sup> a ⟺ 对任意 ε &gt; 0，lim(n→∞) P{|X<sub>n</sub> − a| &lt; ε} = 1。</li>
<li><strong>切比雪夫大数定律</strong>：X<sub>1</sub>, X<sub>2</sub>, … 两两不相关、方差有共同上界，则对任意 ε &gt; 0，lim P{|(1/n)ΣX<sub>i</sub> − (1/n)ΣE(X<sub>i</sub>)| &lt; ε} = 1。即算术平均依概率收敛于期望的平均。</li>
<li><strong>伯努利大数定律</strong>：n<sub>A</sub> 是 n 次独立试验中事件 A 发生的次数，p = P(A)，则 n<sub>A</sub>/n →<sup>P</sup> p。频率依概率收敛于概率。</li>
<li><strong>辛钦大数定律</strong>：X<sub>1</sub>, X<sub>2</sub>, … 独立同分布且 E(X<sub>i</sub>) = μ，则 (1/n)ΣX<sub>i</sub> →<sup>P</sup> μ。这是矩估计法的理论依据。</li>
<li><strong>列维-林德伯格中心极限定理（独立同分布 CLT）</strong>：X<sub>1</sub>, …, X<sub>n</sub> 独立同分布，E(X<sub>i</sub>) = μ，D(X<sub>i</sub>) = σ<sup>2</sup> &gt; 0，则 n 充分大时，Σ<sub>i=1..n</sub> X<sub>i</sub> 近似服从 N(nμ, nσ<sup>2</sup>)，标准化变量 [ΣX<sub>i</sub> − nμ] / (σ√n) 近似服从 N(0, 1)。</li>
<li><strong>棣莫弗-拉普拉斯中心极限定理</strong>：设 Y<sub>n</sub> ~ B(n, p)，则对任意实数 x，lim P{(Y<sub>n</sub> − np)/√[np(1−p)] ≤ x} = Φ(x)。即二项分布在 n 大时近似正态。</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="中心极限定理示意图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">中心极限定理：n 增大时样本均值分布逼近正态</text>
  <line x1="80" y1="190" x2="700" y2="190" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M100,185 Q140,100 180,185 L180,190 L100,190 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.2"/>
  <text x="140" y="210" text-anchor="middle" font-size="11" fill="var(--text-2)">n = 1</text>
  <path d="M240,188 Q290,130 340,188 L340,190 L240,190 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.2"/>
  <text x="290" y="210" text-anchor="middle" font-size="11" fill="var(--text-2)">n = 4</text>
  <path d="M400,189 Q470,120 540,189 L540,190 L400,190 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.2"/>
  <text x="470" y="210" text-anchor="middle" font-size="11" fill="var(--text-2)">n = 16</text>
  <path d="M580,189 Q640,90 700,189 L700,190 L580,190 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="640" y="210" text-anchor="middle" font-size="11" fill="var(--text-2)">n 很大</text>
  <text x="380" y="60" text-anchor="middle" font-size="12" fill="var(--text-2)">无论原分布如何，样本和/均值趋于 N(μ, σ²/n)</text>
</svg>
<figcaption>图 5.1　中心极限定理的直观演示</figcaption>
</figure>

<h3>5.2 易错点</h3>
<ol>
<li>切比雪夫不等式给出的是<strong>上界</strong>，不是精确值，不能用来代替正态分布计算。</li>
<li>大数定律的结论是“依概率收敛”，不是“几乎处处收敛”或“依分布收敛”，三者层次不同。</li>
<li>用 CLT 近似时，必须先验证每个 X<sub>i</sub> 的期望与方差都存在且方差非零。</li>
<li>棣莫弗-拉普拉斯定理适用条件：n 充分大（一般 np ≥ 5 且 n(1−p) ≥ 5）。</li>
<li>切比雪夫大数定律要求“两两不相关且方差有界”，比辛钦的“独立同分布”条件更弱但结论形式相似。</li>
</ol>

<h2>第 6 章　数理统计的基本概念</h2>
<p>本章把概率论“倒过来用”：从数据出发推断总体。三大抽样分布 χ²、t、F 是参数估计与假设检验的工具，必须熟记住处、形态与分位点。</p>

<h3>6.1 核心考点</h3>
<ul>
<li><strong>总体与样本</strong>：研究对象的全体称总体，从总体中抽取的 n 个个体 X<sub>1</sub>, …, X<sub>n</sub> 称简单随机样本，满足两条件——相互独立且与总体同分布。样本容量为 n。</li>
<li><strong>统计量</strong>：样本的不含未知参数的函数 g(X<sub>1</sub>, …, X<sub>n</sub>)。常用统计量：
<ul>
<li>样本均值 X̄ = (1/n)ΣX<sub>i</sub>；E(X̄) = μ，D(X̄) = σ<sup>2</sup>/n。</li>
<li>样本方差 S<sup>2</sup> = 1/(n−1) · Σ(X<sub>i</sub> − X̄)<sup>2</sup>（除以 n−1 是为了无偏性）；E(S<sup>2</sup>) = σ<sup>2</sup>。</li>
<li>样本标准差 S = √S<sup>2</sup>。</li>
<li>k 阶样本矩 A<sub>k</sub> = (1/n)ΣX<sub>i</sub><sup>k</sup>。</li>
</ul>
</li>
<li><strong>χ² 分布</strong>：设 X<sub>1</sub>, …, X<sub>n</sub> 独立同分布于 N(0,1)，则 χ² = ΣX<sub>i</sub><sup>2</sup> 服从自由度为 n 的 χ² 分布。性质：E(χ²) = n，D(χ²) = 2n；可加性——χ²<sub>1</sub> 与 χ²<sub>2</sub> 独立时，χ²<sub>1</sub> + χ²<sub>2</sub> ~ χ²(n<sub>1</sub> + n<sub>2</sub>)。</li>
<li><strong>t 分布</strong>：设 X ~ N(0,1)、Y ~ χ²(n) 且独立，则 T = X / √(Y/n) 服从自由度为 n 的 t 分布。形态：关于 0 对称的钟形，比正态尾部更厚；n → ∞ 时趋于 N(0,1)。</li>
<li><strong>F 分布</strong>：设 U ~ χ²(n<sub>1</sub>)、V ~ χ²(n<sub>2</sub>) 且独立，则 F = (U/n<sub>1</sub>) / (V/n<sub>2</sub>) 服从第一自由度 n<sub>1</sub>、第二自由度 n<sub>2</sub> 的 F 分布。性质：1/F(n<sub>1</sub>, n<sub>2</sub>) ~ F(n<sub>2</sub>, n<sub>1</sub>)。</li>
<li><strong>分位点</strong>：对给定 α（0 &lt; α &lt; 1），上 α 分位点 z<sub>α</sub> 满足 P{X &gt; z<sub>α</sub>} = α。常用值：z<sub>0.05</sub> = 1.645，z<sub>0.025</sub> = 1.96，z<sub>0.01</sub> = 2.326。t 分布满足 t<sub>1−α</sub>(n) = −t<sub>α</sub>(n)。</li>
<li><strong>正态总体抽样分布定理（数学一重点）</strong>：设 X<sub>1</sub>, …, X<sub>n</sub> 来自 N(μ, σ<sup>2</sup>) 总体，则：
<ul>
<li>X̄ ~ N(μ, σ<sup>2</sup>/n)，即 (X̄ − μ)/(σ/√n) ~ N(0, 1)。</li>
<li>(n − 1)S<sup>2</sup>/σ<sup>2</sup> ~ χ²(n − 1)，且 X̄ 与 S<sup>2</sup> 相互独立。</li>
<li>(X̄ − μ) / (S/√n) ~ t(n − 1)（σ 未知时用 S 代替 σ）。</li>
<li>两正态总体：(S<sub>1</sub><sup>2</sup>/σ<sub>1</sub><sup>2</sup>) / (S<sub>2</sub><sup>2</sup>/σ<sub>2</sup><sup>2</sup>) ~ F(n<sub>1</sub> − 1, n<sub>2</sub> − 1)。</li>
</ul>
</li>
</ul>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="卡方tF三种抽样分布对比图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">χ² 分布、t 分布、F 分布形态对比</text>
  <line x1="60" y1="200" x2="260" y2="200" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M70,198 Q100,190 120,140 Q140,100 160,120 Q190,160 250,198 L250,200 L70,200 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.4"/>
  <text x="160" y="222" text-anchor="middle" font-size="11.5" fill="var(--text-2)">χ²(n)：右偏非负</text>
  <line x1="300" y1="200" x2="500" y2="200" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M310,198 Q360,120 400,118 Q440,120 490,198 L490,200 L310,200 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.4"/>
  <text x="400" y="222" text-anchor="middle" font-size="11.5" fill="var(--text-2)">t(n)：对称厚尾</text>
  <line x1="540" y1="200" x2="740" y2="200" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M550,198 Q590,130 630,120 Q680,110 730,195 L730,200 L550,200 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.4"/>
  <text x="645" y="222" text-anchor="middle" font-size="11.5" fill="var(--text-2)">F(n₁,n₂)：右偏非负</text>
</svg>
<figcaption>图 6.1　三大抽样分布的密度形态</figcaption>
</figure>

<h3>6.2 易错点</h3>
<ol>
<li>样本方差定义是除以 n − 1（无偏），不是除以 n；后者称“样本二阶中心矩”，是有偏的。</li>
<li>(n−1)S<sup>2</sup>/σ<sup>2</sup> 的自由度是 n−1 而不是 n，因为 X̄ 用掉了一个自由度。</li>
<li>t 分布的极限是 N(0,1)，但有限 n 时尾部比正态厚，分位点比 z<sub>α</sub> 略大。</li>
<li>F 分布的两个自由度顺序不能反：F(n<sub>1</sub>, n<sub>2</sub>) ≠ F(n<sub>2</sub>, n<sub>1</sub>)。</li>
<li>只有 X<sub>1</sub>, …, X<sub>n</sub> <strong>独立同分布于正态总体</strong>时，上述抽样分布定理才成立；对非正态总体只能用 CLT 近似。</li>
</ol>

<h2>第 7 章　参数估计</h2>
<p>参数估计分点估计与区间估计。矩估计、最大似然估计是解答题常客；置信区间表是选择题常客。</p>

<h3>7.1 核心考点</h3>
<ul>
<li><strong>点估计</strong>：用样本构造统计量 θ̂ = g(X<sub>1</sub>, …, X<sub>n</sub>) 去估计未知参数 θ。</li>
<li><strong>矩估计法</strong>：用样本矩代替总体矩。一阶：令 A<sub>1</sub> = X̄ = E(X)；二阶：令 A<sub>2</sub> = (1/n)ΣX<sub>i</sub><sup>2</sup> = E(X<sup>2</sup>)。联立方程解出未知参数。</li>
<li><strong>最大似然估计法（MLE）</strong>：步骤——①写出似然函数 L(θ) = Π f(x<sub>i</sub>; θ)（离散为 ΠP{X=x<sub>i</sub>}）；②取对数 ln L(θ)；③对 θ 求导并令导数为 0，解方程 ∂lnL/∂θ = 0；④验证是极大值（或由问题背景判断）。若多个参数，则求偏导建立方程组。</li>
<li><strong>估计量的评选标准</strong>：
<ul>
<li>无偏性：E(θ̂) = θ。</li>
<li>有效性：θ̂<sub>1</sub>、θ̂<sub>2</sub> 都是无偏估计，且 D(θ̂<sub>1</sub>) &lt; D(θ̂<sub>2</sub>)，则 θ̂<sub>1</sub> 更有效。</li>
<li>一致性（相合性）：θ̂ →<sup>P</sup> θ（n → ∞）。</li>
</ul>
</li>
<li><strong>区间估计</strong>：对给定置信水平 1 − α，构造区间 [θ̂<sub>1</sub>, θ̂<sub>2</sub>] 使 P{θ̂<sub>1</sub> ≤ θ ≤ θ̂<sub>2</sub>} = 1 − α。</li>
</ul>

<h3>7.2 一个正态总体的置信区间表</h3>
<div class="table-wrap"><table>
<thead><tr><th>待估参数</th><th>条件</th><th>枢轴量</th><th>置信区间</th></tr></thead>
<tbody>
<tr><td>μ</td><td>σ<sup>2</sup> 已知</td><td>(X̄ − μ)/(σ/√n) ~ N(0,1)</td><td>[X̄ ± z<sub>α/2</sub>·σ/√n]</td></tr>
<tr><td>μ</td><td>σ<sup>2</sup> 未知</td><td>(X̄ − μ)/(S/√n) ~ t(n−1)</td><td>[X̄ ± t<sub>α/2</sub>(n−1)·S/√n]</td></tr>
<tr><td>σ<sup>2</sup></td><td>μ 未知</td><td>(n−1)S<sup>2</sup>/σ<sup>2</sup> ~ χ²(n−1)</td><td>[(n−1)S<sup>2</sup>/χ²<sub>α/2</sub>, (n−1)S<sup>2</sup>/χ²<sub>1−α/2</sub>]</td></tr>
</tbody>
</table></div>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="置信区间结构图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">置信区间的结构：枢轴量与分位点</text>
  <line x1="80" y1="140" x2="700" y2="140" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M100,138 Q200,60 380,55 Q560,60 680,138 L680,140 L100,140 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <line x1="380" y1="55" x2="380" y2="140" stroke="var(--text-2)" stroke-width="1.4" stroke-dasharray="4 3"/>
  <text x="380" y="45" text-anchor="middle" font-size="12" fill="var(--text-2)">θ̂ 中心</text>
  <line x1="290" y1="120" x2="290" y2="160" stroke="var(--accent)" stroke-width="2"/>
  <line x1="470" y1="120" x2="470" y2="160" stroke="var(--accent)" stroke-width="2"/>
  <text x="290" y="180" text-anchor="middle" font-size="11.5" fill="var(--text-2)">下界 θ̂₁</text>
  <text x="470" y="180" text-anchor="middle" font-size="11.5" fill="var(--text-2)">上界 θ̂₂</text>
  <text x="160" y="100" font-size="11" fill="var(--muted)">α/2</text>
  <text x="620" y="100" font-size="11" fill="var(--muted)">α/2</text>
  <text x="380" y="215" text-anchor="middle" font-size="12" fill="var(--text-2)">置信水平 1 − α：区间 [θ̂₁, θ̂₂] 覆盖真值的概率</text>
</svg>
<figcaption>图 7.1　置信区间与分位点的关系</figcaption>
</figure>

<h3>7.3 易错点</h3>
<ol>
<li>最大似然估计的似然函数要对每个样本取乘积，不能只写一个 f(x; θ)。</li>
<li>若似然函数关于 θ 单调（如均匀分布 U(0, θ)），MLE 不是通过求导得到，而是取 max x<sub>i</sub>。</li>
<li>矩估计用一阶矩与二阶矩的选择要与未知参数个数匹配：一个参数用一阶矩，两个参数用一、二阶矩。</li>
<li>置信区间的公式中，σ 已知时用 z 分位点，σ 未知时用 t 分位点，二者不能互换。</li>
<li>无偏性是“对所有可能样本的平均等于真值”，不是“某一次估计等于真值”。</li>
</ol>

<h2>第 8 章　假设检验</h2>
<p>假设检验是参数估计的“对立面”：先提出假设，再用样本判断是否拒绝。两类错误与检验表是核心。</p>

<h3>8.1 核心考点</h3>
<ul>
<li><strong>基本思想</strong>：小概率事件在一次试验中几乎不发生。先假设 H<sub>0</sub> 成立，构造检验统计量；若样本使统计量落入“小概率区域”（拒绝域），则拒绝 H<sub>0</sub>，否则接受 H<sub>0</sub>。</li>
<li><strong>两类错误</strong>：
<ul>
<li>第一类错误（弃真）：H<sub>0</sub> 为真却被拒绝，概率 α（显著性水平）。</li>
<li>第二类错误（取伪）：H<sub>0</sub> 为假却被接受，概率 β。</li>
<li>样本容量 n 固定时，α 与 β 此消彼长；同时减小两者只能增大 n。</li>
</ul>
</li>
<li><strong>检验步骤</strong>：①提出原假设 H<sub>0</sub> 与备择假设 H<sub>1</sub>；②选取适当检验统计量；③给定显著性水平 α，确定拒绝域；④由样本计算统计量观测值；⑤判断是否落入拒绝域，作出结论。</li>
</ul>

<h3>8.2 单正态总体检验表</h3>
<div class="table-wrap"><table>
<thead><tr><th>检验对象</th><th>条件</th><th>统计量</th><th>拒绝域（双侧）</th></tr></thead>
<tbody>
<tr><td>μ</td><td>σ<sup>2</sup> 已知</td><td>Z = (X̄ − μ<sub>0</sub>)/(σ/√n) ~ N(0,1)</td><td>|Z| ≥ z<sub>α/2</sub></td></tr>
<tr><td>μ</td><td>σ<sup>2</sup> 未知</td><td>T = (X̄ − μ<sub>0</sub>)/(S/√n) ~ t(n−1)</td><td>|T| ≥ t<sub>α/2</sub>(n−1)</td></tr>
<tr><td>σ<sup>2</sup></td><td>μ 未知</td><td>χ² = (n−1)S<sup>2</sup>/σ<sub>0</sub><sup>2</sup> ~ χ²(n−1)</td><td>χ² ≤ χ²<sub>1−α/2</sub> 或 χ² ≥ χ²<sub>α/2</sub></td></tr>
</tbody>
</table></div>

<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="假设检验两类错误图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">假设检验的两类错误</text>
  <line x1="60" y1="150" x2="360" y2="150" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M70,148 Q160,80 220,78 Q280,80 350,148 L350,150 L70,150 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.4"/>
  <text x="210" y="180" text-anchor="middle" font-size="11.5" fill="var(--text-2)">H<sub>0</sub> 为真的分布</text>
  <rect x="290" y="90" width="60" height="60" fill="var(--accent)" opacity="0.25"/>
  <text x="320" y="80" text-anchor="middle" font-size="11" fill="var(--text)">α</text>
  <line x1="400" y1="150" x2="700" y2="150" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M410,148 Q500,80 560,78 Q620,80 690,148 L690,150 L410,150 Z" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.4"/>
  <text x="550" y="180" text-anchor="middle" font-size="11.5" fill="var(--text-2)">H<sub>1</sub> 为真的分布</text>
  <rect x="430" y="90" width="60" height="60" fill="var(--accent)" opacity="0.25"/>
  <text x="460" y="80" text-anchor="middle" font-size="11" fill="var(--text)">β</text>
  <text x="380" y="215" text-anchor="middle" font-size="12" fill="var(--text-2)">α：弃真（H<sub>0</sub> 真却拒绝）；β：取伪（H<sub>0</sub> 假却接受）</text>
</svg>
<figcaption>图 8.1　两类错误的概率示意</figcaption>
</figure>

<h3>8.3 易错点</h3>
<ol>
<li>原假设 H<sub>0</sub> 通常是“受保护”的假设（等号在 H<sub>0</sub> 上），备择假设是想要证明的结论。</li>
<li>拒绝域方向由备择假设决定：双侧用 |统计量| ≥ 分位点；左侧用 ≤；右侧用 ≥。</li>
<li>α 与 β 不能同时任意小；说“α 越小检验越好”是错的。</li>
<li>σ 未知时用 t 检验，不能用 z 检验，否则第一类错误失真。</li>
<li>“接受 H<sub>0</sub>”不等于“H<sub>0</sub> 为真”，只是“没有足够证据拒绝”。</li>
</ol>

<h2>概率与数理统计公式速查大表</h2>
<p>考前一晚只看这张表。把每个分布的“记号—期望—方差—密度/分布律”四列一起背。</p>
<div class="table-wrap"><table>
<thead><tr><th>分布</th><th>记号</th><th>期望 E(X)</th><th>方差 D(X)</th><th>密度或分布律</th></tr></thead>
<tbody>
<tr><td>0-1 分布</td><td>B(1, p)</td><td>p</td><td>p(1−p)</td><td>P{X=1}=p，P{X=0}=1−p</td></tr>
<tr><td>二项分布</td><td>B(n, p)</td><td>np</td><td>np(1−p)</td><td>P{X=k} = C(n,k)p<sup>k</sup>(1−p)<sup>n−k</sup></td></tr>
<tr><td>泊松分布</td><td>P(λ)</td><td>λ</td><td>λ</td><td>P{X=k} = λ<sup>k</sup>e<sup>−λ</sup>/k!</td></tr>
<tr><td>几何分布</td><td>Ge(p)</td><td>1/p</td><td>(1−p)/p<sup>2</sup></td><td>P{X=k} = (1−p)<sup>k−1</sup>p</td></tr>
<tr><td>超几何分布</td><td>H(n,M,N)</td><td>nM/N</td><td>n(M/N)(1−M/N)(N−n)/(N−1)</td><td>P{X=k} = C(M,k)C(N−M,n−k)/C(N,n)</td></tr>
<tr><td>均匀分布</td><td>U(a, b)</td><td>(a+b)/2</td><td>(b−a)<sup>2</sup>/12</td><td>f(x) = 1/(b−a)，a&lt;x&lt;b</td></tr>
<tr><td>指数分布</td><td>E(λ)</td><td>1/λ</td><td>1/λ<sup>2</sup></td><td>f(x) = λe<sup>−λx</sup>，x&gt;0</td></tr>
<tr><td>正态分布</td><td>N(μ, σ<sup>2</sup>)</td><td>μ</td><td>σ<sup>2</sup></td><td>f(x) = 1/(σ√(2π))·exp[−(x−μ)<sup>2</sup>/(2σ<sup>2</sup>)]</td></tr>
<tr><td>χ² 分布</td><td>χ²(n)</td><td>n</td><td>2n</td><td>n 个独立 N(0,1) 的平方和</td></tr>
<tr><td>t 分布</td><td>t(n)</td><td>0（n&gt;1）</td><td>n/(n−2)（n&gt;2）</td><td>X/√(Y/n)，X~N(0,1)，Y~χ²(n)</td></tr>
<tr><td>F 分布</td><td>F(n<sub>1</sub>, n<sub>2</sub>)</td><td>n<sub>2</sub>/(n<sub>2</sub>−2)（n<sub>2</sub>&gt;2）</td><td>—</td><td>(U/n<sub>1</sub>)/(V/n<sub>2</sub>)，U~χ²(n<sub>1</sub>)，V~χ²(n<sub>2</sub>)</td></tr>
</tbody>
</table></div>

<h2>分章深化与典型例题剖析</h2>
<p>本节对八章的高频考点做进一步深化，配典型例题剖析，帮助把“看懂公式”升级为“会做题”。</p>

<h3>重要分布的深入辨析</h3>
<ul>
<li><strong>二项分布与泊松分布的关系</strong>：当 n 很大、p 很小时，B(n, p) 近似于 P(λ)，其中 λ = np。例：某车间有 200 台机床，每台故障率 0.01，求同时出故障的机床数不超过 3 台的概率。精确算 B(200, 0.01) 较繁，用泊松近似 λ = 2：P{X≤3} ≈ Σ<sub>k=0</sub><sup>3</sup> e<sup>−2</sup>2<sup>k</sup>/k! = e<sup>−2</sup>(1 + 2 + 2 + 4/3) ≈ 0.857。</li>
<li><strong>二项分布与正态分布的关系</strong>：棣莫弗-拉普拉斯定理——n 大时 B(n, p) 近似 N(np, np(1−p))。上例中也可用正态近似：μ = 2，σ = √1.98 ≈ 1.41，P{X≤3} ≈ Φ((3.5−2)/1.41) ≈ Φ(1.06) ≈ 0.855，与泊松近似接近。</li>
<li><strong>几何分布的无记忆性</strong>：P{X &gt; m+n | X &gt; m} = P{X &gt; n}。例如反复投篮，已知前 m 次未中，第 m+1 次起重新“归零”。这与指数分布连续版的无记忆性对应。</li>
<li><strong>均匀分布的均匀性</strong>：X ~ U(a, b) 时，X 落在 [a,b] 内任一子区间的概率只与区间长度成正比，与位置无关。例：X ~ U(0,10)，则 P{2 &lt; X &lt; 5} = 3/10。</li>
<li><strong>指数分布的密度与失效率</strong>：f(x) = λe<sup>−λx</sup> 单调递减，λ 越大衰减越快。它常用来刻画“寿命”“等待时间”，如乘客到达车站的等待时间、元件寿命。</li>
</ul>

<h3>二维正态分布的详细性质</h3>
<ul>
<li><strong>五个参数的含义</strong>：μ<sub>1</sub>、μ<sub>2</sub> 是两变量的均值；σ<sub>1</sub><sup>2</sup>、σ<sub>2</sup><sup>2</sup> 是方差；ρ 是相关系数（−1 &lt; ρ &lt; 1）。</li>
<li><strong>边缘分布仍为正态</strong>：f<sub>X</sub>(x) 积分后恰为 N(μ<sub>1</sub>, σ<sub>1</sub><sup>2</sup>) 的密度，与 ρ 无关。这意味着“二维正态的边缘是正态”，但反之“边缘都是正态的联合不一定是二维正态”。</li>
<li><strong>条件分布仍为正态</strong>：在 X = x 条件下，Y 的条件分布为 N(μ<sub>2</sub> + ρσ<sub>2</sub>/σ<sub>1</sub>·(x−μ<sub>1</sub>), σ<sub>2</sub><sup>2</sup>(1−ρ<sup>2</sup>))。</li>
<li><strong>独立 ⟺ ρ = 0</strong>：这是二维正态独有的结论。对一般联合分布，ρ = 0 推不出独立。</li>
<li><strong>线性组合仍为正态</strong>：aX + bY ~ N(aμ<sub>1</sub>+bμ<sub>2</sub>, a<sup>2</sup>σ<sub>1</sub><sup>2</sup>+b<sup>2</sup>σ<sub>2</sub><sup>2</sup>+2abρσ<sub>1</sub>σ<sub>2</sub>)。</li>
</ul>

<h3>参数估计评选标准的深入</h3>
<ul>
<li><strong>无偏性的理解</strong>：E(θ̂) = θ 表示“反复抽样估计，平均结果等于真值”。样本均值 X̄ 是 μ 的无偏估计，样本方差 S<sup>2</sup> 是 σ<sup>2</sup> 的无偏估计。注意：S 本身不是 σ 的无偏估计（有偏），这是一个常考点。</li>
<li><strong>有效性的比较</strong>：两个无偏估计 θ̂<sub>1</sub>、θ̂<sub>2</sub>，方差小者更有效。例：X<sub>1</sub>、X<sub>2</sub> 独立同分布，θ̂<sub>1</sub> = (X<sub>1</sub>+X<sub>2</sub>)/2 与 θ̂<sub>2</sub> = (X<sub>1</sub>+2X<sub>2</sub>)/3 都无偏，但 D(θ̂<sub>1</sub>) = σ<sup>2</sup>/2 &lt; 5σ<sup>2</sup>/9 = D(θ̂<sub>2</sub>)，故 θ̂<sub>1</sub> 更有效。</li>
<li><strong>一致性（相合性）</strong>：n → ∞ 时 θ̂ →<sup>P</sup> θ。由辛钦大数定律，矩估计通常满足一致性；MLE 在正则条件下也满足。</li>
</ul>

<h3>二维随机变量大题的通用解题模板</h3>
<p>数学一概率统计大题，约 80% 围绕二维随机变量展开。以下模板可应对大多数题目。</p>
<ul>
<li><strong>第一步：写联合密度的非零区域</strong>。拿到 f(x,y) 先画草图，确定定义域 D，这是后续一切积分限的依据。</li>
<li><strong>第二步：求边缘密度</strong>。f<sub>X</sub>(x) = ∫f(x,y)dy，积分限是 D 内固定 x 时 y 的范围；f<sub>Y</sub>(y) 同理。注意边缘密度只在 D 的投影上非零。</li>
<li><strong>第三步：判断独立性</strong>。验证 f(x,y) = f<sub>X</sub>(x)f<sub>Y</sub>(y) 是否在整个 D 上成立。若 D 不是矩形（如三角形、圆），通常不独立。</li>
<li><strong>第四步：求概率</strong>。P{(X,Y) ∈ A} = ∫∫<sub>A∩D</sub> f(x,y)dxdy，画出积分区域 A∩D，再定限。</li>
<li><strong>第五步：求数字特征</strong>。E(X) = ∫∫xf(x,y)dxdy，E(XY) = ∫∫xyf(x,y)dxdy，再算 D(X)、Cov、ρ。</li>
<li><strong>第六步：求函数分布</strong>。Z = X+Y 用卷积；max/min 用分布函数乘积（需独立）。</li>
</ul>

<h3>正态分布计算题的速查技巧</h3>
<ul>
<li><strong>对称性</strong>：X ~ N(μ, σ<sup>2</sup>) 关于 x = μ 对称，P{X ≤ μ} = 0.5。</li>
<li><strong>3σ 反查</strong>：P{|X−μ| &lt; 2σ} ≈ 0.9544，即约 95% 的数据落在 (μ−2σ, μ+2σ)。</li>
<li><strong>线性变换</strong>：X ~ N(μ, σ<sup>2</sup>)，则 aX+b ~ N(aμ+b, a<sup>2</sup>σ<sup>2</sup>)。注意方差乘 a<sup>2</sup>，b 只移动均值。</li>
<li><strong>独立和</strong>：X ~ N(μ<sub>1</sub>, σ<sub>1</sub><sup>2</sup>)、Y ~ N(μ<sub>2</sub>, σ<sub>2</sup><sup>2</sup>) 独立，则 X±Y ~ N(μ<sub>1</sub>±μ<sub>2</sub>, σ<sub>1</sub><sup>2</sup>+σ<sub>2</sub><sup>2</sup>)。方差永远相加，与 ± 无关。</li>
<li><strong>Φ 表常用值</strong>：Φ(1) = 0.8413，Φ(1.645) = 0.95，Φ(1.96) = 0.975，Φ(2) = 0.9772，Φ(2.326) = 0.99。</li>
</ul>

<h3>置信区间与假设检验的对照记忆</h3>
<ul>
<li><strong>同一套枢轴量</strong>：置信区间和假设检验用的是同一个枢轴量。μ 的区间是 X̄ ± 分位点·σ/√n；检验是 (X̄−μ<sub>0</sub>)/(σ/√n) 与分位点比较。理解了区间，检验自然会。</li>
<li><strong>σ 已知用 z，σ 未知用 t</strong>：这是贯穿第 7、8 章的主线，不要记反。</li>
<li><strong>方差的区间与检验用 χ²</strong>：(n−1)S<sup>2</sup>/σ<sup>2</sup> 这个量同时出现在区间估计（求 σ<sup>2</sup> 的范围）和检验（判断 σ<sup>2</sup> 是否等于 σ<sub>0</sub><sup>2</sup>）中。</li>
<li><strong>置信水平与显著性水平互补</strong>：95% 置信区间对应 α = 0.05 的检验。若 μ<sub>0</sub> 落入 95% 区间，则在 α = 0.05 下不拒绝 H<sub>0</sub>。</li>
</ul>



<h3>第 1 章深化：古典概型与事件独立性辨析</h3>
<ul>
<li><strong>古典概型的两类典型问题</strong>：①抽球问题——从 N 件（含 M 件次品）中任取 n 件，恰有 k 件次品的概率为 C(M,k)C(N−M,n−k)/C(N,n)（超几何）；②分房问题——n 个球随机放入 N 个盒子（N ≥ n），指定 n 个盒子各有一球的概率为 n!/N<sup>n</sup>，某指定盒子恰有 k 个球的概率为 C(n,k)(1/N)<sup>k</sup>(1−1/N)<sup>n−k</sup>。</li>
<li><strong>事件独立与互斥的辨析</strong>：当 P(A) &gt; 0、P(B) &gt; 0 时，“A、B 独立”与“A、B 互斥”不能同时成立。因为独立则 P(AB) = P(A)P(B) &gt; 0，而互斥要求 P(AB) = 0。考题常在此设陷阱。</li>
<li><strong>例题</strong>：甲乙两人独立地破译一份密码，甲破译概率 1/3，乙破译概率 1/4。求密码被破译的概率。解：P(破译) = 1 − P(都未破译) = 1 − (1−1/3)(1−1/4) = 1 − (2/3)(3/4) = 1 − 1/2 = 1/2。技巧：求“至少一个发生”取对立事件更简便。</li>
</ul>

<h3>第 2 章深化：分布函数与正态分布的标准化</h3>
<ul>
<li><strong>分布函数法求随机变量函数分布</strong>：设 X 的密度为 f<sub>X</sub>(x)，Y = X<sup>2</sup>。当 y &gt; 0 时，F<sub>Y</sub>(y) = P{X<sup>2</sup> ≤ y} = P{−√y ≤ X ≤ √y} = F<sub>X</sub>(√y) − F<sub>X</sub>(−√y)，求导得 f<sub>Y</sub>(y) = [f<sub>X</sub>(√y) + f<sub>X</sub>(−√y)]/(2√y)。</li>
<li><strong>正态分布标准化的万能公式</strong>：若 X ~ N(μ, σ<sup>2</sup>)，则对任意 a &lt; b，P{a &lt; X &lt; b} = Φ((b−μ)/σ) − Φ((a−μ)/σ)。Φ(·) 是标准正态分布函数，满足 Φ(−x) = 1 − Φ(x)。</li>
<li><strong>例题</strong>：X ~ N(2, 9)，求 P{1 &lt; X &lt; 5}。解：σ = 3，P = Φ((5−2)/3) − Φ((1−2)/3) = Φ(1) − Φ(−1/3) = Φ(1) − [1 − Φ(1/3)] = 0.8413 − 1 + 0.6306 = 0.4719。</li>
<li><strong>指数分布的无记忆性</strong>：P{X &gt; s+t | X &gt; s} = P{X &gt; t} = e<sup>−λt</sup>。考题常以“设备已工作 s 小时，再工作 t 小时的概率”出现。</li>
</ul>

<h3>第 3 章深化：二维均匀分布与卷积</h3>
<ul>
<li><strong>二维均匀分布求概率</strong>：若 (X,Y) 在区域 D 上均匀分布，则 P{(X,Y) ∈ A} = S(A∩D)/S(D)，只需算面积比，无需积分。</li>
<li><strong>例题</strong>：(X,Y) 在单位圆 x<sup>2</sup>+y<sup>2</sup> ≤ 1 上均匀分布，求 P{X<sup>2</sup>+Y<sup>2</sup> ≤ 1/4}。解：小圆面积 π(1/2)<sup>2</sup> = π/4，大圆面积 π，故概率 = (π/4)/π = 1/4。</li>
<li><strong>卷积公式分区间</strong>：X ~ U(0,1)、Y ~ U(0,1) 独立，求 Z = X+Y 的密度。f<sub>Z</sub>(z) = ∫f<sub>X</sub>(x)f<sub>Y</sub>(z−x)dx。当 0 &lt; z &lt; 1：积分限 x 从 0 到 z，f<sub>Z</sub>(z) = z；当 1 ≤ z &lt; 2：x 从 z−1 到 1，f<sub>Z</sub>(z) = 2−z；其余为 0。这就是三角分布。</li>
<li><strong>二维正态的边缘分布与 ρ 无关</strong>：无论 ρ 取何值，X ~ N(μ<sub>1</sub>, σ<sub>1</sub><sup>2</sup>)、Y ~ N(μ<sub>2</sub>, σ<sub>2</sub><sup>2</sup>)。这是选择题高频考点。</li>
</ul>

<h3>第 4 章深化：协方差与相关系数的计算链</h3>
<ul>
<li><strong>计算顺序</strong>：求 Cov(X,Y) 通常分三步——先算 E(X)、E(Y)、E(XY)，再代入 Cov = E(XY) − E(X)E(Y)，最后 ρ = Cov/[σ(X)σ(Y)]。</li>
<li><strong>例题</strong>：设 (X,Y) 联合密度 f(x,y) = 1，0 &lt; x &lt; 1，0 &lt; y &lt; 1（正方形均匀）。E(X) = 1/2，E(Y) = 1/2，E(XY) = ∫∫xy·1 dxdy = (∫<sub>0</sub><sup>1</sup>x dx)(∫<sub>0</sub><sup>1</sup>y dy) = 1/4。Cov = 1/4 − 1/4 = 0，ρ = 0。这是独立的（密度可分离）。</li>
<li><strong>不相关但不独立的经典反例</strong>：X ~ U(−1,1)，Y = X<sup>2</sup>。E(X) = 0，E(XY) = E(X<sup>3</sup>) = 0（奇函数对称区间），Cov = 0，但 Y 由 X 决定，不独立。</li>
</ul>

<h3>第 5 章深化：切比雪夫不等式与 CLT 的用法</h3>
<ul>
<li><strong>切比雪夫不等式用法</strong>：已知 E(X) = μ、D(X) = σ<sup>2</sup>，估计 P{|X−μ| ≥ ε} 的上界。例：E(X) = 10，D(X) = 4，估计 P{|X−10| ≥ 3} ≤ 4/9 ≈ 0.444。</li>
<li><strong>CLT 典型应用</strong>：某保险公司有 10000 个同类型保单，每个保单赔付金额期望 100 元、方差 400 元。求总赔付超过 102 万元的概率。解：总赔付 S = ΣX<sub>i</sub>，E(S) = 10000×100 = 10<sup>6</sup>，D(S) = 10000×400 = 4×10<sup>6</sup>，σ(S) = 2000。P{S &gt; 1.02×10<sup>6</sup>} = P{(S−10<sup>6</sup>)/2000 &gt; 10} ≈ 1 − Φ(10) ≈ 0。即几乎不可能超额赔付。</li>
</ul>

<h3>第 6 章深化：正态总体抽样分布定理的套用</h3>
<ul>
<li><strong>定理三兄弟</strong>：①X̄ ~ N(μ, σ<sup>2</sup>/n)；②(n−1)S<sup>2</sup>/σ<sup>2</sup> ~ χ²(n−1) 且与 X̄ 独立；③(X̄−μ)/(S/√n) ~ t(n−1)。考题常给一组样本，问某统计量的分布。</li>
<li><strong>例题</strong>：X<sub>1</sub>,…,X<sub>16</sub> 来自 N(μ, σ<sup>2</sup>)，求 P{X̄ − μ &gt; S}。解：(X̄−μ)/(S/√16) = 4(X̄−μ)/S ~ t(15)。故 P{X̄−μ &gt; S} = P{4(X̄−μ)/S &gt; 4} = P{t(15) &gt; 4}。查 t 表，t<sub>0.005</sub>(15) ≈ 2.947，故概率很小（远小于 0.005）。</li>
</ul>

<h3>第 7 章深化：矩估计与 MLE 的对比</h3>
<ul>
<li><strong>选择策略</strong>：题目说“矩估计”就令样本矩 = 总体矩；说“最大似然”就写似然函数取对数求导。两者结果常常不同，不要混用。</li>
<li><strong>单调型似然</strong>：X ~ U(0, θ)，密度 f(x;θ) = 1/θ，0 &lt; x &lt; θ。似然 L(θ) = 1/θ<sup>n</sup> 关于 θ 单调递减，要让 L 最大，θ 须取最小可能值，即 θ̂ = max x<sub>i</sub>。注意此时导数为 −n/θ ≠ 0，不能解方程。</li>
<li><strong>两个正态总体的均值差置信区间</strong>：σ<sub>1</sub><sup>2</sup>、σ<sub>2</sup><sup>2</sup> 已知时，μ<sub>1</sub>−μ<sub>2</sub> 的区间为 (X̄<sub>1</sub>−X̄<sub>2</sub>) ± z<sub>α/2</sub>√(σ<sub>1</sub><sup>2</sup>/n<sub>1</sub> + σ<sub>2</sub><sup>2</sup>/n<sub>2</sub>)。</li>
</ul>

<h3>第 8 章深化：检验流程与两类错误的计算</h3>
<ul>
<li><strong>双侧 vs 单侧</strong>：H<sub>1</sub> 用“≠”是双侧，拒绝域在两侧；用“&gt;”或“&lt;”是单侧，拒绝域在一侧。考题要先看备择假设方向。</li>
<li><strong>两类错误计算</strong>：设 X ~ N(μ, 1)，检验 H<sub>0</sub>: μ = 0 vs H<sub>1</sub>: μ = 1，拒绝域 X̄ &gt; c。α = P{X̄ &gt; c | μ=0} = 1−Φ(c√n)；β = P{X̄ ≤ c | μ=1} = Φ((c−1)√n)。给定 α 可反解 c。</li>
</ul>

<h2>高频易错点（考前必看 12 条以上）</h2>
<ol>
<li>密度函数 f(x) 必须归一化：∫f(x)dx = 1，这是求未知参数的第一方程。</li>
<li>连续型随机变量取单点值的概率为 0，区间端点是否包含不影响概率。</li>
<li>正态标准化 Z = (X−μ)/σ 的分母是 σ 不是 σ<sup>2</sup>；方差是 σ<sup>2</sup> 不是 σ。</li>
<li>独立 ⟹ 不相关；但对一般分布不相关 ⟹ 独立，只有二维正态下二者等价。</li>
<li>D(aX) = a<sup>2</sup>D(X)，不是 aD(X)；D(X±Y) 一般要加 2Cov(X,Y)。</li>
<li>样本方差 S<sup>2</sup> 的分母是 n−1（无偏），不是 n。</li>
<li>(n−1)S<sup>2</sup>/σ<sup>2</sup> ~ χ²(n−1)，自由度是 n−1 不是 n。</li>
<li>σ 已知时用 z 检验/区间；σ 未知时用 t 检验/区间，二者不能混用。</li>
<li>最大似然估计若似然函数单调（如 U(0,θ)），MLE 取 max x<sub>i</sub>，不是解方程。</li>
<li>两类错误 α（弃真）与 β（取伪）此消彼长，不能同时任意小。</li>
<li>全概率公式的划分必须两两互不相容且并集为 Ω；贝叶斯公式分子要乘先验。</li>
<li>事件独立与互不相容在 P(A)&gt;0、P(B)&gt;0 时不能同时成立。</li>
<li>切比雪夫不等式给出的是上界，不是精确概率。</li>
<li>max/min 分布公式只在变量独立时成立。</li>
</ol>

<h2>典型例题精解补充</h2>
<p>以下补充 6 道高频典型例题，覆盖全概率、密度函数、二维联合、数字特征、矩估计、假设检验六大题型。</p>

<h3>例题一：全概率与贝叶斯综合</h3>
<p>某仓库有同种型号元件三箱，第一箱 50 件（含次品 5 件），第二箱 30 件（含次品 3 件），第三箱 20 件（含次品 2 件）。三箱元件混合存放，任取一件，求取到次品的概率；若已知取到次品，求它来自第一箱的概率。</p>
<div class="formula">P(次品) = (5/50)·(50/100) + (3/30)·(30/100) + (2/20)·(20/100)<br>= 0.1×0.5 + 0.1×0.3 + 0.1×0.2 = 0.05 + 0.03 + 0.02 = 0.10<br>P(第一箱 | 次品) = (5/50)(50/100) / 0.10 = 0.05/0.10 = 0.5</div>
<p>注意：三箱次品率都是 10%，但箱数不同导致先验概率不同。贝叶斯结果 0.5 表明第一箱虽然次品率不占优，但因数量多而占一半。</p>

<h3>例题二：由密度求分布函数与概率</h3>
<p>设随机变量 X 的密度为 f(x) = 2x，0 &lt; x &lt; 1；其余为 0。求分布函数 F(x) 及 P{1/4 &lt; X &lt; 1/2}。</p>
<div class="formula">x ≤ 0 时 F(x) = 0；0 &lt; x &lt; 1 时 F(x) = ∫<sub>0</sub><sup>x</sup> 2t dt = x<sup>2</sup>；x ≥ 1 时 F(x) = 1<br>P{1/4 &lt; X &lt; 1/2} = F(1/2) − F(1/4) = 1/4 − 1/16 = 3/16</div>
<p>注意分布函数是分段函数，端点处连续。</p>

<h3>例题三：二维联合密度求概率与独立性</h3>
<p>设 (X,Y) 联合密度 f(x,y) = e<sup>−(x+y)</sup>，x &gt; 0，y &gt; 0。求 P{X &lt; 1, Y &lt; 1} 并判断独立性。</p>
<div class="formula">P{X&lt;1, Y&lt;1} = ∫<sub>0</sub><sup>1</sup>∫<sub>0</sub><sup>1</sup> e<sup>−(x+y)</sup> dxdy = (∫<sub>0</sub><sup>1</sup> e<sup>−x</sup>dx)<sup>2</sup> = (1 − e<sup>−1</sup>)<sup>2</sup><br>f<sub>X</sub>(x) = ∫<sub>0</sub><sup>∞</sup> e<sup>−(x+y)</sup> dy = e<sup>−x</sup>，x &gt; 0；同理 f<sub>Y</sub>(y) = e<sup>−y</sup><br>f(x,y) = e<sup>−x</sup>·e<sup>−y</sup> = f<sub>X</sub>(x)f<sub>Y</sub>(y)，故 X、Y 独立</div>
<p>这是指数分布的独立乘积，本质上是两个独立 E(1) 变量。</p>

<h3>例题四：期望与方差的计算</h3>
<p>设 X ~ U(0, 2)，求 E(X<sup>2</sup>) 与 D(2X + 1)。</p>
<div class="formula">E(X) = 1，D(X) = (2−0)<sup>2</sup>/12 = 1/3<br>E(X<sup>2</sup>) = D(X) + [E(X)]<sup>2</sup> = 1/3 + 1 = 4/3<br>D(2X+1) = 4D(X) = 4/3</div>
<p>常数 1 不影响方差。</p>

<h3>例题五：矩估计与最大似然估计</h3>
<p>设总体 X ~ E(λ)，密度 f(x; λ) = λe<sup>−λx</sup>，x &gt; 0。X<sub>1</sub>,…,X<sub>n</sub> 为样本。求 λ 的矩估计与 MLE。</p>
<div class="formula">E(X) = 1/λ，矩估计令 X̄ = 1/λ，λ̂<sub>矩</sub> = 1/X̄<br>L(λ) = Π λe<sup>−λx<sub>i</sub></sup> = λ<sup>n</sup> e<sup>−λΣx<sub>i</sub></sup><br>ln L = n ln λ − λΣx<sub>i</sub>，d ln L/dλ = n/λ − Σx<sub>i</sub> = 0<br>λ̂<sub>MLE</sub> = n / Σx<sub>i</sub> = 1/X̄</div>
<p>本例中矩估计与 MLE 结果相同，这在指数分布中是巧合。</p>

<h3>例题六：置信区间与假设检验综合</h3>
<p>某车间生产的螺栓长度 X ~ N(μ, 0.04)（单位：cm）。抽测 16 个，得 X̄ = 10.3。(1) 求 μ 的 95% 置信区间；(2) 检验 H<sub>0</sub>: μ = 10 vs H<sub>1</sub>: μ ≠ 10（α = 0.05）。</p>
<div class="formula">(1) σ = 0.2，n = 16，区间 = 10.3 ± 1.96×0.2/4 = 10.3 ± 0.098 = [10.202, 10.398]<br>(2) Z = (10.3 − 10)/(0.2/4) = 0.3/0.05 = 6<br>|Z| = 6 &gt; 1.96，拒绝 H<sub>0</sub></div>
<p>注意 μ<sub>0</sub> = 10 不在置信区间 [10.202, 10.398] 内，与拒绝 H<sub>0</sub> 结论一致。</p>

<h2>概率论与数理统计的思想综述</h2>
<p>概率论与数理统计是一枚硬币的两面：概率论是“已知分布，推概率”；数理统计是“已知数据，估分布”。理解这个分工，很多概念就顺了。</p>
<ul>
<li><strong>概率论的核心是分布</strong>。拿到 X，先写出它的分布律或密度，一切概率、期望、方差都由它决定。</li>
<li><strong>数理统计的核心是抽样分布定理</strong>。样本均值、样本方差为什么服从 χ²、t、F，是连接“数据”与“推断”的桥梁。</li>
<li><strong>参数估计是“点估计 + 区间估计”两条腿</strong>。矩估计与 MLE 给点估计，置信区间给误差范围。</li>
<li><strong>假设检验是“反证法”的概率版</strong>。先假设 H<sub>0</sub> 成立，看样本是否与它矛盾，矛盾则拒绝。</li>
</ul>

<h3>常见误区汇总</h3>
<ol>
<li>把“概率为 0”等同于“不可能事件”。对连续型随机变量，P{X = x<sub>0</sub>} = 0 但 X = x<sub>0</sub> 并非不可能。</li>
<li>把“独立”等同于“不相关”。只有二维正态二者等价。</li>
<li>把“无偏”等同于“准确”。无偏只是平均意义，某次估计可能偏差很大。</li>
<li>把“拒绝 H<sub>0</sub>”等同于“H<sub>0</sub> 一定错”。拒绝只是“有足够证据反对”，不排除 α 错误。</li>
<li>把“接受 H<sub>0</sub>”等同于“H<sub>0</sub> 一定对”。接受只是“没有足够证据反对”，可能 β 错误。</li>
<li>把“样本方差除以 n−1”当成“除以 n”。前者无偏，后者有偏。</li>
<li>把“σ 未知时”用 z 检验。σ 未知必须用 t 检验。</li>
<li>把“F 分布两个自由度”搞反。F(n<sub>1</sub>, n<sub>2</sub>) 中 n<sub>1</sub> 是分子卡方的自由度。</li>
</ol>

<h2>二维离散型随机变量专题</h2>
<p>考纲对二维离散型的要求与连续型平行，但计算用的是表格而非积分。</p>
<ul>
<li><strong>联合分布律</strong>：p<sub>ij</sub> = P{X = x<sub>i</sub>, Y = y<sub>j</sub>}，满足 p<sub>ij</sub> ≥ 0 且 Σ<sub>i</sub>Σ<sub>j</sub> p<sub>ij</sub> = 1。</li>
<li><strong>边缘分布律</strong>：p<sub>i·</sub> = Σ<sub>j</sub> p<sub>ij</sub>（X 的边缘），p<sub>·j</sub> = Σ<sub>i</sub> p<sub>ij</sub>（Y 的边缘）。即联合表按行、按列求和。</li>
<li><strong>条件分布律</strong>：P{Y = y<sub>j</sub> | X = x<sub>i</sub>} = p<sub>ij</sub> / p<sub>i·</sub>（要求 p<sub>i·</sub> &gt; 0）。</li>
<li><strong>独立性</strong>：X、Y 独立 ⟺ 对一切 i、j，p<sub>ij</sub> = p<sub>i·</sub>·p<sub>·j</sub>。</li>
</ul>
<p><strong>典型例题</strong>：设 (X,Y) 联合分布律为 P{X=0,Y=0} = 1/4，P{X=0,Y=1} = 1/4，P{X=1,Y=0} = 1/4，P{X=1,Y=1} = 1/4。求边缘分布并判断独立性。解：p<sub>0·</sub> = 1/2，p<sub>1·</sub> = 1/2；p<sub>·0</sub> = 1/2，p<sub>·1</sub> = 1/2。验证 p<sub>ij</sub> = 1/4 = (1/2)(1/2) = p<sub>i·</sub>p<sub>·j</sub> 对所有组合成立，故 X、Y 独立。</p>

<h2>考前速记</h2>
<ul>
<li>八大分布的期望与方差：0-1(p, pq)、二项(np, npq)、泊松(λ, λ)、几何(1/p, q/p<sup>2</sup>)、均匀((a+b)/2, (b−a)<sup>2</sup>/12)、指数(1/λ, 1/λ<sup>2</sup>)、正态(μ, σ<sup>2</sup>)。</li>
<li>三大抽样分布：χ² 是平方和、t 是正态除卡方根、F 是两卡方比。</li>
<li>参数估计两条路：矩估计（样本矩代总体矩）、MLE（似然取对数求导）。</li>
<li>置信区间三情形：σ 已知 z、σ 未知 t、方差用 χ²。</li>
<li>假设检验五步：建假设、选统计量、定拒绝域、算观测值、下结论。</li>
<li>中心极限定理一句话：独立同分布（期望方差存在）的和，n 大时近似正态。</li>
<li>3σ 准则：68.3%、95.4%、99.7%。</li>
<li>z<sub>0.025</sub> = 1.96，z<sub>0.05</sub> = 1.645。</li>
</ul>

<blockquote><p><strong>复习建议</strong>：概率统计的得分策略是“概念题稳拿、计算题稳写”。选择填空多考概念辨析（独立与不相关、无偏性、两类错误、分位点），大题多考固定套路（二维联合密度求边缘与概率、矩估计与 MLE、置信区间）。建议把本笔记的“速查大表”与“高频易错点”各抄一遍，再动手刷真题近十年的概率统计大题，基本可以拿下这块 33 分的绝大部分。</p></blockquote>

<h2>各章考研分值与命题规律</h2>
<p>了解命题规律，复习才能有的放矢。数学一概率统计约 33 分，各章权重如下。</p>
<div class="table-wrap"><table>
<thead><tr><th>章节</th><th>约占分值</th><th>常考题型</th><th>复习优先级</th></tr></thead>
<tbody>
<tr><td>第 1 章 随机事件与概率</td><td>3-5 分</td><td>选择填空，全概率/贝叶斯</td><td>中</td></tr>
<tr><td>第 2 章 一维随机变量</td><td>4-6 分</td><td>密度归一化、正态标准化、随机变量函数分布</td><td>高</td></tr>
<tr><td>第 3 章 多维随机变量</td><td>8-10 分</td><td>大题常客：联合密度、边缘、独立性、和分布</td><td>最高</td></tr>
<tr><td>第 4 章 数字特征</td><td>6-8 分</td><td>与第 3 章结合出大题：期望、方差、协方差、ρ</td><td>最高</td></tr>
<tr><td>第 5 章 大数定律与 CLT</td><td>2-4 分</td><td>选择填空，切比雪夫、CLT 近似</td><td>低</td></tr>
<tr><td>第 6 章 数理统计基本概念</td><td>4-6 分</td><td>抽样分布定理、χ²/t/F 判定</td><td>高</td></tr>
<tr><td>第 7 章 参数估计</td><td>6-8 分</td><td>大题常客：矩估计、MLE、置信区间</td><td>最高</td></tr>
<tr><td>第 8 章 假设检验</td><td>2-4 分</td><td>选择填空：两类错误、拒绝域</td><td>中</td></tr>
</tbody>
</table></div>

<h2>复习方法与时间规划</h2>
<ul>
<li><strong>基础阶段（现在—8 月）</strong>：通读教材，把八大分布的密度、期望、方差背熟；每章做完课后习题。重点在第 2、3、4 章。</li>
<li><strong>强化阶段（9—10 月）</strong>：分题型刷真题。二维随机变量大题、数字特征大题、参数估计大题是三大主力，每类至少练 10 道。</li>
<li><strong>冲刺阶段（11—12 月）</strong>：只看本笔记的“速查大表”“高频易错点”“考前速记”，配合近五年真题模拟。</li>
<li><strong>考场策略</strong>：概率统计大题通常在整张试卷的后两题，计算量不如高数大题，但概念性强。建议先写清分布、再算数字特征，步骤分比结果分更重要。</li>
</ul>

<h2>题型专项</h2>
<p>以下 35 道题按选择、填空、判断、简答、计算五类编排，覆盖八章全部核心考点。建议先独立完成，再对照解析。计算题数字均已凑好，答案自洽。</p>

<h3>一、选择题（8 题）</h3>
<details><summary>1. 设 A、B、C 为三个事件，则“A、B、C 中至少有一个发生”表示为（　）。A. ABC　B. A∪B∪C　C. AB∪AC∪BC　D. ĀB̄C̄</summary><p><strong>答案：B。</strong>“至少一个发生”即和事件；ABC 是“同时发生”，AB∪AC∪BC 是“至少两个发生”，ĀB̄C̄ 是“都不发生”。</p></details>
<details><summary>2. 设随机变量 X ~ N(1, 4)，则 P{X ≤ 3} =（　）。A. Φ(3)　B. Φ(1)　C. Φ(1.5)　D. 1 − Φ(1)</summary><p><strong>答案：B。</strong>标准化：Z = (X−1)/2，P{X≤3} = P{Z≤1} = Φ(1)。</p></details>
<details><summary>3. 设 X、Y 相互独立且方差均存在，则 D(2X − Y) =（　）。A. 4D(X) − D(Y)　B. 4D(X) + D(Y)　C. 2D(X) + D(Y)　D. 2D(X) − D(Y)</summary><p><strong>答案：B。</strong>D(aX+bY) = a<sup>2</sup>D(X) + b<sup>2</sup>D(Y)（独立时），故 D(2X−Y) = 4D(X) + D(Y)。</p></details>
<details><summary>4. 设 X ~ P(λ)，且 P{X=2} = P{X=3}，则 λ =（　）。A. 2　B. 3　C. 5　D. 6</summary><p><strong>答案：B。</strong>由 λ<sup>2</sup>e<sup>−λ</sup>/2! = λ<sup>3</sup>e<sup>−λ</sup>/3!，得 1/2 = λ/6，λ = 3。</p></details>
<details><summary>5. 设 X、Y 均服从正态分布且不相关，则下列正确的是（　）。A. X、Y 一定独立　B. X、Y 一定不独立　C. 若 (X,Y) 服从二维正态，则 X、Y 独立　D. X+Y 不服从正态</summary><p><strong>答案：C。</strong>仅当联合为二维正态时，不相关才等价于独立；否则不能推出。正态变量之和在独立（或二维正态）时仍为正态。</p></details>
<details><summary>6. 设总体 X ~ N(μ, σ<sup>2</sup>)，X<sub>1</sub>,…,X<sub>n</sub> 为样本，则 (n−1)S<sup>2</sup>/σ<sup>2</sup> 服从（　）。A. χ²(n)　B. χ²(n−1)　C. t(n)　D. F(n, n−1)</summary><p><strong>答案：B。</strong>正态总体抽样分布定理：(n−1)S<sup>2</sup>/σ<sup>2</sup> ~ χ²(n−1)。</p></details>
<details><summary>7. 在假设检验中，“H<sub>0</sub> 为真却被拒绝”称为（　）。A. 第一类错误　B. 第二类错误　C. 弃真错误概率为 β　D. 取伪错误</summary><p><strong>答案：A。</strong>弃真是第一类错误，概率 α；取伪是第二类错误，概率 β。</p></details>
<details><summary>8. 设 X ~ E(λ)（指数分布），则 E(X<sup>2</sup>) =（　）。A. 1/λ<sup>2</sup>　B. 2/λ<sup>2</sup>　C. 1/λ　D. 2/λ</summary><p><strong>答案：B。</strong>E(X) = 1/λ，D(X) = 1/λ<sup>2</sup>，故 E(X<sup>2</sup>) = D(X) + [E(X)]<sup>2</sup> = 1/λ<sup>2</sup> + 1/λ<sup>2</sup> = 2/λ<sup>2</sup>。</p></details>

<h3>二、填空题（8 题）</h3>
<details><summary>1. 已知 P(A) = 0.5，P(B) = 0.6，P(A∪B) = 0.8，则 P(A|B) = ____。</summary><p><strong>答案：0.5。</strong>P(AB) = P(A)+P(B)−P(A∪B) = 0.5+0.6−0.8 = 0.3；P(A|B) = P(AB)/P(B) = 0.3/0.6 = 0.5。</p></details>
<details><summary>2. 设 X ~ B(10, 0.3)，则 E(X) = ____，D(X) = ____。</summary><p><strong>答案：3；2.1。</strong>E(X) = np = 3，D(X) = np(1−p) = 10×0.3×0.7 = 2.1。</p></details>
<details><summary>3. 设随机变量 X 的密度为 f(x) = C·x，0 &lt; x &lt; 2，则常数 C = ____。</summary><p><strong>答案：1/2。</strong>∫<sub>0</sub><sup>2</sup> Cx dx = C·2 = 1，C = 1/2。</p></details>
<details><summary>4. 设 X ~ N(0, 1)，则 P{|X| &lt; 1.96} = ____。</summary><p><strong>答案：0.95。</strong>Φ(1.96) = 0.975，故 P{|X|&lt;1.96} = 2×0.975−1 = 0.95。</p></details>
<details><summary>5. 设 X、Y 独立，D(X) = 2，D(Y) = 3，则 D(3X − 2Y) = ____。</summary><p><strong>答案：30。</strong>D(3X−2Y) = 9D(X) + 4D(Y) = 18 + 12 = 30。</p></details>
<details><summary>6. 设总体 X ~ N(μ, σ<sup>2</sup>)，样本容量 n = 16，X̄ = 10，S = 2，则 μ 的 95% 置信区间（σ 未知）为 ____。（t<sub>0.025</sub>(15) = 2.131）</summary><p><strong>答案：[10 ± 2.131×2/4] = [8.9345, 11.0655]。</strong>σ 未知用 t 区间：X̄ ± t<sub>α/2</sub>(n−1)·S/√n = 10 ± 2.131×0.5。</p></details>
<details><summary>7. 设 X ~ χ²(5)，Y ~ χ²(10) 且独立，则 X+Y 服从 ____ 分布。</summary><p><strong>答案：χ²(15)。</strong>χ² 分布具有可加性。</p></details>
<details><summary>8. 设由来自 N(μ, 1) 的样本算得 X̄ = 2，n = 100，则 μ 的 95% 置信区间为 ____。（z<sub>0.025</sub> = 1.96）</summary><p><strong>答案：[2 ± 1.96×1/10] = [1.804, 2.196]。</strong>σ 已知用 z 区间。</p></details>

<h3>三、判断题（6 题，正确打 √，错误打 × 并说明理由）</h3>
<details><summary>1. 若事件 A、B 相互独立，则 P(AB) = P(A) + P(B)。（　）</summary><p><strong>答案：×。</strong>独立时 P(AB) = P(A)P(B)；P(A)+P(B) 不是积事件概率。</p></details>
<details><summary>2. 连续型随机变量 X 取任一定值 x<sub>0</sub> 的概率为 0。（　）</summary><p><strong>答案：√。</strong>对连续型，P{X = x<sub>0</sub>} = ∫<sub>x<sub>0</sub></sub><sup>x<sub>0</sub></sup> f(x)dx = 0。</p></details>
<details><summary>3. 若 X、Y 不相关，则 X、Y 一定独立。（　）</summary><p><strong>答案：×。</strong>不相关即 ρ = 0，一般推不出独立；只有二维正态下二者等价。</p></details>
<details><summary>4. 样本方差 S<sup>2</sup> = 1/(n−1)·Σ(X<sub>i</sub>−X̄)<sup>2</sup> 是 σ<sup>2</sup> 的无偏估计。（　）</summary><p><strong>答案：√。</strong>E(S<sup>2</sup>) = σ<sup>2</sup>，除以 n−1 正是为了无偏。</p></details>
<details><summary>5. 在假设检验中，α 越小则 β 也越小。（　）</summary><p><strong>答案：×。</strong>n 固定时 α 与 β 此消彼长，α 减小会使 β 增大。</p></details>
<details><summary>6. 设 X ~ N(μ, σ<sup>2</sup>)，则 (X̄−μ)/(S/√n) 服从 N(0,1)。（　）</summary><p><strong>答案：×。</strong>σ 未知用 S 代替时，统计量服从 t(n−1)，不是 N(0,1)；只有 σ 已知时 (X̄−μ)/(σ/√n) ~ N(0,1)。</p></details>

<h3>四、简答题（5 题）</h3>
<details><summary>1. 简述全概率公式与贝叶斯公式的关系及使用条件。</summary><p><strong>答题要点：</strong></p><ul><li>划分 B<sub>1</sub>,…,B<sub>n</sub>：两两互不相容且并集为 Ω，P(B<sub>i</sub>) &gt; 0。</li><li>全概率：P(A) = Σ P(B<sub>i</sub>)P(A|B<sub>i</sub>)，用于“由因求果”。</li><li>贝叶斯：P(B<sub>k</sub>|A) = P(B<sub>k</sub>)P(A|B<sub>k</sub>) / P(A)，用于“由果溯因”。</li><li>贝叶斯分母正是全概率，分子为先验 × 似然。</li></ul></details>
<details><summary>2. 简述随机变量 X、Y 相互独立的等价条件。</summary><p><strong>答题要点：</strong></p><ul><li>分布函数：F(x,y) = F<sub>X</sub>(x)F<sub>Y</sub>(y)。</li><li>连续型密度：f(x,y) = f<sub>X</sub>(x)f<sub>Y</sub>(y)；离散型：p<sub>ij</sub> = p<sub>i·</sub>p<sub>·j</sub>。</li><li>对任意可测集 A、B：P{X∈A, Y∈B} = P{X∈A}P{Y∈B}。</li><li>独立 ⟹ 不相关，但一般反之不真（二维正态除外）。</li></ul></details>
<details><summary>3. 简述最大似然估计的基本步骤。</summary><p><strong>答题要点：</strong></p><ul><li>写出似然函数 L(θ) = Π f(x<sub>i</sub>; θ)。</li><li>取对数 ln L(θ)。</li><li>对 θ 求导并令其为 0，解似然方程。</li><li>验证为极大值；若单调则取边界（如 U(0,θ) 取 max x<sub>i</sub>）。</li></ul></details>
<details><summary>4. 简述假设检验的两类概念及其关系。</summary><p><strong>答题要点：</strong></p><ul><li>第一类错误（弃真）：H<sub>0</sub> 真却拒绝，概率 α。</li><li>第二类错误（取伪）：H<sub>0</sub> 假却接受，概率 β。</li><li>n 固定时 α、β 此消彼长；同时减小需增大 n。</li></ul></details>
<details><summary>5. 简述切比雪夫不等式及其作用。</summary><p><strong>答题要点：</strong></p><ul><li>P{|X−μ| ≥ ε} ≤ σ<sup>2</sup>/ε<sup>2</sup>。</li><li>对任意分布给出偏差概率的上界。</li><li>是大数定律的证明工具，不依赖具体分布形式。</li></ul></details>

<h3>五、计算题（8 题）</h3>
<details><summary>1.（全概率与贝叶斯）某工厂有三条流水线生产同一种产品，产量分别占总产量的 25%、35%、40%，次品率分别为 5%、4%、2%。现从总产量中任取一件，求取到次品的概率；若取到的是次品，求它由第二条流水线生产的概率。</summary><p><strong>解：</strong>设 B<sub>i</sub> 表示产品来自第 i 条流水线，A 表示取到次品。</p><div class="formula">P(A) = P(B<sub>1</sub>)P(A|B<sub>1</sub>) + P(B<sub>2</sub>)P(A|B<sub>2</sub>) + P(B<sub>3</sub>)P(A|B<sub>3</sub>)<br>= 0.25×0.05 + 0.35×0.04 + 0.40×0.02 = 0.0125 + 0.014 + 0.008 = 0.0345<br>P(B<sub>2</sub>|A) = P(B<sub>2</sub>)P(A|B<sub>2</sub>) / P(A) = 0.014 / 0.0345 ≈ 0.4058</div><p>结论：取到次品的概率为 0.0345；该次品由第二条流水线生产的概率约为 0.406。注意贝叶斯分子不要漏乘先验 P(B<sub>2</sub>)。</p></details>
<details><summary>2.（密度归一化）设随机变量 X 的密度为 f(x) = C·e<sup>−|x|</sup>，−∞ &lt; x &lt; +∞，求常数 C 及 P{0 &lt; X &lt; 1}。</summary><p><strong>解：</strong>由归一化条件 ∫<sub>−∞</sub><sup>+∞</sup> C e<sup>−|x|</sup> dx = 1。</p><div class="formula">∫<sub>−∞</sub><sup>+∞</sup> e<sup>−|x|</sup> dx = 2∫<sub>0</sub><sup>+∞</sup> e<sup>−x</sup> dx = 2<br>故 2C = 1，C = 1/2<br>P{0&lt;X&lt;1} = ∫<sub>0</sub><sup>1</sup> (1/2)e<sup>−x</sup> dx = (1/2)(1 − e<sup>−1</sup>) ≈ 0.316</div><p>结论：C = 1/2，P{0&lt;X&lt;1} = (1−e<sup>−1</sup>)/2。该分布即拉普拉斯分布。</p></details>
<details><summary>3.（二维联合密度）设 (X,Y) 的联合密度为 f(x,y) = 2，0 &lt; x &lt; 1，0 &lt; y &lt; x。求：(1) 边缘密度 f<sub>X</sub>(x)、f<sub>Y</sub>(y)；(2) P{X+Y ≤ 1}；(3) 判断 X、Y 是否独立。</summary><p><strong>解：</strong>非零区域为 0&lt;y&lt;x&lt;1 的三角形。</p><div class="formula">(1) f<sub>X</sub>(x) = ∫<sub>0</sub><sup>x</sup> 2 dy = 2x，0&lt;x&lt;1<br>f<sub>Y</sub>(y) = ∫<sub>y</sub><sup>1</sup> 2 dx = 2(1−y)，0&lt;y&lt;1<br>(2) P{X+Y≤1} = ∫∫<sub>x+y≤1</sub> 2 dxdy。区域为 0&lt;y&lt;x 且 x+y≤1，交点 x=y 与 x+y=1 交于 (1/2,1/2)<br>= 2∫<sub>0</sub><sup>1/2</sup> dy ∫<sub>y</sub><sup>1−y</sup> dx = 2∫<sub>0</sub><sup>1/2</sup> (1−2y) dy = 2·[y − y<sup>2</sup>]<sub>0</sub><sup>1/2</sup> = 2·(1/2 − 1/4) = 1/2<br>(3) f<sub>X</sub>(x)·f<sub>Y</sub>(y) = 2x·2(1−y) = 4x(1−y) ≠ 2 = f(x,y)，故不独立</div><p>结论：f<sub>X</sub>(x)=2x（0&lt;x&lt;1），f<sub>Y</sub>(y)=2(1−y)（0&lt;y&lt;1），P{X+Y≤1}=1/2，X、Y 不独立。</p></details>
<details><summary>4.（期望与方差计算）设随机变量 X 的分布律为 P{X=−1} = 1/4，P{X=0} = 1/2，P{X=1} = 1/4。求 E(X)、D(X)、E(X<sup>2</sup>)。</summary><p><strong>解：</strong>按定义直接计算。</p><div class="formula">E(X) = (−1)·1/4 + 0·1/2 + 1·1/4 = 0<br>E(X<sup>2</sup>) = 1·1/4 + 0·1/2 + 1·1/4 = 1/2<br>D(X) = E(X<sup>2</sup>) − [E(X)]<sup>2</sup> = 1/2 − 0 = 1/2</div><p>结论：E(X)=0，E(X<sup>2</sup>)=1/2，D(X)=1/2。注意方差用 E(X<sup>2</sup>)−[E(X)]<sup>2</sup> 计算最稳妥。</p></details>
<details><summary>5.（独立和的分布）设 X、Y 相互独立，X ~ N(0, 1)，Y ~ N(1, 4)。求 Z = 2X − Y 的分布，并求 P{Z ≤ 1}。</summary><p><strong>解：</strong>独立正态变量的线性组合仍为正态。</p><div class="formula">E(Z) = 2E(X) − E(Y) = 0 − 1 = −1<br>D(Z) = 4D(X) + D(Y) = 4×1 + 4 = 8，故 Z ~ N(−1, 8)<br>P{Z≤1} = Φ((1−(−1))/√8) = Φ(2/(2√2)) = Φ(1/√2) = Φ(0.7071) ≈ 0.760</div><p>结论：Z ~ N(−1, 8)，P{Z≤1} ≈ 0.760。注意 D(−Y) = D(Y)，方差对系数平方。</p></details>
<details><summary>6.（矩估计与最大似然估计）设总体 X 的密度为 f(x; θ) = θx<sup>θ−1</sup>，0 &lt; x &lt; 1，θ &gt; 0。X<sub>1</sub>,…,X<sub>n</sub> 为样本。求 θ 的矩估计与最大似然估计。</summary><p><strong>解：</strong>先求总体期望。</p><div class="formula">E(X) = ∫<sub>0</sub><sup>1</sup> x·θx<sup>θ−1</sup> dx = θ/(θ+1)<br>矩估计：令 X̄ = θ/(θ+1)，解得 θ̂<sub>矩</sub> = X̄/(1−X̄)<br>似然函数：L(θ) = Π θx<sub>i</sub><sup>θ−1</sup> = θ<sup>n</sup>·(Πx<sub>i</sub>)<sup>θ−1</sup><br>ln L = n ln θ + (θ−1)Σ ln x<sub>i</sub><br>d ln L/dθ = n/θ + Σ ln x<sub>i</sub> = 0，解得 θ̂<sub>MLE</sub> = −n / Σ ln x<sub>i</sub></div><p>结论：矩估计 θ̂ = X̄/(1−X̄)，MLE θ̂ = −n / Σ ln x<sub>i</sub>。注意两者一般不相等。</p></details>
<details><summary>7.（无偏性验证）设总体 X 的均值 μ、方差 σ<sup>2</sup> 均存在，X<sub>1</sub>、X<sub>2</sub> 为来自总体的样本。验证估计量 μ̂<sub>1</sub> = (X<sub>1</sub>+X<sub>2</sub>)/2 与 μ̂<sub>2</sub> = (X<sub>1</sub>+2X<sub>2</sub>)/3 都是 μ 的无偏估计，并比较哪个更有效。</summary><p><strong>解：</strong>分别求期望与方差。</p><div class="formula">E(μ̂<sub>1</sub>) = (E(X<sub>1</sub>)+E(X<sub>2</sub>))/2 = (μ+μ)/2 = μ，无偏<br>E(μ̂<sub>2</sub>) = (E(X<sub>1</sub>)+2E(X<sub>2</sub>))/3 = (μ+2μ)/3 = μ，无偏<br>D(μ̂<sub>1</sub>) = (D(X<sub>1</sub>)+D(X<sub>2</sub>))/4 = σ<sup>2</sup>/2<br>D(μ̂<sub>2</sub>) = (D(X<sub>1</sub>)+4D(X<sub>2</sub>))/9 = 5σ<sup>2</sup>/9<br>比较：σ<sup>2</sup>/2 = 0.5σ<sup>2</sup> &lt; 5σ<sup>2</sup>/9 ≈ 0.556σ<sup>2</sup>，故 μ̂<sub>1</sub> 更有效</div><p>结论：两者均无偏，μ̂<sub>1</sub> 的方差更小，更有效。有效性比较的是同为无偏估计的方差大小。</p></details>
<details><summary>8.（置信区间与假设检验）已知某厂生产的灯泡寿命 X ~ N(μ, 400)（单位：小时）。现抽取 16 只，算得样本均值 X̄ = 500。(1) 求 μ 的 95% 置信区间；(2) 在显著性水平 α = 0.05 下，检验 H<sub>0</sub>: μ = 510 vs H<sub>1</sub>: μ ≠ 510。（z<sub>0.025</sub> = 1.96）</summary><p><strong>解：</strong>σ<sup>2</sup> = 400 已知，用 z 区间与 z 检验。</p><div class="formula">(1) σ = 20，n = 16，置信区间 = X̄ ± z<sub>0.025</sub>·σ/√n = 500 ± 1.96×20/4 = 500 ± 9.8 = [490.2, 509.8]<br>(2) 检验统计量 Z = (X̄ − μ<sub>0</sub>)/(σ/√n) = (500 − 510)/(20/4) = −10/5 = −2<br>拒绝域 |Z| ≥ 1.96。|−2| = 2 &gt; 1.96，落入拒绝域</div><p>结论：μ 的 95% 置信区间为 [490.2, 509.8]；在 α = 0.05 下拒绝 H<sub>0</sub>，认为灯泡平均寿命与 510 有显著差异。注意 σ 已知时统一用 z，不要误用 t。</p></details>

<blockquote><p><strong>结语</strong>：概率论与数理统计的复习核心不是刷难题，而是把“分布—数字特征—抽样—估计—检验”这条主线的每个概念吃透。本笔记覆盖了数学一大纲八章全部考点，配合 35 道专项习题，足以应对这块 33 分。考前一周，把速查大表与高频易错点再过两遍即可。</p></blockquote>
`
  }
);

