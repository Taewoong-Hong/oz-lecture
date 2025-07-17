// if 문을 사용한 조건문 예제
let num = 0;

if (num > 0) {
    console.log("양수입니다.");
} 
else if (num < 0) {
    console.log("음수입니다.");
} 
else {
    console.log("0입니다.");
}

const limit = 80;
let score = 90;

if (score > limit) {
    console.log("합격입니다.");
} else {
    console.log("불합격입니다.");
}

// if 문을 사용한 중첩 조건문 예제
let age = 20;
if (age >= 18) {
    console.log("성인입니다.");
    if (age >= 65) {
        console.log("노인입니다.");
    } else {
        console.log("청년입니다.");
    }
}
// if 문을 사용한 논리 연산자 예제
let isMember = true;
let hasCoupon = false;
if (isMember && hasCoupon) {
    console.log("할인 혜택을 받습니다.");
} else {
    console.log("할인 혜택을 받지 않습니다.");
}
// if 문을 사용한 삼항 연산자 예제
let isLoggedIn = true;
let message = isLoggedIn ? "환영합니다!" : "로그인이 필요합니다.";
console.log(message); // "환영합니다!"

// if 문을 사용한 switch 문 예제
let day = 3;
switch (day) {
    case 1:
        console.log("월요일입니다.");
        break;
    case 2:
        console.log("화요일입니다.");
        break;
    case 3:
        console.log("수요일입니다.");
        break;
    case 4:
        console.log("목요일입니다.");
        break;
    case 5:
        console.log("금요일입니다.");
        break;
    case 6:
        console.log("토요일입니다.");
        break;
    case 7:
        console.log("일요일입니다.");
        break;
    default:
        console.log("유효하지 않은 날입니다.");
}


