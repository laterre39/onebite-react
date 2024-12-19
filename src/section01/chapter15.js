let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분적으로 사용) <- 이걸로 사용..

// 2. 객체 프로퍼티 (객체 속성)
let person = { 
    name: "이정환", // key: value 형태
    age: 27, // 다른 언어랑 다르게 타입의 제한이 없다 숫자 문자열 배열 함수 등등...
    hobby: "테니스",
    job: "FE DEVELOPER",
    extra: {},
    10: 20,
    "like cat": true
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

// 3.2 새로운 프로퍼티 추가
person.job = "fe developer"
person["favoriteFood"] = "떡볶이";

// 3.3 새로운 프로퍼티 추가
person.job = "educator"
person["favoriteFood"] = "초콜릿";


// 3.4 프로퍼티 삭제 
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);