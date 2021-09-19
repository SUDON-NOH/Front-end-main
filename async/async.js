// async & await
// clear style of using promise :)
// promise들을 간결하고 간편하고 동기적으로 실행되는 것처럼 보이도록 도와주는 것

// syntatic sugar
// 기존에 존재하는 promise위에 조금 더 간편한 api를 제공하는데,
// 기존에 존재하는 것 위에 혹은 그것을 감싸서 좀 더 간편한 기능을 제공하는 것을 말함

// 1. async

// fetchUser 함수가 10초 이상 걸리는데, 이를 비동기적으로 처리하지 않는다면,
// 이 함수에 걸려 뒤에 있는 ui/ux 기능을 실행하지 못해 사용자들은 꼼짝없이 10초 간
// fetchUser함수가 끝날 때까지 기다려야 함

// 원래 사용하던 방법
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve('axce');
//   });
// }

// async를 붙여 간단하게 promise로 바꿔주는 방법
// function 앞에 async를 붙이면 코드 블럭을 promise로 바꿔준다
async function fetchUser() {
  return 'axce';
}

const user = fetchUser();
user.then(console.log);
console.log(user);



// 2. await ✨
// await은 async가 붙은 함수 안에서만 사용이 가능함
// delay라는 함수는 promise를 리턴하는데 정해진 시간이 지나면 resolve를 호출하는 promise를 리턴함

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 3초가 지나면 resolve를 호출하는 promise가 전달됨
async function getApple() {
  await delay(3000); // 3초간 기다렸다가 사과를 리턴한다! 고 이해하면 됨
  return '🍎';
}

// 원래의 모습은 아래와 같지만 이보다 더 쉽게 이해할 수 있는건 await 을 사용한 그 밑에 코드임
// function getBanana() {
//   return delay(3000)
//   .then(() => '🍌');
// }

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// promise도 중첩하면 callback hell과 비슷한 문제를 발생시킴
// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

// pickFruits().then(console.log);


async function pickFruits() {
  // promise를 병렬적으로 실행하는 방법
  // 이 방법이 아닌 const apple = await getApple(); 과 같은 방식으로 하게되면
  // 1초, 1초 총 2초를 기다려야하지만, 병렬적으로 실행했을 경우에는 1초만에 실행할 수 있게 된다.
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
// 단, 병렬적으로 실행할 때(apple을 실행할 때 banana가 필요없고 banana를 실행할 때 apple이 필요없는 경우에)는 
// 위의 방법을 사용하지 않고 아래의 방법을 사용함


// 3. useful APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

// 빨리된 값 하나만 불러오기
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);