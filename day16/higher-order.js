// Array.map ()
// 배열을 다른 배열로 매핑할 때 사용


// 여러 영화 객체들을 요소로 가지는 'movies' 배열을 선언합니다.

let movies = [
    {
        title : "Avengers",
        director : "Marble",
        year : 2012,
        genre : "SF"
    },
    {
        title : "Titanic",
        director : "Angelo",
        year : 2004,
        genre : "Drama"
    },
    {
        title : "2012",
        director : "Tommy",
        year : 2002,
        genre : "SF"
    },
    {
        title: "Inception",
        year: 2010,
        genre: "SF"
        // 감독 정보가 없는 영화
    },

    
];


// title 만 배열로 뽑아서 확인한다.


const titles = [];

for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    titles.push(movie.title);
    
}


const titlesByMap = movies.map((movie) => {
  console.log(movie);
  return movie.title;
});

console.log(titlesByMap);


const infoArr = [];

// {title, director} 만 있는 배열로 확인한다.
for (const movie of movies) {
  infoArr.push({
    title: movie.title,
    director: movie.director,
  });
}
// 축소버젼으로 표현가능하다.
for ({title, director} of movies) {
  infoArr.push({
    title,
    director,
  });
  console.log(infoArr);
};

// map

const infoArrByMap = movies.map((movie) => {
  return {
    title: movie.title,
    director: movie.director,
  };
});


// 모든 Movie에 hit : 0 을 넣어주고 싶다.
const newMovies = movies.map((movie) => {
  return {
    ...movie,
    hit: 0,
  };          
});

console.log(newMovies);;



const numbers = [1,2,3,4,5];
//짝수만 뽑아내는 배열 만들기, for문 사용
const evenArr = [];
for (let i = 0; i < numbers.length; i++) {
  const evenNum = numbers[i];
  if (evenNum % 2 === 0) evenArr.push(evenNum);
};


// filter
const evenArrByFilter = numbers.filter((evenNum2) => {
  return evenNum2 % 2 === 0;
});



// 최대값, 최소값 선택
const min = numbers.reduce((acc, num)=> (acc > num ? acc : num), 100);
const max = numbers.reduce((acc, num)=> (acc < num ? acc : num), 0);
console.log(min, max);

// 

const result = numbers
  .filter((num) => num % 2 ===0)
  map((num) => num * 2)
  .reduce((acc, num) => (acc + num), 0);
  console.log(result);