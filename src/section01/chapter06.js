// 1. 묵시적 형 변환 -> 자바스크립트 엔진이 자동으로 형 변환
let num = 10;
let str = "20";

const result = num + str;
console.log(result)

// 2. 명시적 형 변환 -> 내장 함수등을 이용해 직접 형 변환
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2); // 10

let num1 = 20;
let numToStr = String(num1);
console.log(numToStr + " 입니다.") // 20 입니다.