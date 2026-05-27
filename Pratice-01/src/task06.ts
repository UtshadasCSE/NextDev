const product = {
  id: 101,
  name: "keyboard",
  price: 50,
};

function getProductProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getProductProp(product, "price"));
console.log(getProductProp(product, "name"));
console.log(getProductProp(product, "id"));
