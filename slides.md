<br />
<br />
<br />
<br />
<br />
<br />

# Vue的组合式开发
编写可组合可复用的 Vue 函数
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
2023/03/06

---
layout: center
---

# Vue Composition API

<center><font color="#666">组合式 API</font></center>


---

# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
```ts
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
</script>
```
</template>

<template v-slot:right>
```ts
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
</script>
```
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
```ts {3,7-8,12-13}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
</script>
```
</template>

<template v-slot:right>
```ts {5,16}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
</script>
```
</template>
</LR>
</v-after>

---

# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
```ts {4-6}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
</script>
```
</template>

<template v-slot:right>
```ts {6,10}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
</script>
```
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
```ts {8-12}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
</script>
```
</template>

<template v-slot:right>
```ts {7,11}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
</script>
```
</template>
</LR>
</v-after>

---

# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
```ts {13-17}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
</script>
```
</template>

<template v-slot:right>
```ts {12-14}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
</script>
```
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
```ts
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
</script>
```
</template>

<template v-slot:right>
```ts
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
</script>
```
</template>
</LR>
</v-after>

---

# 为什么引入组合式API？


<v-clicks>
<LR class="mt-8 mb-8">
<template v-slot:left>
<font color="#666">选项式 API 存在的问题</font>
</template>
<template v-slot:right>
<font color="#666">组合式 API 提供的能力</font>
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 不利于复用
</template>
<template v-slot:right>
• 极易复用（原生JS函数）
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 潜在命名冲突
</template>
<template v-slot:right>
• 可灵活组合（生命周期钩子可多次使用）
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 上下文丢失
</template>
<template v-slot:right>
• 提供更好的上下文支持
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 有限的类型支持
</template>
<template v-slot:right>
• 更好的TypeScript类型支持
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 按API类型组织
</template>
<template v-slot:right>
• 按功能/逻辑组织
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
</template>
<template v-slot:right>
• 可独立于Vue组件使用
</template>
</LR>
</v-clicks>

---

# 什么是可组合函数
可复用逻辑的集合，专注点分离

<LR>
<template v-slot:left>

```ts
export function useDark(options: UseDarkOptions = {}) {
  const preferredDark = usePreferredDark()
  const mode = useColorMode()

  return computed<boolean>({
    get() {
      return mode.value === 'dark'
    },
    set(v) {
      mode.value = v === preferredDark.value 
        ? 'auto' : v ? 'dark' : 'light'
    },
  })
}
```

</template>
<template v-slot:right>

```ts
const isDark = useDark()
const toggleDark = useToggle(isDark)
```

```html
<button @click="toggleDark()" >
{{ isDark ? 'light' : 'dark' }}
</button>
```
<div class="flex-center mt-10">
<Dark />
</div>
</template>
</LR>

---

# 组合关系
![Remote Image](https://pageignore.github.io/share-ppt/useDark_img.png)

<v-clicks>
<div class="mb-5">• 每个函数都可以单独使用</div>
<div class="mb-5">• 专注点分离</div>
<div class="mb-5">• 状态连接</div>
</v-clicks>

---

# 建立“连接”
`setup()`在组件中执行一次，建立 输入 → 输出 的连接，输出会自动根据输入的改变而改变

<LR>
<template v-slot:left>
<v-clicks>
<div class="mb-5">• 状态驱动UI</div>
<div class="mb-5">• 状态改变会自动更新UI - 响应式</div>
<div class="mb-5">• 状态<code>setup()</code>函数，建立 状态 和 逻辑 的连接</div>
<div class="mb-5">• 通过<code>&#60;template&#62;</code>模板，建立 状态 和 UI 的连接</div>
</v-clicks>
</template>

<template v-slot:right>
<v-click>
  <Connect class="ml-4" />
</v-click>
</template>
</LR>

---
layout: two-cols
---

# Ref
<v-click at="1">
<div style="width:90%">

```ts
import { ref } from 'vue'

let foo = 0
let bar = ref(0)

foo = 1
bar = 1 // ts-error
```

</div>

</v-click>

<v-click at="2">

<br/>
<font color="#666">PROS</font>
<div class="mb-5 mt-5">• 显式调用，类型检查</div>
<div class="mb-5">• 相比Reactive 局限更少</div>

<font color="#666">CONS</font>
<div class="mt-5">• <code>.value</code></div>

</v-click>

::right::

# Reactive

<v-click at="1">

```ts
import { reactive } from 'vue'

const foo = { prop: 0 }
const bar = reactive({ prop: 0 })

foo.prop = 1
bar.prop = 1
```
</v-click>

<v-click at="3">

<br/>
<font color="#666">PROS</font>
<div class="mb-5 mt-5">• 自动 Unwrap(即不需要<code>.value</code>)</div>

<font color="#666">CONS</font>
<div class="mb-5 mt-5">• 在类型上和一般对象没有区别</div>
<div class="mb-5">• 使用 ES6 结构会使响应式丢失</div>
<div class="mb-5">• 需要使用箭头函数包装才能使用<code>watch</code></div>

</v-click>

---

# Ref 自动解包
在众多情况下，可以减少`.value`的使用

<v-clicks>

<LR>
<template v-slot:left>
<div class="lh-30">• <code>watch</code>直接接受Ref作为监听对象，并在回调函数中返回解包后的值</div>
</template> 
<template v-slot:right>

```ts
const counter = ref(0)

watch(counter, count => {
  console.log(count) // same as `counter.value`
})
```

</template>
</LR>

<LR>
<template v-slot:left>
<div class="lh-30">• Ref在模板中自动解包</div>
</template> 
<template v-slot:right>

```html
<template>
  <button @click="counter += 1">
    Counter is {{ counter }}
  </button>
</template>
```

</template>
</LR>

<LR>
<template v-slot:left>
<div class="lh-30">• 使用 Reactive 解包嵌套的 Ref</div>
</template> 
<template v-slot:right>

```ts
import { ref, reactive } from 'vue'
const foo = ref('bar')
const data = reactive({ foo, id: 10 })
data.foo // 'bar'
```

</template>
</LR>

</v-clicks>

---

# `ref` - Ref 的内部实现
Vue 源码分析

```ts
function ref(input) {
  return isRef(input)
    ? input
    : createRef(input)
}
```

也就是说，`ref()` 会直接返回已经是 Ref 的值

```ts
const foo = ref(123)
const bar = ref(foo)

foo === bar // true
```


---

# `unref` - Ref 的反操作
<div class="mt-5 mb-5">• 如果传入一个 Ref， 返回其值</div>
<div>• 否则愿样返回</div>

<v-click>
<LR>
<template v-slot:left>
<br />
<font color="#666">实现</font>
<br />

```ts
function unref<T>(r: Ref<T> | T): T {
  return isRef(r) ? r.value : r
}
```

</template> 
<template v-slot:right>
<br />
<font color="#666">使用</font>
<br />

```ts
import { unref, ref } from 'vue'

const foo = ref('foo')
unref(foo) // 'foo'

const bar = 'bar'
unref(bar) // 'bar'
```

</template>
</LR>
</v-click>

---

# 接受 Ref 作为函数参数

<div class="flex-3">
  <div class="flex-3-item-01"></div>
  <div class="flex-3-item-02">
   <font color="#666">实现</font>
  </div>
  <div class="flex-3-item-03">
   <font color="#666">用例</font>
  </div>
</div>

<v-clicks>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">纯函数</font></div>
  <div class="flex-3-item-02">

  ```ts
  function add(a: number, b: number) {
    return a + b
  }
  ```

  </div>
  <div class="flex-3-item-03">
  
  ```ts
  let a = 1
  let b = 2

  let c = add(a, b) // 3
  ```
  
  </div>
</div>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">接受 Ref 作为参数，返回一个响应式的结果</font></div>
  <div class="flex-3-item-02">

  ```ts
  function add(a: Ref<number>, b: Ref<number>) {
    return computed(() => a.value + b.value)
  }
  ```

  </div>
  <div class="flex-3-item-03">
  
  ```ts
  const a = ref(1)
  const b = ref(2)

  const c = add(a, b)
  c.value // 3
  ```
  
  </div>
</div>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">同时接受传入值和 Ref</font></div>
  <div class="flex-3-item-02">

  ```ts
  function add(
    a: Ref<number> | number,
    b: Ref<number> | number
  ) {
    return computed(() => unref(a) + unref(b))
  }
  ```

  </div>
  <div class="flex-3-item-03">
  
  ```ts
  const a = ref(1)

  const c = add(a, 5)
  c.value // 6
  ```
  
  </div>
</div>

</v-clicks>

---

# MaybeRef 类型工具

```ts
type MaybeRef<T> = Ref<T> | T
```

使用`MaybeRef`来支持可选择性的响应式参数

```ts
export function useTimeAgo(
  time: Date | number | string | Ref<Date | number | string>,
) {
  return computed(() => someFormating(unref(time)))
}
```

```ts
import { computed, unref, Ref } from 'vue'

type MaybeRef<T> = Ref<T> | T

export function useTimeAgo(
  time: MaybeRef<Date | number | string>,
) {
  return computed(() => someFormating(unref(time)))
}
```

---

# Reactify 响应式化
使用魔法构造“连接”

<LR>
<template v-slot:left>

<div v-click>

可以将一个普通函数转化为一个响应式的函数

```ts
import { reactify } from '@vueuse/core'

function add(a, b) {
  return a + b
}

const useAdd = reactify(add)
```

自动 unref 入参，并将返回值包装为 computed

```ts
const x = ref(1)
const y = ref(2)
const z = useAdd(x, y) // z = 3

x.value = 10 // z = 12
```
</div>
</template>
<template v-slot:right>
<div v-click>

适用于JS原生方法

```ts
const useFloor= reactify(Math.floor)
const usePow = reactify(Math.pow)

const x = ref(2.4)
const res = usePow(useFloor(x), 2) // res = 4

x.value = 3.6 // res = 9
```

</div>
</template>
</LR>

---

# `Reactify` 的实现

```ts

function reactify(fn){
  return function (this, ...args) {
    return computed(() => fn.apply(this, args.map(i => unref(i))))
  }
}

```

---

# 让你的函数更灵活
让函数可以适应不同的场景

<LR>
<template v-slot:left>

<div>
构造一个“特殊的”Ref

```ts
import { useTitle } from '@vueuse/core'

const title = useTitle()

title.value = 'Hello World'
// 网页的标题随 Ref 改变

```

</div>
</template>

<template v-slot:right>

<div>
绑定一个现有的Ref

```ts
import { ref, computed } from 'vue'
import { useTitle } from '@vueuse/core'

const name = ref('Hello')
const title = computed(() => {
  return `${name.value} - World`
})

useTitle(title) // Hello - World

name.value = 'Hi' // Hi - World

```
</div>

</template>
</LR>

---

# `useTitle`
`useTitle` 的实现

```ts {all|7-8|10-14|all}
import { ref, watch } from 'vue'
import { MaybeRef } from '@vueuse/core'

export function useTitle(
  newTitle: MaybeRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = ref(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
```

---

# 重复使用已有的 Ref
如果将一个`ref`传递给`ref`构造函数，它会将其原样返回

<v-clicks>
<div class="mb-4">

```ts
const foo = ref(1)   // Ref<1>
const bar = ref(foo) // Ref<1>

foo === bar // true
```

</div>

<div class="mb-4">

```ts
function useFoo(foo: Ref<string> | string) {
  // 不需要额外操作
  const bar = isRef(foo) ? foo : ref(foo)

  // 与上面的代码等效
  const bar = ref(foo)

  /* ... */
}
```

</div>

<div class="mb-4">
这个技巧在编写不确定参数的函数时十分有用
</div>
</v-clicks>

---

# `Ref` / `unref`

<div v-click>
<div class="mt-5 mb-5">• <code>MaybeRef&#60;T&#62;</code>可以很好的配合`ref`和`unref`进行使用</div>
<div class="mb-5">• 使用<code>ref</code>当你想要将其标准化为Ref</div>
<div class="mb-5">• 使用<code>unref</code>当你想要获取其值</div>

```ts
type MaybeRef<T> = Ref<T> | T

function useBala<T>(arg: MaybeRef<T>) {
  const reference = ref(arg) // 得到 ref
  const value = unref(arg)   // 得到值
}
```

</div>

---

# 还可以更灵活
响应式的获取器

<LR>
<template v-slot:left>

<div>
接受响应式的`Ref`对象作为参数

```ts

const name = ref('Hello')
const title = computed(() => {
  return `${name.value} - World`
})

useTitle(title) // Hello - World

name.value = 'Hi' // Hi - World

```
</div>
</template>

<template v-slot:right>

<div>
直接传入一个函数

```ts

const name = ref('Hello')

useTitle(() => {
  return `${name.value} - World`
}) // Hello - World

name.value = 'Hi' // Hi - World

```
</div>

</template>
</LR>

---

# `MaybeComputedRef`

```ts

/**
 * 可能是一个 Ref，或者一个字面值
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * 可能是一个 Ref，一个字面值，或者一个 Getter 函数
 */
export type MaybeComputedRef<T> = MaybeRef<T> | (() => T) | ComputedRef<T>

```

---

# `resolveRef`

```ts {all|2-3|all}
function resolveRef<T>(input: MaybeRef<T>): Ref<T> {
  return typeof input === 'function'
    ? computed(input)
    : ref(input)
}

```

<div class="mt-10" v-click>
如果传入的是一个函数，使用`computed`创建一个`Ref`对象，否则交由`ref()`处理
</div>

---

# `resolveUnRef`

```ts {all|2-3|all}
function resolveUnref<T>(input: MaybeRef<T>): T {
  return typeof input === 'function'
    ? input()
    : unref(input)
}

```

<div class="mt-10" v-click>
如果传入的是一个函数，直接调用取值，否则交由`ref()`处理
</div>

---

# `useTitle`
`useTitle` 的更灵活的实现

<LR>
<template v-slot:left>

<div>

```ts {2,5,7-8}
import { ref, watch } from 'vue'
import { MaybeRef} from '@vueuse/core'

export function useTitle(
  newTitle: MaybeRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = ref(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
```

</div>
</template>

<template v-slot:right>

<div>

```ts {2,5,7-8}
import { ref, watch } from 'vue'
import { MaybeComputedRef, resolveRef } from '@vueuse/core'

export function useTitle(
  newTitle: MaybeComputedRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = resolveRef(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
```
</div>

</template>
</LR>

---

# 将异步操作转换为“同步”
使用组合式API，甚至可以将异步请求转换为“同步”的

<v-clicks>
<div class="mb-5">
异步

```ts
const data = await fetch('https://api.github.com/').then(r => r.json())

// use data
```

</div>

<div class="mb-5">
组合式 API

```ts
const { data } = useFetch('https://api.github.com/').json()

const user_url = computed(() => data.value?.user_url)
```

</div>

<div>
先建立数据的“连接”，然后再等待异步请求返回将数据填充（注意：并不是真正的异步）
</div>
</v-clicks>

---

# 副作用自动清除
Vue原生的`watch`和`computed` API 会在组件销毁的时候自动解除其内部的依赖监听。
我们在编写自己的函数时，可以遵循同样的模式。

<div v-click>

```ts
import { onUnmounted } from 'vue'

export function useEventListener(target: EventTarget, name: string, fn: any) {
  target.addEventListener(name, fn)

  onUnmounted(() => {
    target.removeEventListener(name, fn) // <--
  })
}
```

</div>

---

# 状态共享
由于组合式 API 天然提供的灵活性，状态可以独立于组件被创建并使用

<LR>
<template v-slot:left>

<div v-click>

```ts
// shared.ts
import { reactive } from 'vue'

export const state = reactive({
  foo: 1,
  bar: 'Hello'
})
```

</div>

</template>
<template v-slot:right>

<div v-click>

```ts
// A.vue
import { state } from './shared.ts'

state.foo += 1
```

</div>

<div v-click>

```ts
// B.vue
import { state } from './shared.ts'

console.log(state.foo) // 2
```

</div>

</template>
</LR>

<div v-click class="mt-10">此方案不兼容SSR</div>

---

# useVModel
一个让使用 props 和 emit 更加容易的工具

<LR>
<template v-slot:left>

<div v-click>

```ts
export function useVModel(props, name) {
  const emit = getCurrentInstance().emit

  return computed({
    get() {
      return props[name]
    },
    set(v) {
      emit(`update:${name}`, v)
    }
  })
}
```

</div>

</template>
<template v-slot:right>

<div v-click>

```ts
export default defineComponent({
  setup(props) {
    const title = useVModel(props, 'title')

    return { title }
  }
})
```

</div>

<div v-click>

```html

<template>
  <input v-model:title="title" />
</template>

```

</div>

<div v-click>

```ts
setup(props) {
  const { titke } = useVModels(props)

  return { title }
}
```

</div>

</template>
</LR>

---

# 调试
让 `console.log` 更好看

<LR>
<template v-slot:left>

<div v-click>

```ts
const str = ref('hello world')
const num = ref(10086)
const obj = ref({a: 1})

const state = reactive({
  list: [1, 2 ,3]
})

console.log(str)
console.log(num)
console.log(obj)
console.log(state)
```

</div>

</template>

<template v-slot:right>

<div v-click>

![Remote Image](https://pageignore.github.io/share-ppt/log_img01.png)

</div>

</template>
</LR>

---

# 调试
让 `console.log` 更好看

<v-clicks>

<div class="mb-5 lh-30">
浏览器允许我们编写自定义的 formatter，从而自定义输出形式。在 Vue.js 3 的源码中，你可以搜索到名为initCustomFormatter 的函数，该函数就是用来在开发环境下初始化自定义 formatter 的。
</div>

<div class="mb-5 lh-30">
以Chrome 为例，我们可以打开 DevTools 的设置，然后勾选“Console”→“Enable custom formatters”选项。
</div>

</v-clicks>

<LR>
<template v-slot:left>

<div v-click>

```ts
const str = ref('hello world')
const num = ref(10086)
const obj = ref({a: 1})

const state = reactive({
  list: [1, 2 ,3]
})

console.log(str)
console.log(num)
console.log(obj)
console.log(state)
```

</div>

</template>

<template v-slot:right>

<div v-click>

![Remote Image](https://pageignore.github.io/share-ppt/log_img02.png)

</div>

</template>
</LR>

---

# 优化

<v-clicks>
<div class="mb-5">
• 使用 `shallowRef` 、`shallowReactive` 等浅层响应式函数
</div>

<div  class="mb-2">
• Tree-Shaking
</div>

<div  class="mb-5">

```ts
const x = 3;
/*#__PURE__*/ foo()
const y = 4;
```

</div>

<div  class="mb-2">
• 特性开关
</div>

<div  class="mb-5">

`__VUE_OPTIONS_API__`

如果明确知道自己不会使用选项 API，用户就可以使用 __VUE_OPTIONS_API__ 开关来关闭该特性，这样在打包的时候 Vue.js 的这部分代码就不会包含在最终的资源中，从而减小资源体积。

```ts
// webpack.DefinePlugin 插件配置
new webpack.DefinePlugin({
  __VUE_OPTIONS_API__: JSON.stringify(true), // 开启特性
})
```

</div>
</v-clicks>

---

# `@vue/composition-api`
为 Vue2 提供组合式 API 的插件

[vue/composition-api](https://github.com/vuejs/composition-api)

```ts
// same syntax for both Vue 2 and 3
import { ref, reactive, defineComponent } from 'vue-demi'
```

---

# Vue Demi
创建 Vue2 和 Vue3 兼容的插件库

[vueuse/vue-demi](https://github.com/vueuse/vue-demi)

```ts
// same syntax for both Vue 2 and 3
import { ref, reactive, defineComponent } from 'vue-demi'
```

---

# VueUse
Vue 组合式API工具合集

[VueUse](https://github.com/vueuse/vueuse)

<div v-click>
<div class="mt-10 mb-5">• 同时支持Vue2 和 3</div>
<div class="mb-5">• Tree-shake</div>
<div class="mb-5">• TypeScript</div>
<div class="mb-5">• 支持 CDN</div>
<div class="mb-5">• 丰富的生态系统</div>
</div>

---

# 快速回顾

<v-clicks>
<div class="mt-10 mb-5">• 建立“连接”</div>
<div class="mb-5">• 接受 Ref 作为函数参数</div>
<div class="mb-5">• 将异步操作转换为“同步”</div>
<div class="mb-5">• 副作用自动清除</div>
<div class="mb-5">• 状态共享</div>
<div class="mb-5">• <code>useVModel</code></div>
</v-clicks>


---
layout: center
---

#### 谢谢～
本演示文稿由 [Slidev](https://cn.sli.dev/) 强力驱动

<test />




