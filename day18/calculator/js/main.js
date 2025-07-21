import calculate, { state, resetState } from './index.js';
import { appendNumber, setOperator, subDisplay, resetDisplay, VALID_NUMBERS, VALID_OPERATORS } from './input.js';
import { showError, removeError } from './error.js';

const display = document.getElementById('display');
let newNumberStarted = true; // 계산 후, 혹은 연산자 입력 후 새로운 숫자 입력을 시작해야 하는지 여부

// --- 공통 로직: Display와 State를 동기화 ---
function updateDisplay(value) {
    display.textContent = value;
    state.currentInput = value;
}

// --- 이벤트 핸들러 ---
export function handleInput(num) {
    removeError();
    if (newNumberStarted) {
        updateDisplay(num);
        newNumberStarted = false;
    } else {
        const updated = appendNumber(num, display.textContent);
        updateDisplay(updated);
    }
}

export function handleOperator(op) {
    try {
        // 연산자가 연달아 입력된 경우, 이전 계산을 먼저 수행
        if (state.firstNumber !== null && state.operator !== null && !newNumberStarted) {
            handleEnter();
        }
        setOperator(op, display.textContent); // 유효성 검사
        state.firstNumber = Number(display.textContent);
        state.operator = op;
        newNumberStarted = true; // 연산자 입력 후엔 새 숫자를 받아야 함
    } catch (err) {
        showError(err.message);
    }
}

export function handleEnter() {
    // 연산자만 누르고 바로 = 를 누르는 등, 두 번째 숫자가 없는 경우 계산 방지
    if (state.operator === null || newNumberStarted) {
        return;
    }
    try {
        const result = calculate();
        updateDisplay(String(result));
        newNumberStarted = true; // 계산 완료 후엔 새 숫자를 받아야 함
    } catch (err) {
        showError(err.message);
    }
}

export function handleBackspace() {
    if (newNumberStarted) return; // 계산 결과가 막 나온 상태에서는 무시
    const result = subDisplay(display.textContent);
    updateDisplay(result);
}

export function handleReset() {
    const result = resetDisplay();
    updateDisplay(result);
    resetState(); // 로직 상태도 초기화
    newNumberStarted = true;
}

// --- 전역 이벤트 리스너 (HTML의 onclick과 동일한 함수 호출) ---
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (VALID_NUMBERS.includes(key)) handleInput(key);
    if (VALID_OPERATORS.includes(key)) handleOperator(key);
    if (key === "Enter" || key === "=") handleEnter();
    if (key === "Backspace") handleBackspace();
    if (key.toLowerCase() === "c" || key === "Escape") handleReset();
});
