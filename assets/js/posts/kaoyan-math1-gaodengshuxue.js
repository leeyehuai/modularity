/* 文章模块：考研数学一笔记·高等数学：考点、公式与题型速查 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'kaoyan-math1-gaodengshuxue',
    title: '考研数学一笔记·高等数学：考点、公式与题型速查',
    desc: '按数学一大纲梳理高等数学八章（极限连续、一元微分、一元积分、向量几何、多元微分、多元积分、无穷级数、微分方程）的核心考点、定理推论、公式速查表、易错点与示意图，配套选择6题、填空6题、判断4题、简答4题、计算与证明6题，共26题，适合强化与冲刺阶段速查。',
    major: '数学',
    category: '考研数学',
    tags: ["考研数学一","高等数学","复习笔记"],
    date: '2026-11-28',
    minutes: 25,
    content: `
<p>数学一的试卷中，高等数学约占 56%（84 分），线性代数约占 22%（33 分）。本篇只梳理高等数学八章的<strong>定义、定理、推论、公式、易错点</strong>，每章配一张示意图和一张公式表，最后附综合速查大表与 26 道专项习题。建议用法：第一遍逐章精读，第二遍只看公式表与易错点，考前只看最后的速记清单。</p>

<blockquote><p>数学一与数二、数三的最大区别在三处：<strong>空间解析几何、多元积分学的第二类曲线/曲面积分与三大公式（格林、高斯、斯托克斯）、无穷级数中的傅里叶级数</strong>。这三处是数一专属的高分密集区，也是本篇着墨最重的部分。</p></blockquote>

<h2>高数八章一句话框架</h2>
<div class="table-wrap"><table>
<thead><tr><th>章</th><th>一句话核心</th><th>必考题型</th></tr></thead>
<tbody>
<tr><td>1. 极限连续</td><td>用 ε-N/ε-δ 语言描述变化趋势，等价无穷小与泰勒是计算两大武器</td><td>未定式极限、间断点分类、无穷小阶比较</td></tr>
<tr><td>2. 一元微分</td><td>导数是瞬时变化率，中值定理用导数研究函数性态</td><td>中值定理证明、泰勒展开、极值凹凸拐点渐近线</td></tr>
<tr><td>3. 一元积分</td><td>积分是微分的逆运算，元素法把面积体积弧长统一成微元求和</td><td>换元分部、变限积分求导、定积分应用</td></tr>
<tr><td>4. 向量几何</td><td>点积定垂直、叉积定法向、混合积定共面</td><td>平面直线方程、距离公式、旋转曲面</td></tr>
<tr><td>5. 多元微分</td><td>偏导是单变量切片，全微分是线性逼近，梯度指向增长最快方向</td><td>链式法则、隐函数求导、方向导数梯度、条件极值</td></tr>
<tr><td>6. 多元积分</td><td>重积分是体积/质量，曲线曲面积分把积分推广到几何体上，三大公式连接边界与内部</td><td>二重积分定限、格林高斯斯托克斯公式</td></tr>
<tr><td>7. 无穷级数</td><td>级数是无穷项求和，幂级数用多项式逼近函数，傅里叶级数用三角函数逼近</td><td>敛散判别、收敛域、求和函数、狄利克雷定理</td></tr>
<tr><td>8. 微分方程</td><td>常系数线性方程的解由特征根决定结构，非齐次项用待定系数叠加特解</td><td>一阶线性通解、二阶常系数齐次与非齐次</td></tr>
</tbody>
</table></div>

<h3>第 1 章　函数、极限、连续</h3>
<p>本章是全套高数的工具层。考题以计算题为主：求极限、判断间断点类型、比较无穷小阶数。</p>

<h4>1.1 核心考点梳理</h4>
<ul>
<li><strong>数列极限的定义（ε-N 语言）</strong>：对任意 ε &gt; 0，存在正整数 N，当 n &gt; N 时，恒有 |x<sub>n</sub> − a| &lt; ε，则 lim(n→∞) x<sub>n</sub> = a。函数极限用 ε-δ（x→x<sub>0</sub>）与 ε-X（x→∞）语言。</li>
<li><strong>极限的唯一性、局部有界性、保号性</strong>：保号性是重中之重——若 lim f(x) = A &gt; 0，则在极限点附近的某去心邻域内 f(x) &gt; 0；反之，若 f(x) ≥ 0 且极限存在，则 A ≥ 0（注意结论只能取到等号，不能写 A &gt; 0）。</li>
<li><strong>极限存在的充要条件</strong>：lim(x→x<sub>0</sub>) f(x) = A ⟺ 左极限 f(x<sub>0</sub><sup>−</sup>) 与右极限 f(x<sub>0</sub><sup>+</sup>) 都存在且相等。分段函数在分段点处必须分别求左右极限。</li>
<li><strong>极限运算法则</strong>：若 lim f(x)、lim g(x) 都存在，则和、差、积、商（分母极限不为 0）的极限等于极限的和差积商。法则的前提是<strong>两极限都存在且分母极限非零</strong>，不满足前提时不能直接用。</li>
<li><strong>两个重要极限</strong>：lim(x→0) sin x / x = 1；lim(x→∞) (1 + 1/x)<sup>x</sup> = e（等价写法 lim(t→0) (1 + t)<sup>1/t</sup> = e）。推广到自变量的任意无穷小量 u：lim sin u / u = 1（u→0），lim(1 + u)<sup>1/u</sup> = e（u→0）。</li>
<li><strong>等价无穷小替换</strong>：当 x → 0 时（u 为任意趋于 0 的量），sin u ~ u，tan u ~ u，arcsin u ~ u，arctan u ~ u，1 − cos u ~ u<sup>2</sup>/2，e<sup>u</sup> − 1 ~ u，ln(1 + u) ~ u，(1 + u)<sup>α</sup> − 1 ~ αu，a<sup>u</sup> − 1 ~ u ln a。<strong>只能在乘除因子中替换，加减中不能随意替换。</strong></li>
<li><strong>无穷小阶的比较</strong>：设 α、β 为同一极限过程中的无穷小。若 lim β/α = 0，称 β 是比 α 高阶的无穷小 β = o(α)；若 lim β/α = ∞，称 β 低阶；若 lim β/α = c ≠ 0，称同阶；若 lim β/α = 1，称等价 α ~ β；若 lim β/α<sup>k</sup> = c ≠ 0，称 β 是 α 的 k 阶无穷小。</li>
<li><strong>间断点分类</strong>：第一类间断点——左右极限都存在。左右极限相等为<strong>可去间断点</strong>，不相等为<strong>跳跃间断点</strong>。第二类间断点——左右极限至少有一个不存在，常见的有无穷间断点（极限为 ∞）与振荡间断点（如 sin(1/x) 在 x = 0）。</li>
<li><strong>闭区间上连续函数的性质</strong>：①有界性与最大值最小值定理：闭区间上连续的函数必有界且能取得最大值与最小值；②零点定理：f 在 [a, b] 上连续且 f(a)·f(b) &lt; 0，则存在 ξ ∈ (a, b) 使 f(ξ) = 0；③介值定理：f 在 [a, b] 上连续，f(a) = A、f(b) = B，则对 A、B 之间任意值 C，存在 ξ ∈ (a, b) 使 f(ξ) = C；④推论：f 必能取得介于最小值 m 与最大值 M 之间的一切值。</li>
</ul>

<h4>1.2 公式速查表</h4>
<div class="table-wrap"><table>
<thead><tr><th>类别</th><th>公式 / 结论</th><th>使用条件</th></tr></thead>
<tbody>
<tr><td>重要极限 1</td><td>lim(x→0) sin x / x = 1</td><td>sin 后整体趋于 0</td></tr>
<tr><td>重要极限 2</td><td>lim(x→∞) (1 + 1/x)<sup>x</sup> = e</td><td>底为 1 + 无穷小，指数为同一无穷小的倒数</td></tr>
<tr><td>1 − cos x</td><td>1 − cos x ~ x<sup>2</sup>/2（x→0）</td><td>常与等价替换连用</td></tr>
<tr><td>对数指数</td><td>e<sup>u</sup> − 1 ~ u，ln(1+u) ~ u（u→0）</td><td>u → 0</td></tr>
<tr><td>幂函数</td><td>(1 + u)<sup>α</sup> − 1 ~ αu（u→0）</td><td>α 为常数</td></tr>
<tr><td>抓大头</td><td>x→∞ 时多项式比：次数最高项决定结果；x→0 时最低次项决定结果</td><td>有理式</td></tr>
<tr><td>洛必达法则</td><td>0/0 或 ∞/∞ 型，lim f′/g′ = A（或∞）⟹ lim f/g = A（或∞）</td><td>分母导数 ≠ 0，导数比的极限存在或为∞</td></tr>
<tr><td>等价无穷小传递</td><td>α ~ β，β ~ γ ⟹ α ~ γ</td><td>同一极限过程</td></tr>
</tbody>
</table></div>

<h4>1.3 七种未定式</h4>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="七种未定式及转化关系图">
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">七种未定式及其向基本型 0/0、∞/∞ 的转化</text>
  <rect x="300" y="48" width="160" height="34" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="380" y="70" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--text)">基本型 0/0 与 ∞/∞</text>
  <rect x="40" y="110" width="140" height="30" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="110" y="130" text-anchor="middle" font-size="12" fill="var(--text)">0·∞ 型</text>
  <rect x="210" y="110" width="140" height="30" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="280" y="130" text-anchor="middle" font-size="12" fill="var(--text)">∞ − ∞ 型</text>
  <rect x="380" y="110" width="140" height="30" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="450" y="130" text-anchor="middle" font-size="12" fill="var(--text)">0<sup>0</sup> 型</text>
  <rect x="550" y="110" width="140" height="30" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="620" y="130" text-anchor="middle" font-size="12" fill="var(--text)">1<sup>∞</sup> 型</text>
  <line x1="110" y1="140" x2="340" y2="48" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="280" y1="140" x2="365" y2="48" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="450" y1="140" x2="395" y2="48" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="620" y1="140" x2="420" y2="48" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="150" y="166" font-size="10.5" fill="var(--muted)">改写为分数</text>
  <text x="286" y="166" font-size="10.5" fill="var(--muted)">通分或有理化</text>
  <text x="420" y="166" font-size="10.5" fill="var(--muted)">取指数 e<sup>ln</sup></text>
  <text x="560" y="166" font-size="10.5" fill="var(--muted)">凑重要极限 e</text>
  <rect x="210" y="190" width="140" height="30" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="280" y="210" text-anchor="middle" font-size="12" fill="var(--text)">∞<sup>0</sup> 型</text>
  <text x="380" y="210" font-size="12" fill="var(--text-2)">与 0<sup>0</sup>、1<sup>∞</sup> 同为幂指型，统一取对数化为 0·∞</text>
  <text x="30" y="210" font-size="11" fill="var(--accent)">口诀：能代则代，能拆则拆；洛必达是最后手段</text>
</svg>
<figcaption>图 1.1　七种未定式及转化路径</figcaption>
</figure>

<h4>1.4 易错点</h4>
<ol>
<li>加减运算中乱用等价替换：x − sin x 在 x→0 时，若把 sin x 替换成 x 会得到 0 的错误结论，实际是 x<sup>3</sup>/6 阶。</li>
<li>洛必达法则使用前忘记验证 0/0 或 ∞/∞ 型，或使用后导数比极限不存在（振荡）就断言原极限不存在——此时法则失效，应改用他法。</li>
<li>求 x→∞ 极限时忘记分正负：如 lim √(x<sup>2</sup>)/x 在 x→+∞ 为 1，x→−∞ 为 −1。</li>
<li>分段函数在分段点求极限不检查左右极限，特别是含 e<sup>1/x</sup>、arctan(1/x) 的函数，x→0 的左右极限不同。</li>
<li>把“f(x) &gt; 0”极限保号性的结论写成 A &gt; 0，忽略了严格不等号在取极限后会变成非严格不等号。</li>
</ol>

<h4>1.5 典型例题</h4>
<p><strong>例：求极限 lim(x→0) [√(1 + x) + √(1 − x) − 2] / x<sup>2</sup>。</strong></p>
<p>思路：0/0 型，且出现两个根号相加，泰勒展开到二阶最稳。√(1 + x) = 1 + x/2 − x<sup>2</sup>/8 + o(x<sup>2</sup>)，√(1 − x) = 1 − x/2 − x<sup>2</sup>/8 + o(x<sup>2</sup>)。两式相加：2 − x<sup>2</sup>/4 + o(x<sup>2</sup>)，减去 2 得 −x<sup>2</sup>/4 + o(x<sup>2</sup>)，再除以 x<sup>2</sup>。</p>
<div class="formula">原式 = lim [−x<sup>2</sup>/4 + o(x<sup>2</sup>)] / x<sup>2</sup> = −1/4</div>
<p>结论：极限为 −1/4。注意：本题若对分子反复洛必达两次也能做，但泰勒法一步到位，是处理“根式加减”的首选工具。</p>

<h3>第 2 章　一元函数微分学</h3>
<p>本章是证明题与计算题的双重重镇：中值定理证明、泰勒展开、单调性与极值、曲率，几乎每年必考。</p>

<h4>2.1 核心考点梳理</h4>
<ul>
<li><strong>导数定义</strong>：f′(x<sub>0</sub>) = lim(Δx→0) [f(x<sub>0</sub> + Δx) − f(x<sub>0</sub>)] / Δx = lim(x→x<sub>0</sub>) [f(x) − f(x<sub>0</sub>)] / (x − x<sub>0</sub>)。左导数 f′<sub>−</sub>(x<sub>0</sub>)、右导数 f′<sub>+</sub>(x<sub>0</sub>)。可导 ⟺ 左右导数都存在且相等。</li>
<li><strong>几何意义</strong>：f′(x<sub>0</sub>) 是曲线 y = f(x) 在点 (x<sub>0</sub>, f(x<sub>0</sub>)) 处的切线斜率；切线方程 y − f(x<sub>0</sub>) = f′(x<sub>0</sub>)(x − x<sub>0</sub>)，法线方程 y − f(x<sub>0</sub>) = −(x − x<sub>0</sub>)/f′(x<sub>0</sub>)（f′(x<sub>0</sub>) ≠ 0）。</li>
<li><strong>可导、可微、连续的关系</strong>：可导 ⟺ 可微；可导 ⟹ 连续，但连续不一定可导（反例：y = |x| 在 x = 0）。</li>
<li><strong>求导法则</strong>：四则运算法则、复合函数链式法则（由外向内逐层求导）、反函数求导、隐函数求导（方程两边对 x 求导，y 视为 x 的函数）、参数方程求导（dy/dx = y′(t)/x′(t)，d<sup>2</sup>y/dx<sup>2</sup> = [d/dt(dy/dx)] / x′(t)）、对数求导法（用于幂指函数 y = u<sup>v</sup> 与连乘连除式）。</li>
<li><strong>罗尔定理</strong>：f 在 [a, b] 上连续、(a, b) 内可导、f(a) = f(b)，则存在 ξ ∈ (a, b) 使 f′(ξ) = 0。</li>
<li><strong>拉格朗日中值定理</strong>：f 在 [a, b] 上连续、(a, b) 内可导，则存在 ξ ∈ (a, b) 使 f(b) − f(a) = f′(ξ)(b − a)。推论：若 f′(x) ≡ 0，则 f(x) 为常数。</li>
<li><strong>柯西中值定理</strong>：f、g 在 [a, b] 上连续、(a, b) 内可导且 g′(x) ≠ 0，则存在 ξ ∈ (a, b) 使 [f(b) − f(a)] / [g(b) − g(a)] = f′(ξ)/g′(ξ)。三个定理的关系：罗尔是拉格朗日取 f(a) = f(b) 的特例，拉格朗日是柯西取 g(x) = x 的特例。</li>
<li><strong>泰勒公式</strong>：f(x) = f(x<sub>0</sub>) + f′(x<sub>0</sub>)(x − x<sub>0</sub>) + f″(x<sub>0</sub>)/2!·(x − x<sub>0</sub>)<sup>2</sup> + … + f<sup>(n)</sup>(x<sub>0</sub>)/n!·(x − x<sub>0</sub>)<sup>n</sup> + R<sub>n</sub>(x)。带拉格朗日余项 R<sub>n</sub> = f<sup>(n+1)</sup>(ξ)/(n+1)!·(x − x<sub>0</sub>)<sup>n+1</sup>；带佩亚诺余项 R<sub>n</sub> = o((x − x<sub>0</sub>)<sup>n</sup>)（用于求极限）。x<sub>0</sub> = 0 时称麦克劳林公式。</li>
<li><strong>函数性态</strong>：单调性由导数符号判定（f′ &gt; 0 单调增）；极值的必要条件为 f′(x<sub>0</sub>) = 0 或 f′(x<sub>0</sub>) 不存在；第一充分条件看 x<sub>0</sub> 两侧 f′ 变号，第二充分条件 f′(x<sub>0</sub>) = 0 且 f″(x<sub>0</sub>) &gt; 0 为极小、f″(x<sub>0</sub>) &lt; 0 为极大。凹凸性由 f″ 符号判定（f″ &lt; 0 凸、f″ &gt; 0 凹），拐点是凹凸性改变的连续点，必要条件 f″(x<sub>0</sub>) = 0 或 f″ 不存在，且两侧 f″ 变号。</li>
<li><strong>渐近线</strong>：水平渐近线 y = A ⟺ lim(x→∞) f(x) = A（分别考察 x→±∞）；铅直渐近线 x = x<sub>0</sub> ⟺ lim(x→x<sub>0</sub>) f(x) = ∞；斜渐近线 y = kx + b，其中 k = lim(x→∞) f(x)/x，b = lim(x→∞) [f(x) − kx]，两者极限都存在且 k ≠ 0。</li>
<li><strong>曲率</strong>：曲线 y = f(x) 的曲率 K = |y″| / (1 + y′<sup>2</sup>)<sup>3/2</sup>；参数方程时 K = |x′y″ − x″y′| / (x′<sup>2</sup> + y′<sup>2</sup>)<sup>3/2</sup>；曲率半径 ρ = 1/K。</li>
</ul>

<h4>2.2 五个必背泰勒展开（x→0）</h4>
<div class="table-wrap"><table>
<thead><tr><th>函数</th><th>展开式（前几项）</th></tr></thead>
<tbody>
<tr><td>e<sup>x</sup></td><td>1 + x + x<sup>2</sup>/2! + x<sup>3</sup>/3! + … + x<sup>n</sup>/n! + o(x<sup>n</sup>)</td></tr>
<tr><td>sin x</td><td>x − x<sup>3</sup>/3! + x<sup>5</sup>/5! − … + (−1)<sup>n</sup> x<sup>2n+1</sup>/(2n+1)! + o(x<sup>2n+2</sup>)</td></tr>
<tr><td>cos x</td><td>1 − x<sup>2</sup>/2! + x<sup>4</sup>/4! − … + (−1)<sup>n</sup> x<sup>2n</sup>/(2n)! + o(x<sup>2n+1</sup>)</td></tr>
<tr><td>ln(1 + x)</td><td>x − x<sup>2</sup>/2 + x<sup>3</sup>/3 − … + (−1)<sup>n−1</sup> x<sup>n</sup>/n + o(x<sup>n</sup>)，收敛域 (−1, 1]</td></tr>
<tr><td>(1 + x)<sup>α</sup></td><td>1 + αx + α(α−1)/2!·x<sup>2</sup> + … + α(α−1)…(α−n+1)/n!·x<sup>n</sup> + o(x<sup>n</sup>)</td></tr>
</tbody>
</table></div>

<h4>2.3 易错点</h4>
<ol>
<li>用导数定义时漏掉增量形式的拼凑：凡出现“f 可导，求 lim [f(x<sub>0</sub> + h) − f(x<sub>0</sub> − 2h)]/h”类题目，必须拆成三个定义式的组合，不能凭感觉写 3f′(x<sub>0</sub>)。</li>
<li>分段函数在分段点的可导性必须用定义判断，不能直接套用求导公式。</li>
<li>极值点不一定是驻点（如 y = |x| 在 x = 0），驻点也不一定是极值点（如 y = x<sup>3</sup> 在 x = 0）。</li>
<li>拐点必须是函数连续的点；间断点两侧再怎么变号也不是拐点。</li>
<li>斜渐近线要分别看 x→+∞ 与 x→−∞，两侧 k 可以不同；铅直渐近线先找分母为 0 或对数真数为 0 的点，再验证极限是否为无穷。</li>
<li>用洛必达算极限时若涉及变限积分，先确认被积式与积分限都可导。</li>
</ol>

<h4>2.4 典型例题</h4>
<p><strong>例：设 f 在 [0, 1] 上连续、在 (0, 1) 内可导，且 f(0) = 0，f(1) = 1。证明：存在 ξ ∈ (0, 1)，使 f′(ξ) = 2ξ。</strong></p>
<p>思路：要证 f′(ξ) − 2ξ = 0，即证某个函数的导数在 ξ 处为 0。2ξ 是 x<sup>2</sup> 的导数，故构造辅助函数 F(x) = f(x) − x<sup>2</sup>。</p>
<div class="formula">F(0) = f(0) − 0 = 0；F(1) = f(1) − 1 = 0<br>F 在 [0, 1] 连续、(0, 1) 可导，由罗尔定理存在 ξ ∈ (0, 1)<br>使 F′(ξ) = f′(ξ) − 2ξ = 0，即 f′(ξ) = 2ξ</div>
<p>结论：命题成立。中值定理证明的通法是“从要证的等式倒推辅助函数”：把 ξ 换成 x，移项使一边为 0，另一边即某函数的导数，再验证该函数满足罗尔三条件。</p>

<h3>第 3 章　一元函数积分学</h3>
<p>本章的考题模式非常固定：不定积分计算、定积分性质、变限积分求导、定积分应用（面积/体积/弧长/功）、反常积分审敛。</p>

<h4>3.1 核心考点梳理</h4>
<ul>
<li><strong>原函数与不定积分</strong>：若 F′(x) = f(x)，则 ∫f(x)dx = F(x) + C。不定积分是一族原函数，常数 C 不可丢。</li>
<li><strong>定积分定义</strong>：∫<sub>a</sub><sup>b</sup> f(x)dx = lim(λ→0) Σ f(ξ<sub>i</sub>)Δx<sub>i</sub>。定积分是一个数，与积分变量的字母无关：∫<sub>a</sub><sup>b</sup> f(x)dx = ∫<sub>a</sub><sup>b</sup> f(t)dt。可积的充分条件：闭区间上连续，或有界且只有有限个间断点。</li>
<li><strong>定积分性质</strong>：∫<sub>a</sub><sup>b</sup> f = −∫<sub>b</sub><sup>a</sup> f，∫<sub>a</sub><sup>a</sup> f = 0；区间可加性；保号性（f ≥ 0 ⟹ ∫<sub>a</sub><sup>b</sup> f ≥ 0）；估值定理（m(b−a) ≤ ∫<sub>a</sub><sup>b</sup> f ≤ M(b−a)）；积分中值定理：f 连续则存在 ξ ∈ [a, b] 使 ∫<sub>a</sub><sup>b</sup> f(x)dx = f(ξ)(b − a)。</li>
<li><strong>微积分基本定理</strong>：f 连续，则 Φ(x) = ∫<sub>a</sub><sup>x</sup> f(t)dt 可导且 Φ′(x) = f(x)。推广：d/dx ∫<sub>φ(x)</sub><sup>ψ(x)</sup> f(t)dt = f(ψ(x))·ψ′(x) − f(φ(x))·φ′(x)。</li>
<li><strong>牛顿—莱布尼茨公式</strong>：∫<sub>a</sub><sup>b</sup> f(x)dx = F(b) − F(a)，要求 f 在 [a, b] 上连续且 F 是 f 的原函数。</li>
<li><strong>换元积分法</strong>：第一类（凑微分）∫f(φ(x))φ′(x)dx = ∫f(u)du（u = φ(x)）；第二类（三角代换 √(a<sup>2</sup>−x<sup>2</sup>) 令 x = a sin t，√(a<sup>2</sup>+x<sup>2</sup>) 令 x = a tan t，√(x<sup>2</sup>−a<sup>2</sup>) 令 x = a sec t）。定积分换元必须同步换限。</li>
<li><strong>分部积分</strong>：∫u dv = uv − ∫v du。选 u 的优先级按“反、对、幂、三、指”（LIATE）：谁排在后谁进 dv。</li>
<li><strong>反常积分审敛</strong>：无穷限 ∫<sub>a</sub><sup>+∞</sup> 1/x<sup>p</sup> dx 当 p &gt; 1 收敛、p ≤ 1 发散；无界函数 ∫<sub>a</sub><sup>b</sup> 1/(x − a)<sup>p</sup> dx 当 p &lt; 1 收敛、p ≥ 1 发散（a 为瑕点）。常用比较判别法与极限形式。</li>
</ul>

<h4>3.2 基本积分公式表</h4>
<div class="table-wrap"><table>
<thead><tr><th>公式</th><th>公式</th></tr></thead>
<tbody>
<tr><td>∫x<sup>α</sup>dx = x<sup>α+1</sup>/(α+1) + C（α ≠ −1）</td><td>∫(1/x)dx = ln|x| + C</td></tr>
<tr><td>∫a<sup>x</sup>dx = a<sup>x</sup>/ln a + C</td><td>∫e<sup>x</sup>dx = e<sup>x</sup> + C</td></tr>
<tr><td>∫sin x dx = −cos x + C</td><td>∫cos x dx = sin x + C</td></tr>
<tr><td>∫sec<sup>2</sup>x dx = tan x + C</td><td>∫csc<sup>2</sup>x dx = −cot x + C</td></tr>
<tr><td>∫sec x tan x dx = sec x + C</td><td>∫csc x cot x dx = −csc x + C</td></tr>
<tr><td>∫tan x dx = −ln|cos x| + C</td><td>∫cot x dx = ln|sin x| + C</td></tr>
<tr><td>∫dx/(1+x<sup>2</sup>) = arctan x + C</td><td>∫dx/√(1−x<sup>2</sup>) = arcsin x + C</td></tr>
<tr><td>∫dx/√(x<sup>2</sup>±a<sup>2</sup>) = ln|x + √(x<sup>2</sup>±a<sup>2</sup>)| + C</td><td>∫dx/(x<sup>2</sup>+a<sup>2</sup>) = (1/a)arctan(x/a) + C</td></tr>
<tr><td>∫sec x dx = ln|sec x + tan x| + C</td><td>∫dx/(x<sup>2</sup>−a<sup>2</sup>) = (1/2a)ln|(x−a)/(x+a)| + C</td></tr>
</tbody>
</table></div>

<h4>3.3 定积分的应用（元素法）</h4>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="定积分应用元素法示意图">
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">元素法：以 y = f(x) 为曲边，x∈[a,b] 的平面图形</text>
  <line x1="80" y1="200" x2="700" y2="200" stroke="var(--text-2)" stroke-width="1.5"/>
  <line x1="80" y1="200" x2="80" y2="46" stroke="var(--text-2)" stroke-width="1.5"/>
  <text x="76" y="216" font-size="11.5" fill="var(--muted)">O</text>
  <path d="M140 190 C220 150 260 90 340 80 C440 68 520 120 640 96" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="140" y1="200" x2="140" y2="190" stroke="var(--muted)" stroke-width="1"/>
  <line x1="640" y1="200" x2="640" y2="96" stroke="var(--muted)" stroke-width="1"/>
  <text x="140" y="218" text-anchor="middle" font-size="11.5" fill="var(--text)">a</text>
  <text x="640" y="218" text-anchor="middle" font-size="11.5" fill="var(--text)">b</text>
  <rect x="372" y="128" width="12" height="72" fill="var(--accent)" opacity="0.25" stroke="var(--accent)" stroke-width="1"/>
  <text x="378" y="122" text-anchor="middle" font-size="11" fill="var(--accent)">dA</text>
  <text x="366" y="214" font-size="10.5" fill="var(--muted)">x</text>
  <text x="392" y="214" font-size="10.5" fill="var(--muted)">x+dx</text>
  <text x="180" y="60" font-size="12" fill="var(--text-2)">面积元素 dA = f(x)dx</text>
  <text x="180" y="82" font-size="12" fill="var(--text-2)">绕 x 轴旋转体积 dV = πf<sup>2</sup>(x)dx</text>
  <text x="430" y="170" font-size="12" fill="var(--text-2)">弧长元素 ds = √(1+y′<sup>2</sup>)dx</text>
  <text x="430" y="192" font-size="12" fill="var(--text-2)">静矩/变力做功 dW = F(x)dx</text>
</svg>
<figcaption>图 3.1　元素法四步：选变量 x、取微元 [x, x+dx]、写元素 dU = f(x)dx、积分 U = ∫<sub>a</sub><sup>b</sup> f(x)dx</figcaption>
</figure>
<div class="table-wrap"><table>
<thead><tr><th>应用</th><th>公式</th></tr></thead>
<tbody>
<tr><td>平面图形面积（直角坐标）</td><td>A = ∫<sub>a</sub><sup>b</sup> |f(x) − g(x)| dx</td></tr>
<tr><td>旋转体体积（绕 x 轴）</td><td>V = π∫<sub>a</sub><sup>b</sup> f<sup>2</sup>(x) dx（圆盘法）；绕 y 轴用柱壳法 V = 2π∫<sub>a</sub><sup>b</sup> x·|f(x)| dx</td></tr>
<tr><td>平面曲线弧长</td><td>y = f(x)：s = ∫<sub>a</sub><sup>b</sup> √(1 + y′<sup>2</sup>) dx；参数式：s = ∫<sub>t1</sub><sup>t2</sup> √(x′<sup>2</sup> + y′<sup>2</sup>) dt；极坐标 r = r(θ)：s = ∫√(r<sup>2</sup> + r′<sup>2</sup>) dθ</td></tr>
<tr><td>变力做功</td><td>W = ∫<sub>a</sub><sup>b</sup> F(x) dx</td></tr>
<tr><td>水压力</td><td>P = ∫<sub>a</sub><sup>b</sup> ρg·深度·宽度 dx</td></tr>
</tbody>
</table></div>

<h4>3.4 易错点</h4>
<ol>
<li>定积分换元不换限：∫<sub>0</sub><sup>π/2</sup> sin<sup>2</sup>x cos x dx 令 t = sin x 后，上限必须换成 sin(π/2) = 1。</li>
<li>奇函数在对称区间上的定积分等于 0——这是利器，但前提是积分区间关于原点对称且函数可积。</li>
<li>变限积分求导时忘记对内层函数再乘导数：d/dx ∫<sub>0</sub><sup>x<sup>2</sup></sup> sin t dt = sin(x<sup>2</sup>)·2x。</li>
<li>反常积分 ∫<sub>−∞</sub><sup>+∞</sup> f(x)dx 收敛要求 ∫<sub>−∞</sub><sup>0</sup> 与 ∫<sub>0</sub><sup>+∞</sup> 都收敛，不能写成 lim(A→∞) ∫<sub>−A</sub><sup>A</sup>（那是柯西主值）。</li>
<li>用牛顿—莱布尼茨公式前忘记检查原函数在积分区间上的连续性，如 ∫<sub>−1</sub><sup>1</sup> (1/x<sup>2</sup>)dx 是发散的反常积分，不能直接代入 −1/x。</li>
</ol>

<h4>3.5 典型例题</h4>
<p><strong>例：计算定积分 ∫<sub>0</sub><sup>4</sup> dx / (1 + √x)。</strong></p>
<p>思路：被积函数含 √x，令 t = √x（x = t<sup>2</sup>，dx = 2t dt），同步换限：x = 0 时 t = 0，x = 4 时 t = 2。</p>
<div class="formula">原式 = ∫<sub>0</sub><sup>2</sup> 2t / (1 + t) dt = 2∫<sub>0</sub><sup>2</sup> [1 − 1/(1 + t)] dt<br>= 2[t − ln(1 + t)]<sub>0</sub><sup>2</sup> = 2(2 − ln 3)</div>
<p>结论：积分值为 2(2 − ln 3)。关键两步：换元必换限；把 2t/(1+t) 拆成 2 − 2/(1+t) 再积分。</p>

<h3>第 4 章　向量代数和空间解析几何</h3>
<p>本章是数一的开胃菜：向量运算公式少、题型固定，通常与第 6 章曲线曲面积分联合出一道大题。</p>

<h4>4.1 核心考点梳理</h4>
<ul>
<li><strong>数量积（点积）</strong>：a·b = |a||b|cos θ = a<sub>x</sub>b<sub>x</sub> + a<sub>y</sub>b<sub>y</sub> + a<sub>z</sub>b<sub>z</sub>。用途：求夹角 cos θ = (a·b)/(|a||b|)；判定垂直 a·b = 0。</li>
<li><strong>向量积（叉积）</strong>：a × b 的模 = |a||b|sin θ（等于以 a、b 为邻边的平行四边形面积），方向按右手定则垂直于 a、b 所在平面。坐标式：a × b = |i j k; a<sub>x</sub> a<sub>y</sub> a<sub>z</sub>; b<sub>x</sub> b<sub>y</sub> b<sub>z</sub>|。用途：求平面法向量、判定平行 a × b = 0。</li>
<li><strong>混合积</strong>：[a b c] = (a × b)·c = 三阶行列式。绝对值等于以 a、b、c 为棱的平行六面体体积；[a b c] = 0 ⟺ 三向量共面。</li>
<li><strong>平面方程</strong>：点法式 A(x − x<sub>0</sub>) + B(y − y<sub>0</sub>) + C(z − z<sub>0</sub>) = 0，其中 n = (A, B, C) 为法向量；一般式 Ax + By + Cz + D = 0；截距式 x/a + y/b + z/c = 1。</li>
<li><strong>直线方程</strong>：点向式（对称式）(x − x<sub>0</sub>)/m = (y − y<sub>0</sub>)/n = (z − z<sub>0</sub>)/p，方向向量 s = (m, n, p)；参数式 x = x<sub>0</sub> + mt 等；一般式（两平面交线）。</li>
<li><strong>距离公式</strong>：点 P<sub>0</sub>(x<sub>0</sub>, y<sub>0</sub>, z<sub>0</sub>) 到平面 Ax + By + Cz + D = 0 的距离 d = |Ax<sub>0</sub> + By<sub>0</sub> + Cz<sub>0</sub> + D| / √(A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup>)。</li>
<li><strong>旋转曲面</strong>：yOz 平面上曲线 f(y, z) = 0 绕 z 轴旋转一周所得曲面为 f(±√(x<sup>2</sup> + y<sup>2</sup>), z) = 0——绕谁轴谁不变，另一个坐标换成 ±√(其余两坐标平方和)。</li>
<li><strong>常见二次曲面</strong>：球面 (x−a)<sup>2</sup>+(y−b)<sup>2</sup>+(z−c)<sup>2</sup> = R<sup>2</sup>；椭球面 x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> + z<sup>2</sup>/c<sup>2</sup> = 1；椭圆抛物面 z = x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup>；单叶双曲面 x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> − z<sup>2</sup>/c<sup>2</sup> = 1；锥面 z<sup>2</sup> = x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup>。</li>
</ul>

<h4>4.2 公式速查表</h4>
<div class="table-wrap"><table>
<thead><tr><th>对象</th><th>公式</th><th>关键量</th></tr></thead>
<tbody>
<tr><td>两点距离</td><td>|P<sub>1</sub>P<sub>2</sub>| = √((x<sub>2</sub>−x<sub>1</sub>)<sup>2</sup>+(y<sub>2</sub>−y<sub>1</sub>)<sup>2</sup>+(z<sub>2</sub>−z<sub>1</sub>)<sup>2</sup>)</td><td>—</td></tr>
<tr><td>向量方向余弦</td><td>cos α = a<sub>x</sub>/|a|，cos<sup>2</sup>α + cos<sup>2</sup>β + cos<sup>2</sup>γ = 1</td><td>单位化</td></tr>
<tr><td>两平面夹角</td><td>cos θ = |n<sub>1</sub>·n<sub>2</sub>|/(|n<sub>1</sub>||n<sub>2</sub>|)</td><td>取锐角</td></tr>
<tr><td>两直线夹角</td><td>cos θ = |s<sub>1</sub>·s<sub>2</sub>|/(|s<sub>1</sub>||s<sub>2</sub>|)</td><td>取锐角</td></tr>
<tr><td>直线与平面夹角</td><td>sin φ = |s·n|/(|s||n|)</td><td>φ 为直线与它在平面内投影的夹角</td></tr>
<tr><td>平面束</td><td>过直线 L（两平面交线）的平面：A<sub>1</sub>x+B<sub>1</sub>y+C<sub>1</sub>z+D<sub>1</sub> + λ(A<sub>2</sub>x+B<sub>2</sub>y+C<sub>2</sub>z+D<sub>2</sub>) = 0</td><td>求投影面时常用</td></tr>
</tbody>
</table></div>

<h4>4.3 易错点</h4>
<ol>
<li>数量积结果是数，向量积结果是向量，混合积结果是数——三者记号与性质（交换律对叉积不成立：a × b = −(b × a)）要分清。</li>
<li>平面点法式中，法向量是平面一般式一次项的系数，不是随便凑的。</li>
<li>求旋转曲面方程时，绕哪个坐标轴旋转，哪个坐标保持不变，其余两个合并成平方和开根号。</li>
<li>直线的点向式中分母可以为 0（表示对应方向分量为 0），此时理解为该坐标恒等于定点坐标，不能把 0 当除数。</li>
</ol>

<h4>4.4 典型例题</h4>
<p><strong>例：求过点 P(1, 2, 1) 且同时垂直于平面 π<sub>1</sub>: x + y − z = 0 与 π<sub>2</sub>: 2x − y + 3z = 1 的平面方程。</strong></p>
<p>思路：所求平面与两已知平面都垂直，其法向量 n 同时垂直于两已知平面的法向量 n<sub>1</sub> = (1, 1, −1)、n<sub>2</sub> = (2, −1, 3)，故 n = n<sub>1</sub> × n<sub>2</sub>。</p>
<div class="formula">n = (1, 1, −1) × (2, −1, 3) = (2, −5, −3)<br>点法式：2(x − 1) − 5(y − 2) − 3(z − 1) = 0<br>化简：2x − 5y − 3z + 11 = 0</div>
<p>结论：所求平面为 2x − 5y − 3z + 11 = 0。叉积是“同时垂直于两向量”的标准构造方式。</p>

<h3>第 5 章　多元函数微分学</h3>
<p>本章核心是四件事：偏导与全微分、链式法则、方向导数与梯度、极值（含拉格朗日乘数法）。</p>

<h4>5.1 核心考点梳理</h4>
<ul>
<li><strong>偏导数</strong>：f<sub>x</sub>(x<sub>0</sub>, y<sub>0</sub>) = lim(Δx→0) [f(x<sub>0</sub>+Δx, y<sub>0</sub>) − f(x<sub>0</sub>, y<sub>0</sub>)]/Δx。几何意义：曲面被平面 y = y<sub>0</sub> 截得的曲线在该点的切线对 x 轴的斜率。</li>
<li><strong>全微分</strong>：若 Δz = f(x+Δx, y+Δy) − f(x, y) 可表示为 AΔx + BΔy + o(ρ)（ρ = √(Δx<sup>2</sup> + Δy<sup>2</sup>)），则 dz = f<sub>x</sub>dx + f<sub>y</sub>dy。可微的充分条件：偏导数在该点连续。注意：偏导存在 ⇏ 可微（这是与一元函数的本质区别）；可微 ⟹ 连续且偏导存在。</li>
<li><strong>链式法则</strong>：z = f(u, v)，u = u(x, y)，v = v(x, y)，则 ∂z/∂x = (∂z/∂u)(∂u/∂x) + (∂z/∂v)(∂v/∂x)。画“变量依赖关系树”是防漏项的最佳办法。</li>
<li><strong>隐函数求导</strong>：F(x, y, z) = 0 确定 z = z(x, y)，则 ∂z/∂x = −F<sub>x</sub>/F<sub>z</sub>，∂z/∂y = −F<sub>y</sub>/F<sub>z</sub>（要求 F<sub>z</sub> ≠ 0）。</li>
<li><strong>方向导数</strong>：函数 f 在点 P 沿方向 l（单位向量 e<sub>l</sub> = (cos α, cos β)）的方向导数 ∂f/∂l = f<sub>x</sub>cos α + f<sub>y</sub>cos β（二元情形）。可微时方向导数存在且等于梯度与方向向量的点积。</li>
<li><strong>梯度</strong>：grad f = ∇f = (f<sub>x</sub>, f<sub>y</sub>, f<sub>z</sub>)。方向导数 = 梯度 · 单位方向向量。梯度方向是函数增长最快的方向，最大方向导数 = |梯度|；梯度垂直于等值面（线）。</li>
<li><strong>无条件极值</strong>：必要条件 f<sub>x</sub> = f<sub>y</sub> = 0（驻点）；充分条件记 A = f<sub>xx</sub>，B = f<sub>xy</sub>，C = f<sub>yy</sub>，在驻点处：AC − B<sup>2</sup> &gt; 0 时有极值（A &lt; 0 为极大，A &gt; 0 为极小）；AC − B<sup>2</sup> &lt; 0 时不是极值（鞍点）；= 0 时失效，另行讨论。</li>
<li><strong>条件极值（拉格朗日乘数法）</strong>：求 f(x, y) 在约束 φ(x, y) = 0 下的极值，构造 L = f(x, y) + λφ(x, y)，解方程组 L<sub>x</sub> = 0、L<sub>y</sub> = 0、L<sub>λ</sub> = 0。多个约束时加多个乘数。</li>
</ul>

<h4>5.2 方向导数与梯度关系图</h4>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="方向导数与梯度关系图">
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">方向导数 ∂f/∂l 与梯度 ∇f 的几何关系</text>
  <line x1="380" y1="120" x2="380" y2="190" stroke="var(--text-2)" stroke-width="1"/>
  <line x1="310" y1="120" x2="450" y2="120" stroke="var(--text-2)" stroke-width="1"/>
  <ellipse cx="380" cy="120" rx="120" ry="34" fill="none" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <ellipse cx="380" cy="120" rx="180" ry="52" fill="none" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="380" cy="120" r="4" fill="var(--accent)"/>
  <text x="392" y="116" font-size="11.5" fill="var(--text)">P(x<sub>0</sub>, y<sub>0</sub>)</text>
  <line x1="380" y1="120" x2="520" y2="120" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M520 120 l-10 -5 v10 Z" fill="var(--accent)"/>
  <text x="440" y="110" font-size="11.5" fill="var(--accent)">∇f（增长最快方向）</text>
  <line x1="380" y1="120" x2="490" y2="170" stroke="var(--text-2)" stroke-width="2"/>
  <path d="M490 170 l-11 -1 4 -9 Z" fill="var(--text-2)"/>
  <text x="486" y="190" font-size="11.5" fill="var(--text-2)">e<sub>l</sub> 方向</text>
  <text x="120" y="180" font-size="12" fill="var(--text-2)">∂f/∂l = ∇f · e<sub>l</sub> = |∇f| cos θ</text>
  <text x="120" y="204" font-size="12" fill="var(--text-2)">θ = 0 时最大：|∇f|；θ = π/2 时为 0（沿等值线）</text>
  <text x="120" y="156" font-size="11.5" fill="var(--muted)">虚线为等值线，梯度与等值线垂直</text>
</svg>
<figcaption>图 5.1　方向导数等于梯度在该方向上的投影</figcaption>
</figure>

<h4>5.3 易错点</h4>
<ol>
<li>把“偏导存在”等同于“可微”：经典反例 f(x, y) = xy/√(x<sup>2</sup>+y<sup>2</sup>) 在原点偏导都为 0 但不可微。</li>
<li>链式法则求抽象复合函数二阶偏导时，忘记对中间变量再求一次偏导（f<sub>1</sub>、f<sub>2</sub> 仍然是同一组中间变量的函数）。</li>
<li>隐函数公式 ∂z/∂x = −F<sub>x</sub>/F<sub>z</sub> 中的负号极易丢；且求 F<sub>x</sub> 时要把 y、z 都看作独立变量。</li>
<li>方向导数公式中方向向量必须单位化，否则结果不对。</li>
<li>无条件极值充分条件 AC − B<sup>2</sup> = 0 时不能下结论，需用定义或更高阶方法判断。</li>
</ol>

<h4>5.4 典型例题</h4>
<p><strong>例：求函数 u = x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> 在点 P(1, 1, 1) 处沿从 P 到 Q(2, 0, 3) 方向的方向导数，并求 u 在 P 处增长最快的方向及最大方向导数。</strong></p>
<p>思路：先求梯度，再把所求方向单位化，最后按 ∂u/∂l = ∇u·e<sub>l</sub> 计算。</p>
<div class="formula">∇u = (2x, 2y, 2z)，在 P(1,1,1) 处 ∇u = (2, 2, 2)<br>PQ 方向向量 (1, −1, 2)，单位化 e<sub>l</sub> = (1, −1, 2)/√6<br>∂u/∂l = (2, 2, 2)·(1, −1, 2)/√6 = (2 − 2 + 4)/√6 = 4/√6 = 2√6/3<br>增长最快方向即梯度方向 (2, 2, 2) ∥ (1, 1, 1)，最大方向导数 = |∇u| = 2√3</div>
<p>结论：方向导数为 2√6/3；增长最快方向为 (1, 1, 1) 方向，最大值 2√3。注意方向向量必须先单位化，这是本题唯一容易丢分的细节。</p>

<p><strong>再例：求 f(x, y) = xy 在约束条件 x + y = 1 下的极值。</strong></p>
<p>思路：拉格朗日乘数法。构造 L = xy + λ(x + y − 1)。</p>
<div class="formula">L<sub>x</sub> = y + λ = 0，L<sub>y</sub> = x + λ = 0，L<sub>λ</sub> = x + y − 1 = 0<br>由前两式 y = x，代入第三式 2x = 1，得 x = y = 1/2<br>f(1/2, 1/2) = 1/4</div>
<p>结论：在 (1/2, 1/2) 处取得条件极值 1/4。由于约束是一条直线且 f 在无界时趋向 ±∞，该点为最大值点。拉格朗日乘数法只给出可疑点，最终判大小要结合几何或实际意义。</p>

<h3>第 6 章　多元函数积分学</h3>
<p>本章是数一的头号分值大户：二重积分几乎年年必考计算，曲线曲面积分与格林、高斯、斯托克斯三大公式几乎年年必考一道大题。</p>

<h4>6.1 核心考点梳理</h4>
<ul>
<li><strong>二重积分</strong>：∬<sub>D</sub> f(x, y) dσ = lim(λ→0) Σ f(ξ<sub>i</sub>, η<sub>i</sub>)Δσ<sub>i</sub>。性质：线性性、对区域可加性、保号性、估值不等式、二重积分中值定理（f 连续则存在 (ξ, η) ∈ D 使 ∬<sub>D</sub> f dσ = f(ξ, η)·S<sub>D</sub>）。</li>
<li><strong>二重积分坐标系选择</strong>：直角坐标（X 型：先 y 后 x；Y 型：先 x 后 y）；极坐标变换 x = r cos θ，y = r sin θ，<strong>面积元素 dσ = r dr dθ</strong>。区域为圆域、环域、扇形，或被积函数含 x<sup>2</sup>+y<sup>2</sup>、y/x 时优先用极坐标。</li>
<li><strong>交换积分次序</strong>：由累次积分的上下限还原积分区域 D 的不等式组，画出 D，再按另一方向重新定限。</li>
<li><strong>三重积分</strong>：直角坐标（“先一后二”投影法、“先二后一”截面法）；柱面坐标 x = r cos θ，y = r sin θ，z = z，dv = r dr dθ dz；球面坐标 x = r sin φ cos θ，y = r sin φ sin θ，z = r cos φ，<strong>dv = r<sup>2</sup> sin φ dr dφ dθ</strong>（φ 为向量与 z 轴正向的夹角，范围 0 ≤ φ ≤ π）。</li>
<li><strong>第一类曲线积分（对弧长）</strong>：∫<sub>L</sub> f(x, y) ds。参数 x = x(t)，y = y(t) 时 ds = √(x′(t)<sup>2</sup> + y′(t)<sup>2</sup>) dt，与方向无关，下限必须小于上限。</li>
<li><strong>第二类曲线积分（对坐标）</strong>：∫<sub>L</sub> P dx + Q dy。与方向有关：L 反向则积分变号。</li>
<li><strong>格林公式</strong>：设闭区域 D 由分段光滑的正向曲线 L 围成，P、Q 在 D 上有一阶连续偏导数，则
<div class="formula">∮<sub>L</sub> P dx + Q dy = ∬<sub>D</sub> (∂Q/∂x − ∂P/∂y) dxdy</div>
正向规定：沿 L 行走时区域 D 始终在左侧（平面上即逆时针方向）。推论：面积 A = (1/2)∮<sub>L</sub> x dy − y dx。平面上曲线积分与路径无关的充要条件（D 单连通、偏导连续）：∂Q/∂x = ∂P/∂y。</li>
<li><strong>第一类曲面积分</strong>：∬<sub>Σ</sub> f(x, y, z) dS。曲面 z = z(x, y) 时 dS = √(1 + z<sub>x</sub><sup>2</sup> + z<sub>y</sub><sup>2</sup>) dxdy，与侧无关。</li>
<li><strong>第二类曲面积分</strong>：∬<sub>Σ</sub> P dy dz + Q dz dx + R dx dy。与侧有关：上（前、右）侧投影取正，下（后、左）侧投影取负。</li>
<li><strong>高斯公式</strong>：设空间闭区域 Ω 由分片光滑的闭曲面 Σ 的外侧围成，则
<div class="formula">∯<sub>Σ外侧</sub> P dy dz + Q dz dx + R dx dy = ∭<sub>Ω</sub> (∂P/∂x + ∂Q/∂y + ∂R/∂z) dv</div>
散度 div F = ∂P/∂x + ∂Q/∂y + ∂R/∂z；∯ 即为向量场 F 通过闭曲面外侧的通量。</li>
<li><strong>斯托克斯公式</strong>：设 Γ 为分片光滑曲面 Σ 的边界曲线，Γ 的正向与 Σ 的侧符合右手规则，则
<div class="formula">∮<sub>Γ</sub> P dx + Q dy + R dz = ∬<sub>Σ</sub> (∂R/∂y − ∂Q/∂z) dy dz + (∂P/∂z − ∂R/∂x) dz dx + (∂Q/∂x − ∂P/∂y) dx dy</div>
旋度 rot F = (∂R/∂y − ∂Q/∂z，∂P/∂z − ∂R/∂x，∂Q/∂x − ∂P/∂y)。</li>
</ul>

<h4>6.2 三大公式关系图</h4>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="三大积分公式关系图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">从牛顿—莱布尼茨到三大公式：边界上的积分 = 区域内微分的积分</text>
  <rect x="250" y="36" width="260" height="34" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="380" y="58" text-anchor="middle" font-size="11.5" fill="var(--text)">牛顿—莱布尼茨：∫<sub>a</sub><sup>b</sup> F′ dx = F(b) − F(a)</text>
  <rect x="50" y="106" width="310" height="44" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="205" y="124" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--text)">格林公式（平面闭曲线 L）</text>
  <text x="205" y="142" text-anchor="middle" font-size="10.5" fill="var(--muted)">∮<sub>L</sub> Pdx + Qdy = ∬<sub>D</sub>(∂Q/∂x − ∂P/∂y)dσ</text>
  <rect x="400" y="106" width="310" height="44" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="555" y="124" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--text)">斯托克斯公式（空间闭曲线 Γ）</text>
  <text x="555" y="142" text-anchor="middle" font-size="10.5" fill="var(--muted)">∮<sub>Γ</sub> Pdx + Qdy + Rdz = ∬<sub>Σ</sub> rot F·dS</text>
  <rect x="250" y="184" width="260" height="44" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.4"/>
  <text x="380" y="202" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--text)">高斯公式（闭曲面 Σ 外侧）</text>
  <text x="380" y="220" text-anchor="middle" font-size="10.5" fill="var(--muted)">∯<sub>Σ</sub> F·dS = ∭<sub>Ω</sub> div F dv</text>
  <line x1="330" y1="70" x2="230" y2="106" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="430" y1="70" x2="530" y2="106" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="230" y1="150" x2="330" y2="184" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="530" y1="150" x2="430" y2="184" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
</svg>
<figcaption>图 6.1　格林是二维旋度形式；高斯是散度形式；斯托克斯把格林推广到空间曲面</figcaption>
</figure>

<h4>6.3 公式速查表</h4>
<div class="table-wrap"><table>
<thead><tr><th>积分</th><th>元素 / 公式</th><th>对称性使用</th></tr></thead>
<tbody>
<tr><td>二重积分（直角）</td><td>∬<sub>D</sub> f dxdy，X 型 a ≤ x ≤ b，φ<sub>1</sub>(x) ≤ y ≤ φ<sub>2</sub>(x)</td><td>D 关于 x 轴对称，f 关于 y 为奇函数则积分为 0</td></tr>
<tr><td>二重积分（极坐标）</td><td>∬<sub>D</sub> f·r dr dθ</td><td>—</td></tr>
<tr><td>三重积分（柱面）</td><td>∭<sub>Ω</sub> f·r dr dθ dz</td><td>旋转体优先</td></tr>
<tr><td>三重积分（球面）</td><td>∭<sub>Ω</sub> f·r<sup>2</sup> sin φ dr dφ dθ</td><td>球域、锥域优先</td></tr>
<tr><td>第一类曲线积分</td><td>∫<sub>L</sub> f ds，ds = √(x′²+y′²)dt</td><td>与方向无关</td></tr>
<tr><td>第二类曲线积分</td><td>∫<sub>L</sub> P dx + Q dy</td><td>反向变号</td></tr>
<tr><td>格林公式</td><td>∮<sub>L正向</sub> Pdx+Qdy = ∬<sub>D</sub>(∂Q/∂x−∂P/∂y)dσ</td><td>不闭合先补线，闭合用公式</td></tr>
<tr><td>高斯公式</td><td>∯<sub>Σ外侧</sub> F·dS = ∭<sub>Ω</sub> div F dv</td><td>内侧取负；不闭合先补面</td></tr>
<tr><td>斯托克斯公式</td><td>∮<sub>Γ</sub> F·dr = ∬<sub>Σ</sub> rot F·dS</td><td>Γ 与 Σ 侧满足右手规则</td></tr>
</tbody>
</table></div>

<h4>6.4 易错点</h4>
<ol>
<li>极坐标面积元素 dσ = r dr dθ 中的“r”最常被漏掉，漏掉后结果差一个 r 的因子。</li>
<li>第一类曲线积分参数化后必须保证积分下限小于上限（与方向无关），第二类曲线积分则要按起点终点定上下限。</li>
<li>格林公式使用前先确认：曲线是否闭合、方向是否为正向、P、Q 是否在 D 内处处有连续偏导（有无“洞”、有无奇点）。不闭合时补线段 L<sub>0</sub>，则 ∮<sub>L+L₀</sub> − ∫<sub>L₀</sub>。</li>
<li>高斯公式要求外侧；取内侧（如正方体内部朝里）时整体加负号；曲面不闭合时补一个平面盖口，算出后再减去盖口上的积分。</li>
<li>第二类曲面积分投影到坐标面时要带符号：上侧 dxdy 前取 +，下侧取 −。</li>
<li>利用对称性时先看区域对称性，再看被积函数奇偶性，两者缺一不可；轮换对称性（x、y 互换积分不变）常用来简化计算。</li>
</ol>

<h4>6.5 典型例题</h4>
<p><strong>例：计算二重积分 I = ∬<sub>D</sub> xy dxdy，其中 D 是由 y = x、y = 2 − x 与 y = 0 围成的三角形区域。</strong></p>
<p>思路：先求交点定边界。y = x 与 y = 2 − x 交于 (1, 1)；y = x 与 y = 0 交于 (0, 0)；y = 2 − x 与 y = 0 交于 (2, 0)。按 Y 型区域定限更方便：0 ≤ y ≤ 1，y ≤ x ≤ 2 − y。</p>
<div class="formula">I = ∫<sub>0</sub><sup>1</sup> dy ∫<sub>y</sub><sup>2−y</sup> xy dx = ∫<sub>0</sub><sup>1</sup> y·[x<sup>2</sup>/2]<sub>y</sub><sup>2−y</sup> dy<br>= (1/2)∫<sub>0</sub><sup>1</sup> y[(2−y)<sup>2</sup> − y<sup>2</sup>] dy = (1/2)∫<sub>0</sub><sup>1</sup> y(4 − 4y) dy<br>= 2∫<sub>0</sub><sup>1</sup> (y − y<sup>2</sup>) dy = 2(1/2 − 1/3) = 1/3</div>
<p>结论：I = 1/3。画图定限是二重积分的第一要务：积分次序选错会导致内层积分变成两段，先画区域再选 Y 型可避免分段。</p>

<p><strong>再例：计算曲面积分 ∯<sub>Σ</sub> x dy dz + y dz dx + z dx dy，其中 Σ 为球面 x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = a<sup>2</sup> 的外侧。</strong></p>
<p>思路：闭曲面外侧，直接上高斯公式。</p>
<div class="formula">div F = ∂x/∂x + ∂y/∂y + ∂z/∂z = 3<br>原积分 = ∭<sub>Ω</sub> 3 dv = 3·(4/3)πa<sup>3</sup> = 4πa<sup>3</sup></div>
<p>结论：积分值为 4πa<sup>3</sup>。高斯公式把第二类曲面积分转化为三重积分，本题散度恰为常数 3，结果等于 3 倍球体体积。若曲面不闭合，需先补盖口再减去盖口积分。</p>

<h3>第 7 章　无穷级数</h3>
<p>本章计算题（判别敛散、求收敛域、求和函数）与概念题（绝对/条件收敛、狄利克雷定理）并重，傅里叶级数是数一专属考点。</p>

<h4>7.1 核心考点梳理</h4>
<ul>
<li><strong>收敛定义与必要条件</strong>：级数 Σu<sub>n</sub> 收敛 ⟺ 部分和数列 S<sub>n</sub> = u<sub>1</sub> + … + u<sub>n</sub> 极限存在。收敛的必要条件：lim u<sub>n</sub> = 0；其逆否命题：通项不趋于 0 则级数必发散（常用于快速判发散）。</li>
<li><strong>两个基准级数</strong>：等比级数 Σ<sub>n=0</sub><sup>∞</sup> aq<sup>n</sup>，当 |q| &lt; 1 时收敛于 a/(1 − q)，当 |q| ≥ 1 时发散；p 级数 Σ 1/n<sup>p</sup>，当 p &gt; 1 时收敛，当 p ≤ 1 时发散（p = 1 即调和级数，发散）。</li>
<li><strong>正项级数判别法</strong>：比较判别法（大收 ⟹ 小收；小发 ⟹ 大发）及其极限形式；比值法 lim u<sub>n+1</sub>/u<sub>n</sub> = ρ，ρ &lt; 1 收敛、ρ &gt; 1 发散、ρ = 1 失效；根值法 lim ⁿ√u<sub>n</sub> = ρ，结论同上。</li>
<li><strong>交错级数（莱布尼茨判别法）</strong>：若 u<sub>n</sub> &gt; 0 单调递减且 lim u<sub>n</sub> = 0，则交错级数 Σ(−1)<sup>n−1</sup>u<sub>n</sub> 收敛，且余项 |r<sub>n</sub>| ≤ u<sub>n+1</sub>。</li>
<li><strong>绝对收敛与条件收敛</strong>：若 Σ|u<sub>n</sub>| 收敛，则称 Σu<sub>n</sub> 绝对收敛（必本身收敛）；若 Σu<sub>n</sub> 收敛而 Σ|u<sub>n</sub>| 发散，称条件收敛。绝对收敛级数任意重排不改变其和。</li>
<li><strong>幂级数的收敛半径</strong>：阿贝尔定理——若 Σa<sub>n</sub>x<sup>n</sup> 在 x = x<sub>0</sub> ≠ 0 处收敛，则对一切 |x| &lt; |x<sub>0</sub>| 的 x 都绝对收敛。收敛半径 R = 1 / lim(n→∞) |a<sub>n+1</sub>/a<sub>n</sub>|（比值法失效时用根值 R = 1/lim ⁿ√|a<sub>n</sub>|）；收敛区间为 (−R, R)，收敛域需把端点 x = ±R 分别代入数项级数判别。</li>
<li><strong>幂级数的分析性质</strong>：和函数在收敛区间内连续；可逐项求导、逐项积分，且逐项求导或逐项积分后收敛半径不变，端点敛散性需重新讨论。</li>
<li><strong>函数展开成幂级数</strong>：f 在 x<sub>0</sub> 的泰勒级数收敛于 f 自身的充要条件是余项 R<sub>n</sub>(x) → 0（n → ∞）。常用展开：1/(1 − x) = 1 + x + x<sup>2</sup> + …（|x| &lt; 1）；e<sup>x</sup>、sin x、cos x、ln(1 + x)、(1 + x)<sup>α</sup>（见第 2 章公式表）。</li>
<li><strong>傅里叶级数（数一）</strong>：f(x) 周期为 2π，则
<div class="formula">a<sub>n</sub> = (1/π)∫<sub>−π</sub><sup>π</sup> f(x)cos nx dx（n = 0, 1, 2, …）；b<sub>n</sub> = (1/π)∫<sub>−π</sub><sup>π</sup> f(x)sin nx dx（n = 1, 2, …）</div>
<strong>狄利克雷收敛定理</strong>：设 f 是周期 2π 的函数，在一个周期内分段光滑，则其傅里叶级数处处收敛，且在连续点 x 收敛于 f(x)，在间断点 x 收敛于 [f(x<sup>−</sup>) + f(x<sup>+</sup>)]/2。周期为 2l 时，把 cos nx、sin nx 换成 cos(nπx/l)、sin(nπx/l)，积分区间换为 [−l, l]。</li>
</ul>

<h4>7.2 幂级数收敛域示意图</h4>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="幂级数收敛域示意图">
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">幂级数 Σa<sub>n</sub>x<sup>n</sup> 的收敛域：收敛半径 R</text>
  <line x1="80" y1="130" x2="700" y2="130" stroke="var(--text-2)" stroke-width="1.5"/>
  <path d="M700 130 l-10 -5 v10 Z" fill="var(--text-2)"/>
  <text x="692" y="122" font-size="12" fill="var(--muted)">x</text>
  <circle cx="380" cy="130" r="4" fill="var(--text-2)"/>
  <text x="380" y="152" text-anchor="middle" font-size="12" fill="var(--text)">0</text>
  <line x1="200" y1="124" x2="200" y2="136" stroke="var(--accent)" stroke-width="2"/>
  <line x1="560" y1="124" x2="560" y2="136" stroke="var(--accent)" stroke-width="2"/>
  <text x="200" y="156" text-anchor="middle" font-size="11.5" fill="var(--accent)">−R</text>
  <text x="560" y="156" text-anchor="middle" font-size="11.5" fill="var(--accent)">R</text>
  <rect x="200" y="94" width="360" height="16" fill="var(--accent)" opacity="0.2"/>
  <text x="380" y="86" text-anchor="middle" font-size="12" fill="var(--text-2)">收敛区间 (−R, R)：内部绝对收敛</text>
  <text x="140" y="190" font-size="11.5" fill="var(--text-2)">|x| &gt; R 时发散</text>
  <text x="560" y="190" font-size="11.5" fill="var(--text-2)">|x| &lt; R 时绝对收敛</text>
  <text x="380" y="216" text-anchor="middle" font-size="11.5" fill="var(--muted)">端点 x = ±R 代入数项级数单独判别：收敛则闭、发散则开</text>
</svg>
<figcaption>图 7.1　收敛半径定内部，端点敛散必须单独检验</figcaption>
</figure>

<h4>7.3 判别法速查表</h4>
<div class="table-wrap"><table>
<thead><tr><th>对象</th><th>方法</th><th>结论</th></tr></thead>
<tbody>
<tr><td>正项级数</td><td>比较法（极限形式）：与已知敛散级数比较</td><td>极限为正常数时同敛散</td></tr>
<tr><td>正项级数</td><td>比值法 lim u<sub>n+1</sub>/u<sub>n</sub></td><td>ρ&lt;1 收，ρ&gt;1 发，ρ=1 失效</td></tr>
<tr><td>正项级数</td><td>根值法 lim ⁿ√u<sub>n</sub></td><td>同上（通项含 n 次幂时首选）</td></tr>
<tr><td>交错级数</td><td>莱布尼茨：u<sub>n</sub> 单调减且趋于 0</td><td>收敛，|r<sub>n</sub>| ≤ u<sub>n+1</sub></td></tr>
<tr><td>任意项级数</td><td>先判 Σ|u<sub>n</sub>|</td><td>收敛即绝对收敛；发散再看本身是否条件收敛</td></tr>
<tr><td>幂级数</td><td>R = 1/lim|a<sub>n+1</sub>/a<sub>n</sub>|</td><td>区间 (−R, R)，端点单独判</td></tr>
</tbody>
</table></div>

<h4>7.4 易错点</h4>
<ol>
<li>“通项趋于 0”只是收敛的必要条件，不能用来证明收敛；调和级数 Σ1/n 通项趋于 0 却发散，是最著名的反例。</li>
<li>比值法、根值法出现 ρ = 1 时失效，必须换比较法或其他方法。</li>
<li>求收敛域时忘记检验端点 x = ±R；或反之，把端点结论直接带入区间内部。</li>
<li>把“条件收敛”与“绝对收敛”混淆：Σ(−1)<sup>n−1</sup>/n 收敛，但 Σ1/n 发散，故为条件收敛。</li>
<li>逐项积分求和后必须注明结果成立的范围（通常含一个端点），不能无限延拓。</li>
<li>傅里叶级数在间断点收敛于左右极限的平均值 (f(x<sup>−</sup>) + f(x<sup>+</sup>))/2，而不是 f(x) 本身。</li>
</ol>

<h4>7.5 典型例题</h4>
<p><strong>例：判断级数 Σ<sub>n=1</sub><sup>∞</sup> n!/n<sup>n</sup> 的敛散性。</strong></p>
<p>思路：通项含 n! 与 n<sup>n</sup>，是比值法的标准适用对象。</p>
<div class="formula">u<sub>n</sub> = n!/n<sup>n</sup>，u<sub>n+1</sub>/u<sub>n</sub> = (n+1)!/(n+1)<sup>n+1</sup> · n<sup>n</sup>/n!<br>= n<sup>n</sup>/(n+1)<sup>n</sup> = [n/(n+1)]<sup>n</sup> = 1/(1 + 1/n)<sup>n</sup> → 1/e ≈ 0.368 &lt; 1</div>
<p>结论：由比值法（ρ = 1/e &lt; 1），级数收敛。注意 (1 + 1/n)<sup>n</sup> → e 是本题化简的关键桥梁；遇到 n! 一律优先尝试比值法。</p>

<p><strong>再例（傅里叶级数·数一专属）：设 f(x) = x（−π &lt; x ≤ π），周期为 2π，写出其傅里叶级数，并求其在 x = π 处的收敛值。</strong></p>
<p>思路：f(x) = x 是奇函数，余弦系数 a<sub>n</sub> = 0；只需算正弦系数 b<sub>n</sub>。</p>
<div class="formula">b<sub>n</sub> = (1/π)∫<sub>−π</sub><sup>π</sup> x sin nx dx = (2/π)∫<sub>0</sub><sup>π</sup> x sin nx dx<br>分部积分：∫<sub>0</sub><sup>π</sup> x sin nx dx = [−x cos nx/n]<sub>0</sub><sup>π</sup> + ∫<sub>0</sub><sup>π</sup> cos nx/n dx<br>= −π cos(nπ)/n = −π(−1)<sup>n</sup>/n<br>b<sub>n</sub> = 2(−1)<sup>n+1</sup>/n<br>f(x) ~ 2Σ<sub>n=1</sub><sup>∞</sup> (−1)<sup>n+1</sup> sin nx / n</div>
<p>结论：x = π 是间断点（左右极限 −π 与 π 的衔接处），由狄利克雷定理收敛于 [f(π<sup>−</sup>) + f(π<sup>+</sup>)]/2 = (π + (−π))/2 = 0。傅里叶级数在连续点收敛于 f(x)，在间断点收敛于左右极限的平均值——这是数一选择填空的高频考点。</p>

<h3>第 8 章　常微分方程</h3>
<p>本章题型几乎是“套公式”：先判类型，再套对应解法。数一额外要求欧拉方程与可降阶方程。</p>

<h4>8.1 核心考点梳理</h4>
<ul>
<li><strong>可分离变量</strong>：dy/dx = f(x)g(y)，化为 ∫dy/g(y) = ∫f(x)dx，注意除 g(y) 时可能丢失 g(y) = 0 的解，要单独检验。</li>
<li><strong>齐次方程</strong>：dy/dx = φ(y/x)，令 u = y/x（即 y = ux），化为 u + x·du/dx = φ(u)，分离变量求解后回代 u = y/x。</li>
<li><strong>一阶线性方程</strong>：y′ + P(x)y = Q(x)，通解公式
<div class="formula">y = e<sup>−∫P(x)dx</sup> · [ ∫ Q(x)·e<sup>∫P(x)dx</sup> dx + C ]</div>
记忆口诀：“负指数先飘出，乘 Q 积分再加 C”。齐次（Q = 0）时为可分离变量方程。</li>
<li><strong>可降阶的高阶方程</strong>：①y″ = f(x) 型：连续积分两次；②y″ = f(x, y′) 型：令 p = y′，降为 p′ = f(x, p)；③y″ = f(y, y′) 型：令 p = y′，则 y″ = p·dp/dy（注意对 y 求导），降为一阶方程。</li>
<li><strong>二阶常系数齐次线性方程</strong>：y″ + py′ + qy = 0，特征方程 r<sup>2</sup> + pr + q = 0，按根的三种情形写通解：</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>特征根</th><th>通解形式</th></tr></thead>
<tbody>
<tr><td>两不等实根 r<sub>1</sub> ≠ r<sub>2</sub></td><td>y = C<sub>1</sub>e<sup>r₁x</sup> + C<sub>2</sub>e<sup>r₂x</sup></td></tr>
<tr><td>二重实根 r</td><td>y = (C<sub>1</sub> + C<sub>2</sub>x)e<sup>rx</sup></td></tr>
<tr><td>共轭复根 α ± βi</td><td>y = e<sup>αx</sup>(C<sub>1</sub>cos βx + C<sub>2</sub>sin βx)</td></tr>
</tbody>
</table></div>
<ul>
<li><strong>二阶常系数非齐次</strong>：y″ + py′ + qy = f(x)，通解 = 对应齐次通解 + 一个特解 y*。特解待定系数法：①f(x) = e<sup>λx</sup>P<sub>m</sub>(x) 时设 y* = x<sup>k</sup>e<sup>λx</sup>Q<sub>m</sub>(x)，其中 λ 是特征方程的几重根，k 就取几（0、1 或 2）；②f(x) = e<sup>λx</sup>[P<sub>l</sub>(x)cos ωx + P<sub>n</sub>(x)sin ωx] 时设 y* = x<sup>k</sup>e<sup>λx</sup>[R<sub>m</sub>(x)cos ωx + S<sub>m</sub>(x)sin ωx]，m = max{l, n}，λ ± ωi 是特征根时 k = 1，否则 k = 0。</li>
<li><strong>欧拉方程（数一）</strong>：x<sup>2</sup>y″ + axy′ + by = 0，令 x = e<sup>t</sup>（或 t = ln x），则 x·dy/dx = Dy，x<sup>2</sup>·d<sup>2</sup>y/dx<sup>2</sup> = D(D−1)y，化为常系数线性方程求解后回代 t = ln x。</li>
</ul>

<h4>8.2 易错点</h4>
<ol>
<li>通解中任意常数的个数必须等于方程的阶数：二阶方程的通解必须有两个独立任意常数 C<sub>1</sub>、C<sub>2</sub>。</li>
<li>设非齐次特解时，k 按 λ（或 λ ± ωi）是特征根的重数取，不是一律取 0。</li>
<li>一阶线性公式中 e 的指数是 −∫P dx，前面还有一个 +C 的位置别放错。</li>
<li>y″ = f(y, y′) 型必须令 y″ = p·dp/dy，若错写成 dp/dx 则降阶失败。</li>
<li>分离变量时两边同除以的式子可能恒等于 0，丢掉特解要补回。</li>
<li>欧拉方程换元 x = e<sup>t</sup> 后记得回代 t = ln x，且要求 x &gt; 0。</li>
</ol>

<h4>8.3 典型例题</h4>
<p><strong>例：求一阶线性方程 y′ + y/x = x<sup>2</sup>（x &gt; 0）满足初始条件 y(1) = 1 的特解。</strong></p>
<p>思路：直接套用通解公式。P(x) = 1/x，Q(x) = x<sup>2</sup>。</p>
<div class="formula">e<sup>∫P dx</sup> = e<sup>ln x</sup> = x<br>y = (1/x)[∫ x<sup>2</sup>·x dx + C] = (1/x)[x<sup>4</sup>/4 + C]<br>代入 y(1) = 1：1 = 1/4 + C，得 C = 3/4<br>y = x<sup>3</sup>/4 + 3/(4x)</div>
<p>结论：特解为 y = x<sup>3</sup>/4 + 3/(4x)。套公式时分两步走：先算积分因子 e<sup>∫P dx</sup>，再把 Q 乘上它积分；最后用初始条件定 C。</p>


<h2>跨模块解题方法总结</h2>

<p>高数大题看似分散，其实只有四条“万能思路”。把它们练熟，80% 的综合题都能拆解成已经背过的步骤。</p>

<h4>方法一：极限题——优先泰勒，慎用洛必达</h4>
<p>拿到极限先观察类型：含根式加减、分式通分后分子是高阶小量、或者 e<sup>u</sup>、sin u、ln(1 + u) 嵌套时，一律把各部分泰勒展开到“分子最低次项”为止，再约掉零因子。只有当展开式过于复杂（如纯乘除且结构简单）时才用洛必达。洛必达每用一次都要重新验证 0/0 或 ∞/∞ 型。</p>

<h4>方法二：中值定理证明题——从结论倒推辅助函数</h4>
<p>看到“存在 ξ 使 f′(ξ) = g(ξ)”这类结论，把 ξ 换成 x，移项使一边为 0：f′(x) − g(x) = 0。然后寻找 F 使 F′(x) = f′(x) − g(x)，通常 F 就是 f(x) 减去 g 的一个原函数。最后验证 F 满足罗尔定理的三个条件（连续、可导、端点等值）。本题库第 2 章例题与计算证明题第 2 题都是此通法的直接应用。</p>

<h4>方法三：积分学综合题——先画区域再选坐标系</h4>
<p>二重积分、三重积分、曲线曲面积分的第一步永远是“把积分区域画出来”。圆域、环域用极坐标；旋转体用柱面坐标；球域、锥面用球面坐标。看到闭曲线立即想到格林公式；看到闭曲面立即想到高斯公式；看到空间闭曲线立即想到斯托克斯公式。公式用不上时，再老老实实参数化计算。</p>

<h4>方法四：级数求和——逐项求导或逐项积分</h4>
<p>幂级数求和的题，目标多半是凑出 1/(1 − x) = Σx<sup>n</sup> 这个母级数。系数是 n 的，就把原级数逐项积分一次消掉 n；分母是 n 的，就逐项求导一次消掉分母。最后务必把收敛域补上，端点单独判别。</p>

<h2>高数公式速查大表</h2>
<div class="table-wrap"><table>
<thead><tr><th>模块</th><th>必须脱口而出的公式 / 结论</th></tr></thead>
<tbody>
<tr><td>极限</td><td>sin u/u → 1；(1+u)<sup>1/u</sup> → e；1−cos u ~ u<sup>2</sup>/2；e<sup>u</sup>−1 ~ u；(1+u)<sup>α</sup>−1 ~ αu</td></tr>
<tr><td>导数</td><td>(x<sup>n</sup>)′ = nx<sup>n−1</sup>；(e<sup>x</sup>)′ = e<sup>x</sup>；(ln x)′ = 1/x；(uv)′ = u′v + uv′；(u/v)′ = (u′v − uv′)/v<sup>2</sup></td></tr>
<tr><td>中值定理</td><td>f(b) − f(a) = f′(ξ)(b − a)；证 ξ 类题目先构造辅助函数，验证罗尔三条件</td></tr>
<tr><td>积分</td><td>∫<sub>φ(x)</sub><sup>ψ(x)</sup> f(t)dt 求导 = f(ψ)ψ′ − f(φ)φ′；∫u dv = uv − ∫v du</td></tr>
<tr><td>向量</td><td>a·b = |a||b|cos θ；|a × b| = |a||b|sin θ；[a b c] = (a×b)·c</td></tr>
<tr><td>多元微分</td><td>∂z/∂x = z<sub>u</sub>u<sub>x</sub> + z<sub>v</sub>v<sub>x</sub>；∂z/∂x = −F<sub>x</sub>/F<sub>z</sub>；∂f/∂l = ∇f·e<sub>l</sub></td></tr>
<tr><td>多元积分</td><td>dσ(极) = r dr dθ；dv(柱) = r dr dθ dz；dv(球) = r<sup>2</sup> sin φ dr dφ dθ</td></tr>
<tr><td>三大公式</td><td>∮<sub>L</sub> Pdx+Qdy = ∬<sub>D</sub>(Q<sub>x</sub>−P<sub>y</sub>)dσ；∯<sub>Σ</sub> F·dS = ∭<sub>Ω</sub> div F dv；∮<sub>Γ</sub> F·dr = ∬<sub>Σ</sub> rot F·dS</td></tr>
<tr><td>级数</td><td>等比 aq<sup>n</sup>：|q|&lt;1 收敛 a/(1−q)；p 级数 p&gt;1 收敛；R = 1/lim|a<sub>n+1</sub>/a<sub>n</sub>|</td></tr>
<tr><td>微分方程</td><td>y′+Py=Q 的通解：y = e<sup>−∫P</sup>(∫Qe<sup>∫P</sup>dx + C)；特征根 λ<sub>1</sub>, λ<sub>2</sub> → 三种通解形式</td></tr>
</tbody>
</table></div>

<h2>高频易错点汇总（15 条）</h2>
<ol>
<li>等价无穷小替换只用于乘除因子，加减中滥用必错。</li>
<li>洛必达前不验证 0/0 或 ∞/∞ 型，或用后导数比极限振荡不存在就下结论。</li>
<li>x→∞ 极限不分正负（√x<sup>2</sup>/x 类）。</li>
<li>分段点求极限不查左右极限，尤其含 e<sup>1/x</sup>、arctan(1/x)。</li>
<li>保号性把结论 A ≥ 0 误写成 A &gt; 0。</li>
<li>极值点 ≠ 驻点；拐点必须是连续点。</li>
<li>斜渐近线 x→±∞ 要分别求，铅直渐近线先找可疑点再验证。</li>
<li>定积分换元不换限；奇函数对称区间积分忘验证可积性。</li>
<li>变限积分求导忘乘内层导数。</li>
<li>反常积分 ∫<sub>−∞</sub><sup>+∞</sup> 误用柯西主值代替双边收敛。</li>
<li>极坐标面积元素漏掉 r；球面坐标漏掉 r<sup>2</sup> sin φ。</li>
<li>格林公式不闭合不补线、不验证正向与偏导连续（奇点）。</li>
<li>高斯公式方向搞反（外侧为正）；不闭合不补面。</li>
<li>幂级数收敛域漏掉端点检验。</li>
<li>微分方程特解待定系数中重数 k 取错。</li>
</ol>

<h2>易混概念辨析（选择填空高频陷阱）</h2>
<div class="table-wrap"><table>
<thead><tr><th>易混对</th><th>区别</th><th>典型反例 / 结论</th></tr></thead>
<tbody>
<tr><td>连续 vs 可导</td><td>可导必连续，连续不一定可导</td><td>y = |x| 在 0 连续但不可导</td></tr>
<tr><td>偏导存在 vs 可微</td><td>偏导存在只是必要条件，可微才保证连续</td><td>f(x,y) = xy/√(x<sup>2</sup>+y<sup>2</sup>) 在原点偏导为 0 但不可微</td></tr>
<tr><td>驻点 vs 极值点</td><td>驻点 f′=0；极值点还要两侧变号</td><td>y = x<sup>3</sup> 在 0 是驻点但非极值点</td></tr>
<tr><td>拐点 vs 二阶导为 0</td><td>拐点要求凹凸性改变且连续</td><td>y = x<sup>4</sup> 在 0 二阶导为 0 但非拐点</td></tr>
<tr><td>条件收敛 vs 绝对收敛</td><td>Σ|u<sub>n</sub>| 收敛为绝对；本身收敛而绝对值发散为条件</td><td>Σ(−1)<sup>n−1</sup>/n 是条件收敛</td></tr>
<tr><td>收敛 vs 有界</td><td>收敛数列必有界，有界数列不一定收敛</td><td>(−1)<sup>n</sup> 有界但发散</td></tr>
<tr><td>第一类曲线积分 vs 第二类</td><td>第一类与方向无关，第二类反向变号</td><td>计算时注意上下限与方向</td></tr>
<tr><td>柯西主值 vs 反常积分收敛</td><td>主值存在不代表反常积分收敛</td><td>∫<sub>−∞</sub><sup>+∞</sup> x/(1+x<sup>2</sup>) dx 主值为 0 但发散</td></tr>
</tbody>
</table></div>

<h2>考前速记清单</h2>
<ul>
<li>两个重要极限、五个泰勒展开、常见等价无穷小，能默写。</li>
<li>罗尔、拉格朗日、柯西三定理的条件与结论一字不差。</li>
<li>牛顿—莱布尼茨公式及其两个推广（变限求导、定积分换元换限）。</li>
<li>dσ、dv 三种坐标下的元素表达式。</li>
<li>格林、高斯、斯托克斯公式的形式、方向与使用条件。</li>
<li>p 级数、等比级数的敛散结论；收敛半径公式与端点检验流程。</li>
<li>一阶线性通解公式、二阶常系数齐次三种通解、非齐次特解设定规则。</li>
<li>Ax = b 解的判定表；基础解系个数 n − r(A)。</li>
<li>特征值两条守恒：迹与行列式；对角化充要条件。</li>
<li>正定的四种等价判据；惯性定理。</li>
</ul>

<blockquote><p><strong>复习建议：</strong>数学一的复习以“真题”为最终纲。第一阶段把本表当字典，按章节做题时定位公式；第二阶段遮住公式表重做错题；冲刺阶段只留三件武器——本速记清单、近十年真题、错题本。证明题（中值定理、不等式）要专门训练“构造辅助函数”的思路；计算题（曲线曲面积分、幂级数求和、二次型化标准形）要练到条件反射。每天保持手感：限时一套选填或两道大题，比反复看讲义有效得多。</p></blockquote>


<h2>考前一个月复习节奏</h2>
<p>最后一个月不要再“开新坑”，而要把已经学过的内容压缩成可以在考场上直接调用的肌肉记忆。下面给出按周划分的参考节奏，可根据自身基础前后平移。</p>
<div class="table-wrap"><table>
<thead><tr><th>阶段</th><th>任务</th><th>重点</th></tr></thead>
<tbody>
<tr><td>第 1–2 周</td><td>按章节重做近 10 年真题中的选择填空</td><td>错题归因：是公式遗忘、计算失误还是概念混淆</td></tr>
<tr><td>第 3 周</td><td>分题型突破大题：极限、中值定理、积分应用、曲线曲面积分、级数求和、微分方程</td><td>每类题型练 3–5 道真题，总结答题模板</td></tr>
<tr><td>第 4 周</td><td>整套限时模拟（上午 8:30–11:30）</td><td>训练时间分配与答题顺序，适应考场节奏</td></tr>
<tr><td>考前 3 天</td><td>只看本速记清单、公式大表与错题本</td><td>不再做新题，保持手感即可</td></tr>
</tbody>
</table></div>


<h2>题型分布与答题策略</h2>
<p>数学一试卷结构为：选择题 10 题（50 分）、填空题 6 题（30 分）、解答题 6 题（70 分）。高数占比最大，线代与概率论各约 22%。</p>
<ul>
<li><strong>选择题</strong>：先用排除法缩小范围，再用特例法（取特殊函数、特殊矩阵）验证。遇到抽象概念题，举反例往往比正面推导更快。</li>
<li><strong>填空题</strong>：只看最终结果，不看过程。结果要写最简形式，π、分数、根式不要展开。计算时一步一回头，避免低级运算错误。</li>
<li><strong>解答题</strong>：按步给分。即使最后结果算不出，也要把能写的公式、定理、关键步骤写上去。中值定理证明题先写辅助函数与定理条件，再写结论。</li>
<li><strong>时间分配</strong>：选择填空控制在 70 分钟以内；前 3 道解答题（通常是高数计算题）每题 15 分钟；最后两道综合题留足 25 分钟。</li>
<li><strong>遇难跳过</strong>：一道题卡壳超过 8 分钟立即跳过，先拿下会做的题，最后回头再啃。</li>
</ul>


<h2>题型专项</h2>
<p>以下 26 题覆盖高等数学全部主干题型，难度贴近真题选填与前两道大题。建议先独立完成，再展开解析核对。计算题请动手演笔，不要只看答案。</p>


<h3>答题书写规范（分步得分要点）</h3>
<p>数学一按步给分。同样一道题，写出关键步骤比只写最终结论多拿 40%–60% 的分数。以下是各类大题的最低书写要求。</p>
<ul>
<li><strong>极限计算题</strong>：先写类型判断（0/0、∞/∞ 或 1<sup>∞</sup>），再写所用方法（等价替换、泰勒展开或洛必达），最后代入化简。如使用洛必达，须写明“由洛必达法则”。</li>
<li><strong>中值定理证明题</strong>：第一步写辅助函数 F(x) 的构造过程；第二步验证罗尔三条件（连续、可导、F(a) = F(b)）；第三步写“由罗尔定理，存在 ξ ∈ (a, b) 使 F′(ξ) = 0”；第四步整理出要证的等式。</li>
<li><strong>积分计算题</strong>：换元必须写“令 t = …，则 dt = …，当 x = … 时 t = …”；分部积分写明 u 与 dv；定积分结果用方括号标注上下限。</li>
<li><strong>曲线曲面积分题</strong>：使用格林/高斯公式前先写明验证条件（闭合、正向、偏导连续）；不闭合时写出补线/补面的过程，并说明最后要减去补线上的积分。</li>
<li><strong>级数题</strong>：先求收敛半径 R，再分别检验端点 x = ±R 的敛散性；求和函数时注明成立区间。</li>
<li><strong>微分方程题</strong>：先写特征方程与特征根，再写通解结构；非齐次特解须说明待定系数的设定理由（λ 是否特征根、重数 k 取几）。</li>
</ul>
<p>切记：即使某一步算错，后续步骤只要逻辑正确，仍可按“步骤分”给分。空着不写等于主动放弃分数。</p>

<h3>一、选择题（6 题）</h3>
<details><summary>1. 当 x → 0 时，下列无穷小中阶数最高的是（　）。A. x − sin x　B. 1 − cos x　C. √(1+x<sup>2</sup>) − 1　D. e<sup>x<sup>2</sup></sup> − 1</summary>
<p><strong>答案：A。</strong>解析：逐项展开——A 由 sin x = x − x<sup>3</sup>/6 + o(x<sup>3</sup>) 得 x − sin x ~ x<sup>3</sup>/6（三阶）；B 1 − cos x ~ x<sup>2</sup>/2（二阶）；C √(1+x<sup>2</sup>) − 1 ~ x<sup>2</sup>/2（二阶）；D e<sup>x<sup>2</sup></sup> − 1 ~ x<sup>2</sup>（二阶）。故 A 阶数最高。</p></details>

<details><summary>2. 设 f(x) 在 x = 0 处连续，且 lim(x→0) f(x)/x = 1，则（　）。A. f′(0) 不存在　B. f′(0) = 1　C. f(0) = 1　D. f 在 x = 0 处不可导</summary>
<p><strong>答案：B。</strong>解析：由 f 连续与 lim f(x)/x = 1 知 f(0) = lim f(x) = 0（否则比值极限不为有限值）。于是 f′(0) = lim [f(x) − f(0)]/x = lim f(x)/x = 1，故可导且 f′(0) = 1。</p></details>

<details><summary>3. 级数 Σ<sub>n=1</sub><sup>∞</sup> (−1)<sup>n</sup> · ln(n)/(n) 的敛散性为（　）。A. 绝对收敛　B. 条件收敛　C. 发散　D. 无法判断</summary>
<p><strong>答案：B。</strong>解析：u<sub>n</sub> = ln n / n 在 n ≥ 3 时单调递减（考察 g(x) = ln x / x，g′ = (1−ln x)/x<sup>2</sup> &lt; 0 当 x &gt; e）且趋于 0，由莱布尼茨判别法级数收敛；但 Σ ln n / n 与 Σ1/n 比较（lim (ln n / n)/(1/n) = ∞）发散，故为条件收敛。</p></details>

<details><summary>4. 设 D 为 x<sup>2</sup> + y<sup>2</sup> ≤ 1，则二重积分 ∬<sub>D</sub> (x<sup>2</sup> + y<sup>2</sup>) dxdy = （　）。A. π/2　B. π　C. 2π　D. π/4</summary>
<p><strong>答案：A。</strong>解析：极坐标，∬<sub>D</sub> r<sup>2</sup>·r dr dθ = ∫<sub>0</sub><sup>2π</sup> dθ ∫<sub>0</sub><sup>1</sup> r<sup>3</sup> dr = 2π·(1/4) = π/2。</p></details>

<details><summary>5. 微分方程 y″ − 4y′ + 4y = 0 的通解为（　）。A. (C<sub>1</sub> + C<sub>2</sub>x)e<sup>2x</sup>　B. C<sub>1</sub>e<sup>2x</sup> + C<sub>2</sub>e<sup>−2x</sup>　C. e<sup>2x</sup>(C<sub>1</sub>cos 2x + C<sub>2</sub>sin 2x)　D. (C<sub>1</sub> + C<sub>2</sub>x)e<sup>−2x</sup></summary>
<p><strong>答案：A。</strong>解析：特征方程 r<sup>2</sup> − 4r + 4 = (r − 2)<sup>2</sup> = 0，二重实根 r = 2，通解为 (C<sub>1</sub> + C<sub>2</sub>x)e<sup>2x</sup>。</p></details>

<details><summary>6. 曲线积分 ∫<sub>L</sub> (x<sup>2</sup> + y) dx + (x − y<sup>2</sup>) dy（L 为沿 y = x<sup>2</sup> 从 (0,0) 到 (1,1)）的值为（　）。A. 1/2　B. 1　C. 3/2　D. 2</summary>
<p><strong>答案：B。</strong>解析：P = x<sup>2</sup> + y，Q = x − y<sup>2</sup>，∂Q/∂x = 1 = ∂P/∂y，积分与路径无关。改走折线路径 (0,0)→(1,0)→(1,1)：第一段 y = 0，∫<sub>0</sub><sup>1</sup> x<sup>2</sup> dx = 1/3；第二段 x = 1，∫<sub>0</sub><sup>1</sup> (1 − y<sup>2</sup>) dy = [y − y<sup>3</sup>/3]<sub>0</sub><sup>1</sup> = 2/3。合计 1/3 + 2/3 = 1。</p></details>

<h3>二、填空题（6 题）</h3>
<details><summary>1. lim(x→0) (tan x − sin x)/x<sup>3</sup> = ______。</summary>
<p><strong>答案：1/2。</strong>解析：tan x − sin x = sin x(1/cos x − 1) = sin x(1 − cos x)/cos x ~ x·(x<sup>2</sup>/2) = x<sup>3</sup>/2，除以 x<sup>3</sup> 得 1/2。</p></details>

<details><summary>2. 曲线 y = x<sup>3</sup> − 3x 的拐点坐标为 ______。</summary>
<p><strong>答案：(0, 0)。</strong>解析：y′ = 3x<sup>2</sup> − 3，y″ = 6x。y″ = 0 得 x = 0，且 x &lt; 0 时 y″ &lt; 0、x &gt; 0 时 y″ &gt; 0，凹凸性改变，故拐点为 (0, 0)。</p></details>

<details><summary>3. ∫<sub>0</sub><sup>+∞</sup> xe<sup>−x</sup> dx = ______。</summary>
<p><strong>答案：1。</strong>解析：分部积分，∫<sub>0</sub><sup>+∞</sup> xe<sup>−x</sup> dx = [−xe<sup>−x</sup>]<sub>0</sub><sup>+∞</sup> + ∫<sub>0</sub><sup>+∞</sup> e<sup>−x</sup> dx = 0 + 1 = 1。</p></details>

<details><summary>4. 曲面 z = x<sup>2</sup> + y<sup>2</sup> 在点 (1, 1, 2) 处的切平面方程为 ______。</summary>
<p><strong>答案：2x + 2y − z − 2 = 0。</strong>解析：F = x<sup>2</sup> + y<sup>2</sup> − z，法向量 (F<sub>x</sub>, F<sub>y</sub>, F<sub>z</sub>)|(1,1,2) = (2, 2, −1)。切平面：2(x − 1) + 2(y − 1) − (z − 2) = 0，化简 2x + 2y − z − 2 = 0。</p></details>

<details><summary>5. 幂级数 Σ<sub>n=1</sub><sup>∞</sup> x<sup>n</sup>/n 的收敛域为 ______。</summary>
<p><strong>答案：[−1, 1)。</strong>解析：R = 1/lim(n/(n+1)) = 1。x = 1 时为调和级数发散；x = −1 时为交错级数 Σ(−1)<sup>n</sup>/n 收敛。故收敛域 [−1, 1)。</p></details>

<details><summary>6. 微分方程 dy/dx = (y/x) + tan(y/x) 的通解为 ______。</summary>
<p><strong>答案：sin(y/x) = Cx（即 y = x·arcsin(Cx)）。</strong>解析：齐次方程，令 u = y/x，则 u + x·du/dx = u + tan u，即 x·du/dx = tan u。分离变量 cot u du = dx/x，积分得 ln|sin u| = ln|x| + C，即 sin u = Cx，回代 u = y/x。</p></details>

<h3>三、判断题（4 题）</h3>
<p><strong>1. 若 f(x) 在 x<sub>0</sub> 处可导，则 |f(x)| 在 x<sub>0</sub> 处也可导。</strong></p>
<p>×。反例：f(x) = x 在 x = 0 可导，但 |x| 在 x = 0 不可导（左右导数 −1 与 1 不等）。仅当 f(x<sub>0</sub>) ≠ 0 时结论才成立。</p>
<p><strong>2. 若 lim(x→x<sub>0</sub>) f(x) 存在，则 f(x) 在 x<sub>0</sub> 处必有界。</strong></p>
<p>√。极限存在函数在 x<sub>0</sub> 的某去心邻域内局部有界（极限的局部有界性）。</p>
<p><strong>3. 若级数 Σu<sub>n</sub> 收敛，则 lim u<sub>n</sub> = 0。</strong></p>
<p>√。这是级数收敛的必要条件，逆否命题常用于快速判发散。</p>
<p><strong>4. 若 f(x, y) 的两个偏导数 f<sub>x</sub>、f<sub>y</sub> 在 (x<sub>0</sub>, y<sub>0</sub>) 处都存在，则 f 在该点可微。</strong></p>
<p>×。偏导存在只是可微的必要条件而非充分条件；充分条件是偏导数在该点连续。</p>

<h3>四、简答题（4 题）</h3>
<details><summary>1. 简述可导、可微、连续三者之间的关系。</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>一元函数中：可导 ⟺ 可微。</li>
<li>可导 ⟹ 连续；但连续不一定可导（反例 y = |x| 在 x = 0）。</li>
<li>多元函数中：偏导存在 ⇏ 可微、⇏ 连续；可微 ⟹ 连续且偏导存在；偏导连续 ⟹ 可微。</li>
</ul></details>

<details><summary>2. 简述使用洛必达法则的前提条件与常见失效情形。</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>必须是 0/0 或 ∞/∞ 型，否则法则不适用。</li>
<li>去心邻域内 f、g 可导且 g′ ≠ 0。</li>
<li>lim f′/g′ 存在（有限）或为 ∞，才能使用；若 f′/g′ 振荡无极限，法则失效，原极限可能仍存在，需改用他法。</li>
<li>未定式 0·∞、∞−∞、0<sup>0</sup>、1<sup>∞</sup>、∞<sup>0</sup> 须先化为基本型。</li>
</ul></details>

<details><summary>3. 简述格林公式的内容、正向规定与使用步骤。</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>内容：∮<sub>L正向</sub> P dx + Q dy = ∬<sub>D</sub> (∂Q/∂x − ∂P/∂y) dσ。</li>
<li>正向：沿 L 行走时 D 在左侧（逆时针）；D 有“洞”时外边界逆时针、内边界顺时针。</li>
<li>使用步骤：检查 P、Q 在 D 内是否有连续偏导（奇点）；不闭合则补线段，算出闭合积分后减去补线上的积分。</li>
<li>推论：与路径无关 ⟺ ∂Q/∂x = ∂P/∂y（单连通区域）。</li>
</ul></details>

<details><summary>4. 简述判定正项级数敛散性的主要方法及各自适用对象。</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>比值法：通项含阶乘、指数（n!、a<sup>n</sup>）时首选；ρ &lt; 1 收、ρ &gt; 1 发、ρ = 1 失效。</li>
<li>根值法：通项含 n 次幂（a<sub>n</sub> = u<sub>n</sub><sup>n</sup> 形式）时首选；结论同比值法。</li>
<li>比较法（极限形式）：与 p 级数、等比级数比较；已知通项量级时用。</li>
<li>必要条件：lim u<sub>n</sub> ≠ 0 直接判发散。</li>
</ul></details>

<h3>五、计算与证明题（6 题）</h3>
<details><summary>1. 求极限 lim(x→0) (e<sup>x</sup> − e<sup>sin x</sup>)/(x − sin x)。</summary>
<p><strong>解：</strong>提取公因子并利用泰勒展开。</p>
<div class="formula">原式 = lim e<sup>sin x</sup>·(e<sup>x−sin x</sup> − 1)/(x − sin x)<br>x − sin x ~ x<sup>3</sup>/6，故 e<sup>x−sin x</sup> − 1 ~ x − sin x<br>原式 = lim e<sup>sin x</sup> · (x − sin x)/(x − sin x) = e<sup>0</sup> = 1</div>
<p>结论：极限为 1。注意：本题是“提取公共因子 + 等价无穷小”的典型组合，切勿直接洛必达（分子分母求导后仍为 0/0 且繁琐）。</p></details>

<details><summary>2. 证明：当 x &gt; 0 时，ln(1 + x) &gt; x/(1 + x)。</summary>
<p><strong>解：</strong>构造辅助函数用单调性证明。</p>
<div class="formula">令 f(x) = ln(1 + x) − x/(1 + x)，f(0) = 0<br>f′(x) = 1/(1+x) − 1/(1+x)<sup>2</sup> = x/(1+x)<sup>2</sup><br>当 x &gt; 0 时 f′(x) &gt; 0，故 f(x) 在 [0, +∞) 上单调递增<br>f(x) &gt; f(0) = 0，即 ln(1+x) &gt; x/(1+x)</div>
<p>结论：不等式成立。这是拉格朗日中值定理可证的经典不等式（f(t) = ln(1+t) 在 [0, x] 上用中值定理），单调性法同样适用。</p></details>

<details><summary>3. 计算定积分 ∫<sub>0</sub><sup>π</sup> x sin x dx。</summary>
<p><strong>解：</strong>分部积分。</p>
<div class="formula">∫<sub>0</sub><sup>π</sup> x sin x dx = −∫<sub>0</sub><sup>π</sup> x d(cos x)<br>= [−x cos x]<sub>0</sub><sup>π</sup> + ∫<sub>0</sub><sup>π</sup> cos x dx<br>= (−π·cos π − 0) + [sin x]<sub>0</sub><sup>π</sup> = π + 0 = π</div>
<p>结论：积分值为 π。分部口诀“反、对、幂、三、指”：幂函数 x 选作 u，三角函数进 dv。</p></details>

<details><summary>4. 计算曲线积分 I = ∮<sub>L</sub> (e<sup>x</sup> − y) dx − (e<sup>y</sup> + x) dy，其中 L 为圆周 x<sup>2</sup> + y<sup>2</sup> = 1 的正向。</summary>
<p><strong>解：</strong>用格林公式。</p>
<div class="formula">P = e<sup>x</sup> − y，Q = −(e<sup>y</sup> + x)<br>∂Q/∂x = −1，∂P/∂y = −1<br>∂Q/∂x − ∂P/∂y = −1 − (−1) = 0<br>I = ∬<sub>D</sub> 0 dxdy = 0</div>
<p>结论：积分值为 0。本题 ∂Q/∂x = ∂P/∂y，曲线积分与路径无关，沿任意闭曲线积分为 0。</p></details>

<details><summary>5. 求幂级数 Σ<sub>n=1</sub><sup>∞</sup> n·x<sup>n</sup> 的和函数，并指出收敛域。</summary>
<p><strong>解：</strong>利用等比级数逐项求导。</p>
<div class="formula">由 1/(1−x) = Σ<sub>n=0</sub><sup>∞</sup> x<sup>n</sup>（|x|&lt;1）逐项求导：<br>1/(1−x)<sup>2</sup> = Σ<sub>n=1</sub><sup>∞</sup> n x<sup>n−1</sup><br>两边同乘 x：S(x) = Σ<sub>n=1</sub><sup>∞</sup> n x<sup>n</sup> = x/(1−x)<sup>2</sup><br>x = ±1 时通项 n(±1)<sup>n</sup> 不趋于 0，端点发散</div>
<p>结论：和函数 S(x) = x/(1 − x)<sup>2</sup>，收敛域 (−1, 1)。这是“逐项求导不改变收敛半径”的直接应用。</p></details>

<details><summary>6. 求微分方程 y″ − 2y′ − 3y = 3e<sup>2x</sup> 的通解。</summary>
<p><strong>解：</strong>先解齐次方程，再设特解。</p>
<div class="formula">特征方程 r<sup>2</sup> − 2r − 3 = 0，r = 3 或 r = −1<br>齐次通解 Y = C<sub>1</sub>e<sup>3x</sup> + C<sub>2</sub>e<sup>−x</sup><br>非齐次项 3e<sup>2x</sup>，λ = 2 不是特征根，k = 0<br>设 y* = A e<sup>2x</sup>，代入：<br>(4A − 4A − 3A)e<sup>2x</sup> = −3A e<sup>2x</sup> = 3 e<sup>2x</sup>，得 A = −1<br>y* = −e<sup>2x</sup></div>
<p>结论：通解 y = C<sub>1</sub>e<sup>3x</sup> + C<sub>2</sub>e<sup>−x</sup> − e<sup>2x</sup>。注意特解设定时先核对 λ 与特征根的关系再决定幂次 k。</p></details>

<h2>综合自测建议</h2>
<p>完成本笔记后，建议按以下三个层次自测，检查掌握程度。</p>
<ul>
<li><strong>第一层次（概念）</strong>：遮住公式表，默写出五个泰勒展开、三个中值定理条件、三大积分公式与傅里叶收敛定理。默写不出来的章节，回到对应小节重读。</li>
<li><strong>第二层次（计算）</strong>：限时完成题型专项的选择 6 题与填空 6 题，要求 20 分钟内全对。错一题就回到对应章节的公式表与典型例题重做。</li>
<li><strong>第三层次（综合）</strong>：独立完成 6 道计算与证明题，不看解析。重点检验中值定理证明、定积分应用、格林/高斯公式应用与幂级数求和这四类大题的完整书写规范。</li>
</ul>
<p>三个层次都过关后，再去做近十年真题套卷，把真题中遇到的新题型补充到本笔记的对应章节，形成自己的专属错题—公式对照本。</p>

<h2>附录 A：常用等价无穷小汇总（x → 0）</h2>
<div class="table-wrap"><table>
<thead><tr><th>无穷小</th><th>等价量</th><th>备注</th></tr></thead>
<tbody>
<tr><td>sin x</td><td>x</td><td>x 为任意趋于 0 的量 u</td></tr>
<tr><td>tan x</td><td>x</td><td>同上</td></tr>
<tr><td>arcsin x</td><td>x</td><td>同上</td></tr>
<tr><td>arctan x</td><td>x</td><td>同上</td></tr>
<tr><td>1 − cos x</td><td>x<sup>2</sup>/2</td><td>二阶无穷小</td></tr>
<tr><td>e<sup>x</sup> − 1</td><td>x</td><td>常用于指数结构</td></tr>
<tr><td>ln(1 + x)</td><td>x</td><td>常用于对数结构</td></tr>
<tr><td>(1 + x)<sup>α</sup> − 1</td><td>αx</td><td>α 为常数</td></tr>
<tr><td>a<sup>x</sup> − 1</td><td>x ln a</td><td>—</td></tr>
<tr><td>x − sin x</td><td>x<sup>3</sup>/6</td><td>三阶，泰勒展开获得</td></tr>
<tr><td>x − ln(1 + x)</td><td>x<sup>2</sup>/2</td><td>二阶</td></tr>
<tr><td>tan x − x</td><td>x<sup>3</sup>/3</td><td>三阶</td></tr>
</tbody>
</table></div>


<h2>附录 B：常见曲线曲面方程</h2>
<div class="table-wrap"><table>
<thead><tr><th>名称</th><th>方程</th><th>图形特征</th></tr></thead>
<tbody>
<tr><td>球面</td><td>(x−a)<sup>2</sup>+(y−b)<sup>2</sup>+(z−c)<sup>2</sup> = R<sup>2</sup></td><td>球心 (a,b,c)，半径 R</td></tr>
<tr><td>椭球面</td><td>x<sup>2</sup>/a<sup>2</sup>+y<sup>2</sup>/b<sup>2</sup>+z<sup>2</sup>/c<sup>2</sup> = 1</td><td>三轴半径 a, b, c</td></tr>
<tr><td>圆锥面</td><td>z<sup>2</sup> = x<sup>2</sup>+y<sup>2</sup></td><td>顶点在原点，开口沿 z 轴</td></tr>
<tr><td>旋转抛物面</td><td>z = x<sup>2</sup>+y<sup>2</sup></td><td>yOz 平面 z = y<sup>2</sup> 绕 z 轴旋转</td></tr>
<tr><td>圆柱面</td><td>x<sup>2</sup>+y<sup>2</sup> = R<sup>2</sup></td><td>母线平行于 z 轴</td></tr>
<tr><td>平面</td><td>Ax+By+Cz+D = 0</td><td>法向量 (A,B,C)</td></tr>
</tbody>
</table></div>


<h2>附录 C：高数一页公式卡</h2>
<p>此卡浓缩高等数学最高频的 13 个公式，建议打印或手抄一遍，考前 30 分钟快速过一遍。</p>
<div class="table-wrap"><table>
<thead><tr><th>编号</th><th>公式</th><th>用途</th></tr></thead>
<tbody>
<tr><td>1</td><td>lim(x→0) sin x/x = 1</td><td>未定式 0/0</td></tr>
<tr><td>2</td><td>lim(x→∞) (1+1/x)<sup>x</sup> = e</td><td>1<sup>∞</sup> 型</td></tr>
<tr><td>3</td><td>e<sup>x</sup> − 1 ~ x，ln(1+x) ~ x，1−cos x ~ x<sup>2</sup>/2</td><td>等价替换</td></tr>
<tr><td>4</td><td>(uv)′ = u′v + uv′，(u/v)′ = (u′v − uv′)/v<sup>2</sup></td><td>求导法则</td></tr>
<tr><td>5</td><td>f(b) − f(a) = f′(ξ)(b − a)</td><td>拉格朗日中值定理</td></tr>
<tr><td>6</td><td>∫u dv = uv − ∫v du</td><td>分部积分</td></tr>
<tr><td>7</td><td>d/dx ∫<sub>a</sub><sup>x</sup> f(t)dt = f(x)</td><td>变限积分求导</td></tr>
<tr><td>8</td><td>dσ(极) = r dr dθ，dv(球) = r<sup>2</sup> sin φ dr dφ dθ</td><td>重积分元素</td></tr>
<tr><td>9</td><td>∮<sub>L</sub> Pdx+Qdy = ∬<sub>D</sub>(Q<sub>x</sub>−P<sub>y</sub>)dσ</td><td>格林公式</td></tr>
<tr><td>10</td><td>∯<sub>Σ</sub> F·dS = ∭<sub>Ω</sub> div F dv</td><td>高斯公式</td></tr>
<tr><td>11</td><td>R = 1/lim|a<sub>n+1</sub>/a<sub>n</sub>|</td><td>收敛半径</td></tr>
<tr><td>12</td><td>y = e<sup>−∫P</sup>(∫Qe<sup>∫P</sup>dx + C)</td><td>一阶线性通解</td></tr>
<tr><td>13</td><td>特征根 r<sub>1</sub>, r<sub>2</sub> → 三种通解形式</td><td>二阶常系数齐次</td></tr>
</tbody>
</table></div>

<h2>附录 D：数一专属考点清单（高数部分）
<p>以下考点仅数学一要求，是拉开差距的关键。数一考生务必逐点过关。</p>
<div class="table-wrap"><table>
<thead><tr><th>模块</th><th>数一专属内容</th><th>常见考法</th></tr></thead>
<tbody>
<tr><td>空间解析几何</td><td>平面与直线方程、距离公式、旋转曲面方程、二次曲面辨识</td><td>求平面法向量、旋转曲面方程、直线与平面夹角</td></tr>
<tr><td>多元积分学</td><td>第二类曲线积分、斯托克斯公式；第二类曲面积分、高斯公式；三重积分柱面/球面坐标</td><td>闭曲线用斯托克斯、闭曲面用高斯、投影域选柱/球坐标</td></tr>
<tr><td>无穷级数</td><td>傅里叶级数、狄利克雷收敛定理、周期 2l 级数</td><td>求傅里叶系数、判断间断点收敛值</td></tr>
<tr><td>微分方程</td><td>欧拉方程 x<sup>2</sup>y″ + axy′ + by = 0</td><td>令 x = e<sup>t</sup> 化为常系数线性方程</td></tr>
</tbody>
</table></div>
<p>提示：第二类曲线曲面积分与三大公式几乎每年必考一道 10–12 分的大题，傅里叶级数以选择填空形式出现，欧拉方程多为解答题中的一个小问。这三块合计约 20–25 分，是数一相对数二数三的“增量分”，务必优先保证。</p>

<h2>常见计算失误自查清单</h2>
<p>考场上 80% 的失分不是不会，而是算错。交卷前花 3 分钟逐项自查以下高频失误。</p>
<ul>
<li><strong>符号类</strong>：定积分换元后上下限是否同步更换？格林/高斯公式方向是否取正？隐函数公式的负号是否保留？</li>
<li><strong>漏项类</strong>：极坐标面积元素是否多写了 r？球面坐标是否多写了 r<sup>2</sup> sin φ？变限积分求导是否乘了内层导数？</li>
<li><strong>结构类</strong>：通解中任意常数个数是否等于方程阶数？基础解系向量个数是否为 n − r(A)？二次型矩阵 A 是否对称（交叉项系数要除以 2）？</li>
<li><strong>端点类</strong>：幂级数收敛域是否单独检验了 x = ±R？反常积分是否分成 ∫<sub>−∞</sub><sup>0</sup> 与 ∫<sub>0</sub><sup>+∞</sup> 两段分别判别？</li>
<li><strong>化简类</strong>：最终结果是否为最简分数/根式？π、e 是否保留而非展开成小数？</li>
</ul>

<h2>附录 E：公式记忆口诀（高数部分）
<p>把容易混淆的公式编成口诀，考前默念三遍即可锁定。</p>
<div class="table-wrap"><table>
<thead><tr><th>口诀</th><th>对应公式 / 结论</th></tr></thead>
<tbody>
<tr><td>“一 sin 二指三对四幂五三角”</td><td>分部积分选 u 的优先级：反三角函数、对数、幂函数、指数、三角函数排在后，后进 dv</td></tr>
<tr><td>“绕谁轴谁不变，其余平方和开根”</td><td>旋转曲面方程：绕 x 轴旋转，x 不变，y 换成 ±√(y<sup>2</sup>+z<sup>2</sup>)</td></tr>
<tr><td>“极坐标多写 r，球坐标多写 r<sup>2</sup> sin φ”</td><td>dσ = r dr dθ；dv = r<sup>2</sup> sin φ dr dφ dθ</td></tr>
<tr><td>“负指数先飘出，乘 Q 积分再加 C”</td><td>一阶线性通解 y = e<sup>−∫P</sup>(∫Qe<sup>∫P</sup>dx + C)</td></tr>
<tr><td>“λ 是几重根，k 就取几”</td><td>非齐次特解设定 y* = x<sup>k</sup>e<sup>λx</sup>Q<sub>m</sub>(x) 中 k 的取法</td></tr>
<tr><td>“端点单独验，收敛域才完整”</td><td>幂级数收敛域 = 收敛区间 ± 端点检验</td></tr>
</tbody>
</table></div>

<h2>附录 F：高数各章分值分布与复习优先级
<p>根据历年真题统计，本部分模块的大致分值占比如下，可据此分配复习时间。</p>
<div class="table-wrap"><table>
<thead><tr><th>模块</th><th>约占分值</th><th>复习优先级</th></tr></thead>
<tbody>
<tr><td>一元微分学（极限、导数、中值定理）</td><td>15–20 分</td><td>★★★★★</td></tr>
<tr><td>一元积分学</td><td>10–15 分</td><td>★★★★★</td></tr>
<tr><td>多元积分学（含三大公式）</td><td>15–20 分</td><td>★★★★★</td></tr>
<tr><td>无穷级数</td><td>10–15 分</td><td>★★★★</td></tr>
<tr><td>常微分方程</td><td>10–15 分</td><td>★★★★</td></tr>
<tr><td>多元微分学</td><td>8–12 分</td><td>★★★★</td></tr>
<tr><td>向量代数与空间解析几何</td><td>4–8 分</td><td>★★★</td></tr>
</tbody>
</table></div>
<p>时间有限时，优先保证“一元微分 + 一元积分 + 多元积分”三块，合计约 40–55 分，是高数部分过线与高分的基本盘。</p>

<h2>最后的叮嘱</h2>
<p>在合上这本笔记之前，请记住三句话：第一，<strong>公式不是背出来的，是用出来的</strong>——每道例题都亲手算一遍，公式自然扎根；第二，<strong>错题不是耻辱，是路标</strong>——每一道错题都指向一个知识漏洞，把它补牢比刷新题更重要；第三，<strong>考场不是比谁做得快，而是比谁错得少</strong>——把会做的题全做对，就是高分。</p>
<p>这本笔记覆盖了高等数学八章的全部主干考点，配套 26 道专项习题与 15 条高频易错点。建议把它打印出来，在每章例题旁留白，随时补充自己的错题与心得。真正属于你的笔记，是在这本书上生长出来的下一本书。</p>

<h2>结语</h2>
<p>数学一没有捷径，但有方法。把这本笔记当成你的“外挂大脑”：第一遍精读建立框架，第二遍遮住公式表重做例题，第三遍只看易错清单与公式卡。考场之上，拼的不是谁做过更多题，而是谁在同样熟练的情况下更少犯错。祝你合上笔记的那一刻，心里有一张清晰的知识地图——从极限到二次型，每一环都扣得住。</p>

`
  }
);
