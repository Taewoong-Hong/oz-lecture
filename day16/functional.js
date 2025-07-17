
const add = function (a , b) {
  return a + b ;
}




console.log(add(1,2)); // 3



// 인자로 함수를 받아서
// 매개변수 2개를 함수의 인자로 사용함
function cal(func, num1, num2) {
  return func(num1, num2);
}
console.log(cal(add, 2, 3));

// 인자로 함수 받음
// 함수 안에서 그 함수를 실행함
// 함수를 인자로 받을 수 있는 이유는 함수를 변수에 할당할 수 있는 것과 동일함
function addTotal(add1, add2) {
  return add2((1, 2), 3);
}
const total = addTotal(add, add);
console.log(total);

// 호출부에서 이미 add(1,2)와 add(3,4)가 계산됨
// add1과 add2는 이미 숫자값 (add1 = 3, add2 = 7)
function addTotalMistake(add1, add2) {
  return add(add1, add2);
}
