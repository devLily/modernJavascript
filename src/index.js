/*sp는 배열에서 특정 항목을 제거할 때 사용, 그 과정에서 해당 원소가 몇 번째인지 명시해 주어야함
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
//만약 index가 2인 것을 배열에서 제외시키고 싶다면
numbers.splice(index, 2);
// 2를 입력하면 index부터 시작해서 2개를 지우겠다 라는 의미
console.log(numbers);*/

//numbers.splice의 결과 값은 제거한 배열들을 의미
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);
console.log(spliced);
console.log(numbers);
