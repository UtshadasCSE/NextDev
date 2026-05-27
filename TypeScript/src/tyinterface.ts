interface IUser {
  name: string;
  age: number;
}

const student: IUser = {
  name: "John",
  age: 20,
};

function userInfo(user: IUser): string {
  return `Name: ${user.name}, Age: ${user.age}`;
}

interface IProducts {
  id: number;
  name: string;
  price: number;
}

const product: IProducts = {
  id: 1001,
  name: "Laptop",
  price: 1500,
};
function productInfo(product: IProducts): string {
  return `ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`;
}
console.log(productInfo(product));

interface IPerson {
  name: string;
  age: number;
}

interface employee extends IPerson {
  employeeId: number;
  address: string;
  company: string;
}

const employees: employee[] = [{
  employeeId: 1001,
  name: "Alice",
  age: 30,
  address: "123 Main St",
  company: "Tech Inc",
}];
console.log(employees.map((emp: employee): string => {
  return `Employee ID: ${emp.employeeId}, Name: ${emp.name}, Age: ${emp.age}, Address: ${emp.address}, Company: ${emp.company}`;
}));
