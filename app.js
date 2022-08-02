const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const personObj = {
  name: "kamal kishore",
  age: 34,
  occupation: "Developer",
};
personObj.age = 100;
personObj.occupation = "Developer";
// console.log(personObj);
// Introducing Arrow function
const printProfileData = (profileDataArr) => {
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }
};
printProfileData(profileDataArgs);
