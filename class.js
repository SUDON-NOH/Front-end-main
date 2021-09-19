'use strict';

// Object-oriented programming 
// class : template
// object : instance of a class


// 1. Class declarations
class person {

  //constructor
  // name 과 age는 전달 받을 데이터
  constructor(name, age) {
    // fields
    // 전달 받은 데이터를 fields 에 할당
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const axce = new person('axce', 30);
console.log(axce.age);
console.log(axce.name);
axce.speak();


// 2. Getter and setters
// getter : property를 읽을 때 동작함
// setter : property에 값을 쓸 때 호출됨
class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    // 여기서 age는 값을 메모리에 할당하는 것이 아니라 set age를 불러오게 된다.
    // 다시 set age 안에 있는 age 또한 메모리헤 할당되는 것이 아니라 set age를 호출해서
    // set age 안에서 반복적으로 일어나 stack이 쌓이게 된다.
    // 이를 방지하기 위해 get과 set에 들어가는 변수의 이름 앞에 _를 붙여 구분이 되도록 한다.
  }

  get age() {
    // getter, User.age를 실행할 때 실행되는 코드
    return this._age;
  }

  set age(value) {
    // setter, User.age = value 를 실행할 때 실행되는 코드
    if (value < 0) {
      throw Error('age can not be negative');
    }
    this._age = value;
  }
  
  // 위의 방법과 아래의 방법 두 가지가 사용될 수 있음
  // set age(value) {
  //   this._age = age < 0 ? 0 : value;
  // }
}

// 실수로 나이를 -1로 설정한 경우
const user1 = new User('Steve', 'Job', 15);
console.log(user1.age);
// class를 사용하는 사용자가 잘못 사용해도 이런 오류를 방어할 수 있도록 하는 것이
// getter 와 setter임

// 또 다른 예시
class player {
  constructor(lastname, middlename, firstname) {
    this.firstname = firstname;
    this.middlename = middlename
    this.lastname = lastname;
  }

  get fullname() {
    return `${this.lastname} ${this.middlename} ${this.firstname}`;
  }

  set fullname(value) {
    [this.lastname, this.middlename, this.firstname] = value.split(" ");
  }
}

const player1 = new player('Monkey', 'D', 'Loopy');
console.log(player1.fullname);

player1.fullname = 'Monkwt D Dragon';
console.log(player1.fullname);



// 3. Fields (public, private)
// too soon!
class Experiment {
  // constructor(생산자)를 사용하지 않고 field를 정의할 수 있는데,
  // 그냥 사용하면 외부에서 접근이 가능한 public field 이고,
  // #을 붙이면 외부에서 접근이 불가능한 private field 이다.
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
// object에 솽관없이, 들어오는 데이터와 상관없이 class 자체에서 사용되어져야 한다면
// static을 이용함. 이는 메모리 사용을 줄이는 용도로 사용될 수 있음

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
class shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends shape {}
class Triangle extends shape {
  // overiding
  draw() {
    super.draw(); // 부모에서 정의한 draw를 호출하고, 뒤에 overiding 한 함수도 호출
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2; 
  }

  // Object를 상속받았기 때문에 toString을 사용할 수 있음
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
// rectangle이 Rectangle class를 이용해 만들어진 것인지를 확인
console.log(rectangle instanceof Rectangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof shape); // True
console.log(triangle instanceof Object); // True
// 자바스크립트의 모든 object는 Object 클래스를 상속한 것

console.log(triangle.toString());


const number_x = 10;

switch (number_x) {
  case 20:
    console.log(`20`);

  case 10:
    console.log(`10`);

  case 8:
    console.log(`8`);

  case 7:
    console.log(`7`);
  
  default:
    console.log(`7`);
}