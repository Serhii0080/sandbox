// 🍕 Ваша задача — добавить новое свойство usersAnswerк каждому объекту в массиве questions. Значение свойства usersAnswer должно быть установлено равным null. Решение должно работать для массивов любой длины.

// ❗❗ Например:

var questions = [
    {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0,
    },
    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0,
    },
];

// ❗❗ После добавления свойства результат должен быть следующим:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];

// 🍕 Массив questions уже определен для вас и отличается от массива в примере.

for (let i = 0; i < questions.length; i++) {
    const usersAnswer = null;
    questions[i].usersAnswer = usersAnswer;
}

console.log(questions[0].usersAnswer === null);

console.log(questions);
