class Student {
  name: string;
  age: number;
  class: string;
  roll: number;
  sex: "Male" | "Female";

  constructor(
    name: string,
    age: number,
    className: string,
    roll: number,
    sex: "Male" | "Female",
  ) {
    this.name = name;
    this.age = age;
    this.class = className;
    this.roll = roll;
    this.sex = sex;
  }
  getSleep(sleepTime: number) {
    console.log(`${this.name} is too lazy, He sleep more than ${sleepTime} `);
  }
}

const rakib = new Student("Rakib", 25, "Ten", 13, "Male");

rakib.getSleep(23);
