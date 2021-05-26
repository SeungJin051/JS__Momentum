/* String
const what = "Jin";

console.log(what);
*/

/*Boolean
const wat = true;
*/

/*Number
const wat =530;
*/

/* Float
const wat = 55.1;
*/

/*
function sayHello(name, number) {
  console.log("Excuse me", name, "you have last", 1, "chance.");
}

sayHello("Sir", 15);
console.log("Okay");
*/

/*
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Jin", 15);
*/

const calulator = {
  plus: function (a, b) {
    return a ** b;
  },
};

// console.log(greetJin);
const plus = calulator.plus(6, 5);
console.log(plus);
const calulator1 = {
  minus: function (a, b) {
    return a - b;
  },
};

// console.log(greetJin);
const minus = calulator1.minus(10, 9);
console.log(minus);
