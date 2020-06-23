// continue 와 breke는 반복문에서 벗어나거나 그 다음 roop를 돌게 할 수 있음

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
  if (i === 5) break;
}

// continue를 사용했을 때 console의 값에서 2가 사라짐. 이는 continue에서 주어진 조건을 만족 했을 때 다음 roop로 넘어간다는 의미
// if문 내부에서 실행할 코드가 한 줄 이라면 {} 생략 갸능
//if (i === 2) continue;

// break는 반복문을 끝낼 수 있음
// continue와 break는 for문 뿐아니라 while문, for..of, for..in문에서도 사용할 수 있다.
