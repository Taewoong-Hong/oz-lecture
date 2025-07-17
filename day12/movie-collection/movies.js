
// 단일 영화 정보를 담고 있는 'movie' 객체를 선언합니다.
const movie = {
    title : "Avengers",
    director : "Marble",
    year : 2012,
    genre : "SF"
}

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
    {
        director: "Nolan",
        genre: "Thriller"
        // 제목과 연도 정보가 없는 영화
    },

    
]



console.log("Movie Collection:");

// for 문을 사용하여 'movies' 배열의 모든 요소를 순회합니다.
for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    // i는 0부터 시작하므로, 1을 더해 1번부터 시작하도록 합니다.
    console.log(`${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`);
}


// 영화 목록을 콘솔에 출력하는 함수 (함수 선언문)
// param {Array<Object>} movieList - 출력할 영화 객체 배열


function printMovies(movieList) {
    console.log("- Movie Collection -");
    const keysToDisplay = ['title', 'director', 'year', 'genre'];
    movieList.forEach((movie, index) => {
        // 원본 객체를 수정하지 않기 위해 복사본을 만듭니다.
        const movieForDisplay = { ...movie };

        // 지정된 키 목록을 순회하며 값이 없는 속성을 확인합니다.
        for (const key of keysToDisplay) {
            // if문을 사용해 해당 키의 값이 falsy(undefined, null, "")한 경우 "Unknown"을 할당합니다.
            if (!movieForDisplay[key]) {
                movieForDisplay[key] = "Unknown";
            }
        }

        const { title, director, year, genre } = movieForDisplay;
        console.log(`${index + 1}. Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genre}`);
    });
}
// 특정 장르의 영화만 필터링하는 함수//
function filterMoviesByGenre(movieList, genre) {
    return movieList.filter(movie => movie.genre === genre);
}

printMovies(movies);


// 'movies' 배열의 길이를 구해 총 영화 갯수 계산 출력
const totalMovies = movies.length;
console.log("Total Movies : ", totalMovies);

// SF 장르 영화만 필터링하여 출력
const sfGenre = "SF";
const sfMovies = filterMoviesByGenre(movies, sfGenre);
console.log(`\n--- ${sfGenre} 장르 영화 ---`);
if (sfMovies.length > 0) {
    printMovies(sfMovies);
} else {
    console.log(`No movies found for genre: ${sfGenre}`);
}
// 존재하지 않는 장르("Action")로 필터링 테스트
const actionGenre = "Action";
const actionMovies = filterMoviesByGenre(movies, actionGenre);
console.log(`\n--- ${actionGenre} 장르 영화 ---`);
if (actionMovies.length > 0) {
    printMovies(actionMovies);
} else {
    console.log(`No movies found for genre: ${actionGenre}`);
}


// 'addMovies'라는 이름의 함수를 정의합니다.
// 첫 번째 인자로 index를 받고, 그 뒤의 모든 인자들을 'newMovies'라는 배열로 받습니다(나머지 매개변수).
function addMovies(index, ...newMovies) {
    movies.splice(index, 0, ...newMovies);
}

// 하드코딩된 여러 영화 객체를 한 번에 추가
console.log("\n--- 2개의 새로운 영화 추가 실행 ---");
const newMovie1 = { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" };
const newMovie2 = { title: "Parasite", director: "Bong Joon Ho", year: 2019, genre: "Thriller" };
addMovies(0, newMovie1, newMovie2); // 배열의 맨 앞에 2개의 영화를 추가




// 계산해라 평균 개봉년도
const calculateAvgYear = function(movieList) {
    // 1. 'year' 속성이 있고, 그 값이 숫자인 영화만 필터링합니다.
    const moviesWithYear = movieList.filter(movie => typeof movie.year === 'number');

    // 2. 유효한 연도를 가진 영화가 없을 경우, 0으로 나누는 오류를 방지하기 위해 0을 반환합니다.
    if (moviesWithYear.length === 0) {
        return 0;
    }
        // 3. reduce를 사용하여 필터링된 영화들의 연도 총합을 구합니다.
    const totalYear = moviesWithYear.reduce((sum, movie) => sum + movie.year, 0);

    // 4. 평균을 계산하여 반환합니다.
    return totalYear / moviesWithYear.length;
};


// 찾아라 신규 작품
const findNewestMovie = (movieList) => {
    const validMovies = movieList.filter(movie => typeof movie.year === 'number');
    if (validMovies.length === 0) {
        return null;
    }
    return validMovies.reduce((newest, current) => {
        return current.year > newest.year ? current : newest;
    });
};
console.log("Statistics : ")
console.log("Average Year :", calculateAvgYear(movies));
console.log("Newest Movie : ", findNewestMovie(movies));