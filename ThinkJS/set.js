// const set = new Set();
// set.add("apple");
// set.add("mango");
// set.add("grape");
// set.add("banana");
// console.log(set);
// console.log(set.size);

// const thomas = { username: "Trjun" };
// const ghoja = { username: "Ghoja" };
// const ramu = { username: "Ramu" };
// const harekrishna = { username: "Hare Krishna" };

// const set = new Set();

// set.add(thomas);
// set.add(ghoja);
// set.add(ramu);
// set.add(harekrishna);

// console.log(set);

// let arr = [12, 34, 56, 56, 78, 90];
// const set = new Set(arr);
// const convertArr = Array.from(set);
// convertArr.push(900);
// console.log(convertArr);

// console.log(set);
// console.log(set.delete(78));
// console.log(set);

// const fruits = [
//   "apple",
//   "mango",
//   "banana",
//   "apple",
//   "watermelon",
//   "cocunat",
//   "banana",
//   "apple",
// ];

// // Brute force

// const removeDupArr = (fruits) => {
//   const newFruits = [];
//   fruits.forEach((fruit) => {
//     if (!newFruits.includes(fruit)) {
//       newFruits.push(fruit);
//     }
//   });
//   return newFruits;
// };
// console.log(removeDupArr(fruits));

// const removeDupArrSet = (fruits) => {
//   const set = new Set(fruits);

//   return Array.from(set);
// };
// console.log(removeDupArrSet(fruits));

// data setup

function generateSimData(size) {
  const itemPool = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Cherry",
    "Blueberry",
    "Apple",
    "Orange",
  ];

  const generatedData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }

  return generatedData;
}

const hugeDataSet = generateSimData(800000);

console.log("Data size", hugeDataSet.length);

// Brute Force

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};
console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();

console.log(`Array Implementation took ${arrEndTime - arrStartTime}ms`);

// Set implementation

const setStartTime = performance.now();

const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupSet(hugeDataSet));

const setEndTime = performance.now();

console.log(`Set Implementation took ${setEndTime - setStartTime}ms`);
