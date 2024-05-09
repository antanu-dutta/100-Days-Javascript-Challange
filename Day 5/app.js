const testingArr = [5, 3, 10, 2];
const sortAnArray = (arr) => {
  let sortedArr;
  if (Array.isArray(arr)) {
    sortedArr = arr.sort((a, b) => a - b);
  } else {
    return "This is not an Array";
  }
  return sortedArr;
};

console.log(sortAnArray(testingArr));
