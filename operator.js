'use strict'


// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`);


console.log('ellie\'s book'); // single quote 사용방법
console.log("ellie's \nbook"); // 줄바꿈 사용 방법
console.log("ellie's \tbook"); // tab key



// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

// counter = counter + 1; 먼저 1을 더해서 counter에 할당하고, 
// preIncrement = counter; 1을 더한 counter 를 다시 preIncrement에 할당하라

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter ++;
// postIncrement = counter; 먼저 counter 값을 할당한 후
// counter = counter + 1; counter 값에 1을 더해 counter에 할당
console.log(`postIncremnet: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators (=)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or) , && (and) , ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 앞에서 value 가 true이면 value2 와 check()는 사용되지 않음.
// simple 한 value 들을 우선 앞에 두고, 모두 false 일 때 복잡한 연산을 하도록 의도해야
// 효율적임
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if문에서 null 을 확인할 때 간편하게 사용됨


function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);
// 값을 반대로 바꿔줌

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입을 변경해서 검사를 함.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입을 변경하지 않고 검사를 함.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// object equality by reference
const axce1 = { name: 'axce' }; // ref1 을 향하고 있음
const axce2 = { name: 'axce' }; // ref2 를 향하고 있음
const axce3 = axce1;            // axce1 과 같은 ref1을 향하고 있음

console.log(axce1 == axce2); // axce1 과 axce2 는 각각 다른 ref를 가지고 있음. 따라서 false
console.log(axce1 === axce2); // 마찬가지로 ref의 값이 다르기 때문에 false
console.log(axce1 === axce3); // 같은 ref를 가지고 있기 때문에 true


// equality - puzzler
console.log(`1: ${0 == false}`) // True
console.log(`2: ${0 === false}`) // false // 0은 boolean type이 아니기 때문에 false
console.log(`3: ${'' == false}`) // True
console.log(`4: ${'' === false}`) // false // ''도 boolean type이 아니기 때문에 false
console.log(`5: ${null == undefined}`) // True 
console.log(`6: ${null === undefined}`) // false


// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name == 'axce') {
  console.log('welcome, axce!');
} else if (name == 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Thernary operator: ?
// condition ? value1 : value2;
// if를 좀 더 간단하게 사용하는 방법
// 간단한 경우에만 사용할 것
console.log(name === 'axce' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('love you!');
    break;
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('small all!');
    break;
}
// 같은 걸 출력할 경우에는 Chrome case 와 Firefox case를 묶어서 사용할 수 있음
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('small all!');
    break;
}  


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 조건이 맞는지 검사 후 블럭을 실행
// 이때 조건이 맞지 않을 때까지 실행하게 된다.
let i = 3;
while ( i > 0 ) {
  console.log(`while: ${i}`);
  i--;
}


// do while loop, body code is executed first,
// then check the condition.
let z = 3;
do {
  console.log(`do while: ${z}`);
  z--;
} while (z > 0);


// for loop, for(begin; condition; step)
// begin은 처음 딱 한번만 실행을 하게 되고, 그 이후부터는 condtion, step을 반복적으로 실행
// condition이 false가 되면 break
for (x = 3; x > 0; x--) {
  console.log(`for: ${x}`);
}

// for 안에서 지역번수를 선언
for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}


// Q2. iterate form 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}

