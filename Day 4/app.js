const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "equilateral";
  }
  if (a === b || a === c || b === c) {
    return "isosceles";
  }
  if (a !== b && a !== c && b !== c) {
    return "scalene";
  }
};

console.log(checkTriangleType(60, 90, 60));
