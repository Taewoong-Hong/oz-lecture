// 후위 연산자
let increment = 10;
console.log("1", increment); // 10
increment++; // 11
console.log("2", increment); // 11
console.log("3", increment++); // 11 (후위 연산자, 출력 후 증가)
console.log("4", increment); // 12

let decrement = 10;
console.log("dec1", decrement); // 10
decrement--; // 9
console.log("dec2", decrement); // 9
console.log("dec3", decrement--); // 9 (후위 연산자, 출력 후 감소)
console.log("dec4", decrement); // 8


// 전위 연산자
let preIncrement = 10;
console.log("preInc1", preIncrement); // 10
++preIncrement; // 11
console.log("preInc2", preIncrement); // 11
console.log("preInc3", ++preIncrement); // 12 (전위 연산자, 증가 후 출력)
console.log("preInc4", preIncrement); // 12 
let preDecrement = 10;
console.log("preDec1", preDecrement); // 10
--preDecrement; // 9
console.log("preDec2", preDecrement); // 9
console.log("preDec3", --preDecrement); // 8 (전위 연산자, 감소 후 출력)
console.log("preDec4", preDecrement); // 8



// console.log(a++) 후위연산
let a = 10;
a = a + 1; // 11
console.log(a); 

// console.log(++a) 전위연산
let b = 10;
b = b + 1; // 11
console.log(b);

// let c = c++; c가 선언되지 않았으므로 ReferenceError 발생 -> 불가

// 단항 산술연산자
let num = -10;
num = -num; // -10을 양수로 변환
console.log("-(-10)", num); // 10

let num2 = 10;
num2 = -num2; // 음수로 변환 (이미 음수이므로 변화 없음)
console.log("-(10)", num2); // 10

// let num3 = -num2; // 음수로 변환
let num3 = 10;
-num3
console.log(num3); // -10
// let num4 = +num3; // 양수로 변환


