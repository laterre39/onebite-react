// 1. 배열 생성
let arrA = new Array;
let arrB = [];

let arrC = [1, 2, 3,
    true, "Hello", null, undefined, () => {}, {}, []
];

console.log(arrC); // 어떠한 타입이던 넣을 수 있다.

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[4];

arrC[4] = "hi";
console.log(arrC);