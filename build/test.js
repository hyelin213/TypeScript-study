"use strict";
// 1. 숫자형(number)
// JS로 먼저 진행 (동적 타입핑)
// TS로 진행 (정적 타입핑)
// TS는 데이터의 타입 추론해서 처리
var age = 50;
// 점수는 숫자로 개발자가 세팅했다.
var point = 80;
console.log(typeof age);
console.log(typeof point);
// 코드가 실행 중에 숫자가 아닌 문자로 변경
// 개발자가 검증을 해야 한다.
// 숫자가 아닌 경우에 대해서 처리가 필요.
point = 75;
console.log(typeof point);
// 2. 문자타입(string)
var myName = "홍길동";
var hi = "\uC548\uB155\uD558\uC138\uC694. ".concat(myName);
console.log(hi);
//# sourceMappingURL=test.js.map