// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' and '); //@param seperator(구분자), 분리하여 사이에 둘 문자열
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',',2); // limit은 optional(?)
  console.log(result);
} 

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 콘솔찍어보면 출력 같음 사실 배열자체가 reverse됨
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result);
  // console.log(array); // splice는 배열 자체를 수정

  // 이 퀴즈는 새로운 문자열을 출력해야 함 -> slice가 맞음 배열 내 원하는 특정 부분만 출력
  const result2 = array.slice(2, 5);
  console.log(result2);
  console.log(array);  
  
}

class Student { // Student 라는 틀
  constructor(name, age, enrolled, score) { // 이 클래스 틀은 4가지의 속성 틀을 가지고 있어
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [ // students라는 배열을 만드는데,
  new Student('A', 29, true, 45), // 배열 안의 각각 객체는 Student 클래스 틀을 가진 object야.
  new Student('B', 28, false, 80), // 그리고 그 클래스는 4가지 속성틀이 있어서, 오브젝트마다 그 속성값, 즉 프로퍼티의 밸류를 지녀.
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result = students.find(function(student, index){
  //   console.log(student, index);
  //   return student.score === 90;
  // });
  // console.log(result);

  // .find 메소드는 콜백함수를 파라미터로 가져+ thisArg?(와도되고 안와도 되고) 
  // 콜백함수란 배열이면 배열 안의 모든 객체에 함수를 실행해서 어떤 조건에 맞으면 boolean 타입을 리턴하고 함수를 종료한다든지 하는 함수야.
  const result = students.find((student) => student.score === 90);// 오브젝트의 프로퍼티의 값의 어떤 조건에 대한 ture/false 찾기
  console.log(result);
}

// Q6. make an array of enrolled students
{ const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{ // 배열안의 각 요소에 콜백함수를 거쳐서 다른 값으로 변경(mapping)되어 배열을 만드는 것
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{ // .some 메소드는 배열 중 조건을 만족하는 것이 하나라도 있는지, 여부 즉 콜백함수의 true여부를 리턴
  // Determines whether the specified callback function returns true for any element of an array.

  const result = students.some((student) => student.score < 50);
  console.log(result);

}

// ! +@ .every 메소드를 써서 거꾸로 50점 미만인 학생이 있는지 여부를 리턴하는 법
{ // 배열의 모든 요소가 특정 조건을 충족하는지 여부를 리턴, 
  // Determines whether all the members of an array satisfy the specified test.

  const result = !students.every((student) => student.score >= 50);
  console.log(result); 
}
// ! Q9. compute students' average score
{ // 배열의 요소 중 어떤 값을 누적할 때
  // Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  // initial value를 입려갈 수 있음 (아래 0)
  const result = students.reduce((prev,curr) => {
    console.log('-----')
    console.log(prev); // 이전의 콜백함수에서 return한 curr값이 prev로 순차적으로 전달됨
    console.log(curr); // curr에는 배열 요소 하나하나 순차적으로 전달됨 
    return prev + curr.score;
  }, 0)
  console.log(result / students.length);
}
  // ! arrow fn 으로 작성 // 기본적으로 'function', '{}', return 생략
{ 
  const result = students.reduce((prev,curr) => prev + curr.score, 0)
  console.log(result / students.length); // 평균
}  


// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{ // ! 메소드 혼합해서 map 배열을 리턴하는 API라서 혼합해서 쓸 수가 있는 것임.
  const result = students // ! 주의 students 는 위에 선언되어 있는 배열, student는 그 배열 안의 요소들을 parmeter로 받아온 거(변수)
  .map((student) => student.score) // 배열 내 요소의 특정 밸류들을 새로운 배열을 리턴(.map()) 
  .filter((score) => score >= 50) // 점수가 ~점 이상 등 조건에 맞는 요소만 리턴하고자 또 추가 가능(.filter())
  // score 만 배열로 받아온 상태니까, param는 score인 거지.
  .join(); // + 구분자를 넣어서 문자열로 리턴(.join())
  console.log(result); 
}

// ! Bonus! do Q10 sorted in ascending order 정렬 .sort()
// result should be: '45, 66, 80, 88, 90'
{ // 기존의 배열을 정렬을 다르게 리턴하고, 인자는 2개가 들어감, .sort()
  // 음수값을 리턴하면, 첫번째 밸류가 두번째 밸류보다 작다고 간주되어서 정렬이 됨
  // : It is expected to return a negative value if first argument is less than second argument, 
  // zero if they're equal and a positive value otherwise. 
  const result = students.map((student) => student.score)
  .sort((studentA, studentB) => studentA - studentB) // 내림차순으로 하고싶으면 studentB - studentA 하면 되겠지!
  .join();
  console.log(result);
}
