// 비슷한 종류의 데이터들을 묶어서 한 데 보관하는 것을 자료구조 라고 함
// 자료구조에는 어떤 형식, 방식으로 담느냐에 여러
// 오브젝트는 토끼/ 당근 이 될 수있고
// 토끼 = { 종: 동물, 외관: 귀 두개, 메소드: 뛴다, 먹는다} 연관된 특징, 행동을 묶는거
// 이런 토끼, 당근과 같은 오브젝트들을 묶어놓는게 -> 자료구조
// 동일한 타입의 (토끼 만 담은 바구니 자료구조), 당근을 담은 자료구조 바구니

// 자바스크립트는 동적언어라서 다른 타입의 오브젝트들을 한 자료구조에 담을 수는 있으나, 
// 이렇게 프로그래밍 하면 좋지 않음**유의\
// 자료구조, 알고리즘
// array, link~~ 등등 이 있고, 또 link중에서도 single-linked, double-linked
// 중에서도 검색, 삽입, 정렬, 삭제 할 때 어떤 알고리즘을 써서 하는지 효율성을 같이 공부해야.

// 어떤 자료구조를 선택하고 어떤 검색 방식(알고리즘) 등을 사용해서 속도를 높일지 big O ?

// **자료구조**
// 배열 자료구조는 박스들의 배열
// 자리 index 0부터 
// 한 배열에는 동일한 타입의 오브젝트를 넣어야지
// 토끼 배열, 당근 배열
// 두번째 토끼와 세번째 당근을 삭제하고 싶다 <- index로 접근 가능

'use strict';


// Array 🎉 (첫번째 자료구조!!)
// 1. 배열을 선언하는 법
const arr1 = new Array(); //클래스에 new 오브젝트 만드는 것처럼
const arr2 = [1, 2]; // 아예 값을 , 인덱스에 값이 들어가있지

// 2. Index position // 인덱스를 통해서 배열에 접근(어느 자리의 데이터를 검색, 삭제 등)하는 법
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // []를 이용해서 인덱스(자리)에 접근
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length-1]); // 배열의 마지막 인덱스를 호출할 땐 이렇게. 배열 전체 길이 중 마지막 한자리(-1 뒤에서 back도)

// console.log(fruits['key']); key(name, age.. )라는 string을 이용하면 상응하는 밸류를 받아올 수 있던 것처럼

console.log('') // 공백용

// 3. Looping over an array, 뺑뺑이 돌면서 출력
// print all fruits
//  a. for
for ( let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('') // 공백용
// b. for of
for(let fruit of fruits) { // 변수 fruit에, 배열 fruits의 밸류를 할당하는 루프
    console.log(fruit);
}

console.log('') // 공백용

// c. forEach (더 간단한 방법)
// fruits.forEach() // callback함수를 가져옴, cmd+click 으로 forEach 의 인터페이스 읽어보기
// Performs the specified action for each element in an array.
// 배열 안에 있는 모든 value에 특정 동작(콜백함수)을 수행
// forEach(① callbackfn: (value: T, index: number, array: T[]) => void, ② thisArg?: any): void;
// forEach 에는 callbackfn 과 thisArg?(?: 들어와도되고 아니어도 된다는 뜻) 두가지 파라미터가 들어오는데,
// callbackfn; 밸류 하나하나마다 이 콜백함수를 호출해줌
// callbackfn에는 세가지 인자(value(값), 값이 들어있는 index, array전체 배열)이 들어옴
// 출력 예상('🍎', 0, ['🍎', '🍌'])
// * ?는 파라미터를 가져와도 되고 안가져와도 되고(조건에 맞게)라는 뜻


fruits.forEach(function () {
    console.log('he'); //'he'가 두번 출력됨(왜냐면 fruits 배열 인덱스,데이터가 둘)
});

fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
}); 
// 근데 이런 anonymous function은 (지금 이 콜백함수에 이름은 없잖아)
// 한 줄로 쓸 수있지, arrow함수 (=>) 

fruits.forEach((fruit, index) => console.log(fruit, index));
// function 이라고 굳이 작성하지 않아도.

fruits.forEach((fruit) => console.log(fruit));

// forEach는 배열안에 들어있는 밸류들마다 내가 전달한 함수를 호출하는 구나!


// 4. Addition, deletion, copy // 배열에 넣고 빼고 
// push: add an item to the end (뒤에 이어 추가)
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end (마지막서부터 뺌)
fruits.pop(); // 마지막 인덱스부터 데이터 하나 빠짐
fruits.pop(); // 뒤에서 또 하나 빠짐
console.log(fruits); 

// unshift: add an item to beginning (앞에서부터 추가)
fruits.unshift('🍓','🍑');
console.log(fruits);

// shift: remove an item from the beginning (앞에서부터 빼기)
fruits.shift(); // 앞 쪽 첫번째 인덱스부터 데이터 하나 빠짐
console.log(fruits);

fruits.shift();
console.log(fruits);

// ! **note** shift, unshift are slower than pop, push
// index(자리)를 바꿔야되니까, 옮겨놓거나 삭제해서 인덱스(자리)를 텅텅 비우고, 
// pop, push 쓰는 게 더 좋다는 결론
// 중간에 데이터를 넣고 빼는 것도 인덱스를 활용하니까 빠름.
// 데이터 자체가 옮겨지거나 삭제되어야(shift) 하는 경우가 느림
// ? big O ? 라는 알고리즘, 정렬 등의 이론 필요

// remove an item by index position 지정된 자리(인덱스)에서 삭제하는 건 가능? ㅇㅇ
// ! splice: remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1); // index1 부터(포함해서) 싹 다 지움
fruits.splice(1, 2); // 지우기 시작 인덱스, 몇개 지울지(안정해도 됨 안정하면-> 지정한 인덱스부터 데이터를 다 지움)
console.log(fruits);

fruits.splice(1, 1, '🍏', '🍉'); // 데이터 삭제할 인덱스(자리)와, 개수와, 대체할 데이터를 추가
console.log(fruits);

// splice꼬아서 잇다 라는 뜻
// API가 선언된 곳에서 내용 항상 확인


// combine two arrays 
// ! concat: 두개의 배열을 붙일 수 있음
const fruits2 = ['🫐', '🍇']; // fruits2 배열이 있고
const newFruits = fruits.concat(fruits2); //newFruits 배열
console.log(newFruits);
// API가 선언된 곳에서 내용 항상 확인


// 5. Searching 
// find the index
// indexOf: 내가 찾는 데이터가 배열 중 어느 인덱스에 있는지 찾기 (없으면 -1(false) 출력)
// includes: 내가 찾는 데이터가 배열에 포함되어 있는지 (true or false)
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.includes('🍓')); // false
console.log(fruits.indexOf('🥝')); // -1(없단 얘기,)

// lastIndexOf
fruits.push('🍎'); // 똑같은 데이터가 각 다른 인덱스에 있는 경우
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 가장 첫번째(인덱스 0부터) 해당 데이터를 찾으면 그 인덱스자리를 출력
console.log(fruits.lastIndexOf('🍎')); // 가장 마지막 자리(인덱스)를 출력

// **숙제** 배열(Array)이 선언된 API 가서 property(toString, pop, push, concat ...)들 선언읽어보기


