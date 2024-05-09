const charCount = (str, ltr) => {
  let strArr = str.toLowerCase().split("");
  let ltrChar = ltr.toLowerCase();
  let count = 0;
  for (let char of strArr) {
    if (char === ltrChar) {
      count += 1;
    }
  }
  console.log(count);
};

charCount("MissIssippi", "I");
