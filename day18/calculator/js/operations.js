// 사칙연산 수행
export default function calculateOperation(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber === 0) {
        throw new Error("0으로 나눌 수 없습니다.");
      }
      return firstNumber / secondNumber;
    case '^': return firstNumber ** secondNumber; // 제곱 연산 추가
    default:
      throw new Error(`알 수 없는 연산자입니다: ${operator}`);
  }
}
