// shift는 첫 번째 원소를 배열에서 추출해 줌
const numbers = [10, 20, 30, 40];

const value = numbers.shift();
console.log(value);
// numbers 배열에서 10이 shift를 통해 밖으로 빠져나오면서 value안으로 들어감

// shift는 기존의 배열을 수정하게 됨
console.log(numbers);
