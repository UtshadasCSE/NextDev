const Colors = {
  primary: "RED",
  secondary: "BLUE",
} as const;

type ValidColor = (typeof Colors)[keyof typeof Colors];

function setColor(c: ValidColor): void {
  console.log(`Selected color ${c}`);
}
setColor("RED");
setColor("BLUE");
