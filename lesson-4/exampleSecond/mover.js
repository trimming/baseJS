'use strict';
let mover = {
    /**
     * Получает и отдает напрвление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем. 
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },
    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x:int, y:int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                if (player.x == 0 || player.y == 9) {
                    nextPosition.x;
                    nextPosition.y;
                } else {
                    nextPosition.y++;
                    nextPosition.x--;
                }
                break;
            case 2:
                if (player.y == 9) {
                    nextPosition.y;
                } else {
                    nextPosition.y++;
                }
                break;
            case 3:
                if (player.x == 9 || player.y == 9) {
                    nextPosition.x;
                    nextPosition.y;
                } else {
                    nextPosition.y++;
                    nextPosition.x++;
                }
                break;
            case 4:
                if (player.x == 0) {
                    nextPosition.x;
                } else {
                    nextPosition.x--;
                }
                break;
            case 6:
                if (player.x == 9) {
                    nextPosition.x;
                } else {
                    nextPosition.x++;
                }
                break;
            case 7:
                if (player.x == 0 || player.y == 0) {
                    nextPosition.x;
                    nextPosition.y;
                } else {
                    nextPosition.y--;
                    nextPosition.x--;
                }
                break;
            case 8:
                if (player.y == 0) {
                    nextPosition.y;
                } else {
                    nextPosition.y--;
                }
                break;
            case 9:
                if (player.x == 9 || player.y == 0) {
                    nextPosition.x;
                    nextPosition.y;
                } else {
                    nextPosition.y--;
                    nextPosition.x++;
                }
                break;
        }
        return nextPosition;
    }
};