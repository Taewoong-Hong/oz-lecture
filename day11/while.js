// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// 1씩 증가하는 while문 예제
let num = 1;
while (num <= 20) {
    console.log(num);
    num++; // num = num + 1; // num += 1; 와 동일
}

// while문은 조건이 참인 동안 계속 반복 실행
console.log("while문 종료");
console.log("num", num); // num의 최종값 출력

// 2씩 증가하는 while문 예제
let num2 = 1;
while (num2 <= 20) {
    console.log(num2);
    num2 += 2; // num2 = num2 + 2; 와 동일
}

//do while문 예제
// do-while문은 조건을 검사하기 전에 최소 한번은 실행됨

let num3 = 1;
do {
    console.log(num3);
    num3 += 2;
} while (num3 <= 20); // do-while문은 최소 한번은 실행됨

console.log("do-while문 종료");

// for문 예제
// for문은 반복 횟수가 정해져 있을 때 사용
// for(초기식; 조건식; 증감식) { 실행문; }
// 초기식: 반복문이 시작될 때 한번만 실행되는 부분
// 조건식: 반복문이 실행될 조건을 지정하는 부분
// 증감식: 반복문이 실행된 후에 실행되는 부분

for (let i = 0; i <= 20; i++) {
    console.log(i);
}
console.log("for문 종료");


// 1부터 20까지 짝수 출력하는 for문 예제
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)  // i가 짝수일 때
        console.log(i);
}

// 1부터 20까지 홀수 출력하는 for문 예제
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0)  // i가 홀수일 때
        console.log(i);
}


// 중첩 반복문
for (let i = 1; i < 3; i++) {
    console.log(`i: ${i}`);
    for (let j = 1; j < 3; j++) {
        console.log(`j: ${j}`);
    }
}

// break문과 continue문
// break: 반복문을 즉시 종료
// continue: 현재 반복을 건너뛰고 다음 반복으로 넘어감


//for문과 array(배열) 사용 예제
let array = ["a", "b", "c", "d", "e"];
console.log("배열의 길이:", array.length);
for (let i = 0; i < array.length; i++) {
    console.log(`배열의 ${i}번째 요소: ${array[i]}`);
}


//for in 배열
for (item in array) {
    console.log(`배열의 ${item}번째 요소: ${array[item]}`);
}



// function 함수 정의(*함수 선언식)

function gugudan() {
    for (let i = 1; i <= 9; i++) {
        console.log(`4 x ${i} = ${4 * i}`);
    }
}
    
// 함수 정의 - 화살표 함수
const gugudan5 = () => {
    for (let i = 1; i <= 9; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }
}

gugudan(); // 함수 실행
gugudan5(); // 화살표 함수 실행


// 함수 표현식

const gugudanExpression = function(num) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

gugudanExpression(6); // 함수 표현식 실행



// 화살표 함수로 구구단 출력
// 화살표 함수는 function 키워드 없이 정의할 수 있는 함수 표현식의 한 형태입니다.
// 화살표 함수는 this 바인딩이 다르게 동작합니다.
const gugudanArrow = (num) => {
    for (let i = 1; i <= 9; i++) {
       console.log(`${num} x ${i} = ${num * i}`);
    }
}


function sum(scores) {
    let sumValue = 0; // 합계를 저장할 변수 초기화
    for (const score of scores) {
        sumValue += score; // 각 점수를 합계에 더함
    }
    return sumValue; // 최종 합계를 반환
}

let math = 70;
let english = 80;
let korean = 90;
let science = 85;
let history = 75;

const scores = [math, english, korean, science, history]; // 모든 과목의 점수를 배열로 저장

const total = sum(scores); // sum 함수를 호출하여 두 과목의 합을 계산
// console.log(`총점: ${total}`);

function avg(num1 = 10, num2 = 20) {
    return (num1 + num2) / 2; // 두 수의 평균을 계산하여 반환
}

const average = avg();


function sumDeclare(num1, num2) {
    return num1 + num2; // 두 수의 합을 계산하여 반환
}

const sumArrow = (num1, num2) => {
    return num1 + num2; // 두 수의 합을 계산하여 반환
}


// 생성자 함수 예제
function Person(name, age) {
    this.name = name; // 생성자 함수의 인스턴스에 name 속성 추가
    this.age = age;   // 생성자 함수의 인스턴스에 age 속성 추가
}

// 인스턴스 메서드 정의
Person.prototype.introduce = function() {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고, 나이는 ${this.age}세입니다.`);
};

// 생성자 함수를 사용하여 Person 인스턴스 생성
const person1 = new Person("홍길동", 25);
const person2 = new Person("김철수", 30);
const person3 = new Person("이영희", 28);

// 인스턴스 속성 출력
console.log(person1.name); // "홍길동"
console.log(person2.age);  // 30
console.log(person3.name); // "이영희"

// 인스턴스 메서드 호출
person1.introduce(); // "안녕하세요, 제 이름은 홍길동이고, 나이는 25세입니다."
person2.introduce(); // "안녕하세요, 제 이름은 김철수이고, 나이는 30세입니다."
person3.introduce(); // "안녕하세요, 제 이름은 이영희이고, 나이는 28세입니다."

// 생성자 함수는 객체를 생성하기 위한 템플릿 역할을 합니다.

