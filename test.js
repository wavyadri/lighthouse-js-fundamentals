const lastIndexOf = (array, value) => {
  let lastOcurr;
  if (array.length <= 0) {
    return -1;
  } else {
    // loop backwards so we don't have to deal with duplicates
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        return (lastOcurr = i);
      }
    }
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
