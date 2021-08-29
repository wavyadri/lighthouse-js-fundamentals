const isOdd = (num) => {
  // a number that is not divisible by 2 is odd
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

console.log('3 is odd: ' + isOdd(3));
console.log('8 is odd: ' + isOdd(8));
