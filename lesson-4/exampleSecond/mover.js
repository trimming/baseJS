'use strict';
let mover = {
    /**
     * Получает и отдает напрвление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем. 
     */
    getDirection() {
        const availableDirections = [2, 4, 6, 8];
        while (true) {
            let direction = parseInt(prompt('Введите число (2, 4, 6 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.');
                continue;
            }
        }
    }
};