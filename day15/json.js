const jsonString = `{
  "name" : "지민",
  "age" : 20
}`;

// const jsonObj = { 
//   name : 지민 ,
//   age : 20 ,
// };
// console.log(jsonObj);


// const jsonObj2 = JSON.parse(jsonString);
// const name = jsonObj2.name;
// const age = jsonObj2.age;

// const { name, age } = JSON.parse{jsonString}
// console.log(name);
// console.log(age);


// console.log(jsonObj2);



const jsonStringArr = `[
  {
    "id" : 1,
    "name" : "지민",
    "age" : 20
  },
  {
    "id" : 2,
    "name" : "태웅",
    "age" : 20
  }
]`;

const users = JSON.parse(jsonStringArr);    // JSON을 js로 보낼 때 JSON.parse
console.log(jsonStringArr);
console.log(users);


// for문 사용
const namesFor = [];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  namesFor.push(user.name);
}
console.log(namesFor);

// Array.map() 사용
const namesMap = users.map((user) => {
  return user.name;
});
console.log(namesMap);

// Array.map + 구조 분해
const namesMapSp = users.map(({ name }) => name);
console.log(namesMapSp);



// 객체 → JSON 문자열로 변환
const namesMapString = JSON.stringify(namesMap);
console.log(namesMapString);
// JSON 문자열 → 객체로 변환
const jsonString3 = `
{
  "name": "지민",
  "age": 22
}`;
const jsonObj3 = JSON.parse(jsonString3);
console.log("jsonObj3", jsonObj3);


