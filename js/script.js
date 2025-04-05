"use strict";

// while(условие){
//     тело цикла;
// }

let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// whille(i < 10){
//     i += 2;
//     console.log(i);
// }

// do{
//     тело цикла
// }while(условие)

// do {
//     console.log(i);
//     i++;
// } while (i < 3)

// do {
//     console.log(i);
//     i++;
// } while (i < 0);

// for(начал.значение;условие;шаг){
//     тело цикла;
// }

// for (let i = 0; i <= 3; i++) {
//     console.log(i);
// }

// let sum = 0;
// while (true) {
//     let value = +prompt('введите число');
//     if (!value) break;
//     sum += value;
// } 
// console.log(sum);

// функции
showMessage('katya', 'kjhgjk');
function showMessage(from = 'user', text = 'текст не добавлен') {
    console.log(from + ': ' + text);
}
showMessage('lesha', 'jhgfd');
showMessage('lesha');
showMessage('');

// function sum(a, b) {
//     return a + b;
// }
// let result = sum(2, 9);
// alert(result);
// alert(sum(2, 2))

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('есть разрешение?');
//     }
// }

// let age = prompt('введите возраст', '18');
// if (checkAge(age)) {
//     alert('доступ получен');
// } else {
//     alert("Доступ закрыт");
// }

// function expression

// function sayHi(){
//     alert('hi');
// } 

// const sayHi=function(){
//     alert('hi');
// }
// sayHi();

// function calculator(sum, minus) {
//     sum();
//     minus();
// }
// calculator{
//     function() {
//         console.log(4 + 3);
//     },
//     function() {
//         console.log(4 - 3);
//     }
// }

// let func=(args)=> выражение;
// let sum = (a, b) => a + b;
// console.log(sum(2, 4));

let sum = (a, b) => { let result = a + b; return result; };
console.log(sum(2, 4));
