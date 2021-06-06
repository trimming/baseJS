"use strict";
// Первое задание
let Tc = 15;
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

// Второе задание
let admin = null;
let name = "Василий";
admin = name;
console.log(admin);

// Третье задание
/*
1.Складываем 10 и 10 получаем 20;
2.Конкатенация числа 20 и строки "10" получаем строку "2010";
3."2010" присваиваем в переменную exampleFirst;
4.С помощью console.log выводим exampleFirst в консоль.*/
let exampleFirst = 10 + 10 + "10";
console.log(exampleFirst);
/*
1.Конкатенация числа 10 и строки "10" получаем строку "1010";
2.Конкатенация строки "1010" и числа 10 получаем строку "101010";
3."101010" присваиваем в переменную exampleSecond;
4.С помощью console.log выводим exampleSecond в консоль.*/
let exampleSecond = 10 + "10" + 10;
console.log(exampleSecond);
/*
1.Складываем 10 и 10 получаем 20;
2.Складываем 20 и число 10 полученное приведением строки "10" при помощи унарного плюса получаем 30;
3.30 присваиваем в переменную exampleThird;
4.С помощью console.log выводим exampleThird в консоль.*/
let exampleThird = 10 + 10 + +"10";
console.log(exampleThird);
/*
1.Делим 10 на пустую строку получаем infinity;
2.Унарный минус дает отрицательное значение получаем -infinity;
3.-infinity присваиваем в переменную exampleFourth;
4.С помощью console.log выводим exampleFourth в консоль.*/
let exampleFourth = 10 / -"";
console.log(exampleFourth);
/*
1.Делим 10 на строку "2,5" с унарным плюсом получаем NaN, т.к. 2,5 это не число из-за запятой;
2.Nan присваиваем в переменную exampleFifth;
3.С помощью console.log выводим exampleFifth в консоль.*/
let exampleFifth = 10 / +"2,5";
console.log(exampleFifth);



