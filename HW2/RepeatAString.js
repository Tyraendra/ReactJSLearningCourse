function repeatStringNumTimes(str, num) {
  let combinedString = "";

  while (num > 0) {
    combinedString += str;
    num -= 1;
  }

  return combinedString;
}

repeatStringNumTimes("abc", 3);