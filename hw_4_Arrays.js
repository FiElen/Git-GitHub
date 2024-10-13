"use strict";
/* ----------------------------------------------------Task 1.1-------------------------------------------------------
1. Цикл for..of в массиве
  - Создайте массив [1,2,3,4,5,6,7,8,9,10]
  - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
    если элемент четный - возведет его в квадрат
    если элемент нечетный - возведет его в 3ю степень
*/

const arrayNumbers = [1,2,3,4,5,6,7,8,9,10];
for (let n of arrayNumbers){  
  if (n %2===0){
    n= n**2;
  }else{
    n= n**3;
  }
  console.log(n);
}

/* ----------------------------------------------------Task 1.2-------------------------------------------------------
2. Методы массивов
  - Создайте массив [1,2,3,4,5]
  - Добавьте в конец массива число 6 соответствующим методом
  - Добавьте в начало массива число 0 соответствующим методом
  - Удалите элемент с индексом 2 из массива соответствующим методом
  - Удалите последний элемент из массива соответствующим методом
  В результате вы должны получить [0, 1, 3, 4, 5]
*/

const arrayNumbers=[1,2,3,4,5];
arrayNumbers.push (6);
arrayNumbers.unshift (0);
arrayNumbers.splice(2,1);
arrayNumbers.pop();
console.log(arrayNumbers);

/* ----------------------------------------------------Task 1.3-------------------------------------------------------  
3. Деструктуризация массивов
  - Создайте массив из 5 любых чисел (придумать числа самим)
  - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
  - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
*/

const arrNumber=[23,4,7,11,28];
const [first,second,...rest]=arrNumber;
console.log (`first === ${first}; second === ${second}; rest === ${rest}`);

/* ----------------------------------------------------Task 1.4-------------------------------------------------------  
4. Конкатенация массивов
  - Создайте массив с числами [1,2,3,4,5]
  - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
  - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
  - Используйте спред оператор
*/
const arrNumber1 = [1,2,3,4,5];
const arrNumber2 = [6, 7, 8, 9, 10];
const mergedArray = [...arrNumber1,...arrNumber2];
console.log (...mergedArray);

/* ----------------------------------------------------Task 2-------------------------------------------------------
1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let myPizzas = ['carbonara','pePeroni', 'caprichosa', 'diablo', '4 cheeses', 'Hawai','salami','kids'];
const competitorPizzasNew=competitorPizzas.map(competitorPizzas=>competitorPizzas.toLowerCase());
const myPizzasNew=myPizzas.map(myPizzas=>myPizzas.toLowerCase());
  if (myPizzas=myPizzasNew.filter(i=> !competitorPizzasNew.includes(i))){
    console.log(...myPizzas);
  }else{
  console.log(null);
} // метод массивов

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['carbonara','pePeroni', 'caprichosa', 'diablo', '4 cheeses', 'Hawai','salami','kids'];
const competitorPizzasNew=competitorPizzas.map(competitorPizzas=>competitorPizzas.toLowerCase());
const myPizzasNew=myPizzas.map(myPizzas=>myPizzas.toLowerCase());
let countResult = 0;
for (let result of myPizzasNew){
  if (!competitorPizzasNew.includes(result)){
    console.log (result);
    countResult++;
  }
  if (countResult===0){
    console.log(null);
    break;
  }
} // через цикл




/* ----------------------------------------------------Task 3*-------------------------------------------------------
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться
*/

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
let arrNew = [...new Set(arrNumber)];
console.log(...arrNew); 
