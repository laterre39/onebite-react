function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행... 함수 executor

        setTimeout(() => {

            if (typeof num === "number") {
                resolve(num + 10);
            } else reject("num이 숫자가 아닙니다.");

        }, 2000)
    });

    return promise;
};


// setTimeout(() => {
//     console.log(promise);
// }, 3000)

// then 메서드 
// promise.then((value)=>{
//     console.log(value);
// });


// catch로 오류를 체크할 수 있다..
// promise.catch((error) => {
//     console.log(error);
// });


// 연달아서 사용하는 프로미스 체이닝도 가능하다.
// promise
// .then((val) => {
//     console.log(val);
    
// })
// .catch((err) => {
//     console.log(err);
// })

// 프로미스 체이닝을 통해 콜백 지옥을 회피
add10(0)
.then((result) => {
    console.log(result);
    const newP = add10(result);

    return newP
})
.then((result) => {
    console.log(result);
    const newP = add10(result);

    return newP
})
.then((result) => {
    console.log(result);
    const newP = add10(result);

    return newP
})
.catch((errpr) => {
    console.log(errpr);
})