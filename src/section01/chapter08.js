// 1. null 병합 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10 -> var1은 언디파인드
let var5 = var1 ?? var3;
console.log(var5); // 20
let var6 = var2 ?? var3 // 10 -> 둘다 값이 있으면 앞의 변수를 저장!
console.log(var6);

let userName = "이정환";
let userNickName = "Winterlood";
let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자 -> 값의 타입을 문자열로 반환 하는 연산자
let var7 = 1;
var7 = "hello";
var7 = false

let t1 = typeof var7
console.log(t1) // boolean

// 3. 삼항 연산자 -> 항을 세개 사용하는 연산자
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수면 짝 홀수면 홀로 표시할것!
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res)
