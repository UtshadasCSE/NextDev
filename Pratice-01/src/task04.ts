let secretValue: unknown = "typescript is awesome";

const upperValue = (secretValue as string).toUpperCase();

console.log(upperValue);
