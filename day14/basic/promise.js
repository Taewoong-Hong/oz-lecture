const promise = new Promise((resolve) => {
  console.log("Promise 영역");
  setTimeout(() =>{
      console.log("3초 지남");
      let promiseResult = "성공!";
      resolve(promiseResult);
  }, 3000);
});

// promise
//   .then((result) => {
//       // console.log("then 영역");
//       // console.log(result);
//   })   
//   .catch((error) => {
//       // console.log("catch 영역");
//       // console.log(error)
//   });



  // Promise. all 병렬처리

const p1 = new Promise((resolve) => setTimeout(() => resolve("작업1"), 5000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("작업2"), 3000));

Promise.all([p1, p2]).then((results)=> console.log(results));
