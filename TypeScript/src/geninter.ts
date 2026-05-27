interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releseadYear: number;
  };
  smartWatch: T;
}

const poorDeveloper: Developer<{ heartRate: string; stopWatch: number }> = {
  name: "Zihan",
  salary: 250000,
  device: {
    brand: "Lenevo",
    model: "Ideapad",
    releseadYear: 2024,
  },
  smartWatch: {
    heartRate: "Good",
    stopWatch: 1000,
  },
};
console.log(poorDeveloper);
