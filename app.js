const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
  // this for loop is the same as foreach
  for (let i = 0; i < profileDataArr; i++) {
    console.log(profileDataArr[i]);
  }
  console.log("============");

  // using foreach instead of for loop
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
