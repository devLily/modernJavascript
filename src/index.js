//filter 특정 조건을 만족하는 원소를 찾아 새로운 배열을 만드는 것
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false
  }
];
// todo 배열에서 done 값이 false 인 것만 필터링 하려면

const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);

/* filter내장함수를 사용하여 tasksNotDone이라는 배열을 만들고 특정 조건을 넣어주고 이는 함수로 확인한다.
todo라는 파라미터를 가져와서 todo.done 값이 false인 배열을 만들어 내는 것
기존의 배열을 건드리지 않고 새로운 배열을 만들어 낸다.
 false 값을 더 간략하게 작성하기 위해 
const tasksNotDone = todos.filter((todo) => !todo.done);
와 같이 작성 할 수 있다. */
