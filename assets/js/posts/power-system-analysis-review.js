/* 文章模块：电力系统分析考研笔记：全书重点、公式与题型速查 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'power-system-analysis-review',
    title: '电力系统分析考研笔记：全书重点、公式与题型速查',
    desc: '按「基本概念 → 元件与标幺制 → 潮流 → 调压调频 → 短路 → 稳定」梳理全书主线，含 8 张示意图、核心公式表、五类常考题型与 5 道计算题完整解答。',
    major: '工科',
    category: '电力系统',
    tags: ['电力系统分析', '考研', '电气工程', '复习提纲'],
    date: '2026-11-26',
    minutes: 30,
    content: `
<p>电力系统分析是电气工程考研里“投入产出比”很高的一门：概念有限、公式成体系、题型高度固定。全书可以压缩成四条主线：<strong>参数与等值电路</strong>是语言，<strong>潮流与调压调频</strong>是稳态运行，<strong>短路计算</strong>是故障分析，<strong>稳定性</strong>是机电暂态。下面按这条主线整理重点、图形与题型，最后用五类题目做一次自检。</p>

<h2>一、全书知识地图与命题规律</h2>
<p>先把目录压缩成一张图。复习时每遇到一个公式，都要能回答它属于哪一块、解决什么问题、常以什么题型出现。</p>

<figure>
<svg viewBox="0 0 760 220" role="img" aria-label="电力系统分析知识地图">
  <defs>
    <marker id="ps-arrow-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/>
    </marker>
  </defs>
  <text x="380" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="var(--text)">电力系统分析 · 四条主线</text>

  <rect x="20" y="58" width="160" height="124" rx="12" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="100" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="var(--accent)">基础</text>
  <text x="100" y="112" text-anchor="middle" font-size="12.5" fill="var(--text-2)">元件参数</text>
  <text x="100" y="136" text-anchor="middle" font-size="12.5" fill="var(--text-2)">等值电路</text>
  <text x="100" y="160" text-anchor="middle" font-size="12.5" fill="var(--text-2)">标幺制</text>

  <rect x="205" y="58" width="160" height="124" rx="12" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="285" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="var(--accent)">稳态分析</text>
  <text x="285" y="112" text-anchor="middle" font-size="12.5" fill="var(--text-2)">潮流计算</text>
  <text x="285" y="136" text-anchor="middle" font-size="12.5" fill="var(--text-2)">电压调整</text>
  <text x="285" y="160" text-anchor="middle" font-size="12.5" fill="var(--text-2)">频率调整</text>

  <rect x="390" y="58" width="160" height="124" rx="12" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="470" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="var(--accent)">故障分析</text>
  <text x="470" y="112" text-anchor="middle" font-size="12.5" fill="var(--text-2)">三相短路</text>
  <text x="470" y="136" text-anchor="middle" font-size="12.5" fill="var(--text-2)">不对称故障</text>
  <text x="470" y="160" text-anchor="middle" font-size="12.5" fill="var(--text-2)">对称分量法</text>

  <rect x="575" y="58" width="160" height="124" rx="12" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="655" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="var(--accent)">稳定性</text>
  <text x="655" y="112" text-anchor="middle" font-size="12.5" fill="var(--text-2)">静态稳定</text>
  <text x="655" y="136" text-anchor="middle" font-size="12.5" fill="var(--text-2)">暂态稳定</text>
  <text x="655" y="160" text-anchor="middle" font-size="12.5" fill="var(--text-2)">等面积定则</text>

  <line x1="180" y1="120" x2="200" y2="120" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-1)"/>
  <line x1="365" y1="120" x2="385" y2="120" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-1)"/>
  <line x1="550" y1="120" x2="570" y2="120" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-1)"/>

  <text x="380" y="208" text-anchor="middle" font-size="12" fill="var(--muted)">所有大题最终都会落到：一张等值电路 + 一个公式 + 一个判据</text>
</svg>
<figcaption>图 1　全书知识地图：先建立参数与标幺制这套“语言”，再进入稳态、故障与稳定三个分析场景。</figcaption>
</figure>

<div class="table-wrap"><table>
<thead><tr><th>模块</th><th>核心问题</th><th>高频题型</th><th>复习抓手</th></tr></thead>
<tbody>
<tr><td>基本概念与额定电压</td><td>系统组成、电压等级、中性点接地</td><td>选择 / 填空 / 简答</td><td>发电机 +5%、变压器二次侧 +10% / +5%</td></tr>
<tr><td>元件参数与标幺制</td><td>线路与变压器参数、等值电路、基准值换算</td><td>计算 / 填空</td><td>标幺值折算、多电压级基准</td></tr>
<tr><td>潮流计算</td><td>电压降落、功率损耗、节点分类、牛顿法</td><td>计算 / 简答</td><td>ΔU 与 δU、Ybus、PQ 分解</td></tr>
<tr><td>无功与电压调整</td><td>无功平衡、调压措施、变压器分接头</td><td>简答 / 计算</td><td>逆调压、补偿容量、分接头选择</td></tr>
<tr><td>有功与频率调整</td><td>一次 / 二次调频、备用容量</td><td>计算 / 简答</td><td>K = K<sub>G</sub> + K<sub>L</sub>、Δf 计算</td></tr>
<tr><td>短路计算</td><td>三相短路、冲击电流、短路容量</td><td>计算 / 选择</td><td>标幺值法、i<sub>sh</sub> = 2.55 I''</td></tr>
<tr><td>不对称故障</td><td>对称分量、序网、正序等效定则</td><td>计算 / 简答</td><td>三序网串并联、附加电抗 XΔ</td></tr>
<tr><td>稳定性</td><td>静态稳定、暂态稳定、等面积定则</td><td>计算 / 简答</td><td>P-δ 曲线、δ_cm、提高稳定措施</td></tr>
</tbody>
</table></div>

<p>命题规律也很稳定：<strong>计算题</strong>集中在标幺制短路、电压降落与功率损耗、一次调频、等面积定则；<strong>简答题</strong>集中在接地方式、调压措施、一次 / 二次调频、提高稳定措施；<strong>选择填空</strong>则反复考定义、大小关系和适用条件。复习时不要平均用力，先把这四类计算和四类简答练熟。</p>

<h2>二、基本概念与额定电压</h2>
<h3>2.1 系统组成</h3>
<p>三个名词要分清：<strong>电力系统</strong>是发电、输电、变电、配电、用电组成的整体；<strong>动力系统</strong>是电力系统加上锅炉、汽轮机、水轮机等动力部分；<strong>电力网</strong>只包括输电、变电和配电，不包括发电机和负荷。</p>

<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="电力系统组成示意图">
  <defs>
    <marker id="ps-arrow-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/>
    </marker>
  </defs>
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">电力系统 = 发电 + 输电 + 变电 + 配电 + 用电</text>

  <rect x="18" y="64" width="96" height="64" rx="9" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="66" y="90" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--text)">发电机</text>
  <text x="66" y="111" text-anchor="middle" font-size="11" fill="var(--muted)">10 kV</text>

  <rect x="141" y="64" width="96" height="64" rx="9" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="189" y="90" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--text)">升压变压器</text>
  <text x="189" y="111" text-anchor="middle" font-size="11" fill="var(--muted)">10 / 220 kV</text>

  <rect x="264" y="64" width="116" height="64" rx="9" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="322" y="90" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--text)">输电线路</text>
  <text x="322" y="111" text-anchor="middle" font-size="11" fill="var(--muted)">220 kV</text>

  <rect x="407" y="64" width="96" height="64" rx="9" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="455" y="90" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--text)">降压变压器</text>
  <text x="455" y="111" text-anchor="middle" font-size="11" fill="var(--muted)">220 / 10 kV</text>

  <rect x="530" y="64" width="96" height="64" rx="9" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="578" y="90" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--text)">配电线路</text>
  <text x="578" y="111" text-anchor="middle" font-size="11" fill="var(--muted)">10 kV</text>

  <rect x="653" y="64" width="89" height="64" rx="9" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="697" y="90" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--text)">负荷</text>
  <text x="697" y="111" text-anchor="middle" font-size="11" fill="var(--muted)">380 V</text>

  <line x1="114" y1="96" x2="136" y2="96" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-2)"/>
  <line x1="237" y1="96" x2="259" y2="96" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-2)"/>
  <line x1="380" y1="96" x2="402" y2="96" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-2)"/>
  <line x1="503" y1="96" x2="525" y2="96" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-2)"/>
  <line x1="626" y1="96" x2="648" y2="96" stroke="var(--accent)" stroke-width="2" marker-end="url(#ps-arrow-2)"/>

  <path d="M141 146 V154 H626 V146" fill="none" stroke="var(--muted)" stroke-width="1.2"/>
  <text x="383" y="174" text-anchor="middle" font-size="11.5" fill="var(--muted)">电力网（输电 + 变电 + 配电）</text>
</svg>
<figcaption>图 2　电力系统组成：发电机出口升压、远距离输电、负荷侧降压，是分析一切潮流与短路的物理背景。</figcaption>
</figure>

<h3>2.2 额定电压与 +5% / +10% 规则</h3>
<p>额定电压是能使设备长期正常工作、并获得最佳技术经济效果的电压。工程上有一条非常稳定的记忆链：<strong>用电设备取电网额定电压；发电机比电网高 5%；变压器一次侧看是否直接接发电机；二次侧看线路长短与阻抗大小。</strong></p>

<div class="formula">发电机：U<sub>NG</sub> = 1.05 U<sub>N</sub><br>变压器一次侧：直接接发电机时 U<sub>N1</sub> = 1.05 U<sub>N</sub>；否则 U<sub>N1</sub> = U<sub>N</sub><br>变压器二次侧：线路较长、阻抗较大时 U<sub>N2</sub> = 1.1 U<sub>N</sub>；线路较短、阻抗较小时 U<sub>N2</sub> = 1.05 U<sub>N</sub></div>

<p>关键理解：<strong>变压器二次侧额定电压是空载电压</strong>。因为变压器带负荷后二次侧会有电压降落，所以出厂时把二次侧额定电压抬高 5% 或 10%，正好补偿负载时的压降。这个点在选择题和判断题里反复出现。</p>

<p>我国常用电压等级：0.38、3、6、10、35、66、110、220、330、500、750、1000 kV。短路计算中常直接取<strong>平均额定电压</strong> U<sub>av</sub>：3.15、6.3、10.5、37、115、230、345、525 kV，约为对应电网额定电压的 1.05 倍。</p>

<h3>2.3 中性点接地方式</h3>
<p>接地方式不是“接地或不接地”这么简单，它同时影响绝缘水平、单相接地电流、供电可靠性和继电保护配置。这张表是简答题的万能骨架。</p>

<div class="table-wrap"><table>
<thead><tr><th>方式</th><th>适用电压</th><th>主要特点</th><th>单相接地时</th></tr></thead>
<tbody>
<tr><td>直接接地</td><td>110 kV 及以上</td><td>中性点电位固定，设备绝缘要求低；单相接地电流大</td><td>保护立即跳闸，供电可靠性较低</td></tr>
<tr><td>不接地</td><td>35 kV 及以下</td><td>单相接地电容电流较小时采用；线电压仍对称</td><td>可带故障运行约 2 h，但非故障相电压升高为线电压</td></tr>
<tr><td>经消弧线圈接地</td><td>35 kV 及以下</td><td>用电感电流补偿电容电流，减小弧光接地过电压</td><td>通常采用过补偿，避免谐振</td></tr>
<tr><td>经小电阻接地</td><td>城市配网、电缆线路</td><td>限制过电压，便于实现选择性的接地保护</td><td>一般动作于跳闸</td></tr>
</tbody>
</table></div>

<p>选择接地方式时，要综合考虑<strong>绝缘水平、供电可靠性、过电压、继电保护</strong>四个因素。简答题不要只写“110 kV 直接接地”，要写出这样选择的理由：电压高、绝缘费用占比大，直接接地可降低绝缘水平；而 35 kV 及以下线路电容电流小，不接地仍能继续供电，可靠性更高。</p>

<h3>2.4 负荷曲线与负荷特性</h3>
<p>日负荷曲线描述一天内负荷随时间的变化，年负荷曲线描述全年变化。两个常用指标：</p>
<div class="formula">年最大负荷利用小时数：T<sub>max</sub> = W / P<sub>max</sub>　（h）<br>负荷率：γ = P<sub>av</sub> / P<sub>max</sub></div>
<p>T<sub>max</sub> 越大，说明负荷越平稳、设备利用率越高；γ 越接近 1，负荷越均衡。这两个指标常用于电力系统规划与经济运行分析，也是填空题的常客。</p>

<h2>三、元件参数与等值电路</h2>
<h3>3.1 输电线路</h3>
<p>线路的四个分布参数中，电阻和电抗决定电压降落与有功损耗，电纳决定充电功率，电导对应电晕与泄漏。手算时通常用单位长度参数乘以长度。</p>

<div class="formula">电阻：r<sub>1</sub> = ρ / S　（Ω/km）<br>电抗：x<sub>1</sub> = 0.1445 lg(D<sub>m</sub> / r) + 0.0157　（Ω/km，50 Hz）<br>电纳：b<sub>1</sub> = 7.58 / lg(D<sub>m</sub> / r) × 10^-6　（S/km）<br>电导：g<sub>1</sub> ≈ 0（忽略电晕时）</div>

<p>其中 D<sub>m</sub> 为三相导线的几何均距，r 为导线半径。电抗公式里 r 在分母、又取对数，所以<strong>增大导线半径只能有限地减小电抗</strong>；想大幅减小电抗，工程上采用分裂导线。分裂导线的等效半径为：</p>

<div class="formula">2 分裂：r<sub>eq</sub> = √(r d)<br>3 分裂：r<sub>eq</sub> = (r d^2)^(1/3)<br>4 分裂：r<sub>eq</sub> = (r d^3)^(1/4)</div>

<p>d 为分裂间距。分裂导线既减小电抗，又增大等效半径、抑制电晕，是超高压线路的标配。电晕临界电压的工程表达式为 U<sub>cr</sub> = 84 m<sub>1</sub> m<sub>2</sub> δ r lg(D<sub>m</sub>/r)（kV），其中 δ 为空气相对密度，m<sub>1</sub>、m<sub>2</sub> 为表面与气象系数；提高临界电压的手段是增大半径、采用分裂导线或改善导线表面。</p>

<p>等值电路按线路长度分三档：</p>
<ul>
<li><strong>短线路</strong>（&lt; 100 km）：忽略电纳，只用串联阻抗 Z = (r<sub>1</sub> + jx<sub>1</sub>)l；</li>
<li><strong>中等长度线路</strong>（100～300 km）：用 π 型或 T 型集中参数等值电路；</li>
<li><strong>长线路</strong>（&gt; 300 km）：必须用分布参数，双曲函数修正，不能简单集中。</li>
</ul>

<figure>
<svg viewBox="0 0 760 220" role="img" aria-label="输电线路π型等值电路">
  <defs>
    <marker id="ps-arrow-3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/>
    </marker>
  </defs>
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">中等长度线路的 π 型等值电路</text>

  <line x1="80" y1="92" x2="240" y2="92" stroke="var(--text-2)" stroke-width="2"/>
  <rect x="240" y="74" width="280" height="36" rx="7" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="380" y="97" text-anchor="middle" font-size="13" font-weight="600" fill="var(--text)">Z = R + jX</text>
  <line x1="520" y1="92" x2="680" y2="92" stroke="var(--text-2)" stroke-width="2"/>

  <line x1="140" y1="92" x2="140" y2="148" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="122" y1="148" x2="158" y2="148" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="122" y1="157" x2="158" y2="157" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="140" y1="157" x2="140" y2="178" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="122" y1="178" x2="158" y2="178" stroke="var(--muted)" stroke-width="1.4"/>
  <line x1="128" y1="184" x2="152" y2="184" stroke="var(--muted)" stroke-width="1.4"/>
  <line x1="134" y1="190" x2="146" y2="190" stroke="var(--muted)" stroke-width="1.4"/>

  <line x1="620" y1="92" x2="620" y2="148" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="602" y1="148" x2="638" y2="148" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="602" y1="157" x2="638" y2="157" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="620" y1="157" x2="620" y2="178" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="602" y1="178" x2="638" y2="178" stroke="var(--muted)" stroke-width="1.4"/>
  <line x1="608" y1="184" x2="632" y2="184" stroke="var(--muted)" stroke-width="1.4"/>
  <line x1="614" y1="190" x2="626" y2="190" stroke="var(--muted)" stroke-width="1.4"/>

  <circle cx="80" cy="92" r="4" fill="var(--accent)"/>
  <circle cx="680" cy="92" r="4" fill="var(--accent)"/>
  <text x="80" y="72" text-anchor="middle" font-size="12.5" fill="var(--text)">U<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
  <text x="680" y="72" text-anchor="middle" font-size="12.5" fill="var(--text)">U<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
  <text x="140" y="212" text-anchor="middle" font-size="11.5" fill="var(--muted)">Y/2 = jB/2</text>
  <text x="620" y="212" text-anchor="middle" font-size="11.5" fill="var(--muted)">Y/2 = jB/2</text>
  <text x="70" y="120" text-anchor="end" font-size="11.5" fill="var(--muted)">S<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
  <text x="690" y="120" font-size="11.5" fill="var(--muted)">S<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
</svg>
<figcaption>图 3　π 型等值电路：串联支路承担电压降落与功率损耗，两端并联支路承担充电功率。</figcaption>
</figure>

<p>长线路还有两个重要概念：<strong>波阻抗</strong> Z<sub>c</sub> = √(z<sub>1</sub>/y<sub>1</sub>)，架空线约为 400 Ω；<strong>自然功率</strong> P<sub>n</sub> = U<sub>N</sub>^2 / Z<sub>c</sub>，500 kV 线路约为 1000 MW。线路输送功率等于自然功率时，末端电压与首端电压接近，无功基本自平衡。</p>

<h3>3.2 变压器参数</h3>
<p>变压器四个参数全部由铭牌试验数据算出。记公式时一定要连同单位一起记，否则考场上很容易差 1000 倍。</p>

<div class="formula">R<sub>T</sub> = ΔP<sub>k</sub> U<sub>N</sub>^2 / (1000 S<sub>N</sub>^2)　（Ω）<br>X<sub>T</sub> = U<sub>k</sub>% U<sub>N</sub>^2 / (100 S<sub>N</sub>)　（Ω）<br>G<sub>T</sub> = ΔP<sub>0</sub> / (1000 U<sub>N</sub>^2)　（S）<br>B<sub>T</sub> = I<sub>0</sub>% S<sub>N</sub> / (100 U<sub>N</sub>^2)　（S）</div>

<p>单位约定：ΔP<sub>k</sub>、ΔP<sub>0</sub> 用 kW，U<sub>N</sub> 用 kV，S<sub>N</sub> 用 MVA。物理意义分别是：短路损耗对应绕组铜耗，短路电压百分数对应漏抗；空载损耗对应铁耗，空载电流百分数对应励磁电纳。三绕组变压器的等值电抗由两两短路电压求得：</p>

<div class="formula">X<sub>1</sub> = (U<sub>k12</sub>% + U<sub>k13</sub>% − U<sub>k23</sub>%) / 2 × U<sub>N</sub>^2 / (100 S<sub>N</sub>)<br>X<sub>2</sub> = (U<sub>k12</sub>% + U<sub>k23</sub>% − U<sub>k13</sub>%) / 2 × U<sub>N</sub>^2 / (100 S<sub>N</sub>)<br>X<sub>3</sub> = (U<sub>k13</sub>% + U<sub>k23</sub>% − U<sub>k12</sub>%) / 2 × U<sub>N</sub>^2 / (100 S<sub>N</sub>)</div>

<p>若三绕组容量比不是 100/100/100（如 100/100/50），要先把短路电压折算到同一容量基准，再代入上式。这个细节常出现在计算题的第一步，漏掉会全盘错。</p>

<figure>
<svg viewBox="0 0 760 280" role="img" aria-label="双绕组变压器 Γ 型等值电路">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">双绕组变压器 Γ 型等值电路</text>

  <circle cx="80" cy="130" r="4" fill="var(--accent)"/>
  <text x="70" y="116" font-size="12" fill="var(--accent)">U<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
  <line x1="84" y1="130" x2="110" y2="130" stroke="var(--text-2)" stroke-width="1.8"/>

  <path d="M110 130 l10 -12 l14 24 l14 -24 l14 24 l14 -24 l10 12" fill="none" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="146" y="100" text-anchor="middle" font-size="12" fill="var(--muted)">R<tspan baseline-shift="sub" font-size="70%">T</tspan></text>

  <path d="M186 130 a10 10 0 0 1 20 0 a10 10 0 0 1 20 0 a10 10 0 0 1 20 0 a10 10 0 0 1 20 0" fill="none" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="226" y="100" text-anchor="middle" font-size="12" fill="var(--muted)">X<tspan baseline-shift="sub" font-size="70%">T</tspan></text>

  <line x1="266" y1="130" x2="300" y2="130" stroke="var(--text-2)" stroke-width="1.8"/>
  <circle cx="300" cy="130" r="4" fill="var(--accent)"/>

  <line x1="300" y1="130" x2="300" y2="150" stroke="var(--text-2)" stroke-width="1.8"/>
  <path d="M300 150 l-10 8 l20 8 l-20 8 l20 8 l-10 8" fill="none" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="300" y1="190" x2="300" y2="212" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="278" y1="212" x2="322" y2="212" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="284" y1="218" x2="316" y2="218" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="290" y1="224" x2="310" y2="224" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="330" y="178" font-size="12" fill="var(--muted)">G<tspan baseline-shift="sub" font-size="70%">T</tspan> − jB<tspan baseline-shift="sub" font-size="70%">T</tspan></text>

  <line x1="300" y1="130" x2="390" y2="130" stroke="var(--text-2)" stroke-width="1.8"/>
  <rect x="390" y="102" width="96" height="56" rx="8" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="438" y="126" text-anchor="middle" font-size="12" fill="var(--text-2)">理想变压器</text>
  <text x="438" y="144" text-anchor="middle" font-size="11.5" fill="var(--muted)">k = U<tspan baseline-shift="sub" font-size="70%">1</tspan>/U<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

  <line x1="486" y1="130" x2="566" y2="130" stroke="var(--text-2)" stroke-width="1.8"/>
  <circle cx="570" cy="130" r="4" fill="var(--accent)"/>
  <text x="580" y="124" font-size="12" fill="var(--accent)">U<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

  <text x="380" y="258" text-anchor="middle" font-size="11.5" fill="var(--muted)">标幺制下 k* = 1，理想变压器可直接省略</text>
</svg>
<figcaption>图 4　双绕组变压器 Γ 型等值电路：R<sub>T</sub> 与 X<sub>T</sub> 串联，G<sub>T</sub> − jB<sub>T</sub> 并联在电源侧，理想变压器变比 k = U<sub>1</sub>/U<sub>2</sub>；采用标幺制后 k* = 1，可把理想变压器去掉。</figcaption>
</figure>

<h3>3.3 标幺制与多电压级归算</h3>
<p>标幺制的本质是“选基准、去量纲”。选定基准功率 S<sub>B</sub> 和基准电压 U<sub>B</sub> 后，其余基准值由电路关系导出：</p>

<div class="formula">I<sub>B</sub> = S<sub>B</sub> / (√3 U<sub>B</sub>)<br>Z<sub>B</sub> = U<sub>B</sub>^2 / S<sub>B</sub><br>Y<sub>B</sub> = S<sub>B</sub> / U<sub>B</sub>^2</div>

<p>把有名值换算成标幺值，或把一种基准下的标幺值换到另一种基准，核心公式只有一个：</p>

<div class="formula">X<sub>*</sub> = X / Z<sub>B</sub> = X S<sub>B</sub> / U<sub>B</sub>^2<br>X<sub>*new</sub> = X<sub>*old</sub> × (S<sub>Bnew</sub> / S<sub>Bold</sub>) × (U<sub>Bold</sub> / U<sub>Bnew</sub>)^2</div>

<p>常见元件的标幺电抗可以直接写出：</p>

<div class="formula">发电机：X<sub>G</sub>* = (X<sub>d</sub>″% / 100) × (S<sub>B</sub> / S<sub>N</sub>)<br>变压器：X<sub>T</sub>* = (U<sub>k</sub>% / 100) × (S<sub>B</sub> / S<sub>N</sub>)<br>线路：X<sub>L</sub>* = x<sub>1</sub> l × S<sub>B</sub> / U<sub>B</sub>^2<br>电抗器：X<sub>L</sub>* = (X<sub>L</sub>% / 100) × (U<sub>N</sub> / (√3 I<sub>N</sub>)) × (S<sub>B</sub> / U<sub>B</sub>^2)</div>

<p>多电压级网络的关键是<strong>基准电压比要与变压器变比一致</strong>。如果一致，变压器标幺变比 k* = 1，等值电路里可以直接把变压器拿掉；如果不一致，就必须保留一个理想变压器，变比为 k*。短路计算中通常取 U<sub>B</sub> = U<sub>av</sub>，正是为了让各级基准电压比等于变压器额定变比。</p>

<p>标幺制的三个好处：三相与单相公式形式统一；不同电压等级可以画在同一张等值电路上；数值范围适中，便于判断结果是否合理。</p>

<h2>四、潮流计算</h2>
<h3>4.1 电压降落与电压损耗</h3>
<p>潮流计算最核心的一组公式，必须能默写并画出相量图。已知末端功率 S<sub>2</sub> = P<sub>2</sub> + jQ<sub>2</sub> 和末端电压 U<sub>2</sub> 时：</p>

<div class="formula">ΔU = (P<sub>2</sub> R + Q<sub>2</sub> X) / U<sub>2</sub>　（纵分量）<br>δU = (P<sub>2</sub> X − Q<sub>2</sub> R) / U<sub>2</sub>　（横分量）<br>U<sub>1</sub> = U<sub>2</sub> + ΔU + jδU<br>|U<sub>1</sub>| ≈ U<sub>2</sub> + ΔU　（δU 较小时）</div>

<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="电压降落相量图">
  <defs>
    <marker id="ps-arrow-4a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/>
    </marker>
    <marker id="ps-arrow-4b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="#d97706"/>
    </marker>
    <marker id="ps-arrow-4c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="#0f9d8a"/>
    </marker>
    <marker id="ps-arrow-4d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="#8b5cf6"/>
    </marker>
  </defs>
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">U<tspan baseline-shift="sub" font-size="70%">1</tspan> = U<tspan baseline-shift="sub" font-size="70%">2</tspan> + ΔU + jδU</text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="var(--muted)">ΔU = (P<tspan baseline-shift="sub" font-size="70%">2</tspan>R + Q<tspan baseline-shift="sub" font-size="70%">2</tspan>X) / U<tspan baseline-shift="sub" font-size="70%">2</tspan>　　δU = (P<tspan baseline-shift="sub" font-size="70%">2</tspan>X − Q<tspan baseline-shift="sub" font-size="70%">2</tspan>R) / U<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

  <line x1="70" y1="270" x2="700" y2="270" stroke="var(--line)" stroke-width="1" stroke-dasharray="5 5"/>
  <line x1="90" y1="90" x2="90" y2="300" stroke="var(--line)" stroke-width="1" stroke-dasharray="5 5"/>
  <line x1="90" y1="270" x2="540" y2="270" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="540" y1="270" x2="540" y2="140" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>

  <line x1="90" y1="270" x2="420" y2="270" stroke="var(--accent)" stroke-width="3" marker-end="url(#ps-arrow-4a)"/>
  <line x1="420" y1="270" x2="540" y2="270" stroke="#d97706" stroke-width="3" marker-end="url(#ps-arrow-4b)"/>
  <line x1="540" y1="270" x2="540" y2="140" stroke="#0f9d8a" stroke-width="3" marker-end="url(#ps-arrow-4c)"/>
  <line x1="90" y1="270" x2="540" y2="140" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#ps-arrow-4d)"/>

  <path d="M160 270 A 70 70 0 0 0 157.2 250.6" fill="none" stroke="var(--muted)" stroke-width="1.2"/>
  <text x="171" y="246" font-size="12" fill="var(--muted)">δ</text>

  <text x="250" y="296" font-size="13" font-weight="600" fill="var(--accent)">U<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
  <text x="480" y="296" font-size="13" font-weight="600" fill="#d97706">ΔU</text>
  <text x="552" y="205" font-size="13" font-weight="600" fill="#0f9d8a">jδU</text>
  <text x="330" y="195" font-size="13" font-weight="600" fill="#8b5cf6">U<tspan baseline-shift="sub" font-size="70%">1</tspan></text>

  <text x="380" y="318" text-anchor="middle" font-size="11.5" fill="var(--muted)">ΔU 主要决定电压幅值差，δU 主要决定首末端相角差</text>
</svg>
<figcaption>图 5　电压降落相量图：先沿 U<sub>2</sub> 方向叠加纵分量，再垂直叠加横分量，得到首端电压 U<sub>1</sub>。</figcaption>
</figure>

<p>三个概念不要混：<strong>电压降落</strong>是首末端电压的相量差；<strong>电压损耗</strong>是首末端电压的幅值差 U<sub>1</sub> − U<sub>2</sub>；<strong>电压偏移</strong>是某点实际电压与额定电压的偏差，用百分数表示。若已知首端功率和首端电压，把公式中的下标 2 换成 1 即可。</p>

<div class="formula">电压损耗 = U<sub>1</sub> − U<sub>2</sub><br>电压偏移 = (U − U<sub>N</sub>) / U<sub>N</sub> × 100%</div>

<h3>4.2 功率损耗与充电功率</h3>
<p>线路和变压器的功率损耗公式结构完全相同：都用“功率平方除以电压平方，再乘阻抗”。区别只在参数和附加的空载损耗。</p>

<div class="formula">线路：ΔS<sub>L</sub> = (P^2 + Q^2) / U^2 × (R + jX)<br>充电功率：ΔQ<sub>B</sub> = −B U^2　（容性，负无功损耗）<br>变压器：ΔS<sub>T</sub> = ΔS<sub>0</sub> + (P^2 + Q^2) / U^2 × (R<sub>T</sub> + jX<sub>T</sub>)<br>空载损耗：ΔS<sub>0</sub> = ΔP<sub>0</sub> + j (I<sub>0</sub>% S<sub>N</sub> / 100)</div>

<p>手算时通常用额定电压或已知侧电压近似。线路充电功率在高压轻载时非常显著，可能使末端电压高于首端，这也是“轻载末端电压升高”的原因。变压器的空载无功损耗不能忽略，大型变压器的 I<sub>0</sub>% 虽小，但容量大，绝对值并不小。</p>

<h3>4.3 开式网潮流计算步骤</h3>
<ol>
<li>画等值电路，标出各段阻抗、导纳与节点负荷；</li>
<li>从末端向首端推算功率损耗与功率分布，电压先用额定电压近似；</li>
<li>从首端向末端推算电压降落，功率用上一步求得的分布；</li>
<li>若首端电压已知、末端负荷已知，上述两步需迭代 1～2 次，直到电压变化足够小。</li>
</ol>

<p>两个名词：<strong>运算负荷</strong> = 负荷功率 + 线路充电功率 + 变压器损耗；<strong>运算功率</strong> = 发电机功率 − 厂用电 − 升压变压器损耗。画等值电路时把运算负荷标在节点上，可以显著减少重复计算。</p>

<h3>4.4 复杂电力系统潮流</h3>
<p>复杂潮流把每个节点分成三类。节点分类是列方程的前提，也是简答题的高频点。</p>

<div class="table-wrap"><table>
<thead><tr><th>节点类型</th><th>已知量</th><th>待求量</th><th>典型节点</th></tr></thead>
<tbody>
<tr><td>PQ 节点</td><td>P、Q</td><td>U、δ</td><td>负荷节点、给定无功出力的发电机节点</td></tr>
<tr><td>PV 节点</td><td>P、U</td><td>Q、δ</td><td>调压发电机节点、无功电源节点</td></tr>
<tr><td>平衡节点</td><td>U、δ</td><td>P、Q</td><td>全系统一个，作为电压相角参考</td></tr>
</tbody>
</table></div>

<p>节点导纳矩阵 Ybus 的构造规则：对角元是自导纳，等于与该节点相连的所有支路导纳之和再加上对地导纳；非对角元是互导纳，等于两节点之间支路导纳的负值。Ybus 对称、稀疏，这些性质是稀疏矩阵算法的基础。</p>

<p>牛顿-拉夫逊法把潮流方程线性化，修正方程为：</p>

<div class="formula">[ΔP]   [H  N] [Δδ]<br>[ΔQ] = [J  L] [ΔU/U]</div>

<p>它的优点是<strong>平方收敛</strong>，缺点是对初值敏感、每次迭代要重新形成雅可比矩阵。PQ 分解法利用高压电网 R ≪ X 的特点，把有功与相角、无功与电压幅值解耦：</p>

<div class="formula">ΔP/U = −B′ Δδ<br>ΔQ/U = −B″ ΔU</div>

<p>B′、B″ 是常数矩阵，迭代时只需回代，单次计算量小，但迭代次数比牛顿法多。三种方法的对比可以记成一张表：</p>

<div class="table-wrap"><table>
<thead><tr><th>方法</th><th>收敛性</th><th>单次计算量</th><th>适用场景</th></tr></thead>
<tbody>
<tr><td>高斯-赛德尔法</td><td>线性收敛</td><td>小</td><td>小型系统、教学演示</td></tr>
<tr><td>牛顿-拉夫逊法</td><td>平方收敛</td><td>大</td><td>大型系统、对收敛性要求高</td></tr>
<tr><td>PQ 分解法</td><td>几何收敛</td><td>小</td><td>高压输电网、在线计算</td></tr>
</tbody>
</table></div>

<h3>4.5 环网与两端供电网</h3>
<p>环网的功率分布由阻抗决定，称为<strong>自然功率分布</strong>：各支路功率按阻抗的共轭反比分配。若要使有功网损最小，则应按<strong>经济功率分布</strong>：有功按电阻反比分配，无功按电抗反比分配。当网络各段 R/X 比相同时（均一网），自然分布恰好等于经济分布。</p>

<p>两端供电网中，如果两端电压幅值不等或变压器变比不匹配，即使没有负荷也会出现<strong>循环功率</strong>。循环功率不参与负荷供电，却会增加网损，因此可以通过调压或调整变比来消除。环网解列、串联电容补偿、改变运行方式，都是常用的潮流调整手段。</p>

<h2>五、无功功率平衡与电压调整</h2>
<h3>5.1 无功平衡</h3>
<p>电压是“无功的函数”。系统无功不足，电压就下降；无功过剩，电压就升高。无功平衡的基本方程是：</p>

<div class="formula">Q<sub>GC</sub> = Q<sub>L</sub> + ΔQ_Σ　（或 Q<sub>GC</sub> − Q<sub>L</sub> − ΔQ_Σ = 0）</div>

<p>Q<sub>GC</sub> 是无功电源发出的无功总和，Q<sub>L</sub> 是负荷无功，ΔQ_Σ 是网络无功损耗。无功电源不只发电机，还包括调相机、电容器、SVC/STATCOM 以及线路充电功率。</p>

<div class="table-wrap"><table>
<thead><tr><th>无功电源</th><th>调节特性</th><th>优缺点</th></tr></thead>
<tbody>
<tr><td>发电机</td><td>通过励磁连续调节，可发可吸</td><td>最经济，但受有功出力与 P-Q 容量曲线限制</td></tr>
<tr><td>同步调相机</td><td>连续调节，可发可吸</td><td>调节性能好，但损耗大、投资高、维护复杂</td></tr>
<tr><td>并联电容器</td><td>只能发无功，分级投切</td><td>经济、简单；输出 Q ∝ U^2，电压下降时补偿效果变差</td></tr>
<tr><td>SVC / STATCOM</td><td>连续、快速，可发可吸</td><td>动态无功支撑好，适合冲击负荷与新能源并网</td></tr>
<tr><td>线路充电功率</td><td>随电压平方增大</td><td>高压轻载时可能导致末端电压升高</td></tr>
<tr><td>并联电抗器</td><td>吸收无功</td><td>用于高压长线路轻载时限制工频过电压</td></tr>
</tbody>
</table></div>

<p>无功平衡的原则是<strong>分层分区、就地平衡</strong>。无功不宜长距离输送，因为线路电抗上的无功损耗大，而且会占用线路容量、加大电压降落。简答题回答“为什么无功要就地平衡”时，从<strong>减少网损、改善电压、提高输送能力、降低绝缘要求</strong>四个角度展开即可。</p>

<h3>5.2 电压调整措施</h3>
<p>电压调整的本质是改变无功分布或改变网络参数。常考的五类措施可以整理成下表。</p>

<div class="table-wrap"><table>
<thead><tr><th>措施</th><th>原理</th><th>特点与适用场合</th></tr></thead>
<tbody>
<tr><td>改变发电机励磁</td><td>调节 E<sub>q</sub>，改变发电机无功出力</td><td>不增加设备，但受发电机容量限制；适用于孤立系统或近区调压</td></tr>
<tr><td>改变变压器变比</td><td>改变电压比，重新分配无功</td><td>普通变压器需停电调档；有载调压可带负荷；适用于中枢点与变电站</td></tr>
<tr><td>并联无功补偿</td><td>就地提供无功，减少线路无功输送</td><td>电容器分级投切、调相机连续调节、SVC 快速调节</td></tr>
<tr><td>串联电容补偿</td><td>减小线路电抗，降低 ΔU</td><td>适用于长距离、重负荷线路；需注意次同步振荡与保护问题</td></tr>
<tr><td>改善线路参数</td><td>增大导线截面、采用分裂导线、提高电压等级</td><td>效果显著但投资大，主要在规划阶段考虑</td></tr>
</tbody>
</table></div>

<p>中枢点调压有三种典型方式：</p>
<ul>
<li><strong>逆调压</strong>：最大负荷时提高中枢点电压，最小负荷时降低中枢点电压。适用于线路较长、负荷变化较大的系统。</li>
<li><strong>顺调压</strong>：最大负荷时允许电压略低，最小负荷时允许电压略高。适用于线路较短、负荷变化较小的系统。</li>
<li><strong>恒调压</strong>：无论负荷如何变化，中枢点电压基本保持恒定。适用于重要负荷或对电压质量要求高的场合。</li>
</ul>

<p>变压器分接头选择是计算题常客。设高压侧实际电压为 U<sub>1</sub>′，低压侧额定电压为 U<sub>2N</sub>，所选分接头电压为 U<sub>1t</sub>，则低压侧实际电压为：</p>

<div class="formula">U<sub>2</sub> = U<sub>1</sub>′ U<sub>2N</sub> / U<sub>1t</sub><br>反推分接头：U<sub>1t</sub> = U<sub>1</sub>′ U<sub>2N</sub> / U<sub>2desired</sub></div>

<p>分别按最大负荷和最小负荷两种方式计算，选择最接近的标准分接头，再校验两种方式下低压侧电压是否都在允许偏移范围内。若普通变压器无法同时满足，就应考虑有载调压或无功补偿。</p>

<p>无功补偿容量的估算公式为：</p>

<div class="formula">Q<sub>C</sub> = P (tanφ<sub>1</sub> − tanφ<sub>2</sub>)</div>

<p>其中 φ<sub>1</sub>、φ<sub>2</sub> 分别为补偿前后的功率因数角。工程上常把功率因数从 0.7～0.8 提高到 0.9～0.95。注意电容器的实际输出无功与电压平方成正比，所以校验时要按实际运行电压修正。</p>

<p>电压偏移的允许值工程上常记为：35 kV 及以上 ±5%，10 kV 及以下三相 ±7%，220 V 单相 +7%～−10%（具体以现行规范为准）。选择题常把“电压损耗”和“电压偏移”混在一起考，注意前者是首末端幅值差，后者是某点电压与额定电压的偏差。</p>

<h2>六、有功功率平衡与频率调整</h2>
<h3>6.1 有功平衡与备用容量</h3>
<p>频率是有功平衡的标志。系统有功平衡方程为：</p>

<div class="formula">ΣP<sub>G</sub> = ΣP<sub>L</sub> + ΔP_Σ + P<sub>other</sub></div>

<p>ΔP_Σ 为网络有功损耗，P<sub>other</sub> 包括外送、抽水蓄能抽水、厂用电等。为了保证可靠供电，系统必须留有备用容量：</p>

<div class="table-wrap"><table>
<thead><tr><th>备用类型</th><th>作用</th><th>常见比例</th></tr></thead>
<tbody>
<tr><td>负荷备用</td><td>平衡短时负荷波动与预测误差</td><td>最大负荷的 2%～5%</td></tr>
<tr><td>事故备用</td><td>应对机组跳闸、线路故障</td><td>最大负荷的 10% 左右，且不小于最大单机容量</td></tr>
<tr><td>检修备用</td><td>保证机组计划检修</td><td>最大负荷的 8%～15%</td></tr>
<tr><td>国民经济备用</td><td>满足新增负荷与经济发展</td><td>按规划确定</td></tr>
</tbody>
</table></div>

<p>备用又分<strong>旋转备用（热备用）</strong>和<strong>冷备用</strong>。旋转备用是已并网、可立即增出力机组的备用；冷备用是未启动或未并网机组的备用。事故备用应尽量分布在系统中，避免集中在少数电厂。</p>

<h3>6.2 频率静特性与单位调节功率</h3>
<p>负荷的频率静特性：频率下降时，负荷从电网吸收的有功也减少（电动机转速下降）。其斜率称为负荷单位调节功率：</p>

<div class="formula">K<sub>L</sub> = ΔP<sub>L</sub> / Δf　（MW/Hz）<br>K<sub>L</sub>* = (ΔP<sub>L</sub> / P<sub>LN</sub>) / (Δf / f<sub>N</sub>)</div>

<p>负荷的 K<sub>L</sub>* 一般在 1～3 之间。发电机的频率静特性由调速器决定，用调差系数 δ% 表示：</p>

<div class="formula">δ% = −(Δf / f<sub>N</sub>) / (ΔP<sub>G</sub> / P<sub>GN</sub>) × 100%<br>K<sub>G</sub> = −ΔP<sub>G</sub> / Δf = (P<sub>GN</sub> / f<sub>N</sub>) × (100 / δ%)<br>K<sub>G</sub>* = 100 / δ%</div>

<p>δ% 一般为 3%～5%，对应的 K<sub>G</sub>* 约为 20～33。系统的单位调节功率为 K = K<sub>G</sub> + K<sub>L</sub>，它表示频率每下降 1 Hz，系统能自动增发多少有功。</p>

<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="一次调频的功率频率静特性">
  <text x="380" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">负荷增加 → 频率下降 → 调速器增发功率</text>
  <line x1="80" y1="290" x2="700" y2="290" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="80" y1="290" x2="80" y2="60" stroke="var(--text-2)" stroke-width="1.6"/>
  <text x="710" y="295" font-size="12.5" fill="var(--text-2)">P</text>
  <text x="66" y="56" font-size="12.5" fill="var(--text-2)">f</text>

  <line x1="120" y1="110" x2="620" y2="240" stroke="var(--accent)" stroke-width="2.4"/>
  <text x="136" y="102" font-size="12" fill="var(--accent)">发电机静特性</text>

  <line x1="180" y1="250" x2="600" y2="90" stroke="#d97706" stroke-width="2.2"/>
  <text x="468" y="106" font-size="12" fill="#d97706">负荷特性 L<tspan baseline-shift="sub" font-size="70%">1</tspan></text>

  <line x1="240" y1="250" x2="660" y2="90" stroke="#d97706" stroke-width="2" stroke-dasharray="6 4" opacity="0.8"/>
  <text x="552" y="132" font-size="12" fill="#d97706">L<tspan baseline-shift="sub" font-size="70%">2</tspan>（负荷增加）</text>

  <circle cx="374" cy="176" r="5" fill="var(--accent)"/>
  <circle cx="410" cy="185" r="5" fill="var(--accent)"/>
  <line x1="374" y1="176" x2="374" y2="290" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="410" y1="185" x2="410" y2="290" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="176" x2="374" y2="176" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="185" x2="410" y2="185" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>

  <text x="374" y="308" text-anchor="middle" font-size="11.5" fill="var(--muted)">P<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
  <text x="410" y="308" text-anchor="middle" font-size="11.5" fill="var(--muted)">P<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
  <text x="72" y="180" text-anchor="end" font-size="11.5" fill="var(--muted)">f<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
  <text x="72" y="189" text-anchor="end" font-size="11.5" fill="var(--muted)">f<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

  <line x1="450" y1="176" x2="450" y2="185" stroke="var(--text-2)" stroke-width="1.4"/>
  <text x="460" y="184" font-size="12" fill="var(--text-2)">Δf</text>
  <line x1="374" y1="326" x2="410" y2="326" stroke="var(--text-2)" stroke-width="1.4"/>
  <text x="392" y="320" text-anchor="middle" font-size="12" fill="var(--text-2)">ΔP</text>

  <text x="380" y="332" text-anchor="middle" font-size="11.5" fill="var(--muted)">K = K<sub>G</sub> + K<sub>L</sub> = −ΔP<sub>0</sub> / Δf</text>
</svg>
<figcaption>图 6　一次调频的有差调节：负荷特性右移后，新的平衡点频率更低，但调速器使发电机出力增加。</figcaption>
</figure>

<h3>6.3 一次调频与二次调频</h3>
<p>一次调频由调速器自动完成，响应快但<strong>有差</strong>；二次调频由调频器或 AGC 完成，响应慢但可以实现<strong>无差</strong>。这是简答题最常考的一组对比。</p>

<div class="table-wrap"><table>
<thead><tr><th>项目</th><th>一次调频</th><th>二次调频</th></tr></thead>
<tbody>
<tr><td>动作主体</td><td>发电机调速器</td><td>调频器 / AGC</td></tr>
<tr><td>响应时间</td><td>秒级</td><td>分钟级</td></tr>
<tr><td>调节结果</td><td>有差调节，频率不能完全恢复</td><td>调频容量足够时可无差调节</td></tr>
<tr><td>调节范围</td><td>有限，取决于调差系数与备用</td><td>可覆盖负荷变化与计划外功率</td></tr>
<tr><td>主要目标</td><td>快速平衡随机小负荷</td><td>恢复频率、实现经济分配</td></tr>
</tbody>
</table></div>

<div class="formula">一次调频：Δf = −ΔP<sub>0</sub> / (K<sub>G</sub> + K<sub>L</sub>)<br>二次调频：Δf = −(ΔP<sub>0</sub> − ΔP<sub>G</sub>) / (K<sub>G</sub> + K<sub>L</sub>)<br>无差调节：ΔP<sub>G</sub> = ΔP<sub>0</sub></div>

<p>一次调频结束后，频率偏差为 Δf；二次调频通过增加调频机组出力，把频率拉回额定值。最终稳态下，二次调频承担全部负荷增量，一次调频的贡献随频率恢复而减小。调频厂一般选择<strong>调频容量大、调整速度快、经济性好</strong>的机组，水电和抽水蓄能优先，火电可承担部分调频但受爬坡速率限制。</p>

<p>互联电网常用联络线功率偏差控制，区域控制误差为：</p>

<div class="formula">ACE = ΔP<sub>tie</sub> + K Δf　（ΔP<sub>tie</sub> 以本区域外送功率为正）</div>

<p>按上述符号约定，ACE 为正表示本区域外送功率偏大或频率偏高，需要减少出力；ACE 为负表示需要增加出力。AGC 通过把 ACE 调到零，实现频率与联络线功率的双重控制（TBC）。</p>

<h3>6.4 低频运行的危害</h3>
<ul>
<li>汽轮机叶片可能发生共振，造成叶片疲劳损伤；</li>
<li>发电机转速下降，机端电压与无功出力下降；</li>
<li>电动机转速下降，影响产品质量与生产效率；</li>
<li>变压器励磁电流增大，铁耗增加；</li>
<li>严重时触发低频减载，造成大面积停电。</li>
</ul>
<p>因此正常运行频率应控制在 50 ± 0.2 Hz 以内，小系统可放宽到 ±0.5 Hz。频率偏差过大时，首先调用一次调频和旋转备用，再启动二次调频；仍不足时按频率减负荷。</p>

<h2>七、经济运行</h2>
<h3>7.1 等微增率准则</h3>
<p>多台机组承担同一负荷时，使总燃料费用最小的条件是各机组的<strong>燃料微增率相等</strong>：</p>

<div class="formula">dF<sub>1</sub>/dP<sub>1</sub> = dF<sub>2</sub>/dP<sub>2</sub> = … = dFn/dPn = λ</div>

<p>如果考虑网络损耗，则要引入网损修正系数（罚因子）：</p>

<div class="formula">(dFi/dPi) × 1 / (1 − ∂ΔP/∂Pi) = λ</div>

<p>∂ΔP/∂Pi 称为网损微增率。它反映机组增加单位出力时网络损耗的变化。实际经济调度中，还要考虑机组出力上下限、爬坡速率、启停费用等约束。</p>

<h3>7.2 降低网损的措施</h3>
<ul>
<li><strong>提高电压水平</strong>：有功损耗与电压平方成反比，在允许范围内提高运行电压可显著降损；</li>
<li><strong>无功就地补偿</strong>：减少无功长距离输送，降低线路无功电流；</li>
<li><strong>合理选择导线截面</strong>：按经济电流密度选择，兼顾投资与年运行费；</li>
<li><strong>环网经济功率分布</strong>：通过串联电容、调压变压器或开环运行，使功率按电阻反比分布；</li>
<li><strong>变压器经济运行</strong>：合理投切并列变压器，避免轻载或过载；</li>
<li><strong>缩短供电路径、提高负荷率</strong>：减少重复降压与迂回供电。</li>
</ul>

<p>网损率定义为 ΔP/P × 100%。降低网损不仅是经济问题，也关系到设备温升、电压质量与输电能力，因此经济调度与安全调度要协调考虑。</p>

<h2>八、短路计算</h2>
<h3>8.1 短路类型、原因与危害</h3>
<p>短路是电力系统中最严重的故障。按故障相数分为三相短路、两相短路、单相接地短路和两相接地短路，其中三相短路是对称故障，其余三类是不对称故障。</p>

<div class="table-wrap"><table>
<thead><tr><th>类型</th><th>符号</th><th>故障概率（约）</th><th>特点</th></tr></thead>
<tbody>
<tr><td>三相短路</td><td>f⁽³⁾</td><td>5%</td><td>三相对称，通常短路电流最大，最严重</td></tr>
<tr><td>两相短路</td><td>f⁽²⁾</td><td>10%</td><td>不对称，无零序电流</td></tr>
<tr><td>单相接地</td><td>f⁽¹⁾</td><td>65%</td><td>不对称，零序电流大，发生概率最高</td></tr>
<tr><td>两相接地</td><td>f⁽¹,¹⁾</td><td>20%</td><td>不对称，既有负序又有零序</td></tr>
</tbody>
</table></div>

<p>短路原因包括绝缘损坏、误操作、鸟兽跨接、自然灾害、设备老化等。短路危害主要有：<strong>电动力效应</strong>可能使导体变形；<strong>热效应</strong>可能使设备过热烧毁；<strong>电压骤降</strong>影响用户；<strong>不对称电流</strong>产生负序与零序，干扰通信、损害电机；严重时破坏系统稳定，引发大面积停电。</p>

<p>短路计算的目的：选择电气设备（断路器、隔离开关、母线、电缆）、整定继电保护、设计主接线、校验热稳定与动稳定、为稳定计算提供故障参数。</p>

<h3>8.2 三相短路电流计算</h3>
<p>标幺值法计算三相短路的步骤非常固定：</p>
<ol>
<li>选定 S<sub>B</sub> 和 U<sub>B</sub>，通常取 U<sub>B</sub> = U<sub>av</sub>；</li>
<li>计算各元件标幺电抗，画等值网络；</li>
<li>串并联化简，求短路点至电源的 XΣ*；</li>
<li>计算 I* = E*/XΣ*；</li>
<li>换算为有名值 I = I* I<sub>B</sub>，并求短路容量 S<sub>k</sub>。</li>
</ol>

<div class="formula">I* = E* / XΣ*<br>I″ = I* I<sub>B</sub> = E* S<sub>B</sub> / (√3 U<sub>B</sub> XΣ*)<br>S<sub>k</sub> = √3 U<sub>av</sub> I″ = S<sub>B</sub> / XΣ*　（MVA）</div>

<p>无限大电源供电时，短路电流周期分量幅值恒定，E* 取 1.0 即可。有限容量系统要用次暂态电势 E″ 和次暂态电抗 X<sub>d</sub>″，且周期分量随时间衰减，需要查运算曲线。</p>

<h3>8.3 冲击电流、最大有效值与热效应</h3>
<p>短路全电流由周期分量和非周期分量组成。非周期分量按指数衰减，衰减时间常数为：</p>

<div class="formula">T<sub>a</sub> = XΣ / (ω RΣ) = LΣ / RΣ<br>i<sub>sh</sub> = √2 K<sub>sh</sub> I″<br>K<sub>sh</sub> = 1 + e^(−0.01 / T<sub>a</sub>)　（f = 50 Hz）</div>

<p>冲击系数 K<sub>sh</sub> 与 Ta 有关，工程上一般取 1.8～1.9。K<sub>sh</sub> = 1.8 时，i<sub>sh</sub> = 2.55 I″；K<sub>sh</sub> = 1.9 时，i<sub>sh</sub> = 2.69 I″。短路全电流的最大有效值为：</p>

<div class="formula">I<sub>sh</sub> = I″ √(1 + 2(K<sub>sh</sub> − 1)^2)<br>K<sub>sh</sub> = 1.8 时，I<sub>sh</sub> ≈ 1.52 I″</div>

<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="三相短路电流波形">
  <line x1="80" y1="280" x2="720" y2="280" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="80" y1="280" x2="80" y2="50" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="80" y1="190" x2="720" y2="190" stroke="var(--line)" stroke-width="1" stroke-dasharray="5 5"/>
  <text x="730" y="285" font-size="12.5" fill="var(--text-2)">t</text>
  <text x="66" y="48" font-size="12.5" fill="var(--text-2)">i</text>

  <path d="M80 190 L83.6 190.4 L87.1 190 L90.7 188.9 L94.2 187 L97.8 184.4 L101.3 181.1 L104.9 177.3 L108.4 172.8 L112 167.8 L115.6 162.4 L119.1 156.5 L122.7 150.4 L126.2 144 L129.8 137.4 L133.3 130.7 L136.9 124.1 L140.4 117.5 L144 111.1 L147.6 104.9 L151.1 98.9 L154.7 93.4 L158.2 88.3 L161.8 83.8 L165.3 79.8 L168.9 76.4 L172.4 73.6 L176 71.6 L179.6 70.2 L183.1 69.7 L186.7 69.8 L190.2 70.8 L193.8 72.5 L197.3 74.9 L200.9 78.1 L204.4 81.9 L208 86.4 L211.6 91.6 L215.1 97.3 L218.7 103.5 L222.2 110.1 L225.8 117.1 L229.3 124.5 L232.9 132 L236.4 139.8 L240 147.5 L243.6 155.3 L247.1 163 L250.7 170.6 L254.2 177.9 L257.8 184.8 L261.3 191.4 L264.9 197.6 L268.4 203.2 L272 208.2 L275.6 212.6 L279.1 216.4 L282.7 219.4 L286.2 221.7 L289.8 223.3 L293.3 224.1 L296.9 224.1 L300.4 223.3 L304 221.8 L307.6 219.6 L311.1 216.6 L314.7 213 L318.2 208.8 L321.8 204 L325.3 198.6 L328.9 192.8 L332.4 186.7 L336 180.2 L339.6 173.4 L343.1 166.6 L346.7 159.6 L350.2 152.6 L353.8 145.7 L357.3 138.9 L360.9 132.4 L364.4 126.2 L368 120.4 L371.6 115 L375.1 110.1 L378.7 105.8 L382.2 102.2 L385.8 99.1 L389.3 96.8 L392.9 95.2 L396.4 94.3 L400 94.2 L403.6 94.9 L407.1 96.3 L410.7 98.5 L414.2 101.4 L417.8 105 L421.3 109.3 L424.9 114.2 L428.4 119.6 L432 125.6 L435.6 132 L439.1 138.7 L442.7 145.8 L446.2 153.2 L449.8 160.6 L453.3 168.2 L456.9 175.8 L460.4 183.2 L464 190.5 L467.6 197.6 L471.1 204.4 L474.7 210.8 L478.2 216.7 L481.8 222.1 L485.3 226.9 L488.9 231.1 L492.4 234.7 L496 237.5 L499.6 239.6 L503.1 241 L506.7 241.5 L510.2 241.4 L513.8 240.4 L517.3 238.7 L520.9 236.3 L524.4 233.2 L528 229.4 L531.6 224.9 L535.1 220 L538.7 214.4 L542.2 208.5 L545.8 202.1 L549.3 195.5 L552.9 188.6 L556.4 181.5 L560 174.4 L563.6 167.2 L567.1 160.2 L570.7 153.3 L574.2 146.6 L577.8 140.2 L581.3 134.2 L584.9 128.7 L588.4 123.7 L592 119.2 L595.6 115.4 L599.1 112.2 L602.7 109.8 L606.2 108 L609.8 107 L613.3 106.8 L616.9 107.3 L620.4 108.6 L624 110.6 L627.6 113.4 L631.1 116.9 L634.7 121 L638.2 125.7 L641.8 131.1 L645.3 136.9 L648.9 143.2 L652.4 149.8 L656 156.8 L659.6 164 L663.1 171.4 L666.7 178.8 L670.2 186.2 L673.8 193.6 L677.3 200.8 L680.9 207.8 L684.4 214.4 L688 220.7 L691.6 226.5 L695.1 231.8 L698.7 236.5 L702.2 240.6 L705.8 244 L709.3 246.8 L712.9 248.8 L716.4 250 L720 250.5" fill="none" stroke="var(--accent)" stroke-width="2.2"/>

  <path d="M80 260 L83.6 259.6 L87.1 258.5 L90.7 256.6 L94.2 253.9 L97.8 250.6 L101.3 246.6 L104.9 242 L108.4 236.8 L112 231.1 L115.6 225 L119.1 218.5 L122.7 211.6 L126.2 204.6 L129.8 197.3 L133.3 190 L136.9 182.7 L140.4 175.4 L144 168.4 L147.6 161.5 L151.1 155 L154.7 148.9 L158.2 143.2 L161.8 138 L165.3 133.4 L168.9 129.4 L172.4 126.1 L176 123.4 L179.6 121.5 L183.1 120.4 L186.7 120 L190.2 120.4 L193.8 121.5 L197.3 123.4 L200.9 126.1 L204.4 129.4 L208 133.4 L211.6 138 L215.1 143.2 L218.7 148.9 L222.2 155 L225.8 161.5 L229.3 168.4 L232.9 175.4 L236.4 182.7 L240 190 L243.6 197.3 L247.1 204.6 L250.7 211.6 L254.2 218.5 L257.8 225 L261.3 231.1 L264.9 236.8 L268.4 242 L272 246.6 L275.6 250.6 L279.1 253.9 L282.7 256.6 L286.2 258.5 L289.8 259.6 L293.3 260 L296.9 259.6 L300.4 258.5 L304 256.6 L307.6 253.9 L311.1 250.6 L314.7 246.6 L318.2 242 L321.8 236.8 L325.3 231.1 L328.9 225 L332.4 218.5 L336 211.6 L339.6 204.6 L343.1 197.3 L346.7 190 L350.2 182.7 L353.8 175.4 L357.3 168.4 L360.9 161.5 L364.4 155 L368 148.9 L371.6 143.2 L375.1 138 L378.7 133.4 L382.2 129.4 L385.8 126.1 L389.3 123.4 L392.9 121.5 L396.4 120.4 L400 120 L403.6 120.4 L407.1 121.5 L410.7 123.4 L414.2 126.1 L417.8 129.4 L421.3 133.4 L424.9 138 L428.4 143.2 L432 148.9 L435.6 155 L439.1 161.5 L442.7 168.4 L446.2 175.4 L449.8 182.7 L453.3 190 L456.9 197.3 L460.4 204.6 L464 211.6 L467.6 218.5 L471.1 225 L474.7 231.1 L478.2 236.8 L481.8 242 L485.3 246.6 L488.9 250.6 L492.4 253.9 L496 256.6 L499.6 258.5 L503.1 259.6 L506.7 260 L510.2 259.6 L513.8 258.5 L517.3 256.6 L520.9 253.9 L524.4 250.6 L528 246.6 L531.6 242 L535.1 236.8 L538.7 231.1 L542.2 225 L545.8 218.5 L549.3 211.6 L552.9 204.6 L556.4 197.3 L560 190 L563.6 182.7 L567.1 175.4 L570.7 168.4 L574.2 161.5 L577.8 155 L581.3 148.9 L584.9 143.2 L588.4 138 L592 133.4 L595.6 129.4 L599.1 126.1 L602.7 123.4 L606.2 121.5 L609.8 120.4 L613.3 120 L616.9 120.4 L620.4 121.5 L624 123.4 L627.6 126.1 L631.1 129.4 L634.7 133.4 L638.2 138 L641.8 143.2 L645.3 148.9 L648.9 155 L652.4 161.5 L656 168.4 L659.6 175.4 L663.1 182.7 L666.7 190 L670.2 197.3 L673.8 204.6 L677.3 211.6 L680.9 218.5 L684.4 225 L688 231.1 L691.6 236.8 L695.1 242 L698.7 246.6 L702.2 250.6 L705.8 253.9 L709.3 256.6 L712.9 258.5 L716.4 259.6 L720 260" fill="none" stroke="#d97706" stroke-width="1.4" stroke-dasharray="6 4"/>

  <path d="M80 120 L83.6 120.8 L87.1 121.5 L90.7 122.3 L94.2 123 L97.8 123.8 L101.3 124.5 L104.9 125.2 L108.4 126 L112 126.7 L115.6 127.4 L119.1 128.1 L122.7 128.7 L126.2 129.4 L129.8 130.1 L133.3 130.7 L136.9 131.4 L140.4 132 L144 132.7 L147.6 133.3 L151.1 133.9 L154.7 134.6 L158.2 135.2 L161.8 135.8 L165.3 136.4 L168.9 137 L172.4 137.6 L176 138.1 L179.6 138.7 L183.1 139.3 L186.7 139.8 L190.2 140.4 L193.8 140.9 L197.3 141.5 L200.9 142 L204.4 142.6 L208 143.1 L211.6 143.6 L215.1 144.1 L218.7 144.6 L222.2 145.1 L225.8 145.6 L229.3 146.1 L232.9 146.6 L236.4 147.1 L240 147.5 L243.6 148 L247.1 148.5 L250.7 148.9 L254.2 149.4 L257.8 149.8 L261.3 150.3 L264.9 150.7 L268.4 151.2 L272 151.6 L275.6 152 L279.1 152.4 L282.7 152.8 L286.2 153.3 L289.8 153.7 L293.3 154.1 L296.9 154.5 L300.4 154.9 L304 155.2 L307.6 155.6 L311.1 156 L314.7 156.4 L318.2 156.8 L321.8 157.1 L325.3 157.5 L328.9 157.8 L332.4 158.2 L336 158.5 L339.6 158.9 L343.1 159.2 L346.7 159.6 L350.2 159.9 L353.8 160.2 L357.3 160.6 L360.9 160.9 L364.4 161.2 L368 161.5 L371.6 161.9 L375.1 162.2 L378.7 162.5 L382.2 162.8 L385.8 163.1 L389.3 163.4 L392.9 163.7 L396.4 164 L400 164.2 L403.6 164.5 L407.1 164.8 L410.7 165.1 L414.2 165.4 L417.8 165.6 L421.3 165.9 L424.9 166.2 L428.4 166.4 L432 166.7 L435.6 167 L439.1 167.2 L442.7 167.5 L446.2 167.7 L449.8 168 L453.3 168.2 L456.9 168.4 L460.4 168.7 L464 168.9 L467.6 169.1 L471.1 169.4 L474.7 169.6 L478.2 169.8 L481.8 170.1 L485.3 170.3 L488.9 170.5 L492.4 170.7 L496 170.9 L499.6 171.1 L503.1 171.3 L506.7 171.5 L510.2 171.8 L513.8 172 L517.3 172.2 L520.9 172.4 L524.4 172.5 L528 172.7 L531.6 172.9 L535.1 173.1 L538.7 173.3 L542.2 173.5 L545.8 173.7 L549.3 173.9 L552.9 174 L556.4 174.2 L560 174.4 L563.6 174.6 L567.1 174.7 L570.7 174.9 L574.2 175.1 L577.8 175.2 L581.3 175.4 L584.9 175.5 L588.4 175.7 L592 175.9 L595.6 176 L599.1 176.2 L602.7 176.3 L606.2 176.5 L609.8 176.6 L613.3 176.8 L616.9 176.9 L620.4 177.1 L624 177.2 L627.6 177.4 L631.1 177.5 L634.7 177.6 L638.2 177.8 L641.8 177.9 L645.3 178 L648.9 178.2 L652.4 178.3 L656 178.4 L659.6 178.6 L663.1 178.7 L666.7 178.8 L670.2 178.9 L673.8 179.1 L677.3 179.2 L680.9 179.3 L684.4 179.4 L688 179.5 L691.6 179.6 L695.1 179.8 L698.7 179.9 L702.2 180 L705.8 180.1 L709.3 180.2 L712.9 180.3 L716.4 180.4 L720 180.5" fill="none" stroke="#0f9d8a" stroke-width="1.4" stroke-dasharray="3 4"/>

  <circle cx="186.7" cy="69.8" r="4" fill="var(--accent)"/>
  <text x="196" y="62" font-size="12" font-weight="600" fill="var(--accent)">i<tspan baseline-shift="sub" font-size="70%">sh</tspan></text>

  <line x1="550" y1="78" x2="580" y2="78" stroke="var(--accent)" stroke-width="2.2"/>
  <text x="588" y="82" font-size="11.5" fill="var(--accent)">全电流 i</text>
  <line x1="550" y1="103" x2="580" y2="103" stroke="#d97706" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="588" y="107" font-size="11.5" fill="#d97706">周期分量</text>
  <line x1="550" y1="128" x2="580" y2="128" stroke="#0f9d8a" stroke-width="1.4" stroke-dasharray="3 4"/>
  <text x="588" y="132" font-size="11.5" fill="#0f9d8a">非周期分量</text>

  <text x="80" y="300" text-anchor="middle" font-size="11" fill="var(--muted)">0</text>
  <text x="293" y="300" text-anchor="middle" font-size="11" fill="var(--muted)">0.02</text>
  <text x="507" y="300" text-anchor="middle" font-size="11" fill="var(--muted)">0.04</text>
  <text x="720" y="300" text-anchor="middle" font-size="11" fill="var(--muted)">0.06 s</text>
  <text x="380" y="324" text-anchor="middle" font-size="11.5" fill="var(--muted)">i = i<tspan baseline-shift="sub" font-size="70%">p</tspan> + i<tspan baseline-shift="sub" font-size="70%">a</tspan>，非周期分量按 T<tspan baseline-shift="sub" font-size="70%">a</tspan> = L/R 衰减；短路初相角为 0 时非周期分量最大</text>
</svg>
<figcaption>图 7　三相短路电流波形：周期分量幅值不变，非周期分量按指数衰减，两者叠加形成偏轴的全电流。</figcaption>
</figure>

<p>热效应近似为：</p>

<div class="formula">Q<sub>k</sub> = ∫ i^2 dt ≈ I″^2 (t + T<sub>a</sub>)</div>

<p>严格计算时把热效应分成周期分量与非周期分量两部分：Q<sub>k</sub> = Q<sub>p</sub> + Q<sub>np</sub>。周期分量用等值时间法或数值积分，非周期分量 Q<sub>np</sub> = I″^2 T<sub>a</sub>。设备热稳定校验条件是设备允许的热效应不小于短路热效应。</p>

<p>三相短路时中间相导体承受的电动力最大：</p>

<div class="formula">三相：F<sub>max</sub> = 1.73 × 10^−7 (i<sub>sh</sub>^2 / a) l　（N）<br>两相：F<sub>max</sub> = 2 × 10^−7 (i<sub>sh</sub>^2 / a) l　（N）</div>

<p>其中 i<sub>sh</sub> 用 A，a 为相间距离（m），l 为支持绝缘子间距（m）。动稳定校验要求设备允许的电动力不小于 F<sub>max</sub>。</p>

<h3>8.4 有限容量系统与运算曲线</h3>
<p>发电机不是无限大电源，短路后周期分量会衰减：次暂态阶段（约 0.1 s 内）衰减很快，暂态阶段较慢，最终进入稳态短路电流。工程上用<strong>运算曲线</strong>查不同时刻的周期分量标幺值。</p>

<div class="formula">计算电抗：X<sub>js</sub> = XΣ* × (S<sub>N</sub>Σ / S<sub>B</sub>)</div>

<p>其中 S<sub>N</sub>Σ 为所有发电机额定容量之和。由 X<sub>js</sub> 和故障时刻 t 查运算曲线得 I<sub>t</sub>*，再换算为有名值：</p>

<div class="formula">I<sub>t</sub> = I<sub>t</sub>* × S<sub>N</sub>Σ / (√3 U<sub>av</sub>)</div>

<p>无限大电源系统不需要运算曲线，I″ = I<sub>0</sub>.1 = I_∞，周期分量幅值恒定。考试中如果题目给出“无限大电源”或“系统容量远大于发电机容量”，就可以直接用 E*/XΣ*。</p>

<h3>8.5 限制短路电流的措施</h3>
<ul>
<li>在发电机或变压器回路串联<strong>电抗器</strong>，增加短路回路电抗；</li>
<li>变压器<strong>分列运行</strong>，增大系统等值电抗；</li>
<li>提高供电电压等级，减小短路电流（在输送功率不变时）；</li>
<li>采用<strong>限流熔断器</strong>、限流断路器；</li>
<li>合理选择接地方式，限制单相接地电流；</li>
<li>优化网络结构，避免大容量电源集中接入同一短路点。</li>
</ul>

<h2>九、不对称故障与对称分量法</h2>
<h3>9.1 对称分量法</h3>
<p>三相不对称量可以分解为三组对称分量：正序、负序、零序。引入运算子 a = e^(j120°)，有 1 + a + a^2 = 0。以 A 相为基准：</p>

<div class="formula">a = e^(j120°) = −1/2 + j√3/2<br>1 + a + a^2 = 0<br>[F<sub>a</sub>; F<sub>b</sub>; F<sub>c</sub>] = A [F<sub>a1</sub>; F<sub>a2</sub>; F<sub>a0</sub>]<br>A = [[1, 1, 1], [a^2, a, 1], [a, a^2, 1]]<br>A^−1 = (1/3) [[1, a, a^2], [1, a^2, a], [1, 1, 1]]</div>

<p>正序分量 a-b-c 相序，负序分量 a-c-b 相序，零序分量三相同相位。三相短路只有正序；不对称故障同时出现负序，接地故障还出现零序。对称分量法的价值在于：把三相耦合电路变成三个独立的序网，分别计算后再合成。</p>

<h3>9.2 序阻抗</h3>
<div class="table-wrap"><table>
<thead><tr><th>元件</th><th>正序</th><th>负序</th><th>零序</th></tr></thead>
<tbody>
<tr><td>发电机</td><td>X<sub>d</sub>″ 或 X<sub>d</sub></td><td>X<sub>2</sub> ≈ X<sub>d</sub>″，略小于正序</td><td>X<sub>0</sub> 很小，取决于绕组与中性点</td></tr>
<tr><td>变压器</td><td>X<sub>T</sub></td><td>X<sub>T</sub></td><td>与接线方式和中性点接地有关；Δ 侧零序不能流通</td></tr>
<tr><td>架空线路</td><td>x<sub>1</sub></td><td>x<sub>1</sub></td><td>x<sub>0</sub> ≈ (3～3.5) x<sub>1</sub></td></tr>
<tr><td>电缆线路</td><td>x<sub>1</sub></td><td>x<sub>1</sub></td><td>零序阻抗更大，具体与电缆结构、护层接地有关</td></tr>
<tr><td>负荷</td><td>近似等值</td><td>近似等值</td><td>通常忽略</td></tr>
</tbody>
</table></div>

<p>静止元件（变压器、线路）的正序与负序阻抗相同，因为交换相序不改变电磁关系；旋转元件（发电机、电动机）的正序与负序不同。零序电流能否流通，取决于有没有零序通路：变压器 Y<sub>0</sub> 侧可以流通，Δ 侧只能在内部环流，不能流出；中性点不接地时零序网断开。</p>

<h3>9.3 序网连接与正序等效定则</h3>
<p>不对称故障的边界条件决定了三序网的连接方式。所有故障都可以归结为“正序网 + 一个附加电抗 XΔ”，这就是<strong>正序等效定则</strong>。</p>

<div class="table-wrap"><table>
<thead><tr><th>故障类型</th><th>边界条件</th><th>序网连接</th><th>XΔ</th><th>故障相电流</th></tr></thead>
<tbody>
<tr><td>三相短路</td><td>三相对称</td><td>仅正序网</td><td>0</td><td>I<sub>f</sub> = I<sub>a1</sub></td></tr>
<tr><td>单相接地</td><td>I<sub>b</sub> = I<sub>c</sub> = 0，U<sub>a</sub> = 0</td><td>三序网串联</td><td>X<sub>2</sub>Σ + X<sub>0</sub>Σ</td><td>I<sub>f</sub> = 3 I<sub>a1</sub></td></tr>
<tr><td>两相短路</td><td>I<sub>a</sub> = 0，I<sub>b</sub> = −I<sub>c</sub>，U<sub>b</sub> = U<sub>c</sub></td><td>正、负序网并联</td><td>X<sub>2</sub>Σ</td><td>I<sub>f</sub> = √3 I<sub>a1</sub></td></tr>
<tr><td>两相接地</td><td>I<sub>a</sub> = 0，U<sub>b</sub> = U<sub>c</sub> = 0</td><td>三序网并联</td><td>X<sub>2</sub>Σ ∥ X<sub>0</sub>Σ</td><td>I<sub>f</sub> = √3 √(1 − X<sub>2</sub>ΣX<sub>0</sub>Σ/(X<sub>2</sub>Σ+X<sub>0</sub>Σ)^2) I<sub>a1</sub></td></tr>
</tbody>
</table></div>

<div class="formula">I<sub>a1</sub> = EΣ / (X<sub>1</sub>Σ + XΔ)<br>I<sub>f</sub> = m I<sub>a1</sub></div>

<p>系数 m 的取值：三相短路 m = 1，单相接地 m = 3，两相短路 m = √3，两相接地 m = √3 √(1 − X<sub>2</sub>ΣX<sub>0</sub>Σ/(X<sub>2</sub>Σ+X<sub>0</sub>Σ)^2)。记住“单相三倍、两相根号三”，计算题就不会漏系数。</p>

<figure>
<svg viewBox="0 0 760 320" role="img" aria-label="序网连接方式示意图">
  <text x="196" y="26" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)">单相接地：三序网串联</text>
  <text x="566" y="26" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)">两相短路：正、负序网并联</text>
  <line x1="380" y1="42" x2="380" y2="296" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>

  <rect x="30" y="92" width="90" height="48" rx="8" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="75" y="113" text-anchor="middle" font-size="12" fill="var(--text-2)">正序网</text>
  <text x="75" y="130" text-anchor="middle" font-size="11" fill="var(--muted)">E, X<tspan baseline-shift="sub" font-size="70%">1</tspan>Σ</text>
  <rect x="150" y="92" width="80" height="48" rx="8" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="190" y="113" text-anchor="middle" font-size="12" fill="var(--text-2)">负序网</text>
  <text x="190" y="130" text-anchor="middle" font-size="11" fill="var(--muted)">X<tspan baseline-shift="sub" font-size="70%">2</tspan>Σ</text>
  <rect x="260" y="92" width="80" height="48" rx="8" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="300" y="113" text-anchor="middle" font-size="12" fill="var(--text-2)">零序网</text>
  <text x="300" y="130" text-anchor="middle" font-size="11" fill="var(--muted)">X<tspan baseline-shift="sub" font-size="70%">0</tspan>Σ</text>

  <line x1="120" y1="116" x2="150" y2="116" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="230" y1="116" x2="260" y2="116" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="340" y1="116" x2="356" y2="116" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="356" y1="116" x2="356" y2="200" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="356" y1="200" x2="30" y2="200" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="30" y1="200" x2="30" y2="116" stroke="var(--text-2)" stroke-width="1.6"/>
  <circle cx="356" cy="116" r="4" fill="var(--accent)"/>
  <text x="366" y="112" font-size="12" fill="var(--accent)">f</text>
  <text x="20" y="196" text-anchor="end" font-size="11" fill="var(--muted)">地</text>
  <text x="196" y="238" text-anchor="middle" font-size="11.5" fill="var(--muted)">XΔ = X<tspan baseline-shift="sub" font-size="70%">2</tspan>Σ + X<tspan baseline-shift="sub" font-size="70%">0</tspan>Σ，故障电流 I<tspan baseline-shift="sub" font-size="70%">f</tspan> = 3 I<tspan baseline-shift="sub" font-size="70%">a1</tspan></text>

  <circle cx="410" cy="160" r="4" fill="var(--accent)"/>
  <text x="396" y="166" text-anchor="end" font-size="12" fill="var(--accent)">f</text>
  <circle cx="700" cy="160" r="4" fill="var(--accent)"/>
  <text x="710" y="166" font-size="12" fill="var(--accent)">f</text>
  <line x1="414" y1="160" x2="414" y2="112" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="414" y1="112" x2="490" y2="112" stroke="var(--text-2)" stroke-width="1.6"/>
  <rect x="490" y="90" width="96" height="44" rx="8" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="538" y="110" text-anchor="middle" font-size="12" fill="var(--text-2)">负序网</text>
  <text x="538" y="126" text-anchor="middle" font-size="11" fill="var(--muted)">X<tspan baseline-shift="sub" font-size="70%">2</tspan>Σ</text>
  <line x1="586" y1="112" x2="700" y2="112" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="700" y1="112" x2="700" y2="160" stroke="var(--text-2)" stroke-width="1.6"/>

  <line x1="414" y1="160" x2="414" y2="208" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="414" y1="208" x2="490" y2="208" stroke="var(--text-2)" stroke-width="1.6"/>
  <rect x="490" y="186" width="96" height="44" rx="8" fill="var(--bg-soft)" stroke="var(--line)"/>
  <text x="538" y="206" text-anchor="middle" font-size="12" fill="var(--text-2)">正序网</text>
  <text x="538" y="222" text-anchor="middle" font-size="11" fill="var(--muted)">E, X<tspan baseline-shift="sub" font-size="70%">1</tspan>Σ</text>
  <line x1="586" y1="208" x2="700" y2="208" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="700" y1="208" x2="700" y2="160" stroke="var(--text-2)" stroke-width="1.6"/>
  <text x="566" y="266" text-anchor="middle" font-size="11.5" fill="var(--muted)">XΔ = X<tspan baseline-shift="sub" font-size="70%">2</tspan>Σ，故障电流 I<tspan baseline-shift="sub" font-size="70%">f</tspan> = √3 I<tspan baseline-shift="sub" font-size="70%">a1</tspan></text>
</svg>
<figcaption>图 8　序网连接方式：单相接地时正、负、零序网串联，XΔ = X<sub>2</sub>Σ + X<sub>0</sub>Σ；两相短路时正、负序网并联，XΔ = X<sub>2</sub>Σ。两相接地则为三序网并联。</figcaption>
</figure>

<h3>9.4 故障电流大小比较</h3>
<p>设 X<sub>1</sub>Σ = X<sub>2</sub>Σ，则：</p>
<div class="formula">I⁽²⁾ = (√3/2) I⁽³⁾ ≈ 0.866 I⁽³⁾<br>I⁽¹⁾ = 3E / (2X<sub>1</sub>Σ + X<sub>0</sub>Σ)</div>

<p>单相接地电流与三相短路电流谁大，取决于 X<sub>0</sub>Σ/X<sub>1</sub>Σ：当 X<sub>0</sub>Σ &lt; X<sub>1</sub>Σ 时，单相接地电流大于三相短路电流；当 X<sub>0</sub>Σ &gt; X<sub>1</sub>Σ 时则相反。所以“三相短路电流一定最大”是错误说法。两相接地电流也可能很大，具体要看零序网强弱。</p>

<h3>9.5 中性点不接地系统的单相接地</h3>
<p>中性点不接地系统发生单相接地时，故障相电压为零，非故障相电压升高为线电压，但<strong>线电压仍然对称</strong>，三相负荷可以继续运行。接地点流过的是线路对地电容电流，数值较小，一般允许带故障运行约 2 小时。但电弧间歇性重燃会产生弧光接地过电压，可能损坏绝缘。</p>

<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="中性点不接地系统单相接地示意图">
  <line x1="150" y1="90" x2="660" y2="90" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="150" y1="150" x2="560" y2="150" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="150" y1="210" x2="520" y2="210" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="90" y1="250" x2="150" y2="90" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="90" y1="250" x2="150" y2="150" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="90" y1="250" x2="150" y2="210" stroke="var(--text-2)" stroke-width="1.8"/>
  <circle cx="90" cy="250" r="4" fill="var(--accent)"/>
  <text x="36" y="292" font-size="11" fill="var(--muted)">N（中性点不接地）</text>

  <text x="140" y="84" text-anchor="end" font-size="12" font-weight="600" fill="var(--text-2)">A</text>
  <text x="140" y="144" text-anchor="end" font-size="12" font-weight="600" fill="var(--text-2)">B</text>
  <text x="140" y="204" text-anchor="end" font-size="12" font-weight="600" fill="var(--text-2)">C</text>

  <text x="200" y="82" font-size="11" fill="var(--accent)">U<tspan baseline-shift="sub" font-size="70%">A</tspan> = 0</text>
  <text x="200" y="142" font-size="11" fill="var(--muted)">U<tspan baseline-shift="sub" font-size="70%">B</tspan>′ = √3 U_φ</text>
  <text x="200" y="202" font-size="11" fill="var(--muted)">U<tspan baseline-shift="sub" font-size="70%">C</tspan>′ = √3 U_φ</text>

  <line x1="600" y1="90" x2="600" y2="168" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="588" y1="168" x2="612" y2="168" stroke="var(--text-2)" stroke-width="2.2"/>
  <line x1="588" y1="180" x2="612" y2="180" stroke="var(--text-2)" stroke-width="2.2"/>
  <line x1="600" y1="180" x2="600" y2="290" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="585" y1="290" x2="615" y2="290" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="590" y1="296" x2="610" y2="296" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="595" y1="302" x2="605" y2="302" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="616" y="164" font-size="10.5" fill="var(--muted)">C<tspan baseline-shift="sub" font-size="70%">0</tspan></text>

  <line x1="560" y1="150" x2="560" y2="208" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="548" y1="208" x2="572" y2="208" stroke="var(--text-2)" stroke-width="2.2"/>
  <line x1="548" y1="220" x2="572" y2="220" stroke="var(--text-2)" stroke-width="2.2"/>
  <line x1="560" y1="220" x2="560" y2="290" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="545" y1="290" x2="575" y2="290" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="550" y1="296" x2="570" y2="296" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="555" y1="302" x2="565" y2="302" stroke="var(--text-2)" stroke-width="1.8"/>
  <path d="M560 254 l-5 10 h10 Z" fill="#2fb344"/>
  <text x="570" y="264" font-size="10.5" fill="#2fb344">I<tspan baseline-shift="sub" font-size="70%">C</tspan></text>

  <line x1="520" y1="210" x2="520" y2="238" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="508" y1="238" x2="532" y2="238" stroke="var(--text-2)" stroke-width="2.2"/>
  <line x1="508" y1="250" x2="532" y2="250" stroke="var(--text-2)" stroke-width="2.2"/>
  <line x1="520" y1="250" x2="520" y2="290" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="505" y1="290" x2="535" y2="290" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="510" y1="296" x2="530" y2="296" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="515" y1="302" x2="525" y2="302" stroke="var(--text-2)" stroke-width="1.8"/>
  <path d="M520 276 l-5 10 h10 Z" fill="#2fb344"/>

  <line x1="650" y1="90" x2="650" y2="290" stroke="#dc2626" stroke-width="1.8"/>
  <circle cx="650" cy="90" r="3.5" fill="#dc2626"/>
  <line x1="635" y1="290" x2="665" y2="290" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="640" y1="296" x2="660" y2="296" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="645" y1="302" x2="655" y2="302" stroke="var(--text-2)" stroke-width="1.8"/>
  <path d="M650 206 l-5 10 h10 Z" fill="#dc2626"/>
  <text x="662" y="212" font-size="11" fill="#dc2626">I<tspan baseline-shift="sub" font-size="70%">C</tspan></text>
  <text x="662" y="86" font-size="11" fill="#dc2626">单相接地</text>

  <text x="330" y="336" text-anchor="middle" font-size="11.5" fill="var(--muted)">接地点流过的电容电流为三相对地电容电流之和，I<tspan baseline-shift="sub" font-size="70%">C</tspan> = 3ωC<tspan baseline-shift="sub" font-size="70%">0</tspan>U_φ</text>
</svg>
<figcaption>图 9　中性点不接地系统单相接地：故障相 A 电压为零，非故障相 B、C 升高为线电压，线电压仍对称；接地点电流为三相对地电容电流之和，系统可带故障运行约 2 小时。</figcaption>
</figure>

<p>当电容电流较大时，采用消弧线圈（电感线圈）补偿。补偿度定义为：</p>

<div class="formula">K = (I<sub>L</sub> − I<sub>C</sub>) / I<sub>C</sub> × 100%</div>

<p>K = 0 为全补偿，会发生串联谐振，实际不采用；K &lt; 0 为欠补偿；K &gt; 0 为过补偿。工程上通常采用过补偿（约 5%～10%），保证电网参数变化时不会进入全补偿谐振区。</p>

<h2>十、电力系统稳定性</h2>
<h3>10.1 静态稳定</h3>
<p>静态稳定研究小扰动后系统能否恢复到原来的运行状态。最简单的单机-无穷大系统，发电机经电抗 X 与无穷大母线相连，隐极机的功角特性为：</p>

<div class="formula">P<sub>E</sub> = (E U / X) sinδ<br>P<sub>max</sub> = E U / X<br>dP<sub>E</sub>/dδ = (E U / X) cosδ</div>

<p>静态稳定的判据是整步功率系数大于零，即 dP<sub>E</sub>/dδ &gt; 0，对应 δ &lt; 90°。δ = 90° 时达到静态稳定极限，P<sub>max</sub> = E U / X。静态稳定储备系数为：</p>

<div class="formula">K<sub>p</sub>% = (P<sub>max</sub> − P<sub>0</sub>) / P<sub>0</sub> × 100%</div>

<p>正常运行时 K<sub>p</sub>% 一般要求 15%～20%，事故后允许降到 10%。注意这个判据只适用于隐极机、不计电阻、E 恒定的简化模型；凸极机还要考虑磁阻功率。</p>

<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="功角特性曲线">
  <rect x="80" y="70" width="310" height="220" fill="rgba(47, 179, 68, 0.06)"/>
  <rect x="390" y="70" width="310" height="220" fill="rgba(220, 38, 38, 0.05)"/>
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">P<tspan baseline-shift="sub" font-size="70%">E</tspan> = (E U / X) sinδ</text>
  <text x="380" y="46" text-anchor="middle" font-size="12" fill="var(--muted)">dP<tspan baseline-shift="sub" font-size="70%">E</tspan>/dδ = (E U / X) cosδ</text>

  <line x1="80" y1="290" x2="700" y2="290" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="80" y1="290" x2="80" y2="70" stroke="var(--text-2)" stroke-width="1.6"/>
  <text x="66" y="70" font-size="12.5" fill="var(--text-2)">P</text>
  <text x="710" y="310" font-size="12.5" fill="var(--text-2)">δ</text>

  <path d="M80 290 L86.9 283.7 L93.8 277.4 L100.7 271.2 L107.6 264.9 L114.4 258.7 L121.3 252.6 L128.2 246.5 L135.1 240.4 L142 234.4 L148.9 228.4 L155.8 222.6 L162.7 216.8 L169.6 211.1 L176.4 205.5 L183.3 200 L190.2 194.6 L197.1 189.3 L204 184.2 L210.9 179.2 L217.8 174.3 L224.7 169.6 L231.6 165 L238.4 160.5 L245.3 156.2 L252.2 152.1 L259.1 148.2 L266 144.4 L272.9 140.8 L279.8 137.4 L286.7 134.1 L293.6 131.1 L300.4 128.2 L307.3 125.6 L314.2 123.1 L321.1 120.9 L328 118.8 L334.9 117 L341.8 115.3 L348.7 113.9 L355.6 112.7 L362.4 111.8 L369.3 111 L376.2 110.4 L383.1 110.1 L390 110 L396.9 110.1 L403.8 110.4 L410.7 111 L417.6 111.8 L424.4 112.7 L431.3 113.9 L438.2 115.3 L445.1 117 L452 118.8 L458.9 120.9 L465.8 123.1 L472.7 125.6 L479.6 128.2 L486.4 131.1 L493.3 134.1 L500.2 137.4 L507.1 140.8 L514 144.4 L520.9 148.2 L527.8 152.1 L534.7 156.2 L541.6 160.5 L548.4 165 L555.3 169.6 L562.2 174.3 L569.1 179.2 L576 184.2 L582.9 189.3 L589.8 194.6 L596.7 200 L603.6 205.5 L610.4 211.1 L617.3 216.8 L624.2 222.6 L631.1 228.4 L638 234.4 L644.9 240.4 L651.8 246.5 L658.7 252.6 L665.6 258.7 L672.4 264.9 L679.3 271.2 L686.2 277.4 L693.1 283.7 L700 290" fill="none" stroke="var(--accent)" stroke-width="2.6"/>

  <line x1="80" y1="182" x2="700" y2="182" stroke="#d97706" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="688" y="174" text-anchor="end" font-size="12" fill="#d97706">P<tspan baseline-shift="sub" font-size="70%">T</tspan></text>

  <line x1="390" y1="70" x2="390" y2="290" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="207" y1="182" x2="207" y2="290" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="110" x2="390" y2="110" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="207" cy="182" r="5" fill="#d97706"/>
  <circle cx="390" cy="110" r="5" fill="var(--accent)"/>

  <text x="72" y="114" text-anchor="end" font-size="11.5" fill="var(--muted)">P<tspan baseline-shift="sub" font-size="70%">max</tspan></text>
  <text x="207" y="310" text-anchor="middle" font-size="11.5" fill="var(--muted)">δ0</text>
  <text x="390" y="310" text-anchor="middle" font-size="11.5" fill="var(--muted)">90°</text>
  <text x="235" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#2f9e44">稳定区 δ &lt; 90°</text>
  <text x="545" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#d9480f">失稳区 δ &gt; 90°</text>

  <text x="380" y="332" text-anchor="middle" font-size="11.5" fill="var(--muted)">δ &lt; 90° 时 dP<tspan baseline-shift="sub" font-size="70%">E</tspan>/dδ &gt; 0，系统静态稳定；δ = 90° 为静态稳定极限</text>
</svg>
<figcaption>图 10　隐极机功角特性：功角小于 90° 时具有正的整步功率，超过 90° 后静态失稳。</figcaption>
</figure>

<p>提高静态稳定的措施：减小电抗 X（串联电容补偿、分裂导线、提高电压等级）、提高发电机电势 E（励磁调节）、采用自动励磁调节器与电力系统稳定器 PSS。凸极机的功角特性为：</p>

<div class="formula">P<sub>E</sub> = (E<sub>q</sub> U / X<sub>d</sub>) sinδ + (U^2 / 2)(1/X<sub>q</sub> − 1/X<sub>d</sub>) sin<sub>2</sub>δ</div>

<p>第二项是磁阻功率，由直轴与交轴磁阻不等产生。凸极机由于磁阻功率的存在，静态稳定极限对应的功角一般小于 90°；工程上常以 90° 作为保守判据。</p>

<h3>10.2 暂态稳定与等面积定则</h3>
<p>暂态稳定研究大扰动（短路、断线、机组跳闸）后系统能否保持同步。单机-无穷大系统可以用<strong>等面积定则</strong>判断：故障期间发电机输出功率降低，原动机功率大于电磁功率，转子加速，形成加速面积；故障切除后电磁功率恢复，转子减速，形成减速面积。若减速面积能抵消加速面积，系统暂态稳定。</p>

<figure>
<svg viewBox="0 0 760 380" role="img" aria-label="等面积定则示意图">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">等面积定则：A<tspan baseline-shift="sub" font-size="70%">acc</tspan> = A<tspan baseline-shift="sub" font-size="70%">dec</tspan> 时达到临界状态</text>
  <text x="380" y="46" text-anchor="middle" font-size="11.5" fill="var(--muted)">P<tspan baseline-shift="sub" font-size="70%">I</tspan> 故障前　P<tspan baseline-shift="sub" font-size="70%">II</tspan> 故障中　P<tspan baseline-shift="sub" font-size="70%">III</tspan> 故障后</text>

  <line x1="80" y1="290" x2="700" y2="290" stroke="var(--text-2)" stroke-width="1.6"/>
  <line x1="80" y1="290" x2="80" y2="60" stroke="var(--text-2)" stroke-width="1.6"/>
  <text x="66" y="60" font-size="12.5" fill="var(--text-2)">P</text>
  <text x="710" y="310" font-size="12.5" fill="var(--text-2)">δ</text>

  <polygon points="183.3,178 186.9,178 190.4,178 194,178 197.6,178 201.1,178 204.7,178 208.2,178 211.8,178 215.3,178 218.9,178 222.4,178 226,178 229.5,178 233.1,178 236.7,178 240.2,178 243.8,178 247.3,178 250.9,178 254.4,178 258,178 261.5,178 265.1,178 268.6,178 272.2,178 275.8,178 279.3,178 282.9,178 286.4,178 290,178 293.5,178 297.1,178 300.6,178 304.2,178 307.7,178 311.3,178 314.9,178 318.4,178 322,178 325.5,178 329.1,178 332.6,178 336.2,178 339.7,178 343.3,178 346.8,178 350.4,178 354,178 357.5,178 361.1,178 361.1,213.8 357.5,214 354,214.3 350.4,214.5 346.8,214.8 343.3,215.1 339.7,215.5 336.2,215.8 332.6,216.2 329.1,216.6 325.5,217.1 322,217.5 318.4,218 314.9,218.5 311.3,219 307.7,219.6 304.2,220.2 300.6,220.8 297.1,221.4 293.5,222 290,222.7 286.4,223.4 282.9,224.1 279.3,224.8 275.8,225.5 272.2,226.3 268.6,227.1 265.1,227.9 261.5,228.7 258,229.6 254.4,230.5 250.9,231.4 247.3,232.3 243.8,233.2 240.2,234.1 236.7,235.1 233.1,236.1 229.5,237.1 226,238.1 222.4,239.1 218.9,240.2 215.3,241.2 211.8,242.3 208.2,243.4 204.7,244.5 201.1,245.7 197.6,246.8 194,248 190.4,249.1 186.9,250.3 183.3,251.5" fill="rgba(217, 119, 6, 0.22)" stroke="#d97706" stroke-width="1"/>
  <polygon points="361.1,116.9 365.1,116.4 369.1,116 373.2,115.6 377.2,115.4 381.3,115.2 385.3,115 389.3,115 393.4,115 397.4,115.1 401.4,115.3 405.5,115.5 409.5,115.9 413.5,116.2 417.6,116.7 421.6,117.2 425.7,117.8 429.7,118.5 433.7,119.3 437.8,120.1 441.8,121 445.8,122 449.9,123 453.9,124.1 458,125.3 462,126.5 466,127.8 470.1,129.2 474.1,130.7 478.1,132.2 482.2,133.7 486.2,135.4 490.2,137.1 494.3,138.9 498.3,140.7 502.4,142.6 506.4,144.6 510.4,146.6 514.5,148.7 518.5,150.8 522.5,153 526.6,155.3 530.6,157.6 534.7,159.9 538.7,162.4 542.7,164.8 546.8,167.4 550.8,169.9 554.8,172.6 558.9,175.3 562.9,178 562.9,178 558.9,178 554.8,178 550.8,178 546.8,178 542.7,178 538.7,178 534.7,178 530.6,178 526.6,178 522.5,178 518.5,178 514.5,178 510.4,178 506.4,178 502.4,178 498.3,178 494.3,178 490.2,178 486.2,178 482.2,178 478.1,178 474.1,178 470.1,178 466,178 462,178 458,178 453.9,178 449.9,178 445.8,178 441.8,178 437.8,178 433.7,178 429.7,178 425.7,178 421.6,178 417.6,178 413.5,178 409.5,178 405.5,178 401.4,178 397.4,178 393.4,178 389.3,178 385.3,178 381.3,178 377.2,178 373.2,178 369.1,178 365.1,178 361.1,178" fill="rgba(47, 179, 68, 0.18)" stroke="#2f9e44" stroke-width="1"/>

  <path d="M80 290 L86.9 282.2 L93.8 274.4 L100.7 266.6 L107.6 258.8 L114.4 251.1 L121.3 243.4 L128.2 235.8 L135.1 228.3 L142 220.8 L148.9 213.4 L155.8 206.1 L162.7 198.9 L169.6 191.8 L176.4 184.8 L183.3 178 L190.2 171.3 L197.1 164.7 L204 158.3 L210.9 152.1 L217.8 146 L224.7 140.1 L231.6 134.4 L238.4 128.9 L245.3 123.5 L252.2 118.4 L259.1 113.5 L266 108.8 L272.9 104.3 L279.8 100 L286.7 96 L293.6 92.2 L300.4 88.7 L307.3 85.4 L314.2 82.3 L321.1 79.5 L328 77 L334.9 74.7 L341.8 72.7 L348.7 70.9 L355.6 69.4 L362.4 68.2 L369.3 67.2 L376.2 66.5 L383.1 66.1 L390 66 L396.9 66.1 L403.8 66.5 L410.7 67.2 L417.6 68.2 L424.4 69.4 L431.3 70.9 L438.2 72.7 L445.1 74.7 L452 77 L458.9 79.5 L465.8 82.3 L472.7 85.4 L479.6 88.7 L486.4 92.2 L493.3 96 L500.2 100 L507.1 104.3 L514 108.8 L520.9 113.5 L527.8 118.4 L534.7 123.5 L541.6 128.9 L548.4 134.4 L555.3 140.1 L562.2 146 L569.1 152.1 L576 158.3 L582.9 164.7 L589.8 171.3 L596.7 178 L603.6 184.8 L610.4 191.8 L617.3 198.9 L624.2 206.1 L631.1 213.4 L638 220.8 L644.9 228.3 L651.8 235.8 L658.7 243.4 L665.6 251.1 L672.4 258.8 L679.3 266.6 L686.2 274.4 L693.1 282.2 L700 290" fill="none" stroke="var(--accent)" stroke-width="2.2"/>
  <path d="M80 290 L86.9 287.3 L93.8 284.6 L100.7 282 L107.6 279.3 L114.4 276.6 L121.3 274 L128.2 271.4 L135.1 268.8 L142 266.2 L148.9 263.7 L155.8 261.2 L162.7 258.7 L169.6 256.2 L176.4 253.9 L183.3 251.5 L190.2 249.2 L197.1 246.9 L204 244.7 L210.9 242.6 L217.8 240.5 L224.7 238.5 L231.6 236.5 L238.4 234.6 L245.3 232.8 L252.2 231 L259.1 229.3 L266 227.7 L272.9 226.2 L279.8 224.7 L286.7 223.3 L293.6 222 L300.4 220.8 L307.3 219.7 L314.2 218.6 L321.1 217.6 L328 216.8 L334.9 216 L341.8 215.3 L348.7 214.7 L355.6 214.2 L362.4 213.7 L369.3 213.4 L376.2 213.2 L383.1 213 L390 213 L396.9 213 L403.8 213.2 L410.7 213.4 L417.6 213.7 L424.4 214.2 L431.3 214.7 L438.2 215.3 L445.1 216 L452 216.8 L458.9 217.6 L465.8 218.6 L472.7 219.7 L479.6 220.8 L486.4 222 L493.3 223.3 L500.2 224.7 L507.1 226.2 L514 227.7 L520.9 229.3 L527.8 231 L534.7 232.8 L541.6 234.6 L548.4 236.5 L555.3 238.5 L562.2 240.5 L569.1 242.6 L576 244.7 L582.9 246.9 L589.8 249.2 L596.7 251.5 L603.6 253.9 L610.4 256.2 L617.3 258.7 L624.2 261.2 L631.1 263.7 L638 266.2 L644.9 268.8 L651.8 271.4 L658.7 274 L665.6 276.6 L672.4 279.3 L679.3 282 L686.2 284.6 L693.1 287.3 L700 290" fill="none" stroke="#d97706" stroke-width="2.2"/>
  <path d="M80 290 L86.9 283.9 L93.8 277.8 L100.7 271.7 L107.6 265.6 L114.4 259.6 L121.3 253.6 L128.2 247.7 L135.1 241.8 L142 235.9 L148.9 230.1 L155.8 224.4 L162.7 218.8 L169.6 213.3 L176.4 207.8 L183.3 202.5 L190.2 197.3 L197.1 192.1 L204 187.1 L210.9 182.3 L217.8 177.5 L224.7 172.9 L231.6 168.4 L238.4 164.1 L245.3 159.9 L252.2 155.9 L259.1 152.1 L266 148.4 L272.9 144.9 L279.8 141.6 L286.7 138.4 L293.6 135.5 L300.4 132.7 L307.3 130.1 L314.2 127.7 L321.1 125.6 L328 123.6 L334.9 121.8 L341.8 120.2 L348.7 118.8 L355.6 117.7 L362.4 116.7 L369.3 116 L376.2 115.4 L383.1 115.1 L390 115 L396.9 115.1 L403.8 115.4 L410.7 116 L417.6 116.7 L424.4 117.7 L431.3 118.8 L438.2 120.2 L445.1 121.8 L452 123.6 L458.9 125.6 L465.8 127.7 L472.7 130.1 L479.6 132.7 L486.4 135.5 L493.3 138.4 L500.2 141.6 L507.1 144.9 L514 148.4 L520.9 152.1 L527.8 155.9 L534.7 159.9 L541.6 164.1 L548.4 168.4 L555.3 172.9 L562.2 177.5 L569.1 182.3 L576 187.1 L582.9 192.1 L589.8 197.3 L596.7 202.5 L603.6 207.8 L610.4 213.3 L617.3 218.8 L624.2 224.4 L631.1 230.1 L638 235.9 L644.9 241.8 L651.8 247.7 L658.7 253.6 L665.6 259.6 L672.4 265.6 L679.3 271.7 L686.2 277.8 L693.1 283.9 L700 290" fill="none" stroke="#2f9e44" stroke-width="2.2"/>

  <line x1="80" y1="178" x2="700" y2="178" stroke="#d97706" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="688" y="170" text-anchor="end" font-size="12" fill="#d97706">P<tspan baseline-shift="sub" font-size="70%">T</tspan></text>

  <line x1="361.1" y1="60" x2="361.1" y2="290" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="562.9" y1="60" x2="562.9" y2="290" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="183.3" y1="178" x2="183.3" y2="290" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>

  <text x="183" y="308" text-anchor="middle" font-size="11.5" fill="var(--muted)">δ<tspan baseline-shift="sub" font-size="70%">0</tspan></text>
  <text x="361" y="308" text-anchor="middle" font-size="11.5" fill="var(--muted)">δ<tspan baseline-shift="sub" font-size="70%">cm</tspan></text>
  <text x="563" y="308" text-anchor="middle" font-size="11.5" fill="var(--muted)">δ<tspan baseline-shift="sub" font-size="70%">max</tspan></text>
  <text x="270" y="202" text-anchor="middle" font-size="12" font-weight="600" fill="#d97706">A<tspan baseline-shift="sub" font-size="70%">acc</tspan></text>
  <text x="472" y="136" text-anchor="middle" font-size="12" font-weight="600" fill="#2f9e44">A<tspan baseline-shift="sub" font-size="70%">dec</tspan></text>
  <text x="600" y="88" text-anchor="end" font-size="11.5" fill="var(--accent)">P<tspan baseline-shift="sub" font-size="70%">I</tspan></text>
  <text x="390" y="232" text-anchor="middle" font-size="11.5" fill="#d97706">P<tspan baseline-shift="sub" font-size="70%">II</tspan></text>
  <text x="430" y="106" text-anchor="middle" font-size="11.5" fill="#2f9e44">P<tspan baseline-shift="sub" font-size="70%">III</tspan></text>

  <text x="380" y="336" text-anchor="middle" font-size="11.5" fill="var(--muted)">临界条件：A<tspan baseline-shift="sub" font-size="70%">acc</tspan> = A<tspan baseline-shift="sub" font-size="70%">dec</tspan>，对应极限切除角 δ<tspan baseline-shift="sub" font-size="70%">cm</tspan>；故障切除越晚，加速面积越大</text>
</svg>
<figcaption>图 11　等面积定则：加速面积等于减速面积时达到临界状态，对应的切除角就是极限切除角。</figcaption>
</figure>

<div class="formula">A<sub>acc</sub> = ∫(δ<sub>0</sub> → δ<sub>c</sub>) (P<sub>T</sub> − P<sub>II</sub>) dδ<br>A<sub>dec</sub> = ∫(δ<sub>c</sub> → δ<sub>max</sub>) (P<sub>III</sub> − P<sub>T</sub>) dδ<br>稳定判据：A<sub>acc</sub> ≤ A<sub>dec</sub></div>

<p>临界情况下 A<sub>acc</sub> = A<sub>dec</sub>，对应的切除角称为极限切除角 δ<sub>cm</sub>。若故障前、故障中、故障后的最大功率分别为 P<sub>I</sub>max、P<sub>II</sub>max、P<sub>III</sub>max，则：</p>

<div class="formula">cosδ<sub>cm</sub> = [P<sub>T</sub>(δ<sub>max</sub> − δ<sub>0</sub>) + P<sub>IIImax</sub> cosδ<sub>max</sub> − P<sub>IImax</sub> cosδ<sub>0</sub>] / (P<sub>IIImax</sub> − P<sub>IImax</sub>)<br>δ<sub>max</sub> = 180° − δ<sub>0</sub>′，δ<sub>0</sub>′ = arcsin(P<sub>T</sub> / P<sub>IIImax</sub>)</div>

<p>若故障后网络与故障前相同（例如瞬时故障重合成功），则 P<sub>IIImax</sub> = P<sub>Imax</sub>，δ<sub>0</sub>′ = δ<sub>0</sub>，公式退化为常见的 δ<sub>max</sub> = 180° − δ<sub>0</sub>。若故障后网络减弱，必须先用 P<sub>IIImax</sub> 求 δ<sub>0</sub>′，否则角度会算错。注意角度要用弧度代入。求出 δ<sub>cm</sub> 后，再由转子运动方程积分求极限切除时间 t<sub>cm</sub>。转子运动方程为：</p>

<div class="formula">(T<sub>J</sub> / ω<sub>0</sub>) d^2δ/dt^2 = P<sub>T</sub> − P<sub>E</sub>　（标幺值，T<sub>J</sub> 为惯性时间常数，s；ω<sub>0</sub> = 2πf<sub>0</sub>）</div>

<p>工程上 t<sub>cm</sub> 通常由数值积分或等面积法配合分段计算得到，考试若要求 t<sub>cm</sub>，一般会给出简化条件或允许近似。</p>

<h3>10.3 提高稳定的措施</h3>
<div class="table-wrap"><table>
<thead><tr><th>措施</th><th>作用</th><th>适用</th></tr></thead>
<tbody>
<tr><td>快速切除故障</td><td>减小加速面积，是最有效的暂稳措施</td><td>所有系统，优先采用</td></tr>
<tr><td>自动重合闸</td><td>故障切除后快速恢复线路，增大减速面积</td><td>架空线路瞬时性故障</td></tr>
<tr><td>强行励磁 / 快速励磁</td><td>提高故障后发电机电势，增大 P<sub>III</sub> max</td><td>近区短路、电压支撑不足</td></tr>
<tr><td>电气制动</td><td>故障期间投入电阻消耗有功，减小加速</td><td>快速切除仍不能满足暂稳时</td></tr>
<tr><td>快关汽门</td><td>快速减小原动机功率，降低加速面积</td><td>汽轮机组</td></tr>
<tr><td>串联电容补偿</td><td>减小线路电抗，提高功角特性幅值</td><td>长距离输电线路</td></tr>
<tr><td>PSS / FACTS</td><td>增加阻尼，抑制低频振荡</td><td>弱阻尼系统、大规模互联电网</td></tr>
</tbody>
</table></div>

<p>静态稳定与暂态稳定的区别可以归纳为一张表：</p>

<div class="table-wrap"><table>
<thead><tr><th>项目</th><th>静态稳定</th><th>暂态稳定</th></tr></thead>
<tbody>
<tr><td>扰动性质</td><td>小扰动</td><td>大扰动</td></tr>
<tr><td>分析方法</td><td>线性化、整步功率系数</td><td>等面积定则、数值仿真</td></tr>
<tr><td>判据</td><td>dP/dδ &gt; 0，δ &lt; 90°</td><td>A<sub>acc</sub> ≤ A<sub>dec</sub></td></tr>
<tr><td>关注量</td><td>功角、电压、阻尼</td><td>首摆稳定、极限切除时间</td></tr>
<tr><td>主要措施</td><td>减小 X、提高 E、PSS</td><td>快速切除、重合闸、制动</td></tr>
</tbody>
</table></div>

<h3>10.4 电压稳定与发电机模型</h3>
<p>电压稳定研究负荷端电压能否维持在可接受范围。无功不足时，负荷端电压持续下降，P-V 曲线的鼻点就是电压稳定极限；越过鼻点会发生电压崩溃。措施包括无功补偿、调压、低压减载、增加输电通道等。</p>

<p>同步发电机在短路与稳定计算中常用不同阶段的电势与电抗：稳态用 E<sub>q</sub>、X<sub>d</sub>；暂态用 E′_q、X′_d；次暂态用 E″_q、X″_d。派克变换把 abc 三相坐标变换到 dq<sub>0</sub> 坐标，使转子位置变化引起的时变电感变成常数，是建立发电机方程的基础。考研中更重要的是记住各电势、电抗的物理含义和适用场景，而不是推导派克矩阵。</p>

<h2>十一、五类题型专项</h2>
<p>下面按考研常见难度给出题目，答案折叠在题目下方。建议先自己写，再展开对照；选择题要能说出每个错误选项错在哪里，简答题要能列出 3～5 个要点。</p>

<h3>11.1 选择题</h3>
<details><summary>1. 中性点直接接地方式适用于下列哪一电压等级？</summary><p><strong>答案：C。</strong>110 kV 及以上系统采用中性点直接接地，以降低设备绝缘水平；35 kV 及以下一般采用不接地或经消弧线圈接地。</p></details>
<details><summary>2. 升压变压器二次侧额定电压，当线路较长、阻抗较大时，通常比电网额定电压高多少？</summary><p><strong>答案：B。</strong>长线路、大阻抗时取 1.1 U<sub>N</sub>；短线路、小阻抗时取 1.05 U<sub>N</sub>。变压器二次侧额定电压是空载电压，抬高是为了补偿负载时的电压降落。</p></details>
<details><summary>3. 系统有功负荷增加，经过一次调频后，频率会怎样变化？</summary><p><strong>答案：B。</strong>一次调频是有差调节，频率会降低，但下降幅度比没有调速器时小；要恢复到额定频率必须依靠二次调频。</p></details>
<details><summary>4. 无限大电源供电系统发生三相短路，短路电流周期分量的幅值如何变化？</summary><p><strong>答案：B。</strong>无限大电源内阻抗为零，短路过程中周期分量幅值恒定；有限容量系统才会出现周期分量衰减。</p></details>
<details><summary>5. 下列无功补偿设备中，只能分级投切、不能连续调节的是？</summary><p><strong>答案：C。</strong>并联电容器通常按组投切；同步调相机、SVC、STATCOM 都可以连续调节，其中 SVC 与 STATCOM 响应更快。</p></details>
<details><summary>6. 隐极机、不计电阻、E 恒定时，静态稳定极限对应的功角是多少？</summary><p><strong>答案：C。</strong>P<sub>E</sub> = (E U / X) sinδ，δ = 90° 时 P<sub>E</sub> 达到最大；δ 超过 90° 后 dP<sub>E</sub>/dδ 为负，静态失稳。</p></details>
<details><summary>7. 下列措施中，提高暂态稳定最有效的是？</summary><p><strong>答案：B。</strong>快速切除故障可以直接减小加速面积，是最有效、最经济的暂稳措施；增大励磁、提高电压等级也有作用，但不如快速切除直接。</p></details>
<details><summary>8. 当 X<sub>1</sub>Σ = X<sub>2</sub>Σ 时，两相短路电流约为三相短路电流的多少倍？</summary><p><strong>答案：B。</strong>I⁽²⁾ = √3 E/(X<sub>1</sub>Σ + X<sub>2</sub>Σ) = (√3/2) I⁽³⁾ ≈ 0.866 I⁽³⁾。</p></details>

<h3>11.2 填空题</h3>
<details><summary>1. 电力系统由____、____、____、____、____组成。</summary><p><strong>答案：</strong>发电、输电、变电、配电、用电。</p></details>
<details><summary>2. 标幺值等于____除以____；基准电流 I<sub>B</sub> = ____。</summary><p><strong>答案：</strong>实际值、基准值；S<sub>B</sub> / (√3 U<sub>B</sub>)。</p></details>
<details><summary>3. 电压降落的纵分量 ΔU = ____，横分量 δU = ____。</summary><p><strong>答案：</strong>(P R + Q X) / U；(P X − Q R) / U。用末端功率时取末端电压，用首端功率时取首端电压。</p></details>
<details><summary>4. 一次调频是____调节，二次调频在调频容量足够时可实现____调节。</summary><p><strong>答案：</strong>有差；无差。</p></details>
<details><summary>5. 对称分量法把不对称三相量分解为____、____、____。</summary><p><strong>答案：</strong>正序分量、负序分量、零序分量。</p></details>
<details><summary>6. 三相短路冲击电流 i<sub>sh</sub> = ____ I″；当 K<sub>sh</sub> = 1.8 时，i<sub>sh</sub> = ____ I″。</summary><p><strong>答案：</strong>√2 K<sub>sh</sub>；2.55。</p></details>
<details><summary>7. 静态稳定储备系数 K<sub>p</sub>% = ____。</summary><p><strong>答案：</strong>(P<sub>max</sub> − P<sub>0</sub>) / P<sub>0</sub> × 100%。正常运行时一般要求 15%～20%。</p></details>
<details><summary>8. 等面积定则中，加速面积____减速面积时，系统暂态稳定。</summary><p><strong>答案：</strong>小于等于。相等时为临界状态，对应极限切除角。</p></details>

<h3>11.3 判断题</h3>
<details><summary>1. 变压器二次侧额定电压就是带额定负荷时的二次侧端电压。</summary><p><strong>答案：×。</strong>二次侧额定电压是空载时的端电压，带负荷后会有电压降落。</p></details>
<details><summary>2. 线路电抗随导线半径增大而增大。</summary><p><strong>答案：×。</strong>x<sub>1</sub> = 0.1445 lg(D<sub>m</sub>/r) + 0.0157，半径 r 增大，电抗减小。</p></details>
<details><summary>3. 无功功率应尽量远距离输送，以提高经济性。</summary><p><strong>答案：×。</strong>无功应分层分区、就地平衡，远距离输送会增加网损和电压降落。</p></details>
<details><summary>4. 三相短路电流一定大于单相接地短路电流。</summary><p><strong>答案：×。</strong>单相接地电流 I⁽¹⁾ = 3E/(2X<sub>1</sub>Σ + X<sub>0</sub>Σ)，当 X<sub>0</sub>Σ &lt; X<sub>1</sub>Σ 时可能大于三相短路电流。</p></details>
<details><summary>5. 牛顿-拉夫逊潮流计算具有平方收敛特性。</summary><p><strong>答案：√。</strong>在初值接近真解时，牛顿法误差按平方速度下降；但初值不好时可能不收敛。</p></details>
<details><summary>6. 无限大电源供电系统短路时，短路电流周期分量幅值恒定。</summary><p><strong>答案：√。</strong>无限大电源内阻抗为零，母线电压恒定，周期分量不衰减。</p></details>
<details><summary>7. 当 X<sub>1</sub>Σ = X<sub>2</sub>Σ 时，两相短路电流是三相短路电流的 √3/2 倍。</summary><p><strong>答案：√。</strong>I⁽²⁾ = √3 E/(X<sub>1</sub>Σ + X<sub>2</sub>Σ) = (√3/2) I⁽³⁾。</p></details>
<details><summary>8. 提高系统运行电压水平可以降低网络有功损耗。</summary><p><strong>答案：√。</strong>有功损耗与电压平方近似成反比，在允许范围内提高电压可降损。</p></details>

<h3>11.4 简答题</h3>
<details><summary>1. 电力系统中性点接地方式有哪些？各有什么特点？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>直接接地：适用于 110 kV 及以上，中性点电位固定，绝缘水平要求低；单相接地电流大，保护立即跳闸，可靠性较低。</li>
<li>不接地：适用于 35 kV 及以下、电容电流较小的系统；单相接地时线电压仍对称，可带故障运行约 2 h，但非故障相电压升高为线电压，绝缘要求高。</li>
<li>经消弧线圈接地：用电感电流补偿电容电流，减小弧光接地过电压；通常采用过补偿，避免全补偿谐振。</li>
<li>经小电阻接地：适用于城市配网和电缆线路，限制过电压，便于实现选择性接地保护，一般动作于跳闸。</li>
</ul>
<p>选择时要综合考虑绝缘水平、供电可靠性、过电压和继电保护。</p>
</details>

<details><summary>2. 为什么无功功率要分层分区、就地平衡？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>无功长距离输送会在网络电抗上产生大量无功损耗，降低输送效率；</li>
<li>无功流动会加大电压降落，导致末端电压偏低，影响电压质量；</li>
<li>无功占用线路容量，降低有功输送能力；</li>
<li>就地补偿可以减少流过变压器的无功，降低变压器损耗和绝缘要求；</li>
<li>分层分区平衡便于各地区独立控制电压，避免无功大范围流动引发稳定问题。</li>
</ul>
</details>

<details><summary>3. 电力系统电压调整有哪些措施？各自适用什么场合？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>改变发电机励磁：调节 E<sub>q</sub>，改变无功出力；不增加设备，但受发电机容量限制，适用于孤立系统或近区调压。</li>
<li>改变变压器变比：改变电压比，重新分配无功；普通变压器需停电调档，有载调压可带负荷，适用于中枢点和变电站。</li>
<li>并联无功补偿：电容器分级投切、调相机连续调节、SVC/STATCOM 快速调节；适用于负荷侧和电压薄弱点。</li>
<li>串联电容补偿：减小线路电抗，降低电压降落；适用于长距离、重负荷线路，需注意次同步振荡。</li>
<li>改善线路参数：增大导线截面、采用分裂导线、提高电压等级；效果显著但投资大，主要在规划阶段考虑。</li>
</ul>
<p>中枢点还可采用逆调压、顺调压、恒调压三种方式。</p>
</details>

<details><summary>4. 一次调频与二次调频有什么区别？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>一次调频由调速器自动完成，响应快（秒级），是有差调节，频率不能完全恢复；</li>
<li>二次调频由调频器或 AGC 完成，响应慢（分钟级），调频容量足够时可实现无差调节；</li>
<li>一次调频主要平衡随机小负荷波动，二次调频负责恢复频率、承担计划外负荷并兼顾经济分配；</li>
<li>一次调频的调节范围受调差系数和旋转备用限制，二次调频可覆盖更大的负荷变化。</li>
</ul>
</details>

<details><summary>5. 短路计算的目的是什么？短路有哪些危害？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>目的：选择电气设备、整定继电保护、设计主接线、校验热稳定与动稳定、为稳定计算提供故障参数。</li>
<li>危害：电动力效应使导体变形；热效应使设备过热烧毁；短路点电压骤降影响用户；不对称电流产生负序与零序，干扰通信、损害电机；严重时破坏系统稳定，造成大面积停电。</li>
</ul>
</details>

<details><summary>6. 对称分量法的基本原理是什么？序网如何连接？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>把不对称三相量分解为正序、负序、零序三组对称分量，利用运算子 a 进行线性变换；</li>
<li>正序网含电源，负序网和零序网无电源；零序电流能否流通取决于变压器接线和中性点接地方式；</li>
<li>单相接地：三序网串联；两相短路：正、负序网并联；两相接地：三序网并联；三相短路：仅正序网；</li>
<li>用正序等效定则，把各种故障归结为 I<sub>a1</sub> = EΣ/(X<sub>1</sub>Σ + XΔ)，再乘故障相电流系数。</li>
</ul>
</details>

<details><summary>7. 提高电力系统暂态稳定的措施有哪些？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>快速切除故障：减小加速面积，是最有效的措施；</li>
<li>自动重合闸：瞬时故障切除后快速恢复线路，增大减速面积；</li>
<li>强行励磁、快速励磁：提高故障后发电机电势，增大故障后功角特性幅值；</li>
<li>电气制动、快关汽门：减小故障期间的加速功率；</li>
<li>串联电容补偿、改善网络结构：减小电抗，提高输送能力；</li>
<li>采用 PSS、FACTS 等附加阻尼控制，抑制低频振荡。</li>
</ul>
</details>

<details><summary>8. 静态稳定与暂态稳定有什么区别？</summary>
<p><strong>答题要点：</strong></p>
<ul>
<li>静态稳定研究小扰动，暂态稳定研究大扰动；</li>
<li>静态稳定用线性化模型和整步功率系数判断，判据是 dP/dδ &gt; 0；暂态稳定用等面积定则或数值仿真，判据是 A<sub>acc</sub> ≤ A<sub>dec</sub>；</li>
<li>静态稳定关注功角、电压和阻尼，暂态稳定关注首摆稳定和极限切除时间；</li>
<li>提高静态稳定主要靠减小电抗、提高电势和 PSS；提高暂态稳定主要靠快速切除故障、重合闸和制动。</li>
</ul>
</details>

<h3>11.5 计算题</h3>
<details><summary>1. 变压器参数计算：S<sub>N</sub> = 31.5 MVA，U<sub>N</sub> = 110/10.5 kV，ΔP<sub>k</sub> = 190 kW，U<sub>k</sub>% = 10.5，ΔP<sub>0</sub> = 30 kW，I<sub>0</sub>% = 0.8。求归算到高压侧的 R<sub>T</sub>、X<sub>T</sub>、G<sub>T</sub>、B<sub>T</sub>。</summary>
<p><strong>解：</strong>直接代入变压器参数公式：</p>
<div class="formula">R<sub>T</sub> = 190 × 110^2 / (1000 × 31.5^2) = 2.32 Ω<br>X<sub>T</sub> = 10.5 × 110^2 / (100 × 31.5) = 40.3 Ω<br>G<sub>T</sub> = 30 / (1000 × 110^2) = 2.48 × 10^−6 S<br>B<sub>T</sub> = 0.8 × 31.5 / (100 × 110^2) = 2.08 × 10^−5 S</div>
<p>以上参数均归算到 110 kV 侧。若要归算到 10.5 kV 侧，乘以变比平方 (10.5/110)^2 即可。注意 ΔP<sub>k</sub>、ΔP<sub>0</sub> 用 kW，U<sub>N</sub> 用 kV，S<sub>N</sub> 用 MVA，否则会差 1000 倍。</p>
</details>

<details><summary>2. 标幺制短路计算：S<sub>G</sub> = 30 MVA，X<sub>d</sub>″ = 0.2；S<sub>T</sub> = 31.5 MVA，U<sub>k</sub>% = 10.5；线路 50 km，x = 0.4 Ω/km；取 S<sub>B</sub> = 100 MVA，U<sub>B</sub> = 115 kV，E″ = 1.0。求线路末端三相短路电流、短路容量和冲击电流（K<sub>sh</sub> = 1.8）。</summary>
<p><strong>解：</strong>先求各元件标幺电抗：</p>
<div class="formula">X<sub>G</sub>* = 0.2 × 100 / 30 = 0.667<br>X<sub>T</sub>* = 0.105 × 100 / 31.5 = 0.333<br>X<sub>L</sub> = 0.4 × 50 = 20 Ω，Z<sub>B</sub> = 115^2 / 100 = 132.25 Ω<br>X<sub>L</sub>* = 20 / 132.25 = 0.151<br>X<sub>Σ</sub>* = 0.667 + 0.333 + 0.151 = 1.151</div>
<p>再求电流与短路容量：</p>
<div class="formula">I* = 1.0 / 1.151 = 0.869<br>I<sub>B</sub> = 100 / (√3 × 115) = 0.502 kA<br>I″ = 0.869 × 0.502 = 0.436 kA<br>S<sub>k</sub> = 100 / 1.151 = 86.9 MVA<br>i<sub>sh</sub> = 2.55 × 0.436 = 1.11 kA</div>
<p>若取 E″ = 1.05，则上述电流和短路容量都乘以 1.05。冲击电流系数 K<sub>sh</sub> = 1.8 对应 i<sub>sh</sub> = 2.55 I″；若 K<sub>sh</sub> = 1.9，则用 2.69 I″。</p>
</details>

<details><summary>3. 电压降落与功率损耗：110 kV 线路 R = 10 Ω，X = 40 Ω，末端负荷 S<sub>2</sub> = 20 + j10 MVA，末端电压 U<sub>2</sub> = 105 kV。求首端电压、电压损耗和线路功率损耗（忽略充电功率）。</summary>
<p><strong>解：</strong>先求电压降落的两个分量：</p>
<div class="formula">ΔU = (P<sub>2</sub> R + Q<sub>2</sub> X) / U<sub>2</sub> = (20 × 10 + 10 × 40) / 105 = 5.71 kV<br>δU = (P<sub>2</sub> X − Q<sub>2</sub> R) / U<sub>2</sub> = (20 × 40 − 10 × 10) / 105 = 6.67 kV<br>U<sub>1</sub> = √((105 + 5.71)^2 + 6.67^2) = 110.9 kV</div>
<p>电压损耗为 110.9 − 105 = 5.9 kV，约为额定电压的 5.4%。功率损耗为：</p>
<div class="formula">ΔS<sub>L</sub> = (20^2 + 10^2) / 105^2 × (10 + j40) = 0.454 + j1.814 MVA<br>S<sub>1</sub> = S<sub>2</sub> + ΔS<sub>L</sub> = 20.454 + j11.814 MVA</div>
<p>注意 ΔU 只是纵分量，电压损耗是首末端幅值差；两者不要混。若题目给出首端功率和首端电压，把下标 2 换成 1 即可。</p>
</details>

<details><summary>4. 频率调整：系统 K<sub>G</sub> = 400 MW/Hz，K<sub>L</sub> = 100 MW/Hz，负荷突然增加 ΔP<sub>0</sub> = 100 MW。求一次调频后的频率偏差、发电机增发功率和负荷减少量；若二次调频把频率恢复，最终需要增加多少发电出力？</summary>
<p><strong>解：</strong>系统单位调节功率为：</p>
<div class="formula">K = K<sub>G</sub> + K<sub>L</sub> = 400 + 100 = 500 MW/Hz<br>Δf = −ΔP<sub>0</sub> / K = −100 / 500 = −0.2 Hz</div>
<p>一次调频后：</p>
<div class="formula">ΔP<sub>G</sub> = −K<sub>G</sub> Δf = 400 × 0.2 = 80 MW<br>ΔP<sub>L</sub> = K<sub>L</sub> Δf = 100 × (−0.2) = −20 MW</div>
<p>发电机增发 80 MW，负荷因频率下降减少 20 MW，两者之和正好平衡 100 MW 的负荷增量。二次调频要恢复额定频率，最终发电出力需增加 100 MW；一次调频的 80 MW 是动态过程中的贡献，随着频率恢复，二次调频逐步接管。若二次调频只能增加 60 MW，则稳态偏差为 Δf = −(100 − 60)/500 = −0.08 Hz。</p>
</details>

<details><summary>5. 等面积定则：P<sub>T</sub> = 0.8，P<sub>I</sub> max = P<sub>III</sub> max = 1.5，P<sub>II</sub> max = 0.3。求故障前稳态功角 δ_0 和极限切除角 δ_cm。</summary>
<p><strong>解：</strong>故障前稳态功角由 P<sub>T</sub> = P<sub>I</sub> max sinδ_0 求出：</p>
<div class="formula">δ_0 = arcsin(0.8 / 1.5) = 32.2°<br>δ_max = 180° − δ_0 = 147.8°</div>
<p>因为故障后网络与故障前相同，P<sub>III</sub> max = P<sub>I</sub> max，所以 δ_max = 180° − δ_0。代入极限切除角公式，角度用弧度：</p>
<div class="formula">cosδ_cm = [P<sub>T</sub>(δ_max − δ_0) + P<sub>IIImax</sub> cosδ_max − P<sub>IImax</sub> cosδ_0] / (P<sub>IIImax</sub> − P<sub>IImax</sub>)<br>= [0.8 × 2.017 + 1.5 × (−0.846) − 0.3 × 0.846] / (1.5 − 0.3)<br>= 0.0904 / 1.2 = 0.0753<br>δ_cm = arccos(0.0753) = 85.7°</div>
<p>所以极限切除角约为 85.7°。若实际切除角小于 δ_cm，A<sub>acc</sub> ≤ A<sub>dec</sub>，系统暂态稳定；若大于 δ_cm，则失稳。若故障后网络减弱，P<sub>III</sub> max 小于 P<sub>I</sub> max，要先用 δ_0′ = arcsin(P<sub>T</sub>/P<sub>IIImax</sub>) 求 δ_max，再代入公式。</p>
</details>

<h2>十二、公式速查表与易错点</h2>
<h3>12.1 核心公式速查</h3>
<div class="table-wrap"><table>
<thead><tr><th>主题</th><th>公式</th><th>说明</th></tr></thead>
<tbody>
<tr><td>标幺值基准</td><td>I<sub>B</sub> = S<sub>B</sub>/(√3U<sub>B</sub>)，Z<sub>B</sub> = U<sub>B</sub>^2/S<sub>B</sub></td><td>三相功率与线电压配套使用</td></tr>
<tr><td>标幺值换算</td><td>X<sub>*new</sub> = X<sub>*old</sub> (S<sub>Bnew</sub>/S<sub>Bold</sub>)(U<sub>Bold</sub>/U<sub>Bnew</sub>)^2</td><td>不同基准间的折算</td></tr>
<tr><td>线路电抗</td><td>x<sub>1</sub> = 0.1445 lg(D<sub>m</sub>/r) + 0.0157</td><td>Ω/km，50 Hz</td></tr>
<tr><td>线路电纳</td><td>b<sub>1</sub> = 7.58/lg(D<sub>m</sub>/r) × 10^−6</td><td>S/km</td></tr>
<tr><td>变压器电阻</td><td>R<sub>T</sub> = ΔP<sub>k</sub> U<sub>N</sub>^2/(1000S<sub>N</sub>^2)</td><td>ΔP<sub>k</sub> kW，U<sub>N</sub> kV，S<sub>N</sub> MVA</td></tr>
<tr><td>变压器电抗</td><td>X<sub>T</sub> = U<sub>k</sub>% U<sub>N</sub>^2/(100S<sub>N</sub>)</td><td>归算到 U<sub>N</sub> 侧</td></tr>
<tr><td>电压降落</td><td>ΔU = (PR + QX)/U，δU = (PX − QR)/U</td><td>纵分量、横分量</td></tr>
<tr><td>功率损耗</td><td>ΔS = (P^2 + Q^2)/U^2 (R + jX)</td><td>线路与变压器串联支路通用</td></tr>
<tr><td>无功补偿</td><td>Q<sub>C</sub> = P(tanφ1 − tanφ2)</td><td>提高功率因数</td></tr>
<tr><td>频率偏差</td><td>Δf = −ΔP<sub>0</sub>/(K<sub>G</sub> + K<sub>L</sub>)</td><td>一次调频</td></tr>
<tr><td>短路电流</td><td>I* = E*/XΣ*，I″ = I* I<sub>B</sub></td><td>标幺值法</td></tr>
<tr><td>短路容量</td><td>S<sub>k</sub> = S<sub>B</sub>/XΣ* = √3 U<sub>av</sub> I″</td><td>MVA</td></tr>
<tr><td>冲击电流</td><td>i<sub>sh</sub> = √2 K<sub>sh</sub> I″，K<sub>sh</sub> = 1 + e^(−0.01/T<sub>a</sub>)</td><td>K<sub>sh</sub> = 1.8 时 i<sub>sh</sub> = 2.55 I″</td></tr>
<tr><td>序网附加电抗</td><td>单相 X<sub>2</sub>Σ + X<sub>0</sub>Σ；两相 X<sub>2</sub>Σ；两相接地 X<sub>2</sub>Σ∥X<sub>0</sub>Σ</td><td>正序等效定则</td></tr>
<tr><td>功角特性</td><td>P<sub>E</sub> = (E U/X) sinδ</td><td>隐极机、不计电阻</td></tr>
<tr><td>静态稳定</td><td>dP<sub>E</sub>/dδ &gt; 0，δ &lt; 90°</td><td>K<sub>p</sub>% = (P<sub>max</sub> − P<sub>0</sub>)/P<sub>0</sub> × 100%</td></tr>
<tr><td>等面积定则</td><td>A<sub>acc</sub> = ∫(P<sub>T</sub> − P<sub>II</sub>)dδ，A<sub>dec</sub> = ∫(P<sub>III</sub> − P<sub>T</sub>)dδ</td><td>稳定判据 A<sub>acc</sub> ≤ A<sub>dec</sub></td></tr>
<tr><td>极限切除角</td><td>cosδ_cm = [P<sub>T</sub>(δ_max − δ_0) + P<sub>IIImax</sub> cosδ_max − P<sub>IImax</sub> cosδ_0]/(P<sub>IIImax</sub> − P<sub>IImax</sub>)</td><td>δ_max = 180° − δ_0′</td></tr>
<tr><td>分接头</td><td>U<sub>1t</sub> = U<sub>1</sub>′ U<sub>2N</sub>/U<sub>2</sub>_desired</td><td>最大、最小负荷分别校验</td></tr>
<tr><td>消弧线圈</td><td>K = (I<sub>L</sub> − I<sub>C</sub>)/I<sub>C</sub> × 100%</td><td>K &gt; 0 为过补偿</td></tr>
</tbody>
</table></div>

<h3>12.2 高频易错点</h3>
<ol>
<li><strong>变压器二次侧额定电压是空载电压</strong>，不是带负荷时的端电压；长线路取 1.1 U<sub>N</sub>，短线路取 1.05 U<sub>N</sub>。</li>
<li><strong>ΔU 与电压损耗不是一回事</strong>：ΔU 是电压降落的纵分量，电压损耗是首末端电压幅值差。</li>
<li>标幺制中三相功率与线电压公式和单相形式相同，但基准值必须配套；多电压级归算时基准电压比要与变压器变比一致。</li>
<li>无功补偿电容器的输出无功与电压平方成正比，电压下降时补偿效果会减弱，校验时要按实际电压修正。</li>
<li>一次调频是有差调节，不能单独把频率恢复到额定值；二次调频才能实现无差。</li>
<li>冲击系数 K<sub>sh</sub> 不是固定 1.8，它由 Ta = XΣ/(ωRΣ) 决定；1.8 只是工程近似。</li>
<li>单相接地电流不一定小于三相短路电流，取决于 X<sub>0</sub>Σ/X<sub>1</sub>Σ 的比值。</li>
<li>零序电流能否流通取决于变压器接线和中性点接地方式；Δ 侧零序电流不能流出。</li>
<li>等面积定则的 δ_max 要按故障后功角特性确定：δ_0′ = arcsin(P<sub>T</sub>/P<sub>IIImax</sub>)，δ_max = 180° − δ_0′。</li>
<li>静态稳定极限 δ = 90° 只适用于隐极机、不计电阻、E 恒定的简化模型；凸极机要考虑磁阻功率。</li>
<li>提高暂态稳定最有效的措施是快速切除故障，不是单纯增大励磁；励磁主要提高故障后功率幅值。</li>
<li>短路计算中，电抗器、发电机、变压器的标幺值折算基准不同，必须统一到 S<sub>B</sub>、U<sub>B</sub> 下再相加。</li>
</ol>

<h3>12.3 考前十条速记</h3>
<ul>
<li>发电机 +5%，变压器二次侧长线 +10%、短线 +5%，二次侧额定电压是空载电压。</li>
<li>线路电抗 0.1445 lg(D<sub>m</sub>/r) + 0.0157；分裂导线用等效半径 r<sub>eq</sub>。</li>
<li>电压降落：纵分量 (PR + QX)/U，横分量 (PX − QR)/U。</li>
<li>无功分层分区、就地平衡；电压调整五措施：励磁、变比、补偿、串联电容、线路参数。</li>
<li>频率：K = K<sub>G</sub> + K<sub>L</sub>，一次调频 Δf = −ΔP<sub>0</sub>/K，二次调频可无差。</li>
<li>短路：I* = E*/XΣ*，S<sub>k</sub> = S<sub>B</sub>/XΣ*，i<sub>sh</sub> = 2.55 I″（K<sub>sh</sub> = 1.8）。</li>
<li>序网：单相串联、两相并联、两相接地三序并联；单相三倍、两相根号三。</li>
<li>静态稳定：P<sub>E</sub> = (E U/X) sinδ，δ &lt; 90°，K<sub>p</sub>% = (P<sub>max</sub> − P<sub>0</sub>)/P<sub>0</sub>。</li>
<li>暂态稳定：A<sub>acc</sub> ≤ A<sub>dec</sub>；快速切除故障最有效；δ_max = 180° − δ_0′。</li>
<li>大题步骤：画等值电路 → 选基准 → 化简 → 代公式 → 校验单位与量纲。</li>
</ul>

<blockquote><p>电力系统分析的大题，步骤分往往比结果分更值钱。先画等值电路，再判断连续性、序网或面积关系，最后代公式；每一步都写清楚，即使最后算错，也能拿到大部分过程分。</p></blockquote>

<p>复习建议：第一轮按章节把公式推导一遍，第二轮只做计算题与简答题，第三轮用上面的五类题型自测。遇到错题，回到“知识地图”定位它属于哪一块，再补对应公式和判据，而不是孤立地背答案。</p>

<h2>十三、专项习题索引（按考点分组）</h2>
<p>这一节与第十一章的题型专项互补：按“参数 → 潮流调压调频 → 短路序网 → 接地稳定”四个考点重新编排，共 12 题。题干直接可见，答案与解析默认收起，点击题干下方的「查看答案解析」标签展开。建议先独立完成，再核对步骤。</p>

<h3>考点 1　元件参数与等值电路</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">1</span>发电机 S<sub>N</sub> = 50 MVA，X<sub>d</sub>″ = 0.25（以自身容量为基准）。取 S<sub>B</sub> = 100 MVA、U<sub>B</sub> = 10.5 kV（等于发电机额定电压），求归算后的标幺电抗 X<sub>G</sub>*。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">X<sub>G</sub>* = X<sub>d</sub>″ × (S<sub>B</sub>/S<sub>N</sub>) × (U<sub>N</sub>/U<sub>B</sub>)^2 = 0.25 × (100/50) × 1 = 0.5</div>
      <p>因为基准电压与额定电压相同，电压比项为 1。若 U<sub>B</sub> 与 U<sub>N</sub> 不同，必须带上 (U<sub>N</sub>/U<sub>B</sub>)^2；漏掉这一项是标幺值换算最常见的错误。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">2</span>填空题：线路单位长度电抗 x<sub>1</sub> = ____ Ω/km；采用分裂导线的主要目的是 ____。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：</strong>0.1445 lg(D<sub>m</sub>/r) + 0.0157；增大导线等效半径，减小线路电抗（同时抑制电晕）。</p>
      <p><strong>解析：</strong>电抗与 lg(D<sub>m</sub>/r) 成正比，增大 r 只能有限地减小电抗；分裂导线用等效半径取代实际半径，可显著减小电抗并提高输送能力。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">3</span>判断题：变压器二次侧额定电压等于带额定负荷时的二次侧端电压。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：×。</strong></p>
      <p><strong>解析：</strong>二次侧额定电压是空载电压。带负荷后二次侧存在电压降落，所以出厂时把二次侧额定电压抬高 5% 或 10% 来补偿；长线路、大阻抗取 1.1U<sub>N</sub>，短线路取 1.05U<sub>N</sub>。</p>
    </div>
  </details>
</div>

<h3>考点 2　潮流、调压与调频</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">4</span>110 kV 线路 R = 10 Ω、X = 40 Ω，末端负荷 S<sub>2</sub> = 20 + j10 MVA，末端电压 U<sub>2</sub> = 105 kV。求电压降落的纵分量 ΔU 与横分量 δU。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">ΔU = (P<sub>2</sub> R + Q<sub>2</sub> X)/U<sub>2</sub> = (20 × 10 + 10 × 40)/105 = 5.71 kV<br>δU = (P<sub>2</sub> X − Q<sub>2</sub> R)/U<sub>2</sub> = (20 × 40 − 10 × 10)/105 = 6.67 kV</div>
      <p>注意 ΔU 是纵分量，不是首末端电压幅值之差；电压损耗还应考虑 δU 的影响。若改用首端功率，则分母换成首端电压。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">5</span>系统 K<sub>G</sub> = 400 MW/Hz，K<sub>L</sub> = 100 MW/Hz，负荷突然增加 ΔP<sub>0</sub> = 100 MW。求一次调频后的频率偏差 Δf。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">K = K<sub>G</sub> + K<sub>L</sub> = 400 + 100 = 500 MW/Hz<br>Δf = −ΔP<sub>0</sub> / K = −100 / 500 = −0.2 Hz</div>
      <p>一次调频是有差调节，频率下降 0.2 Hz。若要恢复到额定频率，必须由二次调频增加出力；若二次调频只增发 60 MW，稳态偏差变为 −(100−60)/500 = −0.08 Hz。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">6</span>简答题：电力系统电压调整有哪些措施？各自适用于什么场合？</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答题要点：</strong></p>
      <ul>
        <li>改变发电机励磁：调节 E<sub>q</sub> 改变无功出力，不增加设备，适用于孤立系统或近区调压。</li>
        <li>改变变压器变比：普通变压器停电调档，有载调压可带负荷调压，适用于中枢点和变电站。</li>
        <li>并联无功补偿：电容器分级投切、调相机连续调节、SVC/STATCOM 快速调节，适用于负荷侧和电压薄弱点。</li>
        <li>串联电容补偿：减小线路电抗、降低电压降落，适用于长距离重负荷线路。</li>
        <li>改善线路参数：增大截面、分裂导线、提高电压等级，效果显著但投资大，主要在规划阶段采用。</li>
      </ul>
      <p>中枢点还可配合逆调压、顺调压、恒调压三种方式。</p>
    </div>
  </details>
</div>

<h3>考点 3　短路与序网</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">7</span>取 S<sub>B</sub> = 100 MVA、U<sub>B</sub> = 115 kV，短路点等值电抗 XΣ* = 1.0，E* = 1.05，K<sub>sh</sub> = 1.8。求短路电流 I″、短路容量 S<sub>k</sub> 和冲击电流 i<sub>sh</sub>。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">I* = E*/XΣ* = 1.05 / 1.0 = 1.05<br>I<sub>B</sub> = S<sub>B</sub>/(√3 U<sub>B</sub>) = 100/(√3 × 115) = 0.502 kA<br>I″ = 1.05 × 0.502 = 0.527 kA<br>S<sub>k</sub> = √3 U<sub>B</sub> I″ = √3 × 115 × 0.527 = 105 MVA<br>i<sub>sh</sub> = 2.55 I″ = 2.55 × 0.527 = 1.34 kA</div>
      <p>若取 E* = 1.0，则 S<sub>k</sub> = S<sub>B</sub>/XΣ* = 100 MVA。冲击系数 K<sub>sh</sub> = 1.8 对应 i<sub>sh</sub> = 2.55I″；K<sub>sh</sub> = 1.9 时改用 2.69。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">8</span>填空题：单相接地时三序网 ____，XΔ = ____，故障相电流 I<sub>f</sub> = ____ I<sub>a1</sub>；两相短路时正、负序网 ____，XΔ = ____，I<sub>f</sub> = ____ I<sub>a1</sub>。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：</strong>串联；X<sub>2</sub>Σ + X<sub>0</sub>Σ；3；并联；X<sub>2</sub>Σ；√3。</p>
      <p><strong>解析：</strong>这就是正序等效定则：先按 I<sub>a1</sub> = EΣ/(X<sub>1</sub>Σ + XΔ) 求正序电流，再乘故障相系数 m。三相短路 m = 1，单相接地 m = 3，两相短路 m = √3，两相接地 m 按并联公式计算。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">9</span>判断题：三相短路电流一定大于单相接地短路电流。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：×。</strong></p>
      <p><strong>解析：</strong>设 X<sub>1</sub>Σ = X<sub>2</sub>Σ，单相接地电流 I⁽¹⁾ = 3E/(2X<sub>1</sub>Σ + X<sub>0</sub>Σ)。当 X<sub>0</sub>Σ 小于 X<sub>1</sub>Σ 时，单相接地电流大于三相短路电流；反之才小于。因此要根据零序网强弱比较，不能一概而论。</p>
    </div>
  </details>
</div>

<h3>考点 4　接地方式与稳定性</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">10</span>简答题：中性点不接地系统发生单相接地时有哪些现象？应如何处理？</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答题要点：</strong></p>
      <ul>
        <li>故障相电压降为零，非故障相电压升高为线电压，但线电压仍对称，三相负荷可继续运行。</li>
        <li>接地点流过线路对地电容电流，数值较小，一般允许带故障运行约 2 小时。</li>
        <li>电弧间歇性重燃会产生弧光接地过电压，可能损坏绝缘，应尽快查找并隔离故障线路。</li>
        <li>电容电流较大时，采用消弧线圈补偿，工程上取过补偿 5%～10%，避免全补偿谐振。</li>
      </ul>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">11</span>隐极机经电抗 X = 0.8 与无穷大母线相连，E = 1.2，U = 1.0，正常运行功率 P<sub>0</sub> = 0.8。求 P<sub>max</sub>、δ = 30° 时的电磁功率 P<sub>E</sub> 和静态稳定储备系数 K<sub>p</sub>%。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">P<sub>max</sub> = E U / X = 1.2 × 1.0 / 0.8 = 1.5<br>P<sub>E</sub>(30°) = 1.5 × sin<sub>30</sub>° = 0.75<br>K<sub>p</sub>% = (P<sub>max</sub> − P<sub>0</sub>)/P<sub>0</sub> × 100% = (1.5 − 0.8)/0.8 × 100% = 87.5%</div>
      <p>静态稳定判据是 dP<sub>E</sub>/dδ &gt; 0，即 δ &lt; 90°。储备系数正常要求 15%～20%，事故后允许降到 10%；本题储备充足。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">12</span>简答题：等面积定则的暂态稳定判据是什么？列出三条提高暂态稳定的措施并说明理由。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答题要点：</strong></p>
      <ul>
        <li>判据：加速面积 A<sub>acc</sub> 小于等于减速面积 A<sub>dec</sub>，即 A<sub>acc</sub> ≤ A<sub>dec</sub>；相等时为临界状态，对应极限切除角 δ_cm。</li>
        <li>快速切除故障：直接减小加速面积，是最有效、最经济的措施。</li>
        <li>自动重合闸：瞬时故障切除后快速恢复线路，增大减速面积。</li>
        <li>强行励磁与快速励磁：提高故障后发电机电势，抬高故障后功角特性幅值，增大减速面积。</li>
        <li>电气制动、快关汽门、串联电容补偿、PSS 等也可提高暂态稳定或抑制低频振荡。</li>
      </ul>
    </div>
  </details>
</div>
`
  }
);
