// DOM 요소 선택
const timerInput = document.getElementById('timerInput');
const startButton = document.getElementById('startTimer');
const timerDisplay = document.getElementById('timerDisplay');

// 타이머 상태를 저장할 변수
let timerCount;
var timerMessage = "타이머 종료!";

// 시작 버튼에 클릭 이벤트 리스너 추가
startButton.addEventListener('click', async () => {
  // 입력된 값을 정수로 변환
  const inputValue = parseInt(timerInput.value, 10);   //10 진수 Number로의 변환
  const Max_Time = 10;

  // 유효성 검사: 숫자 10 초과이거나 0 이하인 경우 에러 메시지 표시
  if (!( !isNaN(inputValue) && inputValue > 0 && inputValue <= Max_Time )) {
    timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요.";
    timerDisplay.classList.add("error");
    return;
  }

  // 타이머 시작 전 초기화
  timerDisplay.classList.remove("error"); // 이전 에러 스타일 제거
  startButton.disabled = true; // 버튼 비활성화 (중복 클릭 방지)
  timerInput.disabled = true;  // 입력창 비활성화

  let remainingSeconds = inputValue;
  timerDisplay.textContent = `타이머 ${remainingSeconds}초`;

  timerCount = setInterval(() => {
    remainingSeconds--;
    timerDisplay.textContent = `타이머 ${remainingSeconds}초`;

    if (remainingSeconds <= 0) {
      clearInterval(timerCount);
      timerDisplay.textContent = timerMessage;
      startButton.disabled = false;
      timerInput.disabled = false;
      timerInput.value = "";
    }
  }, 1000);
});
