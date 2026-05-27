const user: {
  firstName: string;
  middleName?: string; //optional tyle
  lastName: string;
  age: number;
  email: string;
  isMarried: boolean;
  readonly company: string;
} = {
  firstName: "Utsha",
  middleName: "Chandra",
  lastName: "Das",
  age: 25,
  email: "utsha.das@example.com",
  isMarried: false,
  company: "Acote Group LTD",
};

user.email = "hello.dev@gmail.com";
console.log(user.email);
