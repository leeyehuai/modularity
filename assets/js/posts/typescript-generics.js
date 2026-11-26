/* 文章模块：TypeScript 泛型：从入门到实用 */
window.POSTS = window.POSTS || [];
window.POSTS.push(
{
    slug: 'typescript-generics',
    title: 'TypeScript 泛型：从入门到实用',
    desc: '泛型约束、映射类型、条件类型与 infer，最后落到一个类型安全的请求函数上。',
    major: '编程语言',
    category: 'TypeScript',
    tags: ['TypeScript', '类型系统'],
    date: '2026-11-11',
    minutes: 10,
    content: `
<p>泛型的本质是「把类型也当作参数」。它解决了两个问题：类型随输入变化，以及在不牺牲类型安全的前提下复用逻辑。</p>

<h2>最小可用例子</h2>
<pre><code class="language-ts">function first&lt;T&gt;(list: T[]): T | undefined {
  return list[0];
}

const a = first([1, 2, 3]);   // number | undefined
const b = first(['x', 'y']);  // string | undefined</code></pre>

<p>调用时不需要显式写尖括号，编译器会根据实参推导。显式指定只在需要收窄或推导失败时使用。</p>

<h2>约束：用 extends 限定范围</h2>
<pre><code class="language-ts">function pluck&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'Ada' };
const name = pluck(user, 'name'); // string
// pluck(user, 'age');            // 编译错误</code></pre>

<p>这里 <code>K extends keyof T</code> 把 key 限定为对象真实拥有的属性，返回值 <code>T[K]</code> 也随之精确。</p>

<h2>映射类型：批量改造已有类型</h2>
<pre><code class="language-ts">type Partial&lt;T&gt; = {
  [K in keyof T]?: T[K];
};

type ReadonlyDeep&lt;T&gt; = {
  readonly [K in keyof T]: T[K] extends object
    ? ReadonlyDeep&lt;T[K]&gt;
    : T[K];
};</code></pre>

<p>内置的 <code>Partial</code>、<code>Required</code>、<code>Pick</code>、<code>Omit</code> 都是这套语法的语法糖。读懂了它们，就能写出贴合业务的类型。</p>

<h2>条件类型与 infer</h2>
<pre><code class="language-ts">type Unwrap&lt;T&gt; = T extends Promise&lt;infer U&gt; ? U : T;
type A = Unwrap&lt;Promise&lt;number&gt;&gt;; // number

type ElementOf&lt;T&gt; = T extends (infer E)[] ? E : never;
type B = ElementOf&lt;string[]&gt;;       // string</code></pre>

<p><code>infer</code> 的作用是在类型匹配过程中「捕获」某个位置的具体类型，再在分支里使用它。</p>

<h2>实战：类型安全的请求函数</h2>
<pre><code class="language-ts">async function request&lt;T&gt;(url: string, init?: RequestInit): Promise&lt;T&gt; {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error('HTTP ' + res.status);
  }
  return (await res.json()) as T;
}

interface User {
  id: number;
  name: string;
}

const user = await request&lt;User&gt;('/api/user/1');
console.log(user.name);</code></pre>

<h2>几条实践建议</h2>
<ul>
<li>能推导就不要显式传类型参数，减少噪音；</li>
<li>避免 any，改用 unknown 加类型守卫；</li>
<li>公共组件的 props 尽量泛型化，比运行时断言可靠得多。</li>
</ul>
`
  }
);
