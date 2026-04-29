const firstArry = [];
const secondArray = [];

for (let i = 1; i <= 6000; i++) {
  if (i <= 3000) {
    firstArry.push(i);
  }
  secondArray.push(i);
}

console.log(`First array:${firstArry.length}`);
console.log(`Second array:${secondArray.length}`);

console.log("Map first");
let firstUserList = firstArry.map((number) => ({ userID: number }));
console.log("Map second");
let secondUserList = secondArray.map((number) => ({ userID: number }));
console.log("Find");
let user = firstUserList.find((user) => user.userID === 2000);
