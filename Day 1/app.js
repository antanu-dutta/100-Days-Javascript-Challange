// Solution 1
// const findLongestWord = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }
//   let strArr = str.split(" ");
//   strArr = strArr.sort((a, b) => a.length - b.length);
//   console.log(strArr[strArr.length - 1]);
// };

// findLongestWord("Watch Thapa Technical javascript course on youtube");

// Solution 2

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let strArr = str.split(" ");
  let sortedValue = strArr.reduce((accum, currVal) =>
    currVal.length > accum.length ? currVal : accum
  );
  return sortedValue;
};

console.log(
  findLongestWord("Watch Thapa Technical javascript course on youtube")
);
