// loopyLighthouse 1
for (let i = 100; i <= 200; i++) {
  test dual conditional first, otherwise it will never pass
    if (i % 3 === 0 && i % 4 === 0) {
      console.log('LoopyLighthouse');
    } else if (i % 4 === 0) {
      console.log('Lighthouse');
    } else if (i % 3 === 0) {
      console.log('Loopy');
    } else {
      console.log(i);
    }
  }
  
  // loopyLighthouse 2
  const loopyLighthouse = (range, multiples, words) => {
    for (let i = range[0]; i <= range[1]; i++) {
      // test dual conditional first, otherwise it will never pass
      if (i % multiples[0] === 0 && i % multiples[1] === 0) {
        console.log(words[0] + words[1]);
      } else if (i % multiples[1] === 0) {
        console.log(words[1]);
      } else if (i % multiples[0] === 0) {
        console.log(words[0]);
      } else {
        console.log(i);
      }
    }
  };
  
  loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);
  