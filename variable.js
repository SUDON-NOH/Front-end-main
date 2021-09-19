'use strict'

// 1. 변수(variable)
// 변경될 수 있는 값

// let name = 'AXCE';
// console.log(name);
// name = 'hello';
// console.log(name);

// 2. block scope
// 블록 안에 작성하면 블록 밖에서는 더이상 블록 안의 내용을 확인할 수 없게 됨
let globalscope = 'global';
{
  let name = 'AXCE';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalscope);
}
console.log(name); // 이 값은 아무 값도 불러오지 못함
console.log(globalscope);

// 블록 안에 넣지 않고 선언하는 것은 global scope이라고 부름
// 어느 곳에서나 접근이 가능함. 
// 글로벌 스코프는 자바스크립트가 끝날 때까지 메모리를 차지하기 때문에
// 최소한으로 사용하는 것이 좋음.

// var 는 예전에 쓰건거 더이상 쓰면 안됨(don't ever use this!)
// var hoisting : 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올리는 것을 말함
// move declaration from bottom to top
// var 는 블럭을 무시함
{
  age = 4;
  var age;
}
console.log(age);

// 3. constans
// 한번 할당하면 절대 변경할 수 없는 것
// favor immutable data type always for a few resons:
//   - security
//   - thread safety
//   - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 6;


// 4. Variable types
// primitive, single item: 더 이상 작은 단위로 나뉘어지지 않는 한 가지의 타입을 말함
// ex) number, string, boolean, null, undefiedn, symbol
// object, box container: single item 들을 한 단위로 한 박스로 관리할 수 있도록 하는 것
// function, first-class function: function도 다른 datatype 처럼 변수에 할당이 가능하고, 함수의 파라미터 인자로도 전달이 되고 함수에서 리턴 타입으로 리턴도 됨
// 숫자를 사용할 때 number 만 사용하면 됨 자바스크립트에서는 따로 할당할 이유가 없음

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string): 변수의 값이 자동적으로 붙어서 나옴
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// flase: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null : 명확하게 비어있는 값으로 지정해 주는 것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)

// undefined : 선언은 되었지만 아무것도 값이 지정되어 있지 않은 상태
let x = undefined;
let xx;
console.log(`value: ${x}, type: ${typeof x}`)
console.log(`value: ${xx}, type: ${typeof xx}`)

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때, 동일한 string을 작성해도 다른 symbol로 만들어짐
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// 동일한 심볼을 만들고 싶은 경우에 사용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // True

// symbol을 출력하고 싶은 경우에는 description 을 반드시 사용해서 string으로 변환 후 사용하여야 함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const axce = { name: 'dony', age: 29 };
axce.age = 30;
console.log(`value: ${axce.age}`);


// 5. Dynamic typing: dynamically typed language
// 자바스크립트는 선언할 때 어떤 타입인지 선언하지 않고 런타임시 할당된 값에 따라 타입이 변경될 수 있는 것을 말함
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = `1`
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// 런타임에서 타입이 결정되기 때문에 오류가 굉장히 많다. 그 오류 중 하나는 변수의 이름인 'text'를 보고
// string으로 생각해서 index로 문자를 찾는 경우에 중간에 누군가 숫자로 바꾸면 오류를 발생시킨다.
text = 'hello';
console.log(text.charAt(0)); //h
text = 10;
console.log(text.charAt(0)); //Error


