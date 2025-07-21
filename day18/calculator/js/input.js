// 입력 처리 함수 (DOM 조작 없이 순수 함수로 변경)
export const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const VALID_OPERATORS = ["+", "-", "*", "/"];

export const resetDisplay = () => {
    return "0";
};

export const subDisplay = (currentInput) => {
    const newValue = currentInput.slice(0, -1);
    return newValue === "" ? "0" : newValue;
};

export const appendNumber = (number, currentInput) => {
    if (!VALID_NUMBERS.includes(number)) throw new Error("유효한 숫자를 입력하세요.");
    if (currentInput === "0") {
        return number;
    }
    return currentInput + number;
};

export const setOperator = (op, currentInput) => {
    if (!VALID_OPERATORS.includes(op)) throw new Error("유효한 연산자를 선택하세요.");
    if (currentInput === "0" || currentInput === "") throw new Error("숫자를 먼저 입력하세요.");
    return op;
};

