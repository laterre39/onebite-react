let arr = [1, 2, 3];

// let one = arr[0]; 무식하게 할당
// let two = arr[1];
// let three = arr[2];

// 배열의 구조 분해 할당
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스"
};

let {
    age: myAge, // age의 값을 myAge에 담음
    name, 
    hobby, 
    extra = "hello"
} = person;

console.log(name, myAge, hobby, extra);

// 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법.
const func = ({name, age, hobby, extra = "hell0"}) => { // 중괄호를 통해 분해 할당을 명시할 수 있음
    console.log(name, age, hobby, extra);
}

func(person);