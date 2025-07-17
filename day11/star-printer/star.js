const maxstar = 10;
const minstar = 1;
let num;


// 입력한 숫자 만큼 star를 역순으로 출력
const printReverseStars = function(count) {
    for (let i = count; i > 0; i--) {
        let star = "";
        for (let j = 0; j < i; j++) {
            star += "*";
        }
        console.log(star);
    }
};

// 입력한 star 숫자의 사각형 패턴 출력(화살표 함수 사용)
const printSquare = (count) => {
    let star = "";
    for (let i = 0; i < count; i++) {
        star += "*".repeat(count) + "\n";
    }
    console.log(star);
};


// 입력 값이 1-10을 벗어날 경우, 처음부터 재입력 요청
let inputStr;
do {
    inputStr = prompt("Enter the number of stars (1-10):");
    console.log(`[입력: ${inputStr}]`);

    // 입력값 숫자로 변환
    num = parseInt(inputStr);

    if (!(num >= minstar && num <= maxstar && !isNaN(num))) {
        console.log("Invalid input! Enter a number between 1 and 10.");
    } else {
        printStar(num); // 유효하면 별 출력
        printReverseStars(num); // 별 역순 출력
        printSquare(num); // 별 사각형 출력
        break; // 반복 종료
    }
} while (true);





// 입력한 number 의 star(*)을 출력하는 함수

function printStar(count) {
    var star = "";
    for (let i = 0; i < count; i++) {
        star += "*";
    }
    console.log(star);
}




// 객체 표현 형태
// 클래스 없이, 로직 기반으로 자동 생성
const patternList = [];

for (let i = 1; i <= 10; i++) {
    patternList.push("*".repeat(i));
}

console.log(patternList); // ["*", "**", "***", "****", "*****"]


let array = [];

for (let i = 1; i <= num; i++) {
    array.push("*".repeat(i));
}

// 그 개수만 출력
for (let index in array) {
    console.log(`Stars for count ${Number(index) + 1}: ${array[index]}`);
}