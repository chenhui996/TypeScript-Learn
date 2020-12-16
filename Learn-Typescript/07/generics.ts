// function echo<T>(arg: T): T {
//     return arg
// }

// // result 即返回 string
// const result = echo('s');

// // 类型推论
// // 即返回 boolean
// const result2 = echo(true);

// interface IWithLength{
//     length: number
// }

// function echoWithLength<T extends IWithLength >(arg: T) {
//     console.log(arg.length);
//     return arg;
// }

// const str = echoWithLength('str');
// const obj = echoWithLength({ length: 10, width:10, lengths:2 });
// const arr2 = echoWithLength([1, 2, 3]);
// // const num3 = echoWithLength(13);

// ---------------------------------------------------------------------------

// // 先进先出队列
// class Queue {
//   private data = [];
//   push(item) {
//     return this.data.push(item);
//   }
//   pop() {
//     return this.data.shift();
//   }
// }

// const queue = new Queue();
// queue.push(1);
// queue.push("str");

// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());

// // 要用泛型使ts在编写阶段 提示错误
// class Queue<T> {
//     private data = [];
//     push(item: T) {
//       return this.data.push(item);
//     }
//     pop(): T {
//       return this.data.shift();
//     }
//   }

//   const queue = new Queue<number>();
//   queue.push(1);
// //   queue.push("str"); // 这样，必会报错

//   console.log(queue.pop().toFixed());
// //   console.log(queue.pop().toFixed());

// 接口 interface 中泛型的使用
interface KeyPair<T, U> {
  key: T;
  value: U;
}

// 这样，我们就在需要使用 '接口' 定义类型的时候, 动态定义其类型;
let kp1: KeyPair<number, string> = { key: 123, value: "str" };
let kp2: KeyPair<string, number> = { key: "cain", value: 20 };
// 非常灵活

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

