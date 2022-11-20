'use strict';
let renderer = {
    //Сюда запишем все, что надо отобразить. 
    map: "",

    /**
     * Отображает игру в консоли.
     */
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.x === col && player.y === row) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },
    clear() {
        //Чистимконсоль.
        console.log();
        //Чистим карту
        this.map = "";
    }
};