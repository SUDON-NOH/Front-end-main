// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

// 배열을 json으로
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object를 json으로
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // simbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
// console.log(json);
// 이때 함수인 jump는 포함되지 않는 것을 확인할 수 있음. 그 이유는
// 함수가 data에 포함되지 않기 때문
// symbol 또한 javascript에만 있는 부분이라 json에 포함되지 않음

// 원하는 부분만 JSON으로 변경이 가능
json = JSON.stringify(rabbit, ['name', 'color']);
// console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);

  // key가 name이면 axce로 바꾸고 아니면 value값을 넣어 name 값을 변경
  return key === 'name' ? 'axce' : value;
})
console.log(json);


// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// object.jump();
// json 으로 변환할 때는 함수가 포함되지 않았음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());
// 오류가 발생함 그 이유는 date type이 아닌 string type이기 때문

console.clear();
const obj_reviver = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj_reviver);

console.log(rabbit.birthDate.getDate());
console.log(obj_reviver.birthDate.getDate());
