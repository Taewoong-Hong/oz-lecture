import calculateOperation from './operations.js';
import { showError, removeError } from './error.js';
import saveHistory from './history.js';

// 상태를 중앙에서 관리하기 위한 객체
export const state = {
    history: [],
    currentInput: "0", // 초기값을 0으로 설정
    firstNumber: null,
    operator: null,
};

// 상태를 초기화하는 함수
export function resetState() {
    state.currentInput = "0";
    state.firstNumber = null;
    state.operator = null;
    removeError();
}

// 계산 로직
export default function calculate() {
    if (state.firstNumber === null || state.operator === null) {
        throw new Error("연산자가 설정되지 않았습니다.");
    }
    const secondNumber = Number(state.currentInput);
    if (isNaN(secondNumber)) {
        throw new Error("유효한 숫자를 입력하세요.");
    }

    const result = calculateOperation(state.firstNumber, secondNumber, state.operator);
    saveHistory(state.firstNumber, state.operator, secondNumber, result, state.history);

    // 연속 계산을 위해 상태 업데이트
    state.firstNumber = result;
    state.operator = null;
    
    return result;
}

