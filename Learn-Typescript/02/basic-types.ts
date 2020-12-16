// Boolean
let isDone: boolean = false;

// Number
let age: number = 18;
// 2进制
let binaryNumber: number = 0b1111;

// String
let firstName: string = "cain";
let message: string = `Hello, ${firstName}, age is${age}`;

// 面试官最喜欢问的问题
// undefind 和 null的区别

// undefind
let u: undefined = undefined;
let n: null = null;

// undefind 和 null 可以是 '其他原始' 类型的 '子类型';
let num: number = undefined;
let str: string = null;

// any
let notSure: any = 4;
notSure = "zzz";
notSure = true;

// 联合类型
let numberOrString1: number | string = 4;
let numberOrString2: number | string = "cain";

// 数组类型
let arrOfNumber: number[] = [1,2,3,4];

// 元组
let user: [string, number] = ["cain", 20];
