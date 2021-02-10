'use strict';

const img = document.querySelector('.img');
const logs = document.querySelector('.js-logs');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const restNumber = document.querySelector('.js-restNumber');
const tries = document.querySelector('.js-tries');
const reset = document.querySelector('.reset');

// 0 ~ 9의 숫자
const numbers = Array(9).fill().map((v, i) => i);

const answer = [];
let count = 0;

for (let i = 0; i < 4; i += 1) {
    const randomNumbers = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    answer.push(randomNumbers);
}
console.log(answer); // 힌트

function isGameReset() {
    logs.textContent = '';
    tries.textContent = '';
    restNumber.textContent = '';
    reset.textContent = '';
    input.value = '';
    input.focus();
    count = 0;
}

function isInputReset() {
    input.value = '';
    input.focus();
}

function createListes(strike, ball) {
    const li = document.createElement('li');
    li.textContent = `Strike: ${strike} Ball: ${ball}`;
    tries.append(li);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputNumber = input.value;
    const answerNumber = answer.join('');

    if (inputNumber === answerNumber) {
        logs.textContent = '홈런🎉';
        reset.textContent = '(재시작 버튼: F5)';
        isInputReset();

    } else {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < 4; i += 1) {
            if (inputNumber[i] === answerNumber[i]) {
                strike += 1;
                isInputReset();
            } else if (answerNumber.includes(inputNumber[i], 1)) {
                ball += 1;
                isInputReset();
            }
        }
        restNumber.textContent = `10회 제한: ${count}`;
        createListes(strike, ball);
    }

    if (count >= 10) {
        img.classList.add('none');
        logs.textContent = `Game Over Answer: ${answer.join(', ')}`
        reset.textContent = '(재시작 버튼: F5)';

    } else {
        count++;
    }
});