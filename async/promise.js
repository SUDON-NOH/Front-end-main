'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// 프로미스가 만들어져서 우리가 지정한 operation이 수행 중일 때는 pending상태
// operation을 성공적으로 끝내면 fulfilled 상태 , 실패하거나 네트워크가 연결이 안되면 rejected 상태
// 프로세스가 무거운 기능을 수행하는 중인지, 아니면 기능을 수행에 성공했는지, 실패했는지
// 정보를 제공하는 producer와 정보를 소비하는 consumer의 차이점을 이해해야

// 프로미스는 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 object 임
// 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행됐다면 성공 메세지와 함께 처리된 결과값을 전달
// 기능을 수행하다가 예상치 못한 문제가 발생했다면 error를 전달


// 1. Producer
// when new Promise is created,the executor runs automatically.
// 새로운 프로미스가 만들어질때는 우리가 전달하는 executor 라는 함수가 자동으로 실행됨

const promise = new Promise((resolve, reject) => {
  // 무거운 파일을 다운 받거나 네트워크를 통해 전달받는 정보의 양이 많은 경우
  // 동기적으로 처리하면 시간이 오래 걸리는 동안에 그 다음 라인이 코드가 실행되지 않음
  // 시간이 걸리는 일들은 promise를 만들어 비동기적으로 만드는 것이 좋음
  // doing some heavy work (network, read files)

  console.log('doing something...');
  // 이 프로미스는 어떤 기능을 2초간 수행하고, 성공적으로 기능을 수행했을 때는
  // axce를 반환하는 
  setTimeout(() => {
    // 성공적
    // resolve('axce');
    reject (new Error('no network'));
  }, 2000);
});

// 2. Consumers : then, catch, finally
// 아래의 경우에는 위의 pomise가 수행이 잘되면 반환된 'axce'를 value값으로 받고, callback함수를 실행
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
// promise가 기능을 성공적으로 수행했을 때 마지막에 최종적으로
// resolve라는 콜백함수를 통해 전달한 값이 then의 value로 전달됨

// promise가 실패했을 경우
// then을 실행하게 되면 다시 promise를 반환하게 되고 반환된 promise에 catch를 등록하는 것

// finally는 성공과 실패와 상관없이 수행이됨
// 성공과 실패 상관없이 어떤 기능을 마지막에 수행하고 싶은 경우에 사용할 수 있음

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber // 1
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    // 다른 서버와 통신을 위해 새로은 Promise를 만듦
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then(num => console.log(num)); // 5


  // 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
  // setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});


getHen() //
  // .then((hen) => getEgg(hen))
  // .then((egg) => cook(egg))
  // .then((meal) => console.log(meal))
  .then(getEgg) // then에서 받아오는 value를 바로 getEgg라는 함수에서 사용할 경우 생략할 수 있음
  .catch(error => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

