// 5가지의 배열 변형 메서드

// 1. filter : 기존 조건에 만족하는 요소만 필터링해서 새로운 배열로 반환

let arr1 = [
    {name: "이정환", hobby: "테니스"},
    {name: "김효빈", hobby: "테니스"},
    {name: "홍길동", hobby: "독서"},
];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "테니스" 
);
console.log(tennisPeople); // output: {name: "이정환", hobby: "테니스"}, {name: "김효빈", hobby: "테니스"}

// 2. map : 배열의 모든 요소를 순회하면서, 콜백함수를 실행해서 결과를 모아서 새 배열로 반환 
let arr2 = [1, 2, 3];
const arrMap = arr2.map((item, idx, arr) => {
    return item * 2;
})

console.log(arrMap); // output : [2, 4, 6]

let names = arr1.map((item) => item.name)
console.log(names); // output : ['이정환', '김효빈', '홍길동']

// 3. sort : 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // output: ["a" "b" "c"]

let arr3_1 = [10, 3, 5]; // 오름차순 정렬
arr3_1.sort((prev, next) => { // 사전 순이기 때문에 숫자는 직접 콜백함수를 통해 정렬한다.
    if (prev > next) {
        return 1; // b가 a앞에 와라
    } else if (prev < next) {
        return -1; // a가 b앞에 와라
    } else {
        return 0; // 자리를 바꾸지 마라
    }
});

console.log(arr3_1);

// 4. toSorted : 정렬된 새로운 배열을 반환한다.
let arr4 = ["c", "a", "b"];
const sorted = arr4.toSorted();
console.log(arr4 + " | " +sorted);

// 5. join : 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr5 = ["hi", "im", "winterload"];
const joins = arr5.join(" "); // 인수로 구분자를 수정할 수 있음
console.log(joins);