# 숫자야구 게임

## 언어

Vanilla Js

## 응용

제로초님 웹 게임 강의 학습한 후 복습하기 위해 조금 더 응용해서<br>
10회 카운터 횟수 추가<br>
기존 API 변형

Previous

```
for (const [aIndex, aNumber] of answer.entries()) {
                console.log(answer.entries());
                for (const [iIndex, iString] of input.value.split('').entries()) {
                    if (aNumber === Number(iString)) {
                        if (aIndex === iIndex) {
                            strike++;
                        } else {
                            ball++;
                        }
                    }
                }
            }
```

Current

```
 for (let i = 0; i < 4; i += 1) {
            if (inputNumber[i] === answerNumber[i]) {
                strike += 1;
                isInputReset();
            } else if (answerNumber.includes(inputNumber[i], 1)) {
                ball += 1;
                isInputReset();
            }
        }
```

## 주요 기능

- 숫자 0 ~ 9 랜덤하게 4자리 생성

```
// 0 ~ 9의 숫자
const numbers = Array(9).fill().map((v, i) => i);

const answer = [];
let count = 0;

for (let i = 0; i < 4; i += 1) {
    const randomNumbers = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    answer.push(randomNumbers);
}
```

- Array.prototype.join : 배열 -> 구분자로 연결한 문자열 반환

- Array.prototype.includes : 배열 내에 특정 요소 확인하여 불린형 반환

## Images

![.](/image/numberBaseball.png)

![.](/image/numberBaseballHomerun.png)
