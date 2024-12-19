// 1. Date 객체 생성
let date1 = new Date(); 
console.log(date1);

let date2 = new Date("1997-01-07"); // 구분자는 . or / or , 구분자도 사용 가능 
let date3 = new Date("1997/1/7/23:59:59"); // 구분자는 . or / or , 구분자도 사용 가능 
console.log(date2);
console.log(date3);

// 2. Timestamp 객체: 특정 시간이 UTC로 부터 몇 ms 가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4); // 변환된 시간이 동일한지 검증

// 3. 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // js의 월 시작은 0부터 시작한다 0 ~ 11
let date = date1.getDate();

let hours = date1.getHours()
let minutes = date1.getMinutes();
let seconds = date1.getSeconds()

// console.log(
//     year,
//     month,
//     date,
//     hours,
//     minutes,
//     seconds
// );

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59

