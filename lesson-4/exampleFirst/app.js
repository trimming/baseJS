'use strict';

function ConvertedNumber(units, tens, hundereds) {
    this.units = units;
    this.tens = tens;
    this.hundereds = hundereds;
}
ConvertedNumber.prototype.getNumber = function (number) {
    if (Number.isInteger(number) && number >= 100 && number < 999) {
        this.units = number % 10;
        this.tens = Math.floor(number / 10) % 10;
        this.hundereds = Math.floor(number / 100);
    } else if (Number.isInteger(number) && number < 100) {
        this.units = number % 10;
        this.tens = Math.floor(number / 10);
        this.hundereds = 0;
    } else if (!Number.isInteger(number)) {
        this.units = undefined;
        this.tens = undefined;
        this.hundereds = undefined;
        console.log("Введите целое число от 0 до 999.");
    } else {
        this.units = undefined;
        this.tens = undefined;
        this.hundereds = undefined;
        console.log("Введите целое число от 0 до 999.");
    }
};


let userNumber = new ConvertedNumber();
userNumber.getNumber(parseInt(prompt("Введите целое число от 0 до 999.")));
console.log(userNumber);
