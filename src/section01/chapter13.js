// 1. 콜백 함수
function main(value) {
    console.log(1); // value 안에는 sub 함수가 들어가 있음.
    console.log(2);
    value();
    console.log("end");

}


main(() => {
    console.log("i am sub");
});


// 2. 콜백 함수 활용
function repeat(count, callback) {
    for (let index = 1; index <= count; index++) {
        callback(index);
    }
}

repeat(5, function (index) {
    console.log(index); // 콜백 함수를 통해서 추가적인 중복 함수 구현을 개선하였다.
})

repeat(5, function (index) {
    console.log(index * 2); // 추가 조건이 필요하다면 함수를 콜백해서 추가조건에 대응하도록 했음
})

repeat(5, function (index) {
    console.log(index * 3);
})

