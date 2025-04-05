"use strict";

// //1
let a = +prompt('введите a');
let b = +prompt('введите b');
let start = (a < b) ? a : b;
let end = (a < b) ? b : a;
for (let i = start; i <= end; i++) {
    (i % 2 == 0) ? alert(i) : '';
}

// //2
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// //3
while (true) {
    let a = +prompt('введите число, большее 10');
    if (a > 10 || !a) break;
}

// 4
let c = +prompt('введите a');
let d = +prompt('введите b');
function min(c, d) { (c < d) ? alert(c) : alert(d) };
min(c, d);


// //5
let ask = (question, yes, no) => { (confirm(question)) ? yes() : no(); }
ask('Вы согласны?',
    () => alert('вы согласились'),
    () => alert('вы отменили выполнение'));

//6
let age = +prompt('введите возраст', '18');
let checkAge = (age > 18) ? true : confirm('родители разрешили?');