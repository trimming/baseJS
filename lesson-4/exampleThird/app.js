'use strict';
let game = {
    run() {
        let getAnswers = quiz.answerTheQuestions();
        let insertEnd = "";
        switch (getAnswers) {
            case 0:
            case 5:
                insertEnd = "вопросов";
                break;
            case 1:
                insertEnd = "вопрос";
                break;
            case 2:
            case 3:
            case 4:
                insertEnd = "вопроса";
                break;
        }
        console.log(`Вы ответили правильно на ${getAnswers} ${insertEnd}.`);
    },
    init() {
        console.log("Добро пожаловать в игру 'Кто хочет стать миллионером?'");
        let startGame = start.getStartGame();
        if (startGame === null) {
            console.log("Игра окончена.");
            return;
        }
        game.run();
    }

};
game.init();