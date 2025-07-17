let math = 80;
let english = 90;
let science = 85;
let history = 95;
let avg = (math + english + science + history) / 4; // 87.5


let isMathLowAvg = math < avg;
console.log("isMathLowAvg", isMathLowAvg); // true

let isEnglishLowAvg = english < avg;
console.log("isEnglishLowAvg", isEnglishLowAvg); // false

// Math 점수가 평균보다 낮은지, 영어 점수가 평균보다 낮은지 확인 [and]
console.log(isMathLowAvg && isEnglishLowAvg); // false

// Math 점수가 평균보다 낮거나, 영어점수가 평균보다 낮은지 확인 [or]
console.log(isMathLowAvg || isEnglishLowAvg); // true

// Math 점수가 평균보다 낮지 않거나, 영어점수가 평균보다 낮지 않은지 확인 [not]
console.log(!(isMathLowAvg || isEnglishLowAvg)); // false

console.log("!false", !false); // true
console.log("!true", !true); // false

console.log("!true)") // false
console.log("false") // false

console.log("!true && false", !true && false); // false
console.log("!true || false", !true || false); // false