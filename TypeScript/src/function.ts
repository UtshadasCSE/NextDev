/*
Function 
1. Arrow function
2. Normal function
*/

// Normal Function
function addNormal(a: number, b: number): number {
  return a + b;
}

console.log(addNormal(12, 12));

// Arrow Function

const addArrow = (a: number, b: number): number => {
  return a + b;
};

console.log(addArrow(12, 34));

const user: {
  name: string;
  age: number;
  company: "Acote Group LTD";
  salary: Function;
} = {
  name: "Utsha",
  age: 25,
  company: "Acote Group LTD",
  salary: function (value: number): number {
    return this.age + value;
  },
};
console.log(user.salary(40000));
