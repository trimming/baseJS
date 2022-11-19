'use strict';
let game = {
    /**
     * Запускает игру.
     */
    run() {
        while (true) {
            const direction = mover.getDirection();
        }
    },
    //Этот метод выполняется при открытии страницы.
    init() {
        console.log("Ваше положение на поле в виде о.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.")
    }
};

game.init();