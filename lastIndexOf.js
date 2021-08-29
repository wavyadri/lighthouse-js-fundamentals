// would like to come back and review this to code a cleaner solution

const lastIndexOf = (array, value) => {
  let lastOcurr;
  // if array is empty or undef
  if (array.length <= 0) {
    return -1;
  } else {
    // loop backwards so we don't have to deal with duplicates
    for (let i = array.length - 1; i >= 0; i--) {
      // if we find a match, return
      // this will be the last occurance of it in the array
      // regardless of values before it
      if (array[i] === value) {
        return (lastOcurr = i);
      }
    }
    // if after looping through the whole array there is no match
    if (array[0] !== value) {
      return -1;
    }
  }
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), '=?', 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), '=?', 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), '=?', -1);
console.log(lastIndexOf([5, 5, 5], 5), '=?', 2);
console.log(lastIndexOf([], 3), '=?', -1);
