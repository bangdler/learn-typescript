var a = 'a';

// 문자열 + 숫자 -> 문자열로 타입 추론
function logA(a = 'a') {
  var b = 10;
  return a + b;
}

interface Dropdown<T> {
  value: T;
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a',
};

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
var detailItems: DetailedDropdown<string> = {
  value: '10',
  title: 'a',
  description: 'b',
  tag: 'c',
};
