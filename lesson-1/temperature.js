'use strict';
// Первое задание
let Tc = 30;
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

// Второе задание
let admin;
let name = "Василий";
admin = name;
console.log(admin);

// Третье задание
/*1.К 10 прибавляем 10 получаем 20.
  2.20 не явно преводится в строку "20".
  3."20" соединяется с "10", происходит конкатенация получаем "2010".
  4."2010" присваиваем в переменную result1.
  5.С помощью console.log() выводим result1 в консоль.
*/
let result1 = 10 + 10 + "10";
console.log(result1);
/*1.10 не явно приводится в строку "10", происходит конкатенация и получаем "1010".
  2.10 не явно приводится в строку "10", происходит конкатенация и получаем "101010".
  3."101010" присваиваем в переменную result2.
  4.С помощью console.log() выводим result2 в консоль. */
let result2 = 10 + "10" + 10;
console.log(result2);
/*1.К 10 прибавляем 10 получаем 20.
  2.Строка "10" преводим в число 10.
  3.Складываем 20 и 10 получаем 30.
  4.30 присваиваем в переменную result3.
  5.С помощью console.log() выводим result3 в консоль. */
let result3 = 10 + 10 + + "10";
console.log(result3);
/*1.-"" преводится в -0.
  2.10 делим на -0 получаем -Infinity.
  3.-Infinity присваиваем в переменную result4.
  4.С помощью console.log() выводим result4 в консоль.*/
let result4 = 10 / -"";
console.log(result4);
/*1.Строка "2,5" преводится в NaN.
  2.10 делим на NaN получаем NaN.
  3.NaN присваиваем в переменную result5.
  4.С помощью console.log() выводим result5 в консоль.*/
let result5 = 10 / +"2,5";
console.log(result5);
