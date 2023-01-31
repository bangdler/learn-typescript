// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}
// 타입호환 - 구조적 타이핑. 타입스크립트에서 타입을 비교할 때는 내부의 속성의 타입을 비교한다.
var a: Developer;
var b: Person;
// 오른쪽의 타입이 구조적으로 더 많은 속성의 타입을 가진 경우에는 할당이 가능하다. 역으로는 안된다.
// a = b; // X
b = a; // O

// 함수의 경우도 오른쪽이 구조적으로 더 많은 속성을 가져야 한다.
var add = function (a: number) {
  // ...
};
var sum = function (a: number, b: number) {
  // ...
};
sum = add; // X
add = sum; // O

// // 유니온 타입
// var c: Developer | Person;
// var d: Person | string;
// c = d;
// d = c;

// 제네릭
interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number> = 'b';
// 비어있는 경우에는 서로 호환이 된다.
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
// 내부에 타입이 사용된 경우 호환 불가능
var notEmpty1: NotEmpty<string> = 'a';
var notEmpty2: NotEmpty<number>;
notEmpty2 = notEmpty1;
notEmpty1 = notEmpty2;
