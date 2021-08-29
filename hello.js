const sayHello = (name) => {
  console.log('Hello, ' + name);
};

sayHello('wavyadri');
sayHello('carla');
sayHello('dexter');

const returnSayHello = function (name) {
  return 'Hello, ' + name;
};
const greeting = returnSayHello('John');
console.log(greeting);
