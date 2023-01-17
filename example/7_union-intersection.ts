function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number');
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 내부에서는 두가지 타입이 가지는 프로퍼티 중 공통된 프로퍼티만 접근할 수 있다.
function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X
}
// -> intersection 으로 해결. 두가지를 포함하는 타입
function askSomeone2(someone: Developer & Person) {
  someone.name; // O
  someone.age; // O
  someone.skill; // O
}

// union 사용
askSomeone({ name: 'developer', age: 33 });
askSomeone({ name: 'developer', skill: 'search' });

// intersection 사용 - 모든 타입을 가진 객체를 파라미터로 넘겨야한다.
askSomeone2({ name: 'developer', age: 33, skill: 'search' });
