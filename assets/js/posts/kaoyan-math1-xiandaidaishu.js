/* 文章模块：考研数学一笔记·线性代数：考点、公式与题型速查 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'kaoyan-math1-xiandaidaishu',
    title: '考研数学一笔记·线性代数：考点、公式与题型速查',
    desc: '按数学一大纲梳理线性代数六章（行列式、矩阵、向量、线性方程组、特征值、二次型）的核心考点、定理推论、公式速查表与易错点，配套选择2题、填空2题、判断2题、简答2题、计算与证明2题，共10题，适合强化与冲刺阶段速查。',
    major: '数学',
    category: '考研数学',
    tags: ["考研数学一","线性代数","复习笔记"],
    date: '2026-11-28',
    minutes: 12,
    content: `
<p>数学一的试卷中，线性代数约占 22%（33 分）。本篇按数学一大纲梳理线性代数六章的<strong>定义、定理、推论、公式、易错点</strong>，每章配核心结论、典型例题与公式表，最后附综合速查与 10 道专项习题。建议用法：第一遍逐章精读，第二遍只看公式表与易错点，考前只看最后的速记清单。</p>

<blockquote><p>线代的最大特点是“一章挂一章”：行列式是判别工具，矩阵与秩是语言，向量与方程组是同一件事的两面，特征值与对角化是把复杂变换简化的核心，二次型是特征值的直接应用。把这条主线串起来，线代就不再是散点。</p></blockquote>

<h2>线代六章一句话框架</h2>
<div class="table-wrap"><table>
<thead><tr><th>章</th><th>一句话核心</th><th>必考题型</th></tr></thead>
<tbody>
<tr><td>1. 行列式</td><td>行列式是方阵的一个数，判别可逆性与线性相关性的钥匙</td><td>n 阶行列式计算、克莱姆法则</td></tr>
<tr><td>2. 矩阵</td><td>矩阵是线性变换的表格表示，初等行变换是化简一切的基础</td><td>求逆矩阵、矩阵的秩、分块矩阵</td></tr>
<tr><td>3. 向量</td><td>向量组的秩刻画最大无关子集的大小</td><td>线性相关判别、极大无关组、施密特正交化</td></tr>
<tr><td>4. 方程组</td><td>Ax = b 有解的充要条件是秩匹配，解空间维数为 n − r(A)</td><td>基础解系、通解结构、解的判定</td></tr>
<tr><td>5. 特征值</td><td>特征向量是变换中方向不变的向量，对角化把复杂变换简化</td><td>求特征值特征向量、相似对角化</td></tr>
<tr><td>6. 二次型</td><td>二次型是多元二次齐次函数，正定即恒正，惯性指数是不变量</td><td>化标准形、正定判别、正交变换</td></tr>
</tbody>
</table></div>

<h3>第 1 章　行列式</h3>
<ul>
<li><strong>行列式性质</strong>：①行列式转置值不变；②两行（列）互换，行列式变号；③某行（列）有公因子可提出；④某行（列）的所有元素都是两数之和，可拆成两个行列式之和；⑤把某行（列）的 k 倍加到另一行（列），行列式值不变。两行（列）相同或成比例时行列式为 0。</li>
<li><strong>展开定理</strong>：行列式等于它的任一行（列）各元素与其代数余子式乘积之和：D = Σ<sub>j</sub> a<sub>ij</sub>A<sub>ij</sub>（按第 i 行展开）；推论：Σ<sub>j</sub> a<sub>ij</sub>A<sub>kj</sub> = 0（i ≠ k）——某行元素与另一行对应代数余子式乘积之和为 0。</li>
<li><strong>克莱姆法则</strong>：n 元 n 个方程的线性方程组 Ax = b，若系数行列式 D = |A| ≠ 0，则方程组有唯一解 x<sub>i</sub> = D<sub>i</sub>/D（D<sub>i</sub> 为把 A 的第 i 列换成 b 所得行列式）。推论：齐次方程组 Ax = 0 有非零解 ⟺ |A| = 0。</li>
<li><strong>常用行列式结论</strong>：上（下）三角行列式等于主对角线元素之积；副对角线行列式 (−1)<sup>n(n−1)/2</sup>·副对角线元素之积；范德蒙德行列式 Π<sub>i&lt;j</sub>(x<sub>j</sub> − x<sub>i</sub>)。</li>
</ul>
<p><strong>典型例题：计算 n 阶行列式 D<sub>n</sub> = |a b b … b; b a b … b; …; b b … a|（每行均为一个 a、n − 1 个 b）。</strong></p>
<p>思路：行和相等，把第 2 至 n 列全部加到第 1 列，提出公因子 [a + (n − 1)b]。</p>
<div class="formula">D<sub>n</sub> = [a + (n − 1)b]·|1 b b … b; 1 a b … b; …; 1 b … a|<br>第 i 行减第 1 行（i = 2, …, n）：<br>= [a + (n − 1)b]·|1 b … b; 0 a−b 0 … 0; …; 0 0 … a−b|<br>= [a + (n − 1)b]·(a − b)<sup>n−1</sup></div>
<p>结论：D<sub>n</sub> = [a + (n − 1)b](a − b)<sup>n−1</sup>。“行和相等”行列式是出现频率最高的一类，口诀：列加首列、提公因子、行减首行化三角。</p>

<h3>第 2 章　矩阵</h3>
<ul>
<li><strong>矩阵运算</strong>：A + B、数乘 kA 按元素进行；AB 要求 A 的列数等于 B 的行数。<strong>矩阵乘法一般不满足交换律</strong>（AB ≠ BA），也不满足消去律（AB = AC 且 A ≠ 0 不能推出 B = C）。(AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup>，(AB)<sup>−1</sup> = B<sup>−1</sup>A<sup>−1</sup>。</li>
<li><strong>逆矩阵</strong>：n 阶方阵 A 可逆 ⟺ |A| ≠ 0 ⟺ r(A) = n ⟺ A 的列（行）向量组线性无关。求法：①伴随矩阵法 A<sup>−1</sup> = A*/|A|；②初等变换法 (A | E) → (E | A<sup>−1</sup>)。</li>
<li><strong>初等变换与初等矩阵</strong>：对矩阵做一次初等行变换，等于左乘一个对应的初等矩阵；初等矩阵均可逆，且其逆仍为同类型初等矩阵。</li>
<li><strong>矩阵的秩</strong>：r(A) = A 中最高阶非零子式的阶数；初等变换不改变秩；r(A<sub>m×n</sub>) ≤ min{m, n}；r(AB) ≤ min{r(A), r(B)}；若 A 可逆则 r(AB) = r(B)；r(A + B) ≤ r(A) + r(B)。</li>
<li><strong>分块矩阵</strong>：分块对角阵 diag(A<sub>1</sub>, …, A<sub>s</sub>) 的行列式等于 |A<sub>1</sub>|·…·|A<sub>s</sub>|，逆矩阵为 diag(A<sub>1</sub><sup>−1</sup>, …, A<sub>s</sub><sup>−1</sup>)。</li>
</ul>
<p><strong>典型例题：设 A = (1, 2; 3, 4)，求 A<sup>−1</sup>。</strong></p>
<p>思路：二阶矩阵伴随法最快。|A| = 1·4 − 2·3 = −2 ≠ 0，可逆。伴随矩阵 A* = (4, −2; −3, 1)（主对调、副变号）。</p>
<div class="formula">A<sup>−1</sup> = A*/|A| = (4, −2; −3, 1)/(−2) = (−2, 1; 3/2, −1/2)</div>
<p>结论：A<sup>−1</sup> = (−2, 1; 3/2, −1/2)，可验证 AA<sup>−1</sup> = E。二阶伴随口诀“主对调、副变号”；三阶以上用初等行变换 (A | E) → (E | A<sup>−1</sup>) 更可靠。</p>

<h3>第 3 章　向量</h3>
<ul>
<li><strong>线性组合与线性表示</strong>：β 能由 α<sub>1</sub>, …, α<sub>s</sub> 线性表示 ⟺ 方程组 x<sub>1</sub>α<sub>1</sub> + … + x<sub>s</sub>α<sub>s</sub> = β 有解 ⟺ r(α<sub>1</sub>, …, α<sub>s</sub>) = r(α<sub>1</sub>, …, α<sub>s</sub>, β)。</li>
<li><strong>线性相关与无关</strong>：存在不全为零的 k<sub>1</sub>, …, k<sub>s</sub> 使 Σk<sub>i</sub>α<sub>i</sub> = 0，则称线性相关；否则无关。判别法：①α<sub>1</sub>, …, α<sub>s</sub> 线性相关 ⟺ r(α<sub>1</sub>, …, α<sub>s</sub>) &lt; s ⟺ 齐次方程组有非零解；②s = n（方阵）时等价于 |A| = 0；③s &gt; n 时必线性相关（个数超过维数）；④部分相关 ⟹ 整体相关；整体无关 ⟹ 部分无关。</li>
<li><strong>极大线性无关组与向量组的秩</strong>：向量组中个数最多的无关子集即极大无关组，其向量个数称为向量组的秩。矩阵的秩 = 其行向量组的秩 = 其列向量组的秩。</li>
<li><strong>向量空间（数一）</strong>：基、维数、坐标的概念；基变换公式 η = Cξ，过渡矩阵 C 可逆；坐标变换 y = C<sup>−1</sup>x。</li>
<li><strong>内积与正交</strong>：(α, β) = α<sup>T</sup>β = Σa<sub>i</sub>b<sub>i</sub>；||α|| = √(α, α)。施密特正交化：β<sub>1</sub> = α<sub>1</sub>，β<sub>2</sub> = α<sub>2</sub> − [(α<sub>2</sub>, β<sub>1</sub>)/(β<sub>1</sub>, β<sub>1</sub>)]β<sub>1</sub>，再单位化 γ<sub>i</sub> = β<sub>i</sub>/||β<sub>i</sub>||。正交矩阵 Q 满足 Q<sup>T</sup>Q = E，充要条件是列（行）向量组为标准正交向量组；正交变换保持长度与内积不变。</li>
</ul>
<p><strong>典型例题：判断向量组 α<sub>1</sub> = (1, 1, 0)<sup>T</sup>，α<sub>2</sub> = (0, 1, 1)<sup>T</sup>，α<sub>3</sub> = (1, 0, 1)<sup>T</sup> 的线性相关性，并求极大无关组。</strong></p>
<p>思路：以列排成矩阵做初等行变换。</p>
<div class="formula">A = (1 0 1; 1 1 0; 0 1 1) → 行变换 → (1 0 1; 0 1 −1; 0 0 0)<br>r(A) = 2 &lt; 3，故向量组线性相关<br>极大无关组：α<sub>1</sub>, α<sub>2</sub>（或 α<sub>1</sub>, α<sub>3</sub>），且 α<sub>3</sub> = α<sub>1</sub> − α<sub>2</sub></div>
<p>结论：秩为 2，线性相关，α<sub>1</sub>、α<sub>2</sub> 为一个极大无关组。初等行变换后“首非零元所在列”对应极大无关组向量。</p>

<h3>第 4 章　线性方程组</h3>
<ul>
<li><strong>解的判定</strong>：齐次 Ax = 0 总有解；有非零解 ⟺ r(A) &lt; n。非齐次 Ax = b：无解 ⟺ r(A) ≠ r(A, b)；有唯一解 ⟺ r(A) = r(A, b) = n；有无穷多解 ⟺ r(A) = r(A, b) &lt; n。</li>
<li><strong>齐次方程组解的结构</strong>：Ax = 0 的基础解系含 n − r(A) 个线性无关的解向量 ξ<sub>1</sub>, …, ξ<sub>n−r</sub>；通解为 x = C<sub>1</sub>ξ<sub>1</sub> + … + C<sub>n−r</sub>ξ<sub>n−r</sub>。</li>
<li><strong>非齐次方程组解的结构</strong>：Ax = b 的通解 = 对应齐次方程组的通解 + Ax = b 的一个特解 η*：x = C<sub>1</sub>ξ<sub>1</sub> + … + C<sub>n−r</sub>ξ<sub>n−r</sub> + η*。非齐次两解之差 η<sub>1</sub> − η<sub>2</sub> 是对应齐次方程组的解。</li>
</ul>
<p><strong>典型例题：求齐次方程组 x<sub>1</sub> + x<sub>2</sub> − x<sub>3</sub> = 0，2x<sub>1</sub> + 2x<sub>2</sub> − 2x<sub>3</sub> = 0 的基础解系与通解。</strong></p>
<p>思路：系数矩阵两行成比例，r(A) = 1，n = 3，基础解系含 3 − 1 = 2 个向量。</p>
<div class="formula">同解方程组：x<sub>1</sub> = −x<sub>2</sub> + x<sub>3</sub>，自由未知量取 x<sub>2</sub>, x<sub>3</sub><br>令 (x<sub>2</sub>, x<sub>3</sub>) = (1, 0) 得 ξ<sub>1</sub> = (−1, 1, 0)<sup>T</sup><br>令 (x<sub>2</sub>, x<sub>3</sub>) = (0, 1) 得 ξ<sub>2</sub> = (1, 0, 1)<sup>T</sup><br>通解：x = C<sub>1</sub>ξ<sub>1</sub> + C<sub>2</sub>ξ<sub>2</sub></div>
<p>结论：基础解系含 2 个向量。自由未知量取基本单位向量，可保证所得向量天然线性无关。</p>

<h3>第 5 章　特征值和特征向量</h3>
<ul>
<li><strong>定义与求法</strong>：Ax = λx（x ≠ 0）。先解特征方程 |λE − A| = 0 得特征值 λ<sub>i</sub>，再解齐次方程组 (λ<sub>i</sub>E − A)x = 0 得对应的特征向量。</li>
<li><strong>性质</strong>：Σλ<sub>i</sub> = Σa<sub>ii</sub> = tr A（迹）；Πλ<sub>i</sub> = |A|；若 λ 是 A 的特征值，则 kλ、λ<sup>m</sup>、1/λ（λ ≠ 0）、f(λ) 分别是 kA、A<sup>m</sup>、A<sup>−1</sup>、f(A) 的特征值，且同一特征向量保持不变。不同特征值对应的特征向量线性无关。</li>
<li><strong>相似对角化</strong>：A ~ B ⟹ |A| = |B|、tr A = tr B、r(A) = r(B)、特征值全同。A 可相似对角化（A ~ Λ，Λ = diag(λ<sub>1</sub>, …, λ<sub>n</sub>)）的充要条件是：A 有 n 个线性无关的特征向量；充分条件：A 有 n 个互不相同的特征值；常用充要条件：对每个 k 重特征值 λ<sub>i</sub>，都有 n − r(λ<sub>i</sub>E − A) = k（几何重数 = 代数重数）。做法：求特征值、求线性无关特征向量、令 P = (ξ<sub>1</sub>, …, ξ<sub>n</sub>)，则 P<sup>−1</sup>AP = Λ。</li>
<li><strong>实对称矩阵</strong>：特征值全为实数；不同特征值对应的特征向量必正交；必可相似对角化，且存在正交矩阵 Q 使 Q<sup>−1</sup>AQ = Q<sup>T</sup>AQ = Λ（正交相似对角化）。</li>
</ul>
<p><strong>典型例题：设 3 阶矩阵 A 的特征值为 1、−2、3，求 |A* + 2A − E|。</strong></p>
<p>思路：A* 的特征值为 |A|/λ；|A| = 1·(−2)·3 = −6。</p>
<div class="formula">A* 的特征值：−6/1 = −6，−6/(−2) = 3，−6/3 = −2<br>A* + 2A − E 的特征值：<br>−6 + 2·1 − 1 = −5；3 + 2·(−2) − 1 = −2；−2 + 2·3 − 1 = 3<br>行列式 = (−5)(−2)(3) = 30</div>
<p>结论：|A* + 2A − E| = 30。抽象矩阵求行列式的通法：不求 A 本身，只求 f(A) 的全体特征值，再相乘。</p>

<h3>第 6 章　二次型</h3>
<ul>
<li><strong>矩阵表示</strong>：二次型 f(x<sub>1</sub>, …, x<sub>n</sub>) = Σa<sub>ii</sub>x<sub>i</sub><sup>2</sup> + 2Σ<sub>i&lt;j</sub>a<sub>ij</sub>x<sub>i</sub>x<sub>j</sub> = x<sup>T</sup>Ax，其中 A 为对称矩阵，f 的秩即 r(A)。</li>
<li><strong>化标准形</strong>：①正交变换法：x = Qy，Q 为正交矩阵，则 f = λ<sub>1</sub>y<sub>1</sub><sup>2</sup> + … + λ<sub>n</sub>y<sub>n</sub><sup>2</sup>，λ<sub>i</sub> 恰为 A 的特征值；②配方法：逐次凑平方，得到可逆线性变换 x = Cy。</li>
<li><strong>规范形与惯性定理</strong>：任何二次型经可逆线性变换可化为规范形 y<sub>1</sub><sup>2</sup> + … + y<sub>p</sub><sup>2</sup> − y<sub>p+1</sub><sup>2</sup> − … − y<sub>r</sub><sup>2</sup>；正惯性指数 p、负惯性指数 r − p 在可逆变换下保持不变（惯性定理）。合同 ⟺ 秩相同且正惯性指数相同。</li>
<li><strong>正定二次型</strong>：∀x ≠ 0，x<sup>T</sup>Ax &gt; 0。等价条件（满足其一即可）：①A 的特征值全为正；②正惯性指数 p = n；③A 的各阶顺序主子式全大于 0（霍尔维茨定理）；④存在可逆阵 C 使 A = C<sup>T</sup>C。</li>
</ul>
<p><strong>典型例题：用配方法化二次型 f = x<sub>1</sub><sup>2</sup> + 2x<sub>1</sub>x<sub>2</sub> + 2x<sub>2</sub><sup>2</sup> + 4x<sub>2</sub>x<sub>3</sub> + 5x<sub>3</sub><sup>2</sup> 为标准形，并写出所作可逆变换。</strong></p>
<p>思路：先按 x<sub>1</sub> 凑平方，再按 x<sub>2</sub> 凑平方。</p>
<div class="formula">f = (x<sub>1</sub> + x<sub>2</sub>)<sup>2</sup> + x<sub>2</sub><sup>2</sup> + 4x<sub>2</sub>x<sub>3</sub> + 5x<sub>3</sub><sup>2</sup><br>= (x<sub>1</sub> + x<sub>2</sub>)<sup>2</sup> + (x<sub>2</sub> + 2x<sub>3</sub>)<sup>2</sup> + x<sub>3</sub><sup>2</sup><br>令 y<sub>1</sub> = x<sub>1</sub> + x<sub>2</sub>，y<sub>2</sub> = x<sub>2</sub> + 2x<sub>3</sub>，y<sub>3</sub> = x<sub>3</sub><br>标准形：f = y<sub>1</sub><sup>2</sup> + y<sub>2</sub><sup>2</sup> + y<sub>3</sub><sup>2</sup>（系数全为正）</div>
<p>结论：标准形为三个正平方项，正惯性指数 p = 3 = n，故 f 正定。配方法不改变惯性指数，只用于判正定与求标准形；若题目要求“正交变换”，则必须走特征值路线。</p>

<h4>6.1 特征值—二次型转化图</h4>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="特征值与二次型标准形转化图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">实对称矩阵 A：特征值 → 正交变换 → 二次型标准形</text>
  <rect x="40" y="60" width="150" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="115" y="78" text-anchor="middle" font-size="11.5" fill="var(--text)">二次型 f = x<sup>T</sup>Ax</text>
  <text x="115" y="94" text-anchor="middle" font-size="10.5" fill="var(--muted)">A 为实对称阵</text>
  <rect x="240" y="60" width="150" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="315" y="78" text-anchor="middle" font-size="11.5" fill="var(--text)">解 |λE − A| = 0</text>
  <text x="315" y="94" text-anchor="middle" font-size="10.5" fill="var(--muted)">得 λ<sub>1</sub>, λ<sub>2</sub>, λ<sub>3</sub></text>
  <rect x="440" y="60" width="150" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="515" y="78" text-anchor="middle" font-size="11.5" fill="var(--text)">施密特正交化</text>
  <text x="515" y="94" text-anchor="middle" font-size="10.5" fill="var(--muted)">得正交矩阵 Q</text>
  <rect x="620" y="60" width="110" height="40" rx="6" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="675" y="78" text-anchor="middle" font-size="11.5" fill="var(--text)">x = Qy</text>
  <text x="675" y="94" text-anchor="middle" font-size="10.5" fill="var(--muted)">正交变换</text>
  <line x1="190" y1="80" x2="240" y2="80" stroke="var(--muted)" stroke-width="1.2"/>
  <line x1="390" y1="80" x2="440" y2="80" stroke="var(--muted)" stroke-width="1.2"/>
  <line x1="590" y1="80" x2="620" y2="80" stroke="var(--muted)" stroke-width="1.2"/>
  <rect x="240" y="140" width="490" height="56" rx="6" fill="var(--bg-soft)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="485" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="var(--text)">f = λ<sub>1</sub>y<sub>1</sub><sup>2</sup> + λ<sub>2</sub>y<sub>2</sub><sup>2</sup> + λ<sub>3</sub>y<sub>3</sub><sup>2</sup>（标准形）</text>
  <text x="485" y="186" text-anchor="middle" font-size="11" fill="var(--text-2)">λ 全正 ⟺ 正定；顺序主子式全正同样可判正定</text>
  <line x1="675" y1="100" x2="675" y2="120" stroke="var(--muted)" stroke-width="1.2"/>
  <line x1="675" y1="120" x2="485" y2="120" stroke="var(--muted)" stroke-width="1.2"/>
  <line x1="485" y1="120" x2="485" y2="140" stroke="var(--muted)" stroke-width="1.2"/>
  <text x="60" y="220" font-size="11" fill="var(--muted)">注：配方法得到的标准形系数一般不是特征值，只有正交变换法的系数才是特征值</text>
</svg>
<figcaption>图 L.1　从二次型到标准形的两条路径：正交变换保特征值，配方法只保惯性指数</figcaption>
</figure>

<h4>6.2 线代易错点</h4>
<ol>
<li>行列式是数，矩阵是数表；|AB| = |A||B| 成立但 AB ≠ BA 一般成立。</li>
<li>Ax = 0 基础解系向量个数 = n − r(A)，n 是未知数个数，不是方程个数。</li>
<li>不同特征值的特征向量无关，但同一特征值的特征向量的非零线性组合仍是该特征值的特征向量。</li>
<li>A 可对角化要求“每个 k 重特征值对应 k 个线性无关特征向量”，只看“特征向量总数等于 n”不够。</li>
<li>合同与相似不同：实对称阵相似必合同，合同未必相似（惯性指数相同即可合同）。</li>
<li>正定判别只能用于对称矩阵；顺序主子式必须从一阶开始逐阶全为正。</li>
</ol>


<h2>跨模块解题方法总结</h2>

<h4>方法五：线代综合题——一条主线串到底</h4>

<p>线代的核心链条是：行列式 → 矩阵可逆性 → 向量组线性相关性 → 方程组解的判定 → 特征值与对角化 → 二次型标准形与正定。任何一道综合题都在这条链条上：求特征值用 |λE − A| = 0（行列式），判对角化用秩（矩阵），求基础解系用方程组，化二次型标准形用特征值。做题时先定位题目在链条的哪一环，再往相邻环延伸。</p>

<h2>考前速记清单</h2>
<ul>
<li>行列式性质与展开定理、克莱姆法则，能默写。</li>
<li>逆矩阵的两种求法、矩阵的秩与秩不等式。</li>
<li>线性相关的判别法、极大无关组与向量组的秩。</li>
<li>Ax = b 解的判定表；基础解系个数 n − r(A)。</li>
<li>特征值两条守恒：迹与行列式；对角化充要条件。</li>
<li>正定的四种等价判据；惯性定理。</li>
</ul>

<h2>高频易错点汇总（3 条）</h2>
<ol>
<li>基础解系个数 n − r(A) 中的 n 误取为方程个数。</li>
<li>特征值性质 Πλ<sub>i</sub> = |A| 与 Σλ<sub>i</sub> = tr A 张冠李戴。</li>
<li>正定判别只验特征值或只验顺序主子式之一却忘了 A 必须对称。</li>
</ol>

<h2>易混概念辨析（选择填空高频陷阱）</h2>
<div class="table-wrap"><table>
<thead><tr><th>易混对</th><th>区别</th><th>典型反例 / 结论</th></tr></thead>
<tbody>
<tr><td>相似 vs 合同</td><td>相似特征值相同；合同惯性指数相同</td><td>实对称阵相似必合同，反之不然</td></tr>
<tr><td>正定 vs 特征值为正</td><td>对称矩阵特征值全正 ⟺ 正定</td><td>非对称矩阵不能用此判据</td></tr>
</tbody>
</table></div>

<h2>考前速记清单</h2>
<ul>
<li>行列式性质与展开定理、克莱姆法则，能默写。</li>
<li>逆矩阵的两种求法、矩阵的秩与秩不等式。</li>
<li>线性相关的判别法、极大无关组与向量组的秩。</li>
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
<p>以下 10 题覆盖线性代数全部主干题型，难度贴近真题选填与前两道大题。建议先独立完成，再展开解析核对。计算题请动手演笔，不要只看答案。</p>


<h3>答题书写规范（分步得分要点）</h3>
<p>数学一按步给分。同样一道题，写出关键步骤比只写最终结论多拿 40%–60% 的分数。以下是各类大题的最低书写要求。</p>
<ul>
<li><strong>线代大题</strong>：求特征值须写出 |λE − A| = 0 的展开式；对角化须写出 P 的构造与 P<sup>−1</sup>AP = Λ 的验证；二次型须写出矩阵 A 与所作正交（可逆）变换。</li>
</ul>
<p>切记：即使某一步算错，后续步骤只要逻辑正确，仍可按“步骤分”给分。空着不写等于主动放弃分数。</p>

<h3>一、选择题（2 题）</h3>
<details><summary>1. 设 A 为 3 阶矩阵，|A| = 2，A* 为 A 的伴随矩阵，则 |A*| = （　）。A. 4　B. −4　C. 2　D. 8</summary>
<p><strong>答案：A。</strong>解析：由伴随矩阵公式 A* = |A|A<sup>−1</sup>，两边取行列式：|A*| = ||A|·A<sup>−1</sup>| = |A|<sup>3</sup>·|A<sup>−1</sup>| = |A|<sup>3</sup>·(1/|A|) = |A|<sup>2</sup> = 2<sup>2</sup> = 4。一般结论：n 阶方阵 |A*| = |A|<sup>n−1</sup>。</p></details>

<details><summary>2. 设二次型 f = x<sub>1</sub><sup>2</sup> + 2x<sub>2</sub><sup>2</sup> + (1−λ)x<sub>3</sub><sup>2</sup> + 2x<sub>1</sub>x<sub>2</sub> 正定，则 λ 的取值范围是（　）。A. λ &lt; 1　B. λ &gt; 1　C. λ &lt; 0　D. 任意实数</summary>
<p><strong>答案：A。</strong>解析：矩阵 A = diag 思路：二次型写成矩阵 A = (1, 1, 0; 1, 2, 0; 0, 0, 1−λ)。顺序主子式：Δ<sub>1</sub> = 1 &gt; 0；Δ<sub>2</sub> = 1·2 − 1 = 1 &gt; 0；Δ<sub>3</sub> = |A| = (1−λ)·(2−1) = 1 − λ。要求 Δ<sub>3</sub> &gt; 0，即 λ &lt; 1。</p></details>

<h3>二、填空题（2 题）</h3>
<details><summary>1. 设 A 为 3 阶矩阵，特征值为 1, −1, 2，则 |A<sup>2</sup> − 2A + E| = ______。</summary>
<p><strong>答案：0。</strong>解析：A<sup>2</sup> − 2A + E = (A − E)<sup>2</sup> 的特征值为 (λ − 1)<sup>2</sup>：0, 4, 1。行列式 = 0·4·1 = 0（A 有特征值 1，故 A − E 奇异）。</p></details>

<details><summary>2. 向量组 α<sub>1</sub> = (1, 0, 0)<sup>T</sup>，α<sub>2</sub> = (1, 1, 0)<sup>T</sup>，α<sub>3</sub> = (1, 1, 1)<sup>T</sup> 的秩为 ______。</summary>
<p><strong>答案：3。</strong>解析：三个向量构成上三角矩阵（以列排列为 (1,1,1; 0,1,1; 0,0,1)），行列式 = 1 ≠ 0，向量组线性无关，秩为 3。</p></details>

<h3>三、判断题（2 题）</h3>
<p><strong>1. 若矩阵 A 与 B 等价（同型且秩相等），则 Ax = 0 与 Bx = 0 同解。</strong></p>
<p>×。等价只要求秩相等，例如 A = (1, 0; 0, 0) 与 B = (0, 1; 0, 0) 秩都为 1，但基础解系完全不同。</p>
<p><strong>2. 设 A 为 n 阶实对称矩阵，则 A 的 k 重特征值恰对应 k 个线性无关的特征向量。</strong></p>
<p>√。实对称矩阵必可相似对角化，几何重数恒等于代数重数。</p>

<h3>四、简答题（2 题）</h3>
<details><summary>1. 简述线性方程组 Ax = b 解的判定定理。</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>无解 ⟺ r(A) &lt; r(A, b)。</li>
<li>唯一解 ⟺ r(A) = r(A, b) = n（n 为未知数个数）。</li>
<li>无穷多解 ⟺ r(A) = r(A, b) &lt; n，解空间含 n − r(A) 个自由未知量。</li>
<li>齐次 Ax = 0：只有零解 ⟺ r(A) = n；有非零解 ⟺ r(A) &lt; n。</li>
</ul></details>

<details><summary>2. 简述二次型正定的等价判别方法。</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>定义：∀x ≠ 0，x<sup>T</sup>Ax &gt; 0。</li>
<li>特征值全为正。</li>
<li>正惯性指数 p = n（规范形全为正平方项）。</li>
<li>各阶顺序主子式全大于 0（霍尔维茨定理）。</li>
<li>存在可逆矩阵 C 使 A = C<sup>T</sup>C。</li>
<li>前提：A 必须是对称矩阵。</li>
</ul></details>

<h3>五、计算与证明题（2 题）</h3>
<details><summary>1. 设矩阵 A = (2, 1, 1; 1, 2, 1; 1, 1, 2)，求其特征值与线性无关特征向量，并判断可否对角化。</summary>
<p><strong>解：</strong></p>
<div class="formula">|λE − A| = (λ − 4)(λ − 1)<sup>2</sup> = 0（行和相等行列式技巧）<br>λ<sub>1</sub> = 4：(4E − A)x = 0 ⟹ 特征向量 ξ<sub>1</sub> = (1, 1, 1)<sup>T</sup><br>λ<sub>2</sub> = 1（二重）：(E − A)x = 0，r(E − A) = 1<br>基础解系含 3 − 1 = 2 个向量：ξ<sub>2</sub> = (1, −1, 0)<sup>T</sup>，ξ<sub>3</sub> = (1, 0, −1)<sup>T</sup></div>
<p>结论：A 有 3 个线性无关的特征向量，可相似对角化，P = (ξ<sub>1</sub>, ξ<sub>2</sub>, ξ<sub>3</sub>)，P<sup>−1</sup>AP = diag(4, 1, 1)。注意二重特征值 1 恰好对应 2 个无关特征向量（几何重数 = 代数重数），这是判对角化的关键。</p></details>

<details><summary>2. 用正交变换化二次型 f = 2x<sub>1</sub><sup>2</sup> + 2x<sub>2</sub><sup>2</sup> + 2x<sub>3</sub><sup>2</sup> + 2x<sub>1</sub>x<sub>2</sub> + 2x<sub>1</sub>x<sub>3</sub> + 2x<sub>2</sub>x<sub>3</sub> 为标准形，并判断是否正定。</summary>
<p><strong>解：</strong>写出矩阵并求特征值。</p>
<div class="formula">A = (2, 1, 1; 1, 2, 1; 1, 1, 2)（与题 7 同一矩阵）<br>特征值 4, 1, 1，均为正<br>正交变换 x = Qy 后 f = 4y<sub>1</sub><sup>2</sup> + y<sub>2</sub><sup>2</sup> + y<sub>3</sub><sup>2</sup></div>
<p>结论：标准形为 4y<sub>1</sub><sup>2</sup> + y<sub>2</sub><sup>2</sup> + y<sub>3</sub><sup>2</sup>。三个特征值全为正，故 f 正定。本题与题 7 联动：实对称矩阵正交相似对角化的结果直接就是二次型的标准形，系数恰为特征值。</p></details>

<h2>综合自测建议</h2>
<p>完成本笔记后，建议按以下三个层次自测，检查掌握程度。</p>
<ul>
<li><strong>第一层次（概念）</strong>：遮住公式表，默写出行列式性质、逆矩阵求法、基础解系个数公式、特征值两条守恒与正定的四种判据。默写不出来的章节，回到对应小节重读。</li>
<li><strong>第二层次（计算）</strong>：限时完成题型专项的选择 2 题与填空 2 题，要求 8 分钟内全对。错一题就回到对应章节的公式表与典型例题重做。</li>
<li><strong>第三层次（综合）</strong>：独立完成 2 道计算与证明题，不看解析。重点检验特征值求法、相似对角化判定与正交变换化二次型标准形这三类大题的完整书写规范。</li>
</ul>
<p>三个层次都过关后，再去做近十年真题套卷，把真题中遇到的新题型补充到本笔记的对应章节，形成自己的专属错题—公式对照本。</p>

<h2>附录 C：线代一页公式卡</h2>
<p>此卡浓缩线性代数最高频的 7 个公式，建议打印或手抄一遍，考前 30 分钟快速过一遍。</p>
<div class="table-wrap"><table>
<thead><tr><th>编号</th><th>公式</th><th>用途</th></tr></thead>
<tbody>
<tr><td>1</td><td>|A*| = |A|<sup>n−1</sup></td><td>伴随矩阵行列式</td></tr>
<tr><td>2</td><td>r(AB) ≤ min{r(A), r(B)}</td><td>秩不等式</td></tr>
<tr><td>3</td><td>基础解系含 n − r(A) 个向量</td><td>齐次方程组解结构</td></tr>
<tr><td>4</td><td>Σλ<sub>i</sub> = tr A，Πλ<sub>i</sub> = |A|</td><td>特征值守恒</td></tr>
<tr><td>5</td><td>A 可对角化 ⟺ 每个 k 重特征值对应 k 个无关特征向量</td><td>对角化判定</td></tr>
<tr><td>6</td><td>f = x<sup>T</sup>Ax，正交变换后 f = Σλ<sub>i</sub>y<sub>i</sub><sup>2</sup></td><td>二次型标准形</td></tr>
<tr><td>7</td><td>正定 ⟺ 顺序主子式全正（或特征值全正）</td><td>正定判别</td></tr>
</tbody>
</table></div>

<h2>附录 D：数一专属考点清单（线代部分）
<p>以下考点仅数学一要求，是拉开差距的关键。数一考生务必逐点过关。</p>
<div class="table-wrap"><table>
<thead><tr><th>模块</th><th>数一专属内容</th><th>常见考法</th></tr></thead>
<tbody>
<tr><td>线代</td><td>向量空间、基变换与坐标变换、施密特正交化</td><td>求过渡矩阵、判断向量空间基</td></tr>
</tbody>
</table></div>
<p>提示：向量空间、基变换与施密特正交化以选择填空或解答题小问形式出现，是线代部分唯一的数一专属增量，务必保证不丢分。</p>

<h2>常见计算失误自查清单</h2>
<p>考场上 80% 的失分不是不会，而是算错。交卷前花 3 分钟逐项自查以下高频失误。</p>
<ul>
<li><strong>符号类</strong>：定积分换元后上下限是否同步更换？格林/高斯公式方向是否取正？隐函数公式的负号是否保留？</li>
<li><strong>漏项类</strong>：极坐标面积元素是否多写了 r？球面坐标是否多写了 r<sup>2</sup> sin φ？变限积分求导是否乘了内层导数？</li>
<li><strong>结构类</strong>：通解中任意常数个数是否等于方程阶数？基础解系向量个数是否为 n − r(A)？二次型矩阵 A 是否对称（交叉项系数要除以 2）？</li>
<li><strong>端点类</strong>：幂级数收敛域是否单独检验了 x = ±R？反常积分是否分成 ∫<sub>−∞</sub><sup>0</sup> 与 ∫<sub>0</sub><sup>+∞</sup> 两段分别判别？</li>
<li><strong>化简类</strong>：最终结果是否为最简分数/根式？π、e 是否保留而非展开成小数？</li>
</ul>

<h2>附录 E：公式记忆口诀（线代部分）
<p>把容易混淆的公式编成口诀，考前默念三遍即可锁定。</p>
<div class="table-wrap"><table>
<thead><tr><th>口诀</th><th>对应公式 / 结论</th></tr></thead>
<tbody>
<tr><td>“行和相等列加列，提公因子行减行”</td><td>n 阶行列式计算技巧：列加首列、提公因子、行减首行化三角</td></tr>
<tr><td>“和是迹，积是行列式”</td><td>Σλ<sub>i</sub> = tr A；Πλ<sub>i</sub> = |A|</td></tr>
<tr><td>“k 重根要 k 个无关向量”</td><td>A 可对角化 ⟺ 每个 k 重特征值对应 k 个线性无关特征向量</td></tr>
<tr><td>“对称正定看主子，一阶二阶三阶全为正”</td><td>霍尔维茨定理：顺序主子式 Δ<sub>1</sub>, Δ<sub>2</sub>, …, Δ<sub>n</sub> 全正</td></tr>
</tbody>
</table></div>

<h2>附录 F：线代分值分布与复习优先级
<p>根据历年真题统计，本部分模块的大致分值占比如下，可据此分配复习时间。</p>
<div class="table-wrap"><table>
<thead><tr><th>模块</th><th>约占分值</th><th>复习优先级</th></tr></thead>
<tbody>
<tr><td>线性代数（六章合计）</td><td>30–35 分</td><td>★★★★★</td></tr>
</tbody>
</table></div>
<p>时间有限时，线代整体约 30–35 分，与高数核心三块同为必须保住的基本盘。</p>

<h2>最后的叮嘱</h2>
<p>在合上这本笔记之前，请记住三句话：第一，<strong>公式不是背出来的，是用出来的</strong>——每道例题都亲手算一遍，公式自然扎根；第二，<strong>错题不是耻辱，是路标</strong>——每一道错题都指向一个知识漏洞，把它补牢比刷新题更重要；第三，<strong>考场不是比谁做得快，而是比谁错得少</strong>——把会做的题全做对，就是高分。</p>
<p>这本笔记覆盖了线性代数六章的全部主干考点，配套 10 道专项习题与 3 条高频易错点。建议把它打印出来，在每章例题旁留白，随时补充自己的错题与心得。真正属于你的笔记，是在这本书上生长出来的下一本书。</p>

<h2>结语</h2>
<p>数学一没有捷径，但有方法。把这本笔记当成你的“外挂大脑”：第一遍精读建立框架，第二遍遮住公式表重做例题，第三遍只看易错清单与公式卡。考场之上，拼的不是谁做过更多题，而是谁在同样熟练的情况下更少犯错。祝你合上笔记的那一刻，心里有一张清晰的知识地图——从极限到二次型，每一环都扣得住。</p>

`
  }
);
