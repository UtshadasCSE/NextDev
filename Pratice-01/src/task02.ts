type Person = {
  name: string;
  age: number;
};

type JobDetails = {
  role: string;
  salary: number;
};

type Employee = Person & JobDetails;

function getProfile(employee: Employee): string {
  return `Name ${employee.name} and Role: ${employee.role}`;
}

const employee: Employee = {
  name: "Utsha",
  age: 25,
  role: "Software Engineer",
  salary: 1200000,
};

console.log(getProfile(employee));
