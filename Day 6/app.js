const isPalindrome = (val) => {
  let fullVal = val.replace(/\W/g, "").toLowerCase();
  let reverseFullVal = fullVal.split("").reverse().join("");
  return fullVal === reverseFullVal ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal, Panama"));
