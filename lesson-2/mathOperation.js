"use strict";
/**
 * Функция складывает два числа и возвращает их сумму.
 * @param {Number} num1 первое число
 * @param {Number} num2 второе число
 * @returns {Number} сумма двух чисел
 */
function sum(num1, num2) {
    return num1 + num2;
}
//console.log(sum(10, 20));

/**
 * Функция вычетает из первого числа второе и возвращает их разность.
 * @param {Number} num1 первое число
 * @param {Number} num2 второе число
 * @returns {Number} разность двух чисел
 */
function sub(num1, num2) {
    return num1 - num2;
}
//console.log(sub(6, 4));

/**
 * Функция делит первое число на второе и возвращает их частное.
 * @param {Nuber} num1 первое число
 * @param {Number} num2 второе число
 * @returns {Number} частное двух чисел
 */
function div(num1, num2) {
    return num1 / num2;
}
//console.log(div(3, 55));

/**
 * Функция умножает два числа и возвращает их произведение
 * @param {Number} num1 первое число
 * @param {Number} num2 второе число
 * @returns {Number} произведение двух чисел
 */
function mult(num1, num2) {
    return num1 * num2;
}
//console.log(mult(5, 10));

/**
 * Функция выполняет арифметическую операцию двух чисел заданную третьим параметром.
 * @param {Number} arg1 первое число 
 * @param {Number} arg2 второе число
 * @param {function} operation арифметическая операция
 * @returns {Number} итог выполнения арифметической операции 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1, arg2);
        case sub:
            return sub(arg1, arg2);
        case div:
            return div(arg1, arg2);
        case mult:
            return mult(arg1, arg2);
    }
}
console.log(mathOperation(40, 150, sum));