// function returnFalse() {
//     console.log("False 함수");
//     return false;
// }

// function returnTrue() {
//     console.log("True 함수");
//     return true;
// }

// console.log(returnFalse() && returnTrue());
// console.log("===========");
// console.log(returnTrue() && returnFalse());
// console.log("===========");
// console.log(returnTrue() || returnFalse());
// console.log("===========");
// console.log(returnFalse() || returnTrue());

// function returnFalse() {
//     console.log("False 함수");
//     return undefined;
// }

// function returnTrue() {
//     console.log("True 함수");
//     return 10;
// }

// console.log(returnFalse() && returnTrue());
// AND 연산자인데 falsy 같이 앞에와서 false 결과를 출력함


// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person is null");
}

printName()
printName({name: "이정환"});