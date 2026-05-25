type cartItem = {
  name: string;
  price: number;
  quantity?: number;
};

function calculateTotal(cart: cartItem): number {
  const { price, quantity = 1 } = cart;

  return price * quantity;
}

console.log(calculateTotal({ name: "Mithun", price: 2000, quantity: 0 }));
