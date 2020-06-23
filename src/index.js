//for 반복문

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

const names = ["멍멍이", "야옹이", "멍뭉이"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// i의 초기값 조건에 따른 반복 변화
// names의 사이즈를 알아야하는데 length 를 통해 확인 가능
//i 는 names.length 보다 작을때까지 반복됨
// 배열에서 n번째 아이템을 조회할때는 []안에 숫자를 넣어 주게 되는데 여기서 i 는 0,1,2 이기때문에 [] 안에 i 를 입력
//반복하게 될 때 조건이 i 배열이 length  보다 작을 때 1씩 더해주면서 반복하게 된다.

// while 조건문
// while 조건문의 경우에는 for 조건문과 다르게 i의 초기값과 i에 대한 변화값이포함되어 있지 않음
// 그래서 변화를 준다면 코드 블록 {} 내에서 변화를 주어야함

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// for문은 내부에서 i의 값을 설정해 주었으나 while 문에서는 그렇지 않고 조건을 바로 입력함
// while문의 주의점은 while ()내의 조건이 언젠가는 false가 되도록 설정해야한다. 만약 false가 되지 않는다면 영원히 반복됨
// while문과 for문의 사용 차이. 단순한 숫자 비교가 아니라 어떤 값이 true가 되었을 때와 같이 특정 조건을 비교할 경우에 사용 됨

let isFun = false; // isFun이라는 Boolean 설정

while (isFun === false) {
  //(!ifFun)을 입력해 주어도 똑같이 작동 됨
  console.log(i);
  i++;
  if (i === 30) {
    isFun = true;
  }
}
// while 문은 ()내의 조건이 true일 때 반복한다. i의 값이 30이 되었을 때 true가 되므로 그때까지 반복된다.

// for..of 반복문 - 주로 배열을 다루게 될 때 사용 됨

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number);
}

// number는 다른 어떤 단어로도 대체 가능.

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for문과 for .. of 문 모두 사용이 가능하지만 보통 배열안의 내용을 다루게 될 때에는 배열내장함수를 사용함

//for .. in 반복문은 객체에 대한 반복적인 작업을 처리할 때 사용함.
// 객체의 형태를 반복적으로 받아올 수 있는 몇가지 방법이 있음

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};

console.log(Object.keys(doggy));
console.log(Object.values(doggy));
console.log(Object.entries(doggy));

// ?? Q. object 소문자를 입력하니 에러 출력, 대문자로 변경하니 콘솔값 나옴 왜지
// name, sound, age 와 같은 key값을 배열 형태로 받아오고 싶다면 Object.keys() 괄호 내에 객체를 넣어주면 됨.
// 명명이, 명명, 2 와 같은 value값을 배열 형태로 받아오고 싶다면 Object.values() 괄호 내에 객체를 넣어주면 됨.
// 배열 형태로 뭔가 반환하는데 내부에는 key와 value값이 각각 보여짐

// for .. in 문

for (let key in doggy) {
  console.log(key);
}

// 만약 key값과 value 값 모두 보여주고 싶다면

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
// 템플리터럴 확인
