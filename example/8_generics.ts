// 제네릭을 사용하지 않으면 함수에 매개변수와 반환값의 타입을 정해야 하고, 이는 중복된 함수를 만들게 된다.
function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 이를 해결하기 위해 union 을 활용할 수도 있지만 반환값 또한 union 타입이라 api 가 제한되게 된다.
function getNumArr(value: string | string[]) {
  return value;
}
const a = getNumArr('100');
// a.split(); // a 의 type 은 string | string[] 이므로 split 사용 시 에러

// generic 을 통해 타입을 미리 정하지 않고 나중에 타입 추론이 가능하게 된다.
// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray2<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

// 제네릭의 속성에 대한 타입을 미리 정의할 수 있다.
interface LengthType {
  length: number;
}

function getNumberAndArray3<T extends LengthType>(value: T): T {
  value.length;
  return value;
}

getNumberAndArray3(10); // length 속성이 없다.
getNumberAndArray3({ length: 10 });
getNumberAndArray3('10');

// 제네릭 타입 제한 - keyof
// 상속받는 interface 의 key 값만 들어올 수 있다.
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
getAllowedOptions('nothing');
getAllowedOptions('name');
getAllowedOptions({ name: 'name' });
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name
