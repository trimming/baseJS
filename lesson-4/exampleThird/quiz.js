'use strict';
let quiz = {
    answerTheQuestions() {
        let count = 0;
        questions.forEach(function (element) {
            let userAnswer = prompt(element.question);
            if (userAnswer === element.answer) {
                count++;
            }
        });
        return count;
    }
};