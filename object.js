// Objects
// one of the JavaScript`s data types
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; // key와 value의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// 일반 적으로 변수를 선언할 때 하나씩
const name = 'axce';
const age = 4;

print(name, age);

function print(name, age) {
  console.log(name);
  console.log(age);
}

// object 형식으로 선언
const axce = { name: 'axce', age: 20 };
print(axce);

// 추가할 수 있음
// with JavaScript magic (dynamically typed language)
// can add properties later
axce.hasjob = true; // 이런 방식은 유지보수가 힘들 수 있음. 되도록이면 이런 방식은 피하도록 함
console.log(axce.hasjob);

// can delete properties later
delete axce.hasjob;
console.log(axce.hasjob);

// 2.Computed properties
// key should be always string
// 코드를 작성할 때는 . 을 써서 사용하는 것이 맞고,
// 실시간으로 키의 값을 받고 싶을 때 axce['name']과 같은 식(computed properties)으로 쓰면 됨
console.log(axce.name);
console.log(axce['name']);
axce['hasjob'] = true;
console.log(axce.hasjob);

// 아래와 같이 사용자로부터 key를 받아와서 작동하도록 해야한다면
// 현재 우리는 어떤 key인지 알 수가 없음. 따라서 . 을 써서 key를 지정하는게 불가능함
// 파라미터를 변수로 쓸 경우에는 axce[key]와 같은 형식으로 해결이 가능함.

// function printValue(obj, key) {
//   console.log(obj.key);
// }

// printValue(axce, 'name'); // undefined

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(axce, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

// 4번쨰 사람을 추가하고 싶은 경우
// 받는 파라미터와 key 값이 동일한 경우 아래와 같이 작성이 가능합니다.
// old way
function makeperson(name, age) {
  return {
    name,
    age,
  };
}

const person4 = makeperson('ace', 25);
console.log(person4);

// 4. Constructor function
// 5번째 사람을 추가하고 싶은 경우
// new way
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person5 = new Person('axce', 30);
console.log(person5);

// 5. in operator: property existence check (key in obj)
console.log('name' in axce);
console.log('age' in axce);
console.log('random' in axce);
console.log(axce.random);
// in을 이용해 해당하는 key가 obj 안에 있는지 확인할 수 있음

// 6. for..in vs for..of

// for (key in obj)
console.clear();
for (key in axce) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

// 7. fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'axce', age: '30' };
const user2 = user;

// user2.name = 'coder';
console.log(user);

// old way :: object cloning
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4)   ;

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// 뒤에 나오는 property가 앞에 나온 property를 덮어나감
console.log(mixed.color);
console.log(mixed.size);


