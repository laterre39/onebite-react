// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "고양이",
    color: "black"
};

animal.age = 2; // 프로퍼티 추가
animal.name = "까망이"; // 프로퍼티 수정
delete animal.color; // 프로퍼티 삭제

// animal = "123"; <- 객체를 수정하는건 안되지만 안에 들어가 있는 프로퍼티를 수정하는건 괜찮다.

console.log(animal);

// 2. 메서드 -> 값이 함수인 프로퍼티
const person = {
    name: "이정환",
    sayHi() {   
        console.log("안녕!");
    }
};

person.sayHi();