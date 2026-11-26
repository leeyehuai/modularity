/* 文章模块：彻底理解 JavaScript 事件循环 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'js-event-loop',
    title: '彻底理解 JavaScript 事件循环',
    desc: '从调用栈、宏任务、微任务到渲染时机，用一个可运行的例子把输出顺序彻底讲清楚。',
    major: '编程语言',
    category: 'JavaScript',
    tags: ['JavaScript', '原理', '异步'],
    date: '2026-11-17',
    minutes: 9,
    content: `
<p>几乎所有「为什么输出顺序和我想的不一样」的问题，都能用事件循环解释清楚。这篇笔记从调用栈讲到渲染时机，给出可以自己验证结论的例子。</p>

<h2>为什么需要事件循环</h2>
<p>JavaScript 主线程是单线程的：同一时刻只能执行一段代码。事件循环（Event Loop）负责在调用栈清空后，从任务队列取出回调执行，从而在不阻塞主线程的前提下处理定时器、网络回调与用户交互。</p>

<h2>宏任务与微任务</h2>
<p>任务分成两类：</p>
<ul>
<li><strong>宏任务</strong>：整段 script、setTimeout、setInterval、IO 回调、UI 事件；</li>
<li><strong>微任务</strong>：Promise.then、queueMicrotask、MutationObserver。</li>
</ul>
<p>规则只有一条：每执行完<strong>一个</strong>宏任务，就把微任务队列<strong>全部清空</strong>，然后才进入下一轮。</p>

<pre><code class="language-js">console.log('1');

setTimeout(() =&gt; console.log('2'), 0);

Promise.resolve().then(() =&gt; console.log('3'));
queueMicrotask(() =&gt; console.log('4'));

console.log('5');

// 输出：1 5 3 4 2</code></pre>

<p>解释：同步代码先输出 1、5；本轮宏任务结束后清空微任务，按入队顺序输出 3、4；最后才轮到 setTimeout 的宏任务输出 2。</p>

<h2>渲染发生在什么时候</h2>
<p>浏览器大约每 16.7ms 渲染一帧。渲染前会执行 <code>requestAnimationFrame</code> 回调；一帧的流程大致是：宏任务 → 微任务 → rAF → 样式计算与布局 → 绘制。</p>

<pre><code class="language-js">requestAnimationFrame((time) =&gt; {
  // 在下一帧渲染前执行，适合做逐帧动画
  box.style.transform = 'translateX(' + time / 10 + 'px)';
});</code></pre>

<p>反过来，如果在修改样式之后立刻读取布局属性（如 offsetHeight），浏览器会被迫提前完成一次布局，这就是所谓的 layout thrashing。批量读、批量写可以避免。</p>

<h2>async/await 的真实执行顺序</h2>

<pre><code class="language-js">async function foo() {
  console.log('a');
  await null;
  console.log('b');
}

console.log('start');
foo();
console.log('end');

// 输出：start a end b</code></pre>

<p><code>await</code> 之后的代码会被放入微任务队列，等价于 <code>Promise.resolve(null).then(() =&gt; ...)</code>。所以它一定晚于外层同步代码执行。</p>

<h2>三个常见陷阱</h2>
<ol>
<li>在微任务里无限递归添加微任务，队列永远不会清空，页面会直接卡死。</li>
<li><code>setTimeout(fn, 0)</code> 不是立即执行，嵌套超过 5 层后最小延迟为 4ms。</li>
<li>长任务（超过 50ms）会阻塞渲染与输入响应，重计算应交给 Web Worker 或分片处理。</li>
</ol>

<blockquote><p>把顺序记住：同步代码 → 清空微任务 → 渲染 → 下一个宏任务。绝大多数输出顺序题都可以靠这一句话推出来。</p></blockquote>
`
  }
);
