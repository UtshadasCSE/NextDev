const kgToGram = (input: number | string): number | string | undefined => {
  if (typeof input == "number") {
    return input * 1000;
  } else if (typeof input == "string") {
    const value = input.split(" ");
    return `Ans:${value}`;
  }
};
let result = kgToGram(2);
console.log(result);
let result2 = kgToGram("2 kg");
console.log(result2);
