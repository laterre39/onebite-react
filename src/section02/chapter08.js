// 5가지 요소 순회 및 탐색 메서드

// 1. forEach: 모든 요소를 순회하면서, 각각의 요소에 특정 종작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
    doubleArr.push(item * 2);
})
console.log(doubleArr);

// 2. includes: 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(10);
console.log(isIncludes);

// 3. indexOf: 특정 요소의 인덱스를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex: 모든 요소를 순회하면서 콜백함수를 만족하고 특졍요소의 인덱스를 찾아서 반환
let arr4 = [1, 2, 3];
arr4.findIndex((item) => {
    if (item === 2) {
        return true;
    }
})


// 4-1 객체같은 복잡한 배열은 indexOf를 사용할 수 없고 findIndex를 사용해야 한다.
let obj1 = [
    {"name": "이정환"},
    {"name": "홍길동"}
];
console.log(obj1.indexOf({"name": "홍길동"})); // output: -1 : 위치를 찾지못함
console.log(obj1.findIndex((item) => item.name === "홍길동")); // output: 1 : 위치를 찾음

// 5. find: 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 그대로 반환
let obj2 = [
    {"name": "이정환"},
    {"name": "홍길동"}
];

console.log(obj2.find((item) => item.name === "홍길동" )); // output: {name: '홍길동'}
