
let inputStr = prompt("점수를 입력하세요 (0-100):");
console.log("입력된 점수:", inputStr);
let input = parseInt(inputStr);
console.log(input);

const maxScore = 100;
const minScore = 0;
let score
var grade;

// 입력값이 숫자가 아니거나 범위를 벗어날 경우, 오류메시지 출력 후 프로그램 종료.
if (!(input >= minScore && input <= maxScore && !isNaN(input))) {
    console.log("Invalid score! Please enter a number between 0 and 100.");

    // 프로그램 종료의 의미로 강제 에러 발생시킴 but 미적용, 100 초과하는 if문 볼려고
    // throw new Error("Invalid score");
}

//최종점수 계산 (5점 추가
if (input >= minScore && input <= maxScore) {
    score = input + 5 + (input * 0.1); // 입력된 점수에 5점 추가에 10% 가산
}

// 점수가 100을 초과할 경우, 100으로 제한
if (score > maxScore) {
    score = maxScore; // 100점으로 제한
}
// 등급결정 if문
if (score >= 100) {
    grade = "S";
} else if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// 합격 불합격 여부 결정 (삼항연산자)
let result = (score >= 60) ? "Pass" : "Fail";
console.log("결과:", result);


// 최종 점수, 등급, 합격 여부 출력
console.log("Final Score:", score);
console.log("Grade:", grade);
console.log("Status:", result);


// 등급에 따른 consol.log() 출력 (switch문)
switch (grade) {
    case "S":
        if (score === 100) {
            console.log("Perfect Score!");
        } else {
            console.log("Super!!");
        }
        break;
    case "A":
        console.log("Excellent Work!");
        break;
    case "B":
        console.log("Good Job!");
        break;
    case "C":
        console.log("Satisfactory performance.");
        break;
    case "D":
        console.log("Needs Improvement.");
        break;
    case "F":
        console.log("Please try harder!");
        break;
    default:
        console.log("Please enter a valid score between 0 and 100.");
}

function main() {
    const input = promptScore();
    if (input < 0 || input > 100 || isNaN(input)) {
        console.log("Invalid score! Please enter a number between 0 and 100.");
        return;
    }

    const score = calcScore(input);
    const grade = determineGrade(score);
    const passStatus = score >= 60 ? "PASS" : "FAIL";
    printResult(grade, score, passStatus);
}

main();

