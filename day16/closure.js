





// 클로저 - 카운터 상태 변경 함수
const increase = (function () {
  let num = 0 ;

  return function () {
    return ++ num ;

  };
})();

console.log(increase());
console.log(increase());
console.log(increase());


const counter = (function () {
  let num = 0 ; // 카운트 상태 변서 (state)
  return {
    increase: function () {
      return ++ num ;
    },
    decrease: function () {
      return -- num ;
    },
  };
})();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());