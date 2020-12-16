// 函数
// function add(x: number, y: number = 10, z?:number): number {
//   return x + y + z;
// }

// let result =  add(3);

// 函数表达式

const add = function (x: number, y: number = 10, z?: number): number {
  return x + y + z;
};

const add2: (x: number, y?: number, z?: number) => number = add;
