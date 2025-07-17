
console.log("객체 실습");

const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong",
    },
    age: 20,
    isAdult: true,
    getFullName: function () {
        return `${this.name.firstName} ${this.name.lastName}`;
    },
    printInfo: function () {
        console.log("printInfo");
        console.log(`name: ${this.name.firstName} ${this.name.lastName}`);
        console.log(`age: ${this.age}`);
        console.log(`isAdult: ${this.isAdult}`);
    },
};

console.log(person);

// person의 age, isAdult 조회
console.log("객체에서 . 사용하여 접근");  // 객체에서는 이 방법을 주로 사용
let age = person.age;
console.log("age :", age);
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("isAdult :", isAdult);


// 객체에 키가 뭐가 있는지 모르지만 어쨌든 모든 값을 꺼내고 싶을 때, for in 사용한다.
let keys = [];
for (const key in person) {
    keys.push(key);
}

// console.log(keys);
for (const key of keys) {
    console.log("key:", key);
    console.log("person[key] =", person[key]);
}

// 객체 내의 함수 사용하기
person.printInfo();
const fullName = person.getFullName();
console.log("fullName =", fullName);


// 객체에 속성 추가
console.log(person);
person.like = "apple";
console.log(person);

const pw ="123";
console.log(pw.length)

if (pw.length > 4) {
    console.log("최소 4자리 입력하세요.")
}
// String.includes{}
const email = "test!naver.com"
console.log(email.includes("@"));


if(!email.includes("@")) {       //email에 "@" 가 포함되어 있지 않으면,
    console.log("이메일 형식을 확인하세요.")
}

console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);
console.log(email, email.indexOf("@"));
console.log(email, email.indexOf("adsnfsnj")); // -1

if (email.indexOf("@") < 0) {
    console.log("이메일 형식을 확인하세요.");
}


// String trim
const textarea = `   배고프다!   `;
console.log("textarea",textarea);
console.log("textarea",textarea.trim());




const fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);

const mixed = [1, "Heloo", true, { name : "홍길동"}]
console.log(mixed);



//배열 요소에 속성 추가
fruits.push("kiwi");
console.log(fruits);
console.log(fruits.length);


// Array.pop() 배열 마지막 요소 삭제, 삭제된 요소 반환
const removedByPop = fruits.pop();
console.log(fruits);
console.log(fruits,length);
console.log("removedByPop : ", removedByPop)

// Array.shift() 배열 첫번째 요소 제거, 삭제된 요소 반환
const removedByShift = fruits.shift();
console.log(fruits);
console.log(fruits.length);
console.log("removedByShift :", removedByShift);

// Array.unshift() 배열 요소 첫번째 인덱스에 추가
fruits.unshift("pineapple");
console.log(fruits);
console.log(fruits.length);
console.log("unshift :", unshift);







