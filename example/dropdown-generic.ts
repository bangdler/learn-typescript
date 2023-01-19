interface Email {
  value: string;
  selected: boolean;
}

interface ProductNum {
  value: number;
  selected: boolean;
}

// Email, ProductNum 대신 제네릭 사용하면 중복을 줄일 수 있다.
const emails: Dropdown<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Dropdown<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
// Email, ProductNum 타입을 모두 사용하는 함수
// function createDropdownItem(item: Dropdown<string> | Dropdown<number>) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// unoin 사용하지 않도록 업데이트
function createDropdownItem<T>(item: Dropdown<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<typeof email.value>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
