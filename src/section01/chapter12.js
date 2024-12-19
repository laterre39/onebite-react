// 1. 함수 표현식
function funcA() { // 함수 선언
    console.log("funcA")
}

let varA = funcA; // 함수도 하나의 값으로 취급한다.
varA(); // 변수에 함수를 담을 수 있다.

let varB = function funcB() { // 익명 함수 -> 함수 선언해서 바로 변수에 삽입한다.
    console.log("funcB");
}
// funcB(); 값으로 써 함수를 호출하기 때문에 함수를 호출할 수 없다.
varB(); // 함수 표현식은 호이스팅이 되지 않는다.

// 2. 화살표 함수
let varC = () => 1;
console.log(varC());

let varD = (value) => value + 1;
console.log(varD(10));

let varE = (value) => {
    console.log(value + 1);
}

varE(20);

