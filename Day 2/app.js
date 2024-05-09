const generateHash = (str) => {
  if (str.length >= 280 || str.trim().length === 0) {
    return false;
  }

  let strArr = str.split(" ");
  let hashTag = "#";

  for (let hash of strArr) {
    hashTag += hash.replace(/^\w/, (c) => c.toUpperCase());
  }
  return hashTag;
};

console.log(generateHash("my name is antanu dutta"));

// const generateHash = (str) => {
//   if (str.length >= 280 || str.trim().length === 0) {
//     return false;
//   }

//   const strArr = str.split(" ");
//   const arrMap = strArr.map(
//     (element) => element[0].toUpperCase() + element.replace(element[0], "")
//   );
//   let hashTag = "#";
//   for (let hash of arrMap) {
//     hashTag += hash;
//   }
//   return hashTag;
// };
// console.log(generateHash("my name is antanu dutta"));
