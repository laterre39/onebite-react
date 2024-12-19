console.log(1);

setTimeout(
    () => {
        console.log(2);
        
   }, 3000
)

console.log(3);

// js의 비동기 처리는 Web Apis에서 처리를 하고 엔진에 다시 콜백한다.