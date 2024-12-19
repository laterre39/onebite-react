function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000)
}

// add(1, 2, (value) => {
//     console.log(value);
// })

function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이"
        callback(food);
    }, 3000)
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cdFood = `식은 ${food}`
        callback(cdFood)
    }, 1500)
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const frFood = `얼은 ${food}`
        callback(frFood)
    }, 2000)
}

orderFood((food) => { // 콜백호출 이 많아지면 인덴트가 깊어지는데 이걸 우리는 콜백 지옥이라 한다
    console.log(food);

    cooldownFood(food, (cdFood) => {
        console.log(cdFood);
    });

    freezeFood(food, (frFood) => {
        console.log(frFood);
    });
})




