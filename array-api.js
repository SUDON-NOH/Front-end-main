// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // 구분자를 넣지 않으면 자동으로 "," 표시가 들어감
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // limit 도 지정이 됨
  const result = fruits.split(',');
  const limit_result = fruits.split(',', 2);
  console.log(result);
  console.log(limit_result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // return 값도 reverse로 바꾸고 원본 값도 reverse로 바꿈
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // slice 는 원하는 시작지점부터 끝번호까지만 잘라서 추출함
  const result_slice = array.slice(2, 5);
  console.log(result_slice);
  console.log(array);

  const result = array.splice(0, 2);
  // splice로 자르면 파이썬과 다르게 할당하더라도 원본의 값이 변경됨
  // 즉, result는 앞에 2개를 잘라 [1, 2]가 반환되고 array는 앞에 2개가
  // 생략된 [3, 4, 5]가 반환됨
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];


// Q5. find a student with the score 90
{
  // 첫번째로 true가 되는 값이 있으면 그 값이 return되고 즉시 멈춤
  // const result = students.find(function(student, index) {
  //   return student.score === 90;
  // });

  // arrow function으로
  const result = students.find((student) => student.score === 90);

  console.log(result);
}

// Q6. make an array of enrolled students
{
  // true인 값만 불러오기
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map 배열 안에 들어있는 요소 하나하나를 다른 것으로 변환해주는 것을 말함
  // 숫자 1, 2, 3 이 있을 때 각각의 요소들을 다시 새로운 값으로 변환하는 것을 말함
  // 배열에서 원하는 방식으로 배열을 수정할 때는 map을 이용하면 매우 손쉽게 할 수 있음
  // callback 함수로 전달되는 인자는 최대한 이해하기 쉽도록 쓰는게 좋다(ex) student))
  const result = students.map((student) => student.score * 2);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 배열에서 하나라도 조건이 true인 값이 있으면 true를 return
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);
  
  // 배열의 모든 값들이 조건을 만족하면 true를 return
  // 아래의 식에서는 모든 student의 점수가 50점 이상이면 true가 반환된다.
  // const result_2 = students.every((student) => student.score >= 50);
  // 이때 만약 반대의 값을 출력하고 싶다면, 즉, 학생들의 점수가 50점 미만의 값이 있는지를
  // 확인하고 싶다면 앞에 ! 를 붙여 true값을 반환하면 됨.
  // 50점 이상이 아닌 값이 존재한다 = 50점 미만의 점수를 가진 학생이 있다
  console.clear();
  const result_2 = !students.every((student) => student.score >= 50);
  console.log(result_2);

  console.log(true);
  console.log(!true);
}

// Q9. compute students' average score
{
  // reduce : initial value를 지정할 수 있음
  // 배열 하나하나 돌면서 값을 누적할 때 사용함
  // prev 는 callback 함수에서 return 된 값을 받고,
  // curr 는 배열함수에서 순차적으로 값을 받는다.
  // reduceRight : reduce와 마찬가지로 동작하는데, 그 순서가 뒤에서부터 받아오는 api임
  console.clear();
  const result = students.reduce((prev, curr) => {
    console.log('------------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0) // 마지막 0은 0부터 시작할 수 있도록 INITIAL 값을 지정해주는 것

  console.log(result / students.length);
}


// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  // .sort((a, b) => a - b)
  .sort((a, b) => b - a)
  .join();

  console.log(result);
}