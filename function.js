// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return; }
// one function === one thing // 하나의 함수는 하나의 일만을..
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}

log('Hello@');
log(1234);


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const axce = { name: 'axce' };
changeName(axce);
console.log(axce);


// 3. Default parameters (added in ES6)
// 파라미터가 비어있을 때 기본값을 지정하는 방법
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}

showMessage('Hi');

// 4. Rest parameters (added in ES6)
// ... 을 지정하면 rest parameters로 불리는 이는 배열형태로 전달되게 됨
function printAll(...args) {
  for (let i = 0; i <args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg); // args에서 하나씩 꺼내서 arg에 할당 후 출력
  }
} 

printAll('dream', 'coding', 'axce');


// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  
  // 자식 함수에서 부모 함수의 message 를 불러 올 수 있음.
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }

  // console.log(childMessage); 부모 함수에서는 자식 함수를 불러올 수 없음.
}

printMessage()

// 6. Return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 아닌 경우 빨리 return 해서 빠져나오고 조건이 맞는 경우에만 나머지를 실행
  }

  // long upgrade logic ...
}

// undefined 이거나 -1 일 때 빨리 return을 하고 필요한 로직을 진행하는게 더 좋다



// First-class function
// functions are treated like any other variable
// 함수는 다른 변수와 마찬가지로 변수에 할당이 되고, 
// can be assigned as a value to variable
// 다른 함수에 파라미터로 할당이 되고,
// can be passed as an argument to other functions
// 함수로 반환이 가능하다.
// can be returned by another function

// 1. function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
// function expression은 할당된 다음부터 활용 가능한 반면에 function declaration은 hoisting이 됨.
// 즉, sum 함수를 정의하기 전에 sum함수를 사용할 수 있음.


const print = function () {  // 함수를 선언함과 동시에 변수 print에 할당
  console.log('print');      // 함수에 이름이 없는 것을 anonymous function 이름이 있는 것을 named function
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum; // 위에서 정의함
console.log(sumAgain(1, 3));


// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions - 함수 안에서 함수 자신을 부르는 방법. 정말 필요할 때만 사용하기
const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function - 간결하게 사용이 가능, 블럭없이 사용이 가능
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};

// arrow function 으로 바꾼 것
const simplePrint = () => console.log('simplePrint!');

// 일반 function
const add = function (a, b) {
  return a + b;
}

// arrow function
const add = (a, b) => a + b;


// 블럭을 쓰고 싶은 경우에는 블럭을 그리고 return을 해서 return할 값을 지정해야함
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
function hello() {
  console.log('IIFE');
}

// 선언함과 동시에 호출하는 방법으로 괄호로 함수를 감싸고, 호출 기호를 작성해서 활용
(function hello() {
  console.log('IIFE');
})();

fun quiz time
function calculate(command, a, b)
command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {

  if (command == 'add') {
    return a + b;
  } else if (command == 'substract') {
    return a - b;
  } else if (command == 'divide') {
    return a / b;
  } else if (command == 'multiply') {
    return a * b;
  } else if (command == 'remainder') {
    return a % b;
  } else {
    console.log('Nope!');
  }

}

console.log(calculate('add', 8, 3));
console.log(calculate('substract', 8, 3));
console.log(calculate('multiply', 8, 3));
console.log(calculate('remainder', 8, 3));
console.log(calculate('axce', 8, 3));I