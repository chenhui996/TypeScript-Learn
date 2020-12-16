// 基本的class
class Animal {
  public name: string;
  private age: number;
  protected phone: number;
  constructor(name: string, age: number, phone: number) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("cain", 20, 13888888888);

console.log(snake.run());

// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog("yep", 15, 1);
console.log(dog.bark());

// 重写属性
class Cat extends Animal {
  constructor(name, age, phone) {
    super(name, age, phone);
    console.log(this.name);
  }
  run() {
    return "Wao, " + super.run();
  }
}

const cat = new Cat("aak", 10, 9);
console.log(cat.run());
