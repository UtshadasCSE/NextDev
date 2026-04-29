const rawProducts = [
  {
    id: 1,
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 15.99,
    rating: 4.3,
    stock: 120,
  },
  {
    id: 2,
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: 29.99,
    rating: 4.5,
    stock: 80,
  },
  {
    id: 3,
    productName: "Gaming Keyboard",
    category: "Electronics",
    price: 45.5,
    rating: 4.6,
    stock: 60,
  },
  {
    id: 4,
    productName: "LED Monitor",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
    stock: 40,
  },
  {
    id: 5,
    productName: "USB-C Charger",
    category: "Electronics",
    price: 12.99,
    rating: 4.2,
    stock: 200,
  },

  {
    id: 6,
    productName: "Running Shoes",
    category: "Fashion",
    price: 55.0,
    rating: 4.4,
    stock: 75,
  },
  {
    id: 7,
    productName: "Leather Jacket",
    category: "Fashion",
    price: 120.0,
    rating: 4.6,
    stock: 30,
  },
  {
    id: 8,
    productName: "T-Shirt",
    category: "Fashion",
    price: 10.0,
    rating: 4.1,
    stock: 150,
  },
  {
    id: 9,
    productName: "Jeans",
    category: "Fashion",
    price: 35.0,
    rating: 4.3,
    stock: 90,
  },
  {
    id: 10,
    productName: "Sneakers",
    category: "Fashion",
    price: 60.0,
    rating: 4.5,
    stock: 50,
  },

  {
    id: 11,
    productName: "Coffee Maker",
    category: "Home",
    price: 80.0,
    rating: 4.4,
    stock: 25,
  },
  {
    id: 12,
    productName: "Blender",
    category: "Home",
    price: 40.0,
    rating: 4.2,
    stock: 60,
  },
  {
    id: 13,
    productName: "Vacuum Cleaner",
    category: "Home",
    price: 150.0,
    rating: 4.6,
    stock: 20,
  },
  {
    id: 14,
    productName: "Air Fryer",
    category: "Home",
    price: 95.0,
    rating: 4.7,
    stock: 35,
  },
  {
    id: 15,
    productName: "Electric Kettle",
    category: "Home",
    price: 25.0,
    rating: 4.3,
    stock: 100,
  },

  {
    id: 16,
    productName: "Smartphone",
    category: "Electronics",
    price: 499.0,
    rating: 4.8,
    stock: 45,
  },
  {
    id: 17,
    productName: "Tablet",
    category: "Electronics",
    price: 300.0,
    rating: 4.5,
    stock: 30,
  },
  {
    id: 18,
    productName: "Laptop",
    category: "Electronics",
    price: 900.0,
    rating: 4.7,
    stock: 20,
  },
  {
    id: 19,
    productName: "Smartwatch",
    category: "Electronics",
    price: 150.0,
    rating: 4.4,
    stock: 70,
  },
  {
    id: 20,
    productName: "Power Bank",
    category: "Electronics",
    price: 20.0,
    rating: 4.3,
    stock: 110,
  },

  {
    id: 21,
    productName: "Office Chair",
    category: "Furniture",
    price: 85.0,
    rating: 4.2,
    stock: 40,
  },
  {
    id: 22,
    productName: "Desk Table",
    category: "Furniture",
    price: 120.0,
    rating: 4.5,
    stock: 25,
  },
  {
    id: 23,
    productName: "Bookshelf",
    category: "Furniture",
    price: 70.0,
    rating: 4.3,
    stock: 35,
  },
  {
    id: 24,
    productName: "Sofa",
    category: "Furniture",
    price: 400.0,
    rating: 4.6,
    stock: 10,
  },
  {
    id: 25,
    productName: "Bed Frame",
    category: "Furniture",
    price: 250.0,
    rating: 4.4,
    stock: 15,
  },

  {
    id: 26,
    productName: "Football",
    category: "Sports",
    price: 18.0,
    rating: 4.2,
    stock: 90,
  },
  {
    id: 27,
    productName: "Cricket Bat",
    category: "Sports",
    price: 35.0,
    rating: 4.5,
    stock: 50,
  },
  {
    id: 28,
    productName: "Tennis Racket",
    category: "Sports",
    price: 60.0,
    rating: 4.6,
    stock: 40,
  },
  {
    id: 29,
    productName: "Yoga Mat",
    category: "Sports",
    price: 15.0,
    rating: 4.3,
    stock: 120,
  },
  {
    id: 30,
    productName: "Dumbbells Set",
    category: "Sports",
    price: 50.0,
    rating: 4.7,
    stock: 30,
  },

  {
    id: 31,
    productName: "Novel Book",
    category: "Books",
    price: 12.0,
    rating: 4.5,
    stock: 200,
  },
  {
    id: 32,
    productName: "Science Book",
    category: "Books",
    price: 20.0,
    rating: 4.6,
    stock: 150,
  },
  {
    id: 33,
    productName: "History Book",
    category: "Books",
    price: 18.0,
    rating: 4.4,
    stock: 130,
  },
  {
    id: 34,
    productName: "Comics",
    category: "Books",
    price: 10.0,
    rating: 4.3,
    stock: 170,
  },
  {
    id: 35,
    productName: "Notebook",
    category: "Books",
    price: 5.0,
    rating: 4.2,
    stock: 300,
  },

  {
    id: 36,
    productName: "Face Wash",
    category: "Beauty",
    price: 8.0,
    rating: 4.3,
    stock: 140,
  },
  {
    id: 37,
    productName: "Shampoo",
    category: "Beauty",
    price: 10.0,
    rating: 4.4,
    stock: 120,
  },
  {
    id: 38,
    productName: "Perfume",
    category: "Beauty",
    price: 35.0,
    rating: 4.6,
    stock: 60,
  },
  {
    id: 39,
    productName: "Lipstick",
    category: "Beauty",
    price: 15.0,
    rating: 4.5,
    stock: 80,
  },
  {
    id: 40,
    productName: "Moisturizer",
    category: "Beauty",
    price: 12.0,
    rating: 4.3,
    stock: 100,
  },

  {
    id: 41,
    productName: "Backpack",
    category: "Accessories",
    price: 25.0,
    rating: 4.4,
    stock: 90,
  },
  {
    id: 42,
    productName: "Sunglasses",
    category: "Accessories",
    price: 20.0,
    rating: 4.2,
    stock: 110,
  },
  {
    id: 43,
    productName: "Wallet",
    category: "Accessories",
    price: 18.0,
    rating: 4.3,
    stock: 70,
  },
  {
    id: 44,
    productName: "Watch",
    category: "Accessories",
    price: 60.0,
    rating: 4.6,
    stock: 50,
  },
  {
    id: 45,
    productName: "Belt",
    category: "Accessories",
    price: 15.0,
    rating: 4.1,
    stock: 95,
  },

  {
    id: 46,
    productName: "Rice Cooker",
    category: "Home",
    price: 55.0,
    rating: 4.5,
    stock: 40,
  },
  {
    id: 47,
    productName: "Iron",
    category: "Home",
    price: 25.0,
    rating: 4.3,
    stock: 60,
  },
  {
    id: 48,
    productName: "Fan",
    category: "Home",
    price: 30.0,
    rating: 4.2,
    stock: 70,
  },
  {
    id: 49,
    productName: "Heater",
    category: "Home",
    price: 45.0,
    rating: 4.4,
    stock: 35,
  },
  {
    id: 50,
    productName: "Microwave Oven",
    category: "Home",
    price: 200.0,
    rating: 4.6,
    stock: 20,
  },

  {
    id: 51,
    productName: "Camera",
    category: "Electronics",
    price: 600.0,
    rating: 4.7,
    stock: 15,
  },
  {
    id: 52,
    productName: "Tripod",
    category: "Electronics",
    price: 35.0,
    rating: 4.4,
    stock: 40,
  },
  {
    id: 53,
    productName: "SD Card",
    category: "Electronics",
    price: 15.0,
    rating: 4.3,
    stock: 150,
  },
  {
    id: 54,
    productName: "Router",
    category: "Electronics",
    price: 45.0,
    rating: 4.5,
    stock: 60,
  },
  {
    id: 55,
    productName: "External HDD",
    category: "Electronics",
    price: 80.0,
    rating: 4.6,
    stock: 30,
  },

  {
    id: 56,
    productName: "Sandals",
    category: "Fashion",
    price: 20.0,
    rating: 4.2,
    stock: 100,
  },
  {
    id: 57,
    productName: "Cap",
    category: "Fashion",
    price: 12.0,
    rating: 4.1,
    stock: 120,
  },
  {
    id: 58,
    productName: "Scarf",
    category: "Fashion",
    price: 15.0,
    rating: 4.3,
    stock: 80,
  },
  {
    id: 59,
    productName: "Sweater",
    category: "Fashion",
    price: 40.0,
    rating: 4.5,
    stock: 60,
  },
  {
    id: 60,
    productName: "Hoodie",
    category: "Fashion",
    price: 45.0,
    rating: 4.6,
    stock: 50,
  },

  {
    id: 61,
    productName: "Pen Set",
    category: "Stationery",
    price: 8.0,
    rating: 4.2,
    stock: 200,
  },
  {
    id: 62,
    productName: "Marker",
    category: "Stationery",
    price: 5.0,
    rating: 4.1,
    stock: 250,
  },
  {
    id: 63,
    productName: "Stapler",
    category: "Stationery",
    price: 6.0,
    rating: 4.3,
    stock: 180,
  },
  {
    id: 64,
    productName: "File Folder",
    category: "Stationery",
    price: 4.0,
    rating: 4.2,
    stock: 300,
  },
  {
    id: 65,
    productName: "Calculator",
    category: "Stationery",
    price: 15.0,
    rating: 4.5,
    stock: 90,
  },

  {
    id: 66,
    productName: "Toy Car",
    category: "Toys",
    price: 10.0,
    rating: 4.3,
    stock: 140,
  },
  {
    id: 67,
    productName: "Doll",
    category: "Toys",
    price: 12.0,
    rating: 4.4,
    stock: 130,
  },
  {
    id: 68,
    productName: "Puzzle Game",
    category: "Toys",
    price: 15.0,
    rating: 4.5,
    stock: 120,
  },
  {
    id: 69,
    productName: "Board Game",
    category: "Toys",
    price: 25.0,
    rating: 4.6,
    stock: 80,
  },
  {
    id: 70,
    productName: "RC Helicopter",
    category: "Toys",
    price: 60.0,
    rating: 4.7,
    stock: 30,
  },

  {
    id: 71,
    productName: "Protein Powder",
    category: "Health",
    price: 50.0,
    rating: 4.6,
    stock: 40,
  },
  {
    id: 72,
    productName: "Vitamin C",
    category: "Health",
    price: 12.0,
    rating: 4.5,
    stock: 100,
  },
  {
    id: 73,
    productName: "Face Mask",
    category: "Health",
    price: 5.0,
    rating: 4.2,
    stock: 300,
  },
  {
    id: 74,
    productName: "Hand Sanitizer",
    category: "Health",
    price: 4.0,
    rating: 4.3,
    stock: 250,
  },
  {
    id: 75,
    productName: "Thermometer",
    category: "Health",
    price: 15.0,
    rating: 4.4,
    stock: 80,
  },

  {
    id: 76,
    productName: "Notebook Pro",
    category: "Electronics",
    price: 1100.0,
    rating: 4.8,
    stock: 10,
  },
  {
    id: 77,
    productName: "Gaming Mouse",
    category: "Electronics",
    price: 35.0,
    rating: 4.6,
    stock: 70,
  },
  {
    id: 78,
    productName: "Keyboard RGB",
    category: "Electronics",
    price: 55.0,
    rating: 4.7,
    stock: 60,
  },
  {
    id: 79,
    productName: "VR Headset",
    category: "Electronics",
    price: 300.0,
    rating: 4.8,
    stock: 20,
  },
  {
    id: 80,
    productName: "Drone",
    category: "Electronics",
    price: 500.0,
    rating: 4.7,
    stock: 15,
  },

  {
    id: 81,
    productName: "Curtains",
    category: "Home",
    price: 25.0,
    rating: 4.3,
    stock: 100,
  },
  {
    id: 82,
    productName: "Carpet",
    category: "Home",
    price: 80.0,
    rating: 4.5,
    stock: 40,
  },
  {
    id: 83,
    productName: "Wall Clock",
    category: "Home",
    price: 20.0,
    rating: 4.2,
    stock: 90,
  },
  {
    id: 84,
    productName: "Lamp",
    category: "Home",
    price: 18.0,
    rating: 4.3,
    stock: 110,
  },
  {
    id: 85,
    productName: "Mirror",
    category: "Home",
    price: 35.0,
    rating: 4.4,
    stock: 50,
  },

  {
    id: 86,
    productName: "Bike Helmet",
    category: "Sports",
    price: 30.0,
    rating: 4.5,
    stock: 60,
  },
  {
    id: 87,
    productName: "Skipping Rope",
    category: "Sports",
    price: 8.0,
    rating: 4.2,
    stock: 150,
  },
  {
    id: 88,
    productName: "Gym Gloves",
    category: "Sports",
    price: 12.0,
    rating: 4.3,
    stock: 100,
  },
  {
    id: 89,
    productName: "Water Bottle",
    category: "Sports",
    price: 10.0,
    rating: 4.4,
    stock: 200,
  },
  {
    id: 90,
    productName: "Sports Bag",
    category: "Sports",
    price: 25.0,
    rating: 4.5,
    stock: 80,
  },

  {
    id: 91,
    productName: "Baby Stroller",
    category: "Kids",
    price: 150.0,
    rating: 4.6,
    stock: 20,
  },
  {
    id: 92,
    productName: "Baby Bottle",
    category: "Kids",
    price: 10.0,
    rating: 4.4,
    stock: 120,
  },
  {
    id: 93,
    productName: "Diapers Pack",
    category: "Kids",
    price: 25.0,
    rating: 4.5,
    stock: 100,
  },
  {
    id: 94,
    productName: "Kids Toy Set",
    category: "Kids",
    price: 30.0,
    rating: 4.6,
    stock: 70,
  },
  {
    id: 95,
    productName: "Baby Clothes",
    category: "Kids",
    price: 20.0,
    rating: 4.3,
    stock: 90,
  },

  {
    id: 96,
    productName: "Dog Food",
    category: "Pets",
    price: 40.0,
    rating: 4.5,
    stock: 60,
  },
  {
    id: 97,
    productName: "Cat Toy",
    category: "Pets",
    price: 12.0,
    rating: 4.3,
    stock: 80,
  },
  {
    id: 98,
    productName: "Pet Bed",
    category: "Pets",
    price: 35.0,
    rating: 4.4,
    stock: 50,
  },
  {
    id: 99,
    productName: "Fish Tank",
    category: "Pets",
    price: 70.0,
    rating: 4.6,
    stock: 30,
  },
  {
    id: 100,
    productName: "Bird Cage",
    category: "Pets",
    price: 55.0,
    rating: 4.5,
    stock: 25,
  },
];

/*
Output = [{name:"phone",category:"smartwatch"}]
*/

/* =====Process===== 
// filter -> category
// sort by -> rating
// slice -> first 3 (top 3)
// map -> transform object shape 
*/

// =============Basic filter() approach

// const electronicsItem = rawProducts.filter((item) => {
//   return item.category === "Pets";
// });
// console.log(electronicsItem);

// ==========Case-insensitive filtering (safer)

// const electronicProducts = rawProducts.filter((product) => {
//   return product.category.toLowerCase() === "pets";
// });

// console.log(electronicProducts);

// ============Using function (reusable)

// function filterByCategory(data, category) {
//   return data.filter((item) => {
//     return item.category.toLowerCase() === category;
//   });
// }

// const kidsProducts = filterByCategory(rawProducts, "kids");
// console.log(kidsProducts);

// ============Using for loop

// const petsProducts = [];

// for (let i = 0; i < rawProducts.length; i++) {
//   if (rawProducts[i].category.toLowerCase() === "pets") {
//     petsProducts.push(rawProducts[i]);
//   }
// }
// console.log(petsProducts);

// ============Using for loop

const petsProducts = rawProducts
  .filter((item) => {
    return item.category === "Pets";
  })
  .sort((a, b) => a.rating - b.rating)
  .slice(0, 3)
  .map((product) => product.productName);

console.log(petsProducts);
