"use strict";
// console.log("hello world");

// ----------------------------------------------------Task 1-------------------------------------------------------
// 1. Создать переменную “item_1”
let firstVariable = 'item_1';

// 2. Присвоить переменной item_1 цифру 5.
firstVariable = 5;

// 3. Вывести в консоль item_1.
console.log('item_1 =' + ' ' + firstVariable);

// 4. Создать переменную “item_2”
let secondVariable = 'item_2';

// 5. Присвоить переменной item_2 цифру 3.
secondVariable = 3;

// 6. Вывести в консоль item_2.
console.log('item_2 =' + ' ' + secondVariable);

// 7. Создать переменную “item_3”
let thirdVariable = 'item_3';

// 8. Присвоить переменной item_3 сложение item_1 и item_2.
thirdVariable = firstVariable + secondVariable;

// 9. Вывести в консоль item_3.
console.log('item_3 =' + ' ' + thirdVariable);

// 10. Создать переменную “item_4”
let fourthVariable = 'item_4';

// 11. Присвоить переменной item_4 строку "Hello World"
fourthVariable = 'Hello World';

// 12. Вывести в консоль item_4.
console.log('item_4 =' + ' ' + fourthVariable);

// 13. Вывести в консоль сложение item_3 и item_4.
console.log('item_3 + item_4 =' + ' ' + thirdVariable + ' ' + fourthVariable);

// 14. Вывести в консоль умножение item_3 и item_4.
console.log('item_3 * item_4 =' + ' ' + thirdVariable * fourthVariable);

// 15. Создать переменную “item_5”
let fifthVariable = 'item_5';

// 16. Присвоить переменной item_5 переменную item_3
fifthVariable = thirdVariable;
console.log('item_5 =' + ' ' + fifthVariable);

// 17. Создать переменную item_6.
let sixthVariable = 'item_6';

// 18. Создать переменную item_6_type
let sixthTypeVariable = 'item_6_type';

// 19. Присвоить переменной item_6 значение 15
sixthVariable = 15;

// 20. Присвоить переменной item_6_type тип переменной item_6
sixthTypeVariable = typeof sixthVariable;

// 21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
console.log('item_6 == ' + sixthVariable + ',' + ' ' + 'item_6_type == ' + sixthTypeVariable);

// 22. Создать переменную item_7 и в ней преобразовать item_6 в String.
let seventhVariable = 'item_7';
seventhVariable = sixthVariable + '';

// 23. Создать переменную item_7_type
let seventhTypeVariable = 'item_7_type';

// 24. Присвоить переменной item_7_type тип переменной item_7
seventhTypeVariable = typeof seventhVariable;

// 25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——
console.log('item_7 == ' + seventhVariable + ',' + ' ' + 'item_7_type == ' + seventhTypeVariable);


// ----------------------------------------------------Task 2-------------------------------------------------------
// Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9),
// и выводит сумму равную n + nn + nnn, где n не перемножаются, а конкатенируются

const n = '3';

// 1 вариант
// const a = n+n;
// const b = n+n+n;
// const c = Number(n)+Number(a)+Number(b); 
// console.log ('n + nn + nnn = ' + c);

// 2 вариант
// const a = n+n;
// const b = n+n+n;
// const c = 1*n + 1*a +1*b                
// console.log ('n + nn + nnn = ' + c);

// 3 вариант
const a = Number(n)+ Number(n+n) + Number(n+n+n);
console.log ('n + nn + nnn = ' + a);