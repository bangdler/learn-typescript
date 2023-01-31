var a;
a = 10;
a = '10';
// 타입 추론보다 사용자가 타입을 잘 알고 있을 때 사용
var b = a as string;

// DOM API 조작 시
// querySelector 에 정해진 타입은 HTMLDivElement | null  이다.
// 하지만 사용자가 무조건 div 요소가 온다는 것을 알고 있다면 타입 단언을 사용한다.
const div = document.querySelector('div') as HTMLDivElement;
// 타입 단언을 하지 않으면 div 가 null 일 수도 있다. 타입 단언을 하면 에러가 나지 않는다.
div.innerText = 'hi';
