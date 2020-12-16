# Typescript

- 安装

```
npm i -g typescript
```

- 查看版本:

```
tsc -v
```

- 安装完成后，即为 TS 的 '编译器';
  - 我们还需要一个完美的 '编辑器';

## IDE

- 与 TS 配合的编辑器, 来编写代码;
  - VsCode **(:yep)**

---

## 编译 ts 文件

> $cd Learn-Typescript/01/hello.ts

- 用 tsc 编译:
  - 在编写好 ts 文件后;(.ts 后缀的文件)
  - 命令行输入:

```
tsc XX.ts
```

- 即将 ts 编译为正常的 js 文件;

> ts 编译时, 即使报错, 也会生成最终的编译结果;(.js 文件)

## 原始类型

> $cd Learn-Typescript/02/basic-types.ts

- undefind 和 null 可以是 '其他原始' 类型的 '子类型';
- 面试官最喜欢问的问题:
  - **undefind 和 null 的区别**;

### 联合类型

- 允许定义的对象:
  - 可以选择:
    - 两种数据类型;

```ts
// 联合类型
let numberOrString1: number | string = 4;
let numberOrString2: number | string = "cain";
```

### 数组类型

```ts
// 数组类型
let arrOfNumber: number[] = [1, 2, 3, 4];
```

### 元组

- 合并了不同类型的数组;

```ts
// 元组
let user: [string, number] = ["cain", 20];
```

- 写死:
  - 对应项的元素类型;
  - 数组的长度;(元素个数不可少, 也不可多)

## interface 接口

- 用来定义 Object 类型;(对象类型)
  - 像是一种**规范和契约**;
- 作用:
  - 对对象的形状(shape)进行表述:
    - 属性、方法之类的;
  -  对(class)进行抽象;

> interface 还有一个非常响亮的称号: Duck Type(鸭子类型)

```ts
// 定义第一个接口
interface Person {
  name: string;
  age: number;
}
let cain: Person = {
  name: "cain",
  age: 20,
};
```

- interface 定义好后:
  - 之后定义的对象:
    - 属性 '数量' 与 '类型':
      - 与 interface 定义好的 '数量' 与 '类型':
        - **必须一致**;

### interface 的 '可选属性'

- `?`
- 定义一个 '可有可无'的属性:

```ts
interface Person {
  name: string;
  age: number;
  phone?: number;
}
```

### interface 的 '只读属性'

- readonly
- 在对象定义好后，无法再次 '赋值';(也就是 '对象' 定义好后，就不让改了)

```ts
interface Person {
  readonly id: number;
  name: string;
  age: number;
  phone?: number;
}
```

## 函数类型

- 对函数的 '输入' 和 '输出' :
  - 进行 '类型定义';

```ts
// 函数类型
function add(x: number, y: number): number {
  return x + y;
}

let result = add(3, 2);
// result 即为 number 类型
```

### 函数类型的 '可选参数'

- `?`
- 定义一个 '可有可无'的函数参数:

```ts
// 函数类型的 '可选参数'
function add(x: number, y: number, z?: number): number {
  return x + y + z;
}

let result = add(3, 2);
// result 不会报错
```

> 切记，'可选参数' 必须放在 '必要参数' 后面;

### 函数类型的 '默认值'

- 当给 '参数' 加了 '默认值', 此 '参数' 即转化为 '可选参数';

```ts
// 函数类型的 '默认值'
function add(x: number, y: number = 10, z?: number): number {
  return x + y + z;
}

let result = add(3);
// result 不会报错
```

## 类型推论

- ts 会在:
  - 我们 '没有明确定义好类型' 时:
    - 帮助我们 '推断出一种类型';
      - 算是给我们的一种小帮助;

## 面向对象基本术语:

### 类 Class

- 定义了一切事物的 '抽象特点';
  - 属性、方法等;(车的蓝图)

### 对象 Object

- 类的实例, 用 new 实例化;(具体车型)

### 面向对象 OOP

- 三大特性:
  - 封装
  - 继承
  - 多态

#### 封装

- 将对 '对象的操作细节' 隐藏起来;
  - 只暴露对外的 '接口':
    - 外界的 '调用端' 不需要知道具体的实现细节;
      - 只需要调用对应的 '对外的一些接口' 来访问对象;

```ts
// 基本的class
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("cain");

console.log(snake.run());
```

#### 继承

- '子类' 继承 '父类';
  - 子类除了拥有父类的所有特性外, 还可以拥有其他的一些特性;(自己定义即可)

```ts
// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog("yep");
console.log(dog.bark());
```

#### 多态

- 是由 '继承' 而产生的:
  - 相关的 '不同的类';
- 对同一个方法, 可以有不同的响应;

```ts
// 重写属性
class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "Wao, " + super.run();
  }
}

const cat = new Cat("aak");
console.log(cat.run());
```

## TS 修饰符

- 控制类的 '方法' 和 '属性' 的状态;(是否对外开发)

### public

- 表示对外开放的修饰符;
  - 默认 '类下的属性和方法':
    - 修饰符均为 public;

### private

- 表示私有的修饰符;
  - 外界无法访问;
  - 只能在类的内部访问;

```ts
class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
// 若在外界实例化后访问, 就会报错
```

> private 作用下的方法和属性, 其 '子类也无法访问';

### protected

- 效果与 private 类似;
  - 区别是 protected 作用下的方法和属性， 其 '子类可以访问';

```ts
class Animal {
  public name: string;
  private age: number;
  protected phone: number;
  constructor(name: string, age: number, phone:number) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
  ...
}
```

> protected 修饰符有点像把 '变量转化成遗产', 只有自己子女可以访问, 其他人不能访问;

### readonly

- 只能读, 不能写;

### static

- 代表类的 '静态属性';
  - 默认情况下:
    - 不需要实例化, 也能访问的属性;

```ts
class Animal {
  public name: string;
  private age: number;
  protected phone: number;
  // 静态属性
  static categoies: string[] = ["man", "sniper"];
  constructor(name: string, age: number, phone:number) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
  ...
}
// 不需要实例化, 即可访问
Animal.categoies();
```

## implements

- 提取类的公共方法;

```ts
interface Radio {
  switchRedio(): void;
}

class Car implements Radio {
  switchRedio() {}
}
class Cellphone implements Radio {
  switchRedio() {}
}
```

### interface 之间的继承

- interface 之间也可以实现继承

```ts
interface Radio {
  switchRedio(): void;
}

interface RadioWithBattery extends Radio {
  yep();
}

class Car implements Radio {
  switchRedio() {}
}
class Cellphone implements RadioWithBattery {
  switchRedio() {}
  yep() {}
}
```

> interface 像是某种契约, 可以定义和约束所有内容;

## 泛型 generics

- 定义函数、接口或类的时候:
  - 不预先制定 '具体的类型';
    - 而是在使用的时候:
      - 再去 '指定类型' 的一种特征;

```ts
function echo<T>(arg: T): T {
  return arg;
}

// result 即返回 string
const result = echo("s");

// 类型推论
// 即返回 boolean
const result2 = echo(true);
```

- `<T>`更像是一种占位符, 等待着, 随时等着去 '被制定';

> 核心: 不预先制定 '具体的类型', 在使用时去制定;
> 可以理解为占位符, 在需要使用的时候再动态填入;

### 约束泛型

- 约束泛型所 '能' 被定义的类型;

```ts
function echoWithLength<T extends IWithLength>(arg: T) {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength("str"); // 3
const obj = echoWithLength({ length: 10, width: 10, lengths: 2 }); // 10
const arr2 = echoWithLength([1, 2, 3]); // 3
// const num3 = echoWithLength(13); error

// 只要实例传入的arg, 能调用length方法, 就不会报错
```

> 约束泛型: 让传入值满足我们约定的条件, 而不是想传入啥, 就传入啥;

## 泛型在其他方面的使用

### 应用到类

- 需求:
  - 创建一个 '先进先出的队列';

```ts
// 先进先出队列
class Queue {
  private data = [];
  push(item) {
    return this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue = new Queue();
queue.push(1);
queue.push("str");

console.log(queue.pop().toFixed()); // error
console.log(queue.pop().toFixed()); // error
```

- 分析:
  - toFixed 方法的使用不难理解:
    - 需求是想让队列中的元素均为 number 类型;
      - 所以最后两句会报错，因为我们 push 了一个字符串类型;
- 要用泛型使 ts 在编写阶段 '提示错误':

```ts
// 要用泛型使ts在编写阶段 提示错误
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
queue.push("str"); // 这样，必会报错

console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
```

### 接口 interface 中泛型的使用

```ts
// 接口 interface 中泛型的使用
interface KeyPair<T, U> {
  key: T;
  value: U;
}

// 这样，我们就在需要使用 '接口' 定义类型的时候, 动态定义其类型;
let kp1: KeyPair<number, string> = { key: 123, value: "str" };
let kp2: KeyPair<string, number> = { key: "cain", value: 20 };
// 非常灵活
```

- 灵活定义函数类型:

```ts
// interface 与 泛型 配合, 灵活定义函数类型
interface IPlus<T> {
  (a: T, b: T): T;
}

function plus(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}

// 开始使用
const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
```

> 泛型, 重点突出一个灵活
