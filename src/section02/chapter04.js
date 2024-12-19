// 1. Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흔뿌려줌

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수

function funcB(one, two, ...rest) { // n번째 데이터를 다른이름으로 받고 싶다면 n번째 순서로 지정 / one: 첫번째, two: 두번째
    console.log(rest); // ...만 붙으면 이름에는 큰 의미가 없다 ...args ...data
}

funcB(...arr1);