const amounts = [61.0, 52.25, 112.99, 5.0];
const total = 0;

// original
const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

// for..of loop
// let "each item" of "array"
// "array" must match variable name of your array
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);

// only useful for beginning to end loops
// i.e. not reverse
