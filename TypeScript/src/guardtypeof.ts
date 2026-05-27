function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.toString() + b.toString();
  }
  throw new Error("Both values must be same type");
}

console.log(add("2", "2"));
