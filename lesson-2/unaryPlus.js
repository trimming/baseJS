"use strict";
//пример 1
/*Префиксная форма унарного выражения
 1.К переменной а прибавляем 1 получаем 2.
 2.2 присваеваем в переменную с.
 3.С помощью alert выводим сообщение на экран.*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2
/*Постфиксная форма унарного выражения
 1.Сохраняем в переменную d значение 1.
 2.Прибавляем к b еденицу получаем 2.
 3.С помощью alert выводим сообщение на экран. */
d = b++;
alert(d); //ответ: 1

//пример 3
/*1.Увеличиваем значение переменной а на 1 получаем 3.
  2.2 прибавляем к 3 получаем 5.
  3.Присваеваем переменной с значение 5.
  4.С помощью alert выводим сообщение на экран. */
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4
/*1.2 прибавляем к 2 получаем 4.
  2.Присваеваем переменной d значение 4.
  3.К переменной b прибавляем 1 получаем 3.
  4.С помощью alert выводим сообщение на экран.  
 */
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

