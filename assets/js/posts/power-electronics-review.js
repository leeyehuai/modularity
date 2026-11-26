/* 文章模块：电力电子技术复习提纲：核心公式与常考点 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'power-electronics-review',
    title: '电力电子技术复习提纲：核心公式与常考点',
    desc: '按「器件 → 整流 → 逆变 → 斩波 → PWM」的主线整理的计算公式、波形要点、答题步骤与易错清单，适合期末突击与考前速查。',
    major: '工科',
    category: '电力电子',
    tags: ['电力电子', '复习提纲', '电气工程'],
    date: '2026-11-26',
    minutes: 14,
    content: `
<p>电力电子技术的考点高度集中：器件特性、四种变换电路的输出公式、波形分析，以及逆变与斩波的条件判断。这份提纲按教材主线排列，先给框架，再给公式，最后是答题模板和易错点。</p>

<h2>一、课程主线：四种基本变换</h2>
<p>整门课可以压缩成一张表。考试题基本都能对应到其中某一行，先判断题目属于哪一类，再调用对应公式。</p>

<div class="table-wrap"><table>
<thead><tr><th>变换</th><th>典型电路</th><th>核心考点</th></tr></thead>
<tbody>
<tr><td>AC → DC 整流</td><td>单相半波 / 全控桥 / 半控桥，三相半波 / 三相全控桥</td><td>Ud 公式、移相范围、电流连续与断续、波形绘制</td></tr>
<tr><td>DC → AC 逆变</td><td>有源逆变、电压型 / 电流型逆变、SPWM 逆变</td><td>逆变条件、逆变失败原因、调制比与谐波</td></tr>
<tr><td>DC → DC 斩波</td><td>Buck、Boost、Buck-Boost</td><td>输出公式、电流连续条件、临界电感</td></tr>
<tr><td>AC → AC 变换</td><td>交流调压、交交变频</td><td>相位控制与通断控制的区别</td></tr>
</tbody>
</table></div>

<h2>二、器件部分（必背）</h2>
<h3>1. 按控制能力分类</h3>
<ul>
<li><strong>不可控</strong>：电力二极管，通断完全由主电路决定；</li>
<li><strong>半控</strong>：晶闸管（SCR），门极只能控制开通，不能控制关断；</li>
<li><strong>全控</strong>：GTR、GTO、电力 MOSFET、IGBT，开通与关断均可控。</li>
</ul>

<h3>2. 晶闸管的导通与关断</h3>
<p>这是选择题和判断题的高频点，两条必须能默写：</p>
<ul>
<li><strong>导通条件</strong>：阳极电位高于阴极（承受正向电压），且门极有足够的触发电流。两者缺一不可。</li>
<li><strong>关断条件</strong>：阳极电流降到维持电流以下（或阳极承受反向电压），晶闸管自行关断。</li>
</ul>
<p><strong>擎住电流</strong>与<strong>维持电流</strong>容易混淆：擎住电流是触发后撤去门极信号仍能保持导通的最小阳极电流，数值大于维持电流。触发脉冲必须足够宽，使电流上升到擎住电流以上。</p>

<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="晶闸管阳极伏安特性曲线">
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">晶闸管阳极伏安特性</text>

  <line x1="360" y1="46" x2="360" y2="330" stroke="var(--text-2)" stroke-width="1.5"/>
  <line x1="80" y1="200" x2="716" y2="200" stroke="var(--text-2)" stroke-width="1.5"/>
  <path d="M360 42 l-5 11 h10 Z" fill="var(--text-2)"/>
  <path d="M720 200 l-11 -5 v10 Z" fill="var(--text-2)"/>
  <text x="370" y="56" font-size="12" fill="var(--muted)">Ia</text>
  <text x="712" y="192" text-anchor="end" font-size="12" fill="var(--muted)">Uak</text>
  <text x="350" y="216" text-anchor="end" font-size="11.5" fill="var(--muted)">O</text>

  <path d="M360 200 C408 199 442 196 470 188" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M470 188 L396 152" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M396 200 C393 176 391 140 389 62" fill="none" stroke="var(--accent)" stroke-width="2.6"/>
  <path d="M360 200 C400 198 424 190 444 164" fill="none" stroke="#d97706" stroke-width="1.8" stroke-dasharray="6 4"/>
  <path d="M444 164 L396 176" fill="none" stroke="#d97706" stroke-width="1.1" stroke-dasharray="4 4"/>

  <path d="M360 200 C320 202 288 204 260 208" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M254 210 C248 242 244 286 240 330" fill="none" stroke="var(--accent)" stroke-width="2.4"/>

  <line x1="470" y1="188" x2="470" y2="218" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="470" y="234" text-anchor="middle" font-size="11.5" fill="var(--muted)">U<tspan baseline-shift="sub" font-size="70%">BO</tspan></text>
  <line x1="254" y1="210" x2="254" y2="200" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="248" y="192" text-anchor="middle" font-size="11.5" fill="var(--muted)">U<tspan baseline-shift="sub" font-size="70%">BR</tspan></text>

  <text x="470" y="86" font-size="12" fill="var(--accent)">正向导通区</text>
  <text x="466" y="170" font-size="11.5" fill="var(--muted)">I<tspan baseline-shift="sub" font-size="70%">g</tspan> = 0 的转折</text>
  <text x="448" y="156" text-anchor="end" font-size="11.5" fill="#d97706">I<tspan baseline-shift="sub" font-size="70%">g</tspan> &gt; 0</text>
  <text x="286" y="242" font-size="12" fill="var(--muted)">反向阻断区</text>
  <text x="232" y="322" text-anchor="end" font-size="12" fill="var(--muted)">反向击穿</text>

  <line x1="389" y1="178" x2="404" y2="178" stroke="var(--muted)" stroke-width="1"/>
  <line x1="389" y1="156" x2="404" y2="156" stroke="var(--muted)" stroke-width="1"/>
  <text x="408" y="182" font-size="11" fill="var(--muted)">I<tspan baseline-shift="sub" font-size="70%">H</tspan></text>
  <text x="408" y="148" font-size="11" fill="var(--muted)">I<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
</svg>
<figcaption>图 1　晶闸管阳极伏安特性：正向阻断区、正向导通区、反向阻断区与反向击穿区；U<sub>BO</sub> 为正向转折电压，U<sub>BR</sub> 为反向击穿电压，I<sub>L</sub> 为擎住电流，I<sub>H</sub> 为维持电流。</figcaption>
</figure>

<h3>3. 额定参数与选型</h3>
<p>晶闸管额定电压按正常工作峰值电压的 2~3 倍选取，额定电流以通态平均电流标定：</p>

<div class="formula">额定电压：U<sub>TN</sub> = (2 ~ 3) U<sub>TM</sub><br>额定电流：I<sub>T(AV)</sub> = I<sub>T</sub> / 1.57<br>其中 I<sub>T</sub> 为实际电流有效值，1.57 为正弦半波平均值与有效值之比</div>

<h3>4. du/dt 与 di/dt 的物理意义</h3>
<p>正向电压上升率过大，结电容充电电流会像门极电流一样使器件<strong>误导通</strong>；电流上升率过大，导通初期电流集中在门极附近的小区域，造成<strong>局部过热烧毁</strong>。抑制手段分别是 RC 缓冲电路（或压敏电阻）与串联小电感。</p>

<h2>三、单相可控整流（计算高频）</h2>
<p>先判断负载性质，再判断电流是否连续，最后才选公式 —— 顺序错了公式一定用错。</p>

<div class="table-wrap"><table>
<thead><tr><th>电路</th><th>负载</th><th>输出平均电压</th><th>移相范围</th></tr></thead>
<tbody>
<tr><td>单相半波</td><td>电阻</td><td>Ud = 0.45U<sub>2</sub>(1+cosα)/2</td><td>0° ~ 180°</td></tr>
<tr><td>单相全控桥</td><td>电阻</td><td>Ud = 0.9U<sub>2</sub>(1+cosα)/2</td><td>0° ~ 180°</td></tr>
<tr><td>单相全控桥</td><td>阻感（电流连续）</td><td>U<sub>d</sub> = 0.9U<sub>2</sub>cosα</td><td>0° ~ 90°</td></tr>
<tr><td>单相半控桥</td><td>阻感 + 续流二极管</td><td>Ud = 0.9U<sub>2</sub>(1+cosα)/2</td><td>0° ~ 180°</td></tr>
</tbody>
</table></div>

<h3>波形题答题步骤</h3>
<ol>
<li>标出电源电压 u<sub>2</sub> 的过零点与触发脉冲位置；</li>
<li>判断哪只管子导通、电流回路由谁承担；</li>
<li>阻感负载要画出续流阶段（电流不归零）；</li>
<li>由波形读出导通角 θ，再代公式验算 Ud。</li>
</ol>

<figure>
<svg viewBox="0 0 760 420" role="img" aria-label="单相全控桥阻感负载波形">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">单相全控桥 · 阻感负载（电流连续）</text>

  <line x1="80" y1="130" x2="716" y2="130" stroke="var(--line)" stroke-width="1.4"/>
  <path d="M90 130 C198 84 282 84 390 130" fill="none" stroke="var(--accent)" stroke-width="2.2"/>
  <path d="M390 130 C498 176 582 176 690 130" fill="none" stroke="var(--accent)" stroke-width="2.2"/>
  <text x="72" y="120" text-anchor="end" font-size="12" fill="var(--muted)">u<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
  <text x="700" y="122" font-size="11" fill="var(--muted)">ωt</text>

  <line x1="140" y1="60" x2="140" y2="350" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="390" y1="60" x2="390" y2="350" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="440" y1="60" x2="440" y2="350" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="140" y="54" text-anchor="middle" font-size="11.5" fill="#d97706">ug<tspan baseline-shift="sub" font-size="70%">1,4</tspan></text>
  <text x="440" y="54" text-anchor="middle" font-size="11.5" fill="#d97706">ug<tspan baseline-shift="sub" font-size="70%">2,3</tspan></text>

  <line x1="80" y1="300" x2="716" y2="300" stroke="var(--line)" stroke-width="1.4"/>
  <path d="M140 255 C190 230 212 225 240 225 C302 225 352 252 390 300" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M390 300 L440 330" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="440" y1="330" x2="440" y2="255" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M440 255 C482 232 512 225 540 225 C602 225 652 252 690 300" fill="none" stroke="var(--accent)" stroke-width="2.4"/>

  <line x1="120" y1="262" x2="700" y2="262" stroke="var(--muted)" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="708" y="266" font-size="11.5" fill="var(--muted)">U<tspan baseline-shift="sub" font-size="70%">d</tspan></text>
  <text x="72" y="292" text-anchor="end" font-size="12" fill="var(--muted)">u<tspan baseline-shift="sub" font-size="70%">d</tspan></text>

  <text x="140" y="288" text-anchor="middle" font-size="11.5" fill="var(--accent)">α</text>
  <text x="390" y="288" text-anchor="middle" font-size="11.5" fill="var(--muted)">π</text>
  <text x="440" y="288" text-anchor="middle" font-size="11.5" fill="var(--accent)">π+α</text>

  <path d="M120 350 C160 348 190 352 220 350 C260 348 300 352 340 350 C380 348 420 352 460 350 C500 348 540 352 580 350 C620 348 660 352 700 350" fill="none" stroke="#2fb344" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="708" y="354" font-size="11.5" fill="#2fb344">i<tspan baseline-shift="sub" font-size="70%">d</tspan></text>
  <text x="120" y="384" font-size="11.5" fill="var(--muted)">电流连续时 i<tspan baseline-shift="sub" font-size="70%">d</tspan> 近似平直，负载电感越大脉动越小</text>
</svg>
<figcaption>图 2　单相全控桥阻感负载波形：u<sub>d</sub> 在半个周期内先跟随 u<sub>2</sub>，过零后出现宽度为 α 的负值缺口，随后另一对晶闸管触发换相；电流连续时 i<sub>d</sub> 近似平直。</figcaption>
</figure>

<h3>两个易错点</h3>
<ul>
<li>阻感负载在大电感（ωL 远大于 R）时电流连续，才能用 cosα 形式；电感不足时会断续，必须按断续公式或分段积分。</li>
<li>带续流二极管的半控桥，续流期间输出电压为零，波形与全控桥完全不同，不能套用 0.9U<sub>2</sub>cosα。</li>
</ul>

<h2>四、三相可控整流</h2>
<div class="table-wrap"><table>
<thead><tr><th>电路</th><th>输出平均电压（电流连续）</th><th>移相范围</th></tr></thead>
<tbody>
<tr><td>三相半波</td><td>U<sub>d</sub> = 1.17U<sub>2</sub>cosα</td><td>0° ~ 90°（电阻负载可到 150°）</td></tr>
<tr><td>三相全控桥</td><td>U<sub>d</sub> = 2.34U<sub>2</sub>cosα</td><td>0° ~ 90°（电阻负载可到 120°）</td></tr>
</tbody>
</table></div>

<p>三相全控桥必须采用<strong>双窄脉冲</strong>（间隔 60°）或<strong>宽脉冲</strong>触发，否则合闸时无法形成电流通路、电路不能启动。这是简答题常考的一句话。</p>

<p>电流关系同样要记：变压器二次电流有效值 I<sub>2</sub> = 0.816I<sub>d</sub>，每只晶闸管电流有效值 I<sub>T</sub> = 0.577I<sub>d</sub>，平均值按 1.57 折算。</p>

<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="三相桥式全控整流 ud 六脉波波形">
  <text x="380" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">三相桥式全控整流 · α = 30° · ud 波形（6 脉波）</text>

  <line x1="80" y1="290" x2="716" y2="290" stroke="var(--line)" stroke-width="1.4"/>
  <path d="M718 290 l-11 -5 v10 Z" fill="var(--text-2)"/>
  <text x="708" y="282" text-anchor="end" font-size="11.5" fill="var(--muted)">ωt</text>

  <path d="M90 196 Q141.7 158 193.3 196" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M193.3 196 Q245 158 296.7 196" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M296.7 196 Q348.3 158 400 196" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M400 196 Q451.7 158 503.3 196" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M503.3 196 Q555 158 606.7 196" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <path d="M606.7 196 Q658.3 158 710 196" fill="none" stroke="var(--accent)" stroke-width="2.4"/>

  <line x1="90" y1="181" x2="710" y2="181" stroke="var(--muted)" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="716" y="185" font-size="11.5" fill="var(--muted)">Ud</text>

  <line x1="296.7" y1="196" x2="296.7" y2="290" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="193.3" y1="272" x2="296.7" y2="272" stroke="#d97706" stroke-width="1.2"/>
  <line x1="193.3" y1="267" x2="193.3" y2="277" stroke="#d97706" stroke-width="1.2"/>
  <line x1="296.7" y1="267" x2="296.7" y2="277" stroke="#d97706" stroke-width="1.2"/>
  <text x="245" y="264" text-anchor="middle" font-size="11.5" fill="#d97706">60°</text>

  <text x="141.7" y="314" text-anchor="middle" font-size="10.5" fill="var(--muted)">VT<tspan baseline-shift="sub" font-size="70%">1,6</tspan></text>
  <text x="245" y="314" text-anchor="middle" font-size="10.5" fill="var(--muted)">VT<tspan baseline-shift="sub" font-size="70%">1,2</tspan></text>
  <text x="348.3" y="314" text-anchor="middle" font-size="10.5" fill="var(--muted)">VT<tspan baseline-shift="sub" font-size="70%">3,2</tspan></text>
  <text x="451.7" y="314" text-anchor="middle" font-size="10.5" fill="var(--muted)">VT<tspan baseline-shift="sub" font-size="70%">3,4</tspan></text>
  <text x="555" y="314" text-anchor="middle" font-size="10.5" fill="var(--muted)">VT<tspan baseline-shift="sub" font-size="70%">5,4</tspan></text>
  <text x="658.3" y="314" text-anchor="middle" font-size="10.5" fill="var(--muted)">VT<tspan baseline-shift="sub" font-size="70%">5,6</tspan></text>
</svg>
<figcaption>图 3　三相桥式全控整流 ud 波形：一周期 6 个脉波、每 60° 换相一次，脉波最低点为峰值的 0.866 倍；α 使整组脉波沿 ωt 轴向右平移。底部为各区间同时导通的两只晶闸管。</figcaption>
</figure>

<h3>谐波与功率因数</h3>
<ul>
<li>m 脉波整流电路，交流侧电流最低次谐波次数为 m，谐波次数为 mk ± 1；</li>
<li>相控整流从电网吸取滞后无功，功率因数 λ = ν·cosα，其中 ν 为基波因数，α 越大功率因数越低。</li>
</ul>

<h2>五、有源逆变与逆变失败</h2>
<h3>实现有源逆变的两个条件</h3>
<ol>
<li>直流侧存在直流电动势，其极性与晶闸管导通方向一致，且能提供能量回馈；</li>
<li>控制角 α 大于 90°（即逆变角 β 小于 90°），使 Ud 为负值。</li>
</ol>

<h3>逆变失败（逆变颠覆）的常见原因</h3>
<ul>
<li>逆变角 β 过小，换相来不及完成；</li>
<li>触发脉冲丢失、延迟或移相过头；</li>
<li>晶闸管损坏、误导通或不能可靠关断；</li>
<li>交流电源缺相、断电或电压过低；</li>
<li>换相电抗过大，换相重叠角 γ 过大；</li>
<li>直流侧电动势不足，无法维持逆变电流。</li>
</ul>

<p>最小逆变角由三部分构成，工程上取 30°~35°：</p>
<div class="formula">β<sub>min</sub> = δ + γ + θ<br>δ：晶闸管关断时间对应的电角度<br>γ：换相重叠角<br>θ：安全裕量角</div>

<h2>六、直流斩波电路</h2>
<div class="table-wrap"><table>
<thead><tr><th>电路</th><th>输出关系</th><th>电流脉动（连续时）</th></tr></thead>
<tbody>
<tr><td>Buck 降压</td><td>U<sub>o</sub> = D·U<sub>d</sub></td><td>Δi<sub>L</sub> = D(1−D)U<sub>d</sub> /(fL)</td></tr>
<tr><td>Boost 升压</td><td>U<sub>o</sub> = U<sub>d</sub> /(1−D)</td><td>Δi<sub>L</sub> = D·U<sub>d</sub> /(fL)</td></tr>
<tr><td>Buck-Boost</td><td>U<sub>o</sub> = −D·U<sub>d</sub> /(1−D)</td><td>Δi<sub>L</sub> = D·U<sub>d</sub> /(fL)</td></tr>
</tbody>
</table></div>

<p>D 为占空比（导通时间与周期之比），f 为开关频率。判断电流是否连续：把平均负载电流 I<sub>o</sub> 与 Δi<sub>L</sub>/2 比较，I<sub>o</sub> 大于 Δi<sub>L</sub>/2 时连续，等于时为临界状态。</p>

<p>Buck 电路的输入电流是脉动的、输出电流连续；Boost 与 Buck-Boost 的输入电流连续、输出电流脉动 —— 这个差别常出现在选择与大题论述中。</p>

<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="Buck 斩波电路与电感电流波形">
  <text x="190" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--text)">Buck 斩波电路</text>
  <text x="565" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--text)">电感电流连续波形</text>

  <line x1="40" y1="90" x2="90" y2="90" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="140" y1="90" x2="350" y2="90" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="40" y1="250" x2="350" y2="250" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="40" y1="90" x2="40" y2="250" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="26" y1="160" x2="54" y2="160" stroke="var(--text-2)" stroke-width="2.4"/>
  <line x1="32" y1="174" x2="48" y2="174" stroke="var(--text-2)" stroke-width="2.4"/>
  <text x="58" y="150" font-size="12" fill="var(--muted)">Ud</text>

  <line x1="90" y1="90" x2="130" y2="72" stroke="var(--text-2)" stroke-width="2.2"/>
  <circle cx="90" cy="90" r="3" fill="var(--text-2)"/>
  <circle cx="140" cy="90" r="3" fill="var(--text-2)"/>
  <text x="108" y="62" font-size="12" fill="var(--muted)">S</text>

  <line x1="170" y1="90" x2="170" y2="120" stroke="var(--text-2)" stroke-width="1.8"/>
  <path d="M160 140 L180 140 L170 120 Z" fill="none" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="160" y1="120" x2="180" y2="120" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="170" y1="140" x2="170" y2="250" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="186" y="136" font-size="12" fill="var(--muted)">D</text>

  <path d="M210 90 a10 10 0 0 1 20 0 a10 10 0 0 1 20 0 a10 10 0 0 1 20 0 a10 10 0 0 1 20 0" fill="none" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="250" y="72" font-size="12" fill="var(--muted)">L</text>

  <line x1="310" y1="90" x2="310" y2="158" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="296" y1="158" x2="324" y2="158" stroke="var(--text-2)" stroke-width="2.4"/>
  <line x1="296" y1="172" x2="324" y2="172" stroke="var(--text-2)" stroke-width="2.4"/>
  <line x1="310" y1="172" x2="310" y2="250" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="330" y="170" font-size="12" fill="var(--muted)">C</text>

  <rect x="338" y="150" width="14" height="40" fill="none" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="345" y1="90" x2="345" y2="150" stroke="var(--text-2)" stroke-width="1.8"/>
  <line x1="345" y1="190" x2="345" y2="250" stroke="var(--text-2)" stroke-width="1.8"/>
  <text x="358" y="176" font-size="12" fill="var(--muted)">R</text>
  <text x="300" y="276" font-size="12" fill="var(--accent)">uo</text>

  <line x1="400" y1="110" x2="722" y2="110" stroke="var(--line)" stroke-width="1.4"/>
  <path d="M420 110 H490 V70 H560 V110 H630 V70 H700 V110" fill="none" stroke="var(--accent)" stroke-width="2.2"/>
  <text x="404" y="66" font-size="11.5" fill="var(--muted)">uGE</text>
  <line x1="490" y1="40" x2="490" y2="110" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="560" y1="40" x2="560" y2="110" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="525" y="52" text-anchor="middle" font-size="11" fill="var(--muted)">DT</text>
  <text x="595" y="52" text-anchor="middle" font-size="11" fill="var(--muted)">(1−D)T</text>

  <line x1="400" y1="310" x2="722" y2="310" stroke="var(--line)" stroke-width="1.4"/>
  <path d="M420 270 L480 230 L560 270 L620 230 L700 270" fill="none" stroke="#2fb344" stroke-width="2.2"/>
  <line x1="420" y1="250" x2="700" y2="250" stroke="var(--muted)" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="404" y="246" font-size="11.5" fill="var(--muted)">Io</text>
  <text x="404" y="288" font-size="11.5" fill="var(--muted)">iL</text>
  <line x1="520" y1="230" x2="520" y2="270" stroke="#d97706" stroke-width="1.2"/>
  <line x1="515" y1="230" x2="525" y2="230" stroke="#d97706" stroke-width="1.2"/>
  <line x1="515" y1="270" x2="525" y2="270" stroke="#d97706" stroke-width="1.2"/>
  <text x="530" y="255" font-size="11.5" fill="#d97706">ΔiL</text>
  <text x="420" y="338" font-size="11.5" fill="var(--muted)">Io &gt; ΔiL/2 时电流连续；D = ton/T，Uo = D·Ud</text>
</svg>
<figcaption>图 4　Buck 降压斩波电路与电感电流波形：开关导通时电感储能、电流上升，关断时经二极管续流、电流下降；Io 大于 ΔiL/2 时电流连续，输出 Uo = D·Ud。</figcaption>
</figure>

<h2>七、PWM 逆变电路</h2>
<p>SPWM 用正弦调制波与三角载波比较生成脉冲，两个关键参数：</p>
<ul>
<li><strong>调制比</strong> m = U<sub>r</sub>/U<sub>t</sub>（调制波幅值比载波幅值）。线性区 m ≤ 1，输出基波幅值 U<sub>1m</sub> = m·U<sub>d</sub>；m 大于 1 为过调制，输出波形畸变。</li>
<li><strong>载波比</strong> N = f<sub>c</sub>/f<sub>r</sub>。N 越大，最低次谐波频率越高、越容易滤波，但开关损耗增加。</li>
</ul>

<p>双极性调制每个开关周期输出电压在 +U<sub>d</sub> 与 −U<sub>d</sub> 之间切换；单极性调制在 0 与 +U<sub>d</sub>（或 −U<sub>d</sub>）之间切换，谐波性能更好。死区是为防止同一桥臂直通而设置的延迟，会带来输出电压损失和低次谐波，电流越大影响越明显。</p>

<h2>八、常考计算题模板</h2>
<div class="formula">第 1 步　判断负载性质（电阻 / 阻感 / 反电动势）与电流是否连续<br>第 2 步　选对应公式（连续与断续是两套公式，不能混用）<br>第 3 步　求负载电流：I<sub>d</sub> = U<sub>d</sub> / R；含反电动势时 I<sub>d</sub> = (U<sub>d</sub> − E) / R<br>第 4 步　求器件电流：I<sub>T</sub> = 系数 × I<sub>d</sub>，I<sub>T(AV)</sub> = I<sub>T</sub> / 1.57<br>第 5 步　选型：U<sub>TN</sub> = (2~3)U<sub>TM</sub>，I<sub>T(AV)</sub> 再留 1.5~2 倍裕量<br>第 6 步　求变压器二次电流 I<sub>2</sub> 与容量 S<sub>2</sub> = U<sub>2</sub>·I<sub>2</sub><br>第 7 步　校验移相范围、逆变条件与功率因数</div>

<h2>九、易错点清单</h2>
<ol>
<li>把「移相范围」与「导通角范围」混为一谈；</li>
<li>阻感负载未判断连续性就直接用 cosα 公式；</li>
<li>忽略续流二极管对输出电压波形的影响；</li>
<li>三相全控桥漏写双窄脉冲或宽脉冲的要求；</li>
<li>有源逆变只答 α 大于 90°，漏掉直流电动势条件；</li>
<li>斩波电路把 Buck 与 Boost 的电流脉动公式对调；</li>
<li>计算器件电流时忘记有效值与平均值的 1.57 折算；</li>
<li>功率因数只写 cosα，漏掉基波因数 ν。</li>
</ol>

<h2>十、考前速记</h2>
<ul>
<li>单相 0.45 / 0.9，三相 1.17 / 2.34 —— 系数记住，公式就完整了；</li>
<li>电阻负载移相到 180°（三相半波 150°、三相桥 120°），阻感负载只到 90°；</li>
<li>逆变：α 大于 90° + 有直流电动势；最小逆变角 30°~35°；</li>
<li>斩波：Buck 乘 D，Boost 除以 (1−D)，Buck-Boost 两者都带；</li>
<li>SPWM：m 管幅值，N 管谐波位置。</li>
</ul>

<blockquote><p>复习顺序建议：先把四种变换的公式表默写一遍，再回头补波形与条件判断。公式会写，波形能画，简答题基本不会失分。</p></blockquote>

<h2>十一、专项习题索引（按考点分组）</h2>
<p>下面按四个高频考点分组，共 12 题。题目直接给出，答案与解析默认隐藏；点击题干下方的「查看答案解析」标签即可展开对照。建议先自己写完整过程，再展开核对，效果远好于直接看答案。</p>

<h3>考点 1　晶闸管与全控器件</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">1</span>晶闸管导通后撤去门极触发信号，晶闸管将（　）。A. 立即关断　B. 保持导通　C. 电流减半　D. 反向导通</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：B。</strong></p>
      <p><strong>解析：</strong>门极只控制开通，不能控制关断。导通后只要阳极电流大于维持电流，晶闸管就保持导通；只有电流降到维持电流以下或阳极承受反向电压时才自行关断。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">2</span>判断题：擎住电流小于维持电流，因此触发脉冲不必很宽。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：×。</strong></p>
      <p><strong>解析：</strong>擎住电流大于维持电流。触发后若过早撤去门极脉冲，阳极电流还没升到擎住电流，晶闸管会重新关断，所以触发脉冲必须足够宽。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">3</span>简答题：说明 du/dt 与 di/dt 过大各自的危害及抑制措施。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答题要点：</strong></p>
      <ul>
        <li>du/dt 过大：结电容充电电流相当于门极电流，可能使晶闸管误导通。抑制方法是并联 RC 缓冲电路或压敏电阻。</li>
        <li>di/dt 过大：导通初期电流集中在门极附近的小区域，造成局部过热甚至烧毁。抑制方法是串联小电感限制电流上升率。</li>
      </ul>
    </div>
  </details>
</div>

<h3>考点 2　单相可控整流</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">4</span>单相半波可控整流，电阻负载 R = 10 Ω，U<sub>2</sub> = 220 V，α = 60°。求输出平均电压 U<sub>d</sub>、负载电流 I<sub>d</sub> 和晶闸管电流平均值 I<sub>T(AV)</sub>。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">U<sub>d</sub> = 0.45 U<sub>2</sub> (1 + cosα)/2 = 0.45 × 220 × (1 + 0.5)/2 = 74.25 V<br>I<sub>d</sub> = U<sub>d</sub> / R = 74.25 / 10 = 7.43 A<br>I<sub>T(AV)</sub> = I<sub>d</sub> = 7.43 A</div>
      <p>半波电路只有一只晶闸管，负载电流全部流过它，所以晶闸管电流平均值等于负载电流。若要选型，还要除以 1.57 折算成有效值并留 1.5～2 倍裕量。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">5</span>单相全控桥，阻感负载且电流连续，U<sub>2</sub> = 220 V，α = 60°，R = 5 Ω。求 U<sub>d</sub>、I<sub>d</sub> 和每只晶闸管电流平均值。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">U<sub>d</sub> = 0.9 U<sub>2</sub> cosα = 0.9 × 220 × 0.5 = 99 V<br>I<sub>d</sub> = U<sub>d</sub> / R = 99 / 5 = 19.8 A<br>I<sub>T(AV)</sub> = I<sub>d</sub> / 2 = 9.9 A</div>
      <p>只有确认电流连续才能用 0.9U<sub>2</sub>cosα；若电感不足、电流断续，必须改用断续公式或分段积分。全控桥每半个周期有一对晶闸管导通，故每管平均电流为 I<sub>d</sub>/2。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">6</span>简答题：单相全控桥带阻感负载时，ud 为什么会出现负值？并联续流二极管后有什么变化？</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答题要点：</strong></p>
      <ul>
        <li>电感电流不能突变。u<sub>2</sub> 过零变负后，电感维持原方向电流，晶闸管仍导通，输出 u<sub>d</sub> 跟随 u<sub>2</sub> 变为负值，直到另一对晶闸管触发才换相。</li>
        <li>并联续流二极管后，u<sub>2</sub> 过零时负载电流经续流二极管形成回路，u<sub>d</sub> 被钳位为零，不再出现负值，输出电压平均值提高。</li>
        <li>续流期间晶闸管关断，换相过程改变，不能再用 0.9U<sub>2</sub>cosα 直接计算。</li>
      </ul>
    </div>
  </details>
</div>

<h3>考点 3　三相可控整流与有源逆变</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">7</span>三相半波可控整流，U<sub>2</sub> = 100 V，α = 30°，电流连续。求 U<sub>d</sub>，并说明电阻负载时的移相范围。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">U<sub>d</sub> = 1.17 U<sub>2</sub> cosα = 1.17 × 100 × 0.866 = 101.3 V</div>
      <p>三相半波电阻负载的移相范围是 0°～150°；阻感负载电流连续时移相范围为 0°～90°。整流与逆变的分界都是 α = 90°。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">8</span>判断题：三相全控桥可以采用单窄脉冲触发，只要脉冲幅值足够大。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：×。</strong></p>
      <p><strong>解析：</strong>三相全控桥必须采用双窄脉冲（间隔 60°）或宽脉冲触发。因为合闸时若只有单窄脉冲，无法保证同时导通的两只晶闸管都获得触发，电路不能建立电流通路，无法启动。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">9</span>简答题：实现有源逆变的条件是什么？列出三条逆变失败（逆变颠覆）的常见原因。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答题要点：</strong></p>
      <ul>
        <li>条件一：直流侧存在直流电动势，其极性与晶闸管导通方向一致，能够提供并接受能量回馈。</li>
        <li>条件二：控制角 α 大于 90°（逆变角 β 小于 90°），使输出平均电压为负。</li>
        <li>失败原因：逆变角 β 过小、换相来不及；触发脉冲丢失、延迟或移相过头；晶闸管损坏、误导通或不能可靠关断；交流电源缺相、断电或电压过低；换相电抗过大导致重叠角过大。</li>
      </ul>
      <p>工程上最小逆变角一般取 30°～35°，由关断时间对应电角度、换相重叠角和安全裕量角三部分组成。</p>
    </div>
  </details>
</div>

<h3>考点 4　直流斩波与 PWM</h3>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">10</span>Buck 电路，U<sub>d</sub> = 100 V，占空比 D = 0.6，f = 20 kHz，L = 0.5 mH，负载平均电流 I<sub>o</sub> = 5 A。求 U<sub>o</sub>、Δi<sub>L</sub>，并判断电流是否连续。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">U<sub>o</sub> = D·U<sub>d</sub> = 0.6 × 100 = 60 V<br>Δi<sub>L</sub> = D(1 − D)U<sub>d</sub> /(fL) = 0.6 × 0.4 × 100 /(20 000 × 0.0005) = 2.4 A<br>Δi<sub>L</sub>/2 = 1.2 A &lt; I<sub>o</sub> = 5 A</div>
      <p>因为 I<sub>o</sub> 大于 Δi<sub>L</sub>/2，电感电流连续。若 I<sub>o</sub> 恰等于 Δi<sub>L</sub>/2 为临界状态，小于则为断续，断续时 U<sub>o</sub> 不再等于 D·U<sub>d</sub>。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">11</span>Boost 电路，U<sub>d</sub> = 24 V，D = 0.5。求 U<sub>o</sub>，并说明输入、输出电流的连续性。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>解：</strong></p>
      <div class="formula">U<sub>o</sub> = U<sub>d</sub> /(1 − D) = 24 /(1 − 0.5) = 48 V</div>
      <p>Boost 电路电感在输入侧，输入电流连续、输出电流脉动；Buck 电路正好相反，输入电流脉动、输出电流连续。这是选择题和大题论述的高频对比点。</p>
    </div>
  </details>
</div>

<div class="exercise">
  <p class="exercise-q"><span class="exercise-no">12</span>填空题：SPWM 中调制比 m = ____，载波比 N = ____；线性区的条件是 ____，此时输出基波幅值 U<sub>1m</sub> = ____；m 大于 1 时称为 ____。</p>
  <details class="answer-toggle">
    <summary>查看答案解析</summary>
    <div class="answer-body">
      <p><strong>答案：</strong>U<sub>r</sub>/U<sub>t</sub>（调制波幅值比载波幅值）；f<sub>c</sub>/f<sub>r</sub>（载波频率比调制波频率）；m ≤ 1；m·U<sub>d</sub>；过调制。</p>
      <p><strong>解析：</strong>线性区内输出基波幅值与 m 成正比；m 大于 1 进入过调制，输出波形畸变并出现低次谐波。载波比 N 越大，最低次谐波频率越高、越易滤波，但开关损耗增加。</p>
    </div>
  </details>
</div>
`
  }
);
