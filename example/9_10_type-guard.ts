interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

// union 을 사용하면 내부에서 공통된 속성만 사용할 수 있다.
function introduce(): Person | Developer {
  return {
    name: 'tony',
    age: 10,
    skill: 'typescript',
  };
}

const tony = introduce();
console.log(tony.skill); // error

// 타입 단언을 사용할 경우 사용은 가능하지만 가독성이 안좋아진다.
if ((tony as Developer).skill) {
  const skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  const age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 함수를 정의하면 코드가 간결해진다. return 값은 해당 타겟인지 아닌지에 대한 boolean
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
