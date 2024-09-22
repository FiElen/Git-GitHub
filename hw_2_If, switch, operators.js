
/* ----------------------------------------------------Task 1-------------------------------------------------------
  - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше*/

'use strict';

// 1 вариант - If/else
const salary = 1000;
let grade;
 if (salary >= 1000) {
    grade = 'middle';
 } else {
    grade = 'junior';
 }
console.log('grade = ' +grade);

// 2 вариант - ternary
const salary = 1000;
let grade = (salary < 1000) ? 'junior' :'middle';
console.log ('grade = '+grade);

// 2 вариант - switch
const salary = 1000;
let grade;
switch (salary<1000){
    case true:
        grade = 'junior';
        break;
    default:
        grade = 'middle';   
}
console.log ('grade = '+grade);
/* ----------------------------------------------------Task 2-------------------------------------------------------
Работа с оператором IF:

  1. Создать переменную "minAge" и присвоить ей значение 18
  2. Создать переменную "maxAge" и присвоить ей значение 60
  3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
  4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
  4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
    - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
    - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
    - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
    - Иначе выводите "Technical work".
  5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61*/

  const minAge = 18;
  const maxAge = 60;
  let age=10;
  if (typeof age !== "number") {
    console.log ("Incorrect data type");
  } else if (age< minAge){
    console.log ("You don't have access cause your age is " + age + " It's less then " );
  } else if (age>= minAge && age<maxAge){
    console.log ("Welcome  !");
  } else if (age>maxAge){
    console.log ("Keep calm and look Culture channel");
  } else {
    console.log ("Technical work");
  }


/* ----------------------------------------------------Task 3*-------------------------------------------------------
 Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number*/
 const minAge = 18;
 const maxAge = 60;
 let age="10a";
 if ( age != Number(age)) {
    console.log ("Incorrect data type");
 } else if (age< minAge){
   console.log ("You don't have access cause your age is " + age + " It's less then " );
 } else if (age>= minAge && age<maxAge){
   console.log ("Welcome  !");
 } else if (age>maxAge){
   console.log ("Keep calm and look Culture channel");
 } else {
   console.log ("Technical work");
 }