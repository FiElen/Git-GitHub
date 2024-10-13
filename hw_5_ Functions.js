"use strict";
/* ----------------------------------------------------Task 1.1-------------------------------------------------------
1. 1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays (firstArr,...restArr){
console.log (firstArr,...restArr);
}
mergeArrays (...[1,2],...[3,6],...[3,4,5]);

/* ----------------------------------------------------Task 1.2-------------------------------------------------------
2.  Devide by _
  - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
  - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
  - Пример: I am super engineer => i_Am_Super_Engineer 
*/

____________________________________________________________________________________________
const text = 'I will be able to make friends whith js';
function convertText (){
  // text='qwe';
  let textNew = '111'+text;
   console.log (textNew);
}
convertText();
console.log (text);   //-  тренировка лок/внешних переменных
_____________________________________________________________________________________________
function convertText(text){
  console.log (text);
}
convertText('i Will be able to make friends whith js'); //- аргумент по умолчанию
_____________________________________________________________________________________________

function changeLetter (text) {
const textArr = text.split(' ');
let result = textArr[0].toLowerCase();
  for (let i=1;i<textArr.length; i++){
      result += '_'+ textArr[i][0].toUpperCase()+textArr[i].slice(1).toLowerCase();
    } 
   return result;
}
console.log(changeLetter('I am super engineer'));


/* ----------------------------------------------------Task 1.3-------------------------------------------------------  

3. Фибаначчи
  - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
  - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а 
  каждое последующее за ними число является суммой двух предыдущих
  - Например fibanacci(8) //21
*/

function fibanacci(n){
let x=1;
let y=0;
let z=x+y;
if (n===0){
  return z=0;
} 
 for (let i=0; i<n-2;i++) {
    y=x;
    x=z;
    z=x+y;
}
return z;
}
console.log (fibanacci(8));


/* ----------------------------------------------------Task 2-------------------------------------------------------
1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/
function palindrome (word){
  const wordCamelCase = word.toLowerCase();
  for (let i=0; i<word.length;i++) {
    if (wordCamelCase[i]!==wordCamelCase.at(-i-1)) {
      return ` Слово ${word} - НЕ является палиндромом!`;
    } 
    }
    return ` Слово  ${word} - является палиндромом!`;
  }
  console.log (palindrome('Топоот'));


/*
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
    и возвращает слово с наибольшим количеством букв. 
    Если таких слов несколько - возвращает их все.*/

function maxLengthInText (text){
  const maxLengthInTextArr = text.split(' ');
  let maxWord = maxLengthInTextArr[0];
  let result = [];
    for (let i=0; i<maxLengthInTextArr.length;i++ ){
    if (maxLengthInTextArr[i].length>maxWord.length){
      maxWord=maxLengthInTextArr[i];
      result = [maxLengthInTextArr[i]];
      }else if (maxLengthInTextArr[i].length==maxWord.length){
        result.push(maxLengthInTextArr[i])
      }
      }
  return `Cлово с наибольшим количеством букв: ${result.join(',')}`;
}
console.log (maxLengthInText('Если таких слов несколько - возвращает их все, примеррррр'));

/* ----------------------------------------------------Task 3*-------------------------------------------------------
Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
*/
function summOfNumber (n){
  const summOfNumberArr =n.toString();
  let result = 0;
  for (let i=0; i<summOfNumberArr.length;i++){
    result += parseInt(summOfNumberArr[i]);
  }
  return (result<=9) ? result :(summOfNumber(result));
}
console.log (summOfNumber(19));
