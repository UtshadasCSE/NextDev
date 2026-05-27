const numbers = [5, 20, 9, 10, 5, 6, 5, 2, 9, 1, 5, 6];
const fruits = ["Clemon", "banana", "apple", "grape", "orange", "kiwi"];

// Nested array flat
const tagFromPosts = [
  ["JS", "React", "Next JS", "Tailwind CSS"],
  ["Python", "Django", "Flask", "Pandas"],
  ["Java", "Spring", "Hibernate", "Maven"],
];

// Sorting numbers in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);
console.log(numbers);

// Sorting array in ascending order

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
console.log(sortedFruits);
console.log(fruits);

// Flat Array

const flatTagFromPosts = tagFromPosts.flat();
console.log(flatTagFromPosts);
console.log(tagFromPosts);

const filterTag = new Set(tagFromPosts.flat());
console.log(filterTag);

// Find even numbers using some

const hasEvenNumbers = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumbers);

// Some
const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRole = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) =>
  featureAccessRole.includes(role),
);
console.log(canAccess);
