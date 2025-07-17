// 삼항연산자

let math = 80;
let english = 90;
let science = 85;
let history = 95;
let avg = (math + english + science + history) / 4; // 87.5


let isMathLowAvg = math < avg;
console.log("isMathLowAvg", isMathLowAvg); // true

let score = 90;
let grade = (score >= 90) ? "A+" : "A"
console.log(grade); // "A+"

let AvgMathGrade = isMathLowAvg ? "수학점수 평균이하" : "수학점수 평균이상";
console.log("AvgMathGrade", AvgMathGrade); // "수학점수 평균이하"

let AvgEnglishGrade = (english < avg) ? "영어점수 평균이하" : "영어점수 평균이상";
console.log("AvgEnglishGrade", AvgEnglishGrade); // "영어점수 평균이상"

let AvgScienceGrade = (science < avg) ? "과학점수 평균이하" : "과학점수 평균이상";
console.log("AvgScienceGrade", AvgScienceGrade); // "과학점수 평균이하"






