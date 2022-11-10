"use strict";
/**
 * Функция выводит на экран сообщение с суммой депозита пользователя, слово рубль склоняется в зависимости от указанного числа.
 * @param {String} userDeposit сумма депозита 
 */
function getUserDeposit(userDeposit) {
    let lastSymbol = userDeposit.charAt(userDeposit.length - 1);
    switch (lastSymbol) {
        case "1":
            alert(`Ваша сумма в ${userDeposit} рубль зачислена`);
            break;
        case "2":
        case "3":
        case "4":
            alert(`Ваша сумма в ${userDeposit} рубля зачислена`);
            break;
        default:
            alert(`Ваша сумма в ${userDeposit} рублей зачислена`);
            break;
    }
}
getUserDeposit(prompt("Введите сумму депозита."));