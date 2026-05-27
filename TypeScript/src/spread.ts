// Spread in TS

const adminName = ["Utsha", "Chandra", "Das"];
const userName = ["Rakib", "Sayem", "Jadu"];
const globalName = ["Anik", "Sabbir", "Shuvo"];

adminName.push(...userName);
console.log(adminName);
console.log(userName);

const userInfo = {
  name: "Utsha",
  age: 25,
};

const userHobby = {
  ph: "Coding",
};

const allUser = { ...userInfo, ...userHobby };
console.log(allUser);

const userGlobalName = [...userName, ...globalName];
console.log(userGlobalName);
