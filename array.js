'use strict'

// Array

//.[fruits.length - 1] Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 더 흔히 사용되는 방법

// index : 배열이 index 기준으로 정렬됨
// 2. index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
console.clear();
for (let i in fruits) {
  console.log(fruits[i]);
}

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array) {
  console.log(fruit, index);
})

// =>
fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));

// 4. addtion, deletion, copy
// push: add an item to the end
fruits.push('🥝', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍍', '🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 데이터가 순서대로 되어 있기 때문에 가장 앞에 있는 데이터를 삭제하거나 추가하려면
// 뒤에 있는 데이터들을 전체적으로 옮겨야하기 때문에 속도에서
// 차이가 있음

// splice : remove an item by index position
fruits.push('🍍', '🍓', '🍇', '🍉');
console.log(fruits);
fruits.splice(1, 3);
console.log(fruits);
fruits.splice(1, 1, '🍒', '🍈');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥭'];
const newFruits =fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍓'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍋'));
console.log(fruits.indexOf('🍌'));

// includes
console.log(fruits.includes('🍓'));

// lastIndexOf
console.clear();
fruits.push('🍋')
console.log(fruits);
console.log(fruits.indexOf('🍋'));
console.log(fruits.lastIndexOf('🍋'));
