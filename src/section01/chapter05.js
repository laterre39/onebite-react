// 1. Number Type

let num1 = 27;
let nym2 = 1.45;
let num3 = -20;

console.log(num1 + nym2);
console.log(num1 - nym2);
console.log(num1 * nym2);
console.log(num1 / nym2);
console.log(nym2 % num3);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
console.log(1 * "hello");

// 2. String type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce)

// 탬플릿 리터럴 문법
let introduceText = `${myName} 이고 지역은 ${myLocation}`;
console.log(introduceText)

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type
let empty = null; // 아무것도 없다
console.log(empty) // 명시적으로 정의한 빈값

// 5. Undefined Type
let none;
console.log(none) // 특정 문제로 발생한 빈값
