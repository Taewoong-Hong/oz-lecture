
//  1. 기본 변수 선언과 타입
var myAge = 28;                // number
let myName = "H";              // string
const isStudent = true;        // boolean
let myJob = null;              // null
let futurePlan;                // undefined
const uniqueId = Symbol("id"); // Symbol
const bigMoney = 1234567890123456789012345678901234567890n; // BigInt

//  2. 문자열 처리
let profileInfo = "이름:\t" + myName + "\n나이:\t" + myAge + "\n학생 여부:\t" + isStudent;
console.log(profileInfo);

let intro = "안녕하세요! 저는 " + myName + "이고, 나이는 " + myAge + "살입니다.";
console.log(intro);

//  3. 템플릿 문자열
let templateProfile = `Name: ${myName}, Age: ${myAge}, Student: ${isStudent}`;
console.log(templateProfile);

//  4. 배열에 3개 이상의 유효 취미 + null, undefined 포함
let hobbies = ["reading", "gaming", null, "coding", undefined];

let hobbyString = "My hobbies: " + hobbies.join(", ");
console.log(hobbyString);

hobbies.forEach((hobby, index) => {
    console.log(`hobbies[${index}] 타입:`, typeof hobby);
});

//  5. 객체 처리
let userProfile = {
    name: myName,
    age: myAge,
    isStudent: isStudent
};

// 속성 추가
userProfile.email = null;

let profileSentence = "사용자 이름은 " + userProfile.name + "이고, 나이는 " + userProfile.age + "세입니다.";
console.log(profileSentence);

// email 속성이 null인지 확인
if (userProfile.email === null) {
    console.log("이메일은 등록되지 않았습니다. (null)");
}

//  6. typeof 사용
console.log("typeof hobbies:", typeof hobbies);         // object
console.log("typeof userProfile:", typeof userProfile); // object
console.log("typeof bigMoney:", typeof bigMoney);       // bigint
console.log("typeof uniqueId:", typeof uniqueId);       // symbol

//  7. null vs undefined 구분
let a = null;
let b;

console.log("typeof null:", typeof a);      
console.log("typeof undefined:", typeof b);   
console.log("null === undefined:", a === b); 
