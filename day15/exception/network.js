async function getPost(postNum) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postNum}`
    );
    
    if (!response.ok) throw new Error("서버 응답 오류: " + response.status);

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("에러! : " + error.message);
  }
}

getPost("2"); // 유효한 postNum 예시
