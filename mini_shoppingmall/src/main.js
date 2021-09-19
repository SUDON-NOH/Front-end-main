"use strict";

// Fetch the items from the JSON file
function loadItems() {
  return (
    fetch("data/data.json") // 경로를 지정해주면 데이터를 받아올 수 있음
      // 성공적으로 data를 불러오면 fetch는 response를 반환해줌
      .then((response) => response.json())
      .then((json) => json.items)
  );
}

// loadItems 라는 함수는 fetch를 이용해서 데이터를 받아온 다음에 받아온 데이터가 성공적이면
// json으로 변환하고 json 안에 있는 item들을 반환하게 됨

// Update the list with the given items
function displayItems(items) {
  // innerHTML을 이용해서 우리가 받아온 item들을 li그룹으로 만들어서
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

// 눌렀을 때 이벤트를 발생시키는 그런 것들은 맨 앞에 on을 붙여서 가능
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return; // 해당하지 않는 경우에는 함수를 빨리 끝냄
  }

  displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems() // item들을 동적으로 받아와서 promise가 리턴이 되면
  .then((items) => {
    // promise가 성공적으로 값을 전달해주면, 전달받은 item들을 이용해서
    console.log(items);
    displayItems(items); // html에 item들을 보여주고
    setEventListeners(items); // Event Listner를 등록해서 filtering이 되도록 만들 예정
  })
  .catch(console.log());
