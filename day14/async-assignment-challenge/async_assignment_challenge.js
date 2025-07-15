  // 1. 화살표 함수 + ...rest 사용
const fetchMultiplePosts = async (...ids) => {
  const results = {};
  for (const id of ids) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) throw new Error("데이터 없음");
      const data = await response.json();
      results[id] = data.title;
    } catch (err) {
      results[id] = "에러: " + err.message;
    }
  }
  return results;
};

const runChallenge = function () {
  const input = document.getElementById("postIds").value;
  const output = document.getElementById("output");
  const button = document.getElementById("postButton");



  // 버튼 비활성화
  button.disabled = true;
  output.classList.remove("error");
  output.innerHTML = "";

  // 3. ID 정리 및 유효성 체크
  var rawIds = input.split(",").map((id) => id.trim());
  let validIds = [];
  let hasInvalid = false;


  // 1~100 게시물 ID 제한
  for (let id of rawIds) {
    if (!id || isNaN(id) || id < 1 || id > 100) {
      hasInvalid = true;
    } else {
      validIds.push(Number(id));
    }
  }

  if (validIds.length === 0) {
    output.innerHTML = `<div class="post error">유효한 ID(1-100)를 입력하세요!</div>`;
    output.classList.add("error");
    button.disabled = false;
    return;
  }

  // 4. 데이터 fetch 및 렌더링
  (async () => {
    const results = await fetchMultiplePosts(...validIds);
    for (const key in results) {
      const div = document.createElement("div");
      div.classList.add("post");
      div.innerHTML = `post${key}: ${results[key]}`;
      if (results[key].startsWith("에러")) {
        div.classList.add("error");
      }
      output.appendChild(div);
    }
    button.disabled = false;
  })();
};


// DOM이 로드된 후 이벤트 리스너를 바인딩

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("postButton").addEventListener("click", runChallenge);
});
