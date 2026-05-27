type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["Mr.x", "Mr.y", "Mr.z"];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
const isEligibleList: GenericArray<boolean> = [true, false, false, true];

// Generic function
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

console.log(getArray(friends));
console.log(getArray(isEligibleList));
console.log(getArray(rollNumbers));

type User = {
  name: string;
  age: number;
};

const userList: GenericArray<User> = [
  { name: "Nobita", age: 18 },
  { name: "Shujuka", age: 16 },
];
