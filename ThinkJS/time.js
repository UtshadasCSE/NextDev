let startTime = performance.now();

for (let i = 0; i < 50000; i++) {
  console.log(i);
}

let endTime = performance.now();

console.log(`This code took ${endTime - startTime} ms`);
