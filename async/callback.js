'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// 자바스크립트는 동기적입니다.
// hoisting이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나씩 동기적으로 실행된다는 의미
// hoisting : var, function declaration : 자동적으로 선언들이 제일 위로 올라가는 것

// callback 함수는 우리가 전달해준 함수를 나중에 다시 불러온다
// 지금 당장 실행하지는 않고 사용자가 필요하다는 명령에 의해 불러오는 함수를 callback 함수라고 부른다.

console.log('1'); // 동기
// console.log('2');
// setTimeout 우리가 지정한 시간이 지나면 우리가 전달한 callback 함수를 불러온다.
setTimeout(() => console.log(2), 1000); // 비동기
// browser한테 1초 뒤에 callback 함수를 실행해줘 ! 하고 명령
console.log('3'); // 동기


// 지금 당장 실행하는 callback(Synchronous callback)과 언제 실행될지 모르는 callback(Asynchronous callback)이 있음
// 자바스크립트는 싱글 스레드(single thread)방식으로 코드를 처리
// 스레드란 프로그램이 작업을 완료하는 데 사용하는 하나의 선로 같은 것은데, 각 스레드는 한 번에 하나의 작업만 순차적으로 수행
// 즉, 하나의 작업이 완료되어야 다음 작업을 실행할 수 있는 구조
// 보통 오늘날의 컴퓨터가 멀티 스레드(multi thread)로 동시에 여러 작업을 처리하는 것과 다름

// 동기적 자바스크립트
// 자바스크립트는 싱글 스레드를 사용하기 때문에 기본적으로 동기적으로 코드를 처리
// 위에서부터 아래로 내려오며 순차적으로 수행하고 처리하는 방식

// 비동기적 자바스크립트
// 비동기적 프로그래밍은 특정 코드의 연산이 끝날 때까지 기다리지 않고, 그동안 다른 코드를 실행하는 것
// 예를 들어, 우리가 웹사이트에서 특정 데이터를 다운로드 해야 하는데, 해당 파일으 ㅣ크기가 너무 큰 경우가 있을 수 있음
// 이때, 모든 작업을 동기적으로 처리한다면 파일이 다운로드 되는 동안 사용자가 기다려야함
// 따라서 파일이 다운로드 되는 동안 다른 코드를 실행하는 비동기적 방식으로 이를 처리하는 것이 훨씬 효율적임

// 비동기 코드를 구현하는 방법으로는 크게 기존의 콜백(callback)과 보다 새로운 방식인 프로미스(promise)가 있음

// Synchronous callback
function printImmediately(print) {
  print(print);
}

printImmediately(() => console.log('hello')); // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000); // 비동기



// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'axce' && password == 'dream') ||
          (id === 'coder' && password == 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
  }

  // 사용자의 역할을 받아오는 api
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'axce') {
        onSuccess({ name: 'axce', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// 1. id와 password를 사용자로부터 입력받아옴
// 2. login
// 3. login 한 사용자의 id를 받아와서 roles을 요청해서 받아옴
// 4. 역할을 성공적으로 받아온다면 사용자의 object를 출력

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
          alert(
            `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
          );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백 체인의 문제점
// 1. 가독성이 너무 많이 떨어짐. 어디서 어떤 식으로 연결되어있는지 한눈에 파악하기가 어렵다.
// 2. error가 발생하거나 debug할 때도 어려움
// 3. 유지보수가 어려움
