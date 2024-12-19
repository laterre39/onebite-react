// async 어떤 함수를 비동기 함수로 만드는 키워드

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve({
            name: "이정환",
            id: "winterload"
           }) 
        }, 1500);
    });
}

// await 키워드 : async 내에서만 사용 가능한 키워드 비동기 함수가 다 처리되길 대기함

async function printData() {
    const data = await getData();
    console.log(data);
    
}

printData();