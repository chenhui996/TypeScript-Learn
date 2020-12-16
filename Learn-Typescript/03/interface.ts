// 定义第一个接口
interface Person {
  readonly id: number;
  name: string;
  age: number;
  phone?: number;
}
let cain: Person = {
  id: 1,
  name: "cain",
  age: 20,
};

// 提起类的 公共 方法
// implements
interface Radio {
  switchRedio(): void;
}
// interface Battery {
//   yep();
// }

interface RadioWithBattery extends Radio{
  yep();
}

class Car implements Radio {
  switchRedio() {}
}
class Cellphone implements RadioWithBattery {
  switchRedio() {}
  yep() {}
}
