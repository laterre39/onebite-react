// 함수 선언

function greeting() {
    console.log("안녕하세요!");
}

greeting(); // 함수 호출


getArea(10, 20);
getArea(30, 20);

let area1 = getArea(30, 40)
console.log(area1)

// 호이스팅 -> 자스는 다른 언어랑 다르게 함수를 실행 하기전 호이스팅을 통해 위로 끌어올려서 실행한다.
function getArea(w, h) {

    function another() {
        console.log("another")
    }

    another() // 중첩 함수
    let area = w * h;

    console.log(area)
}
