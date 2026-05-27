const cartItems = [
  { id: 1, name: "Wireless Mouse", price: 15.99, quantity: 2 },
  { id: 2, name: "Keyboard", price: 25.5, quantity: 1 },
  { id: 3, name: "Headphones", price: 45.0, quantity: 1 },
  { id: 4, name: "USB Cable", price: 5.99, quantity: 3 },
  { id: 5, name: "Laptop Stand", price: 30.0, quantity: 1 },
];

const subTotal = cartItems.reduce((subTotal, product) => {
  console.log(subTotal, product);
  return subTotal + product.price * product.quantity;
}, 0);
console.log(subTotal);

const players = [
  { name: "John", score: 85 },
  { name: "Alice", score: 92 },
  { name: "Bob", score: 78 },
  { name: "Emma", score: 95 },
  { name: "David", score: 88 },
];

const bestPlayer = players.reduce((bestPlayer, player) => {
  if (player.score > bestPlayer.score) {
    return player;
  }
  return bestPlayer;
}, players[0]);
console.log(bestPlayer);
