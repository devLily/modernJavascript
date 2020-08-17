//slice는 배열을 찾아 낼 때 사용하며 splice와의 차이점은 기존의 배열을 건드리지 않는다, 파라미터에 넣는 값도 다름
const numbers = [10, 20, 30, 40];

const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);
//start라는 파라미터는 어떤 index부터 자를지를 의미, end파라미터는 어디까지를 자를지 의미
//0의 index는 10, 2의 index는 30이므로 10, 20을 잘라내고 sliced의 console값이 [10, 20]이 됨
// 강조 : slice 함수는 기존의 배열을 건드리지 않는다. 반면 splice는 기존의 배열을 수정한다는 점에서 차이가 있음
