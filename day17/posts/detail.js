// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";
  // API base URL

// 포스트 상세 정보 표시 함수
async function displayPostDetail() {
    try {
        // URL에서 postId 추출 (예: detail.html?postId=1 → 1)
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");
        if (!postId) throw new Error("No post ID provided");  // postId가 없으면 에러

        // localStorage 캐시 키 정의 (예: post_1)
        const cacheKey = `post_${postId}`;
        const cached = localStorage.getItem(cacheKey); // 로컬스토리지에서 해당 키로 캐시 가져오기
        let post = null;  // 최종 사용할 post 데이터

        // 캐시가 존재할 경우
        if (cached) {
            const cachedData = JSON.parse(cached); // 문자열을 객체로 변환
            const now = Date.now();
            const age = now - cachedData.timestamp; // 저장된 시점과 현재 시간 차이 계산

            if (age < 5 * 60 * 1000) { // 5분(300,000ms) 이내면 캐시 사용
                post = cachedData.data;
                console.log("Post loaded from localStorage");
            }
        }

        // 캐시가 없거나 5분이 지난 경우 → API에서 새로 fetch
        if (!post) {
            const response = await fetch(`${apiUrl}/posts/${postId}`);
            if (!response.ok) throw new Error("Failed to fetch post");

            post = await response.json();

            // 새로 가져온 데이터를 localStorage에 저장 (타임스탬프 포함)
            localStorage.setItem(
                cacheKey,
                JSON.stringify({
                    data: post,
                    timestamp: Date.now()
                })
            );
            console.log("Post fetched from API");
        }

        // 최종 데이터 화면에 표시
        renderPost(post);

    } catch (error) {
        // 에러 발생 시 콘솔과 화면에 출력
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML = "<p>Error loading post details</p>";
    }
}

// 포스트 렌더링 함수 (제목과 본문을 화면에 출력)
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로딩 시 상세 정보 표시 실행
displayPostDetail();
