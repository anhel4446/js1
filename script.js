// var str = prompt('Wht is your name?')
// var str2 = prompt('How old are you?')
// var str3 = prompt('Example 1: 6 + 9 = ?')
// var str4 = prompt('Example 2: 20 - 9 = ?')
// var str5 = prompt('Example 3: 2 * 2 = ?')
// var str6 = prompt('Example 3: 2 / 2 = ?')
// var str7 = prompt('Example 3: 10 % 1 = ?')

// let message = "Are you ready to new task?";
// alert (message);

// var str8 = +prompt('Input First number :')
// var str9 = +prompt('Input Second number :')
// var str10 = +prompt('Input Third number :')

// let message2 = ('The average between the three numbers is ' + (str8 + str9 + str10) / 3 );
// alert(message2);

// console.log('My name is ' + str);
// console.log('I am ' + str2);
// console.log('Example 1: 6 + 9 = 15 Your answer ' + str3);
// console.log('Example 2: 20 - 9 = 11 Your answer ' + str4);
// console.log('Example 3: 2 * 2 = 5 Your answer ' + str5);
// console.log('Example 4: 2 / 2 = 1 Your answer ' + str6);
// console.log('Example 5: 10 % 3 = 1 Your answer ' + str7);
// console.log('The average between numbers ' + str8 + ', ' + str9 + ', ' + str10 + ', ' +  ' is ' +  (str8 + str9 + str10) / 3);

// var old = +prompt('How old are you')
// if (old <= 18) {
//     alert('still young');

// } else if (old > 18 && old < 50){
//     alert('need work');
// }
// else if (old > 50 && old < 60 ){
//     alert('soon a rest');
// }

// else if (old > 60 && old < 100 ){
//     alert('go fishing');
// }

// else {
//     alert('Error')
// }

// let message = 'Second HW'
// alert(message)

// var ocl = +prompt('WHT time is it now')

// if (ocl > 0 && ocl <= 5) {
//     alert(ocl + " night")
// } else if (ocl > 5 && ocl <= 11) {
//     alert(ocl + " morning")
// } else if (ocl > 11 && ocl <= 16) {
//     alert(ocl + " day")
// } else if (ocl > 16 && ocl <= 23) {
//     alert(ocl + " evening")
// } else {
//     alert('Error')
// }

// let message2 = 'Third HW'
// alert(message2)

// var nmr1 = +prompt('inpur first number')
// var nmr2 = +prompt('inpur second number')
// var nmr3 = +prompt('inpur third number')

// if (nmr1 < nmr2 && nmr1 > nmr3 ) {
//     alert('Среднее из трех чисел ' + nmr1)
// } else if ( nmr1 > nmr2 && nmr1 < nmr3 ) {
//     alert('Среднее из трех чисел ' + nmr1)
// }

// if (nmr2 < nmr1 && nmr2 > nmr3 ) {
//     alert('Среднее из трех чисел ' + nmr2)
// } else if ( nmr2 > nmr1 && nmr2 < nmr3 ) {
//     alert('Среднее из трех чисел ' + nmr2)
// }

// if (nmr3 < nmr1 && nmr3 > nmr2 ) {
//     alert('Среднее из трех чисел ' + nmr3)
// } else if ( nmr3 > nmr1 && nmr3 < nmr2 ) {
//     alert('Среднее из трех чисел ' + nmr3)
// }

// var name = prompt ('ведите имя')
// var old = prompt ('сколько вам лет')

// alert (name + old + ' !')

// var a = prompt ('ширина')
// var b = prompt ('Высота')
// let result = multiply(a, b);

// alert('плогаль равно ' + a * b );

// do {
//     var num = +prompt('Ведите числоd')
// } while (isNaN(num) || num != 5){
//     let num2 = +prompt('ведите степень ')
//     alert(num ** num2)

// }

// alert('начинаем 2 задание')
// let numSteps = +(prompt('Введите количество ступеней:'));
// let stepChar = prompt('Введите вид ступеней:');
// let finalChar = prompt('Введите конечный символ ступеней:');

// for (let i = 1; i <= numSteps; i++) {
//     let steps = stepChar.repeat(i) + finalChar;
//     console.log(steps);
// }

// alert('начинаем 3 задание')

// let number = +(prompt('Введите целое число:'));

// if (!isNaN(number)) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     alert(`Факториал числа ${number} равен ${factorial}`);
// } else {
//     console.log('Введите корректное целое число.');
// }

// function rand(min, max){
//     let num = Math.floor(Math.random() * (max + 1 - min) + min)
//     return num
// }

// console.log(rand(1, 99));

// function rand(num1, num2) {
//   var num1 = +prompt("Введите мин число:");

//   var num2 = +prompt("Введите макс число:");

//   var num3 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var num4 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var num7 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var num8 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var rnd = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var rnd2 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var rnd1 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var rnd3 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var rnd4 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var rnd5 = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

//   var num5 = +prompt("1 пример " + num3 + "+" + num4 + "= " + "?");
//   var num6 = num3 + num4;
//   if (num5 == num6) {
//     alert("Верно");
//   } else {
//     alert("не верно " + num3 + "+" + num4 + "= " + (num3 + num4));
//   }

//   var num9 = +prompt("2 пример " + num7 + "+" + num8 + "= " + "?");
//   var num10 = num7 + num8;
//   if (num9 == num10) {
//     alert("Верно");
//   } else {
//     alert("не верно " + num7 + "+" + num8 + "= " + (num7 + num8));
//   }

//   var answ = +prompt("3 пример " + rnd + "+" + rnd2 + "= " + "?");
//   var cpr = rnd + rnd2;
//   if (answ == cpr) {
//     alert("Верно");
//   } else {
//     alert("не верно " + rnd + "+" + rnd2 + "= " + (rnd + rnd2));
//   }

//   var answ1 = +prompt("4 пример " + rnd1 + "+" + rnd3 + "= " + "?");
//   var cpr1 = rnd1 + rnd3;
//   if (answ1 == cpr1) {
//     alert("Верно");
//   } else {
//     alert("не верно" + rnd1 + "+" + rnd3 + "= " + (rnd1 + rnd3));
//   }

//   var answ2 = +prompt("5 пример " + rnd4 + "+" + rnd5 + "= " + "?");
//   var cpr2 = rnd4 + rnd5;
//   if (answ2 == cpr2) {
//     alert("Верно");
//   } else {
//     alert("не верно" + rnd4 + "+" + rnd5 + "= " + (rnd4 + rnd5));
//   }

//   // return num3 + num4 + num7 + num8
//   // ;
// }

// 1 задание

console.log(rand());

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let min = +prompt('Минимальное число:');
let max = +prompt('Максимальное число:');

for (let i = 1; i <= 5; i++) {
  let s1 = rand(min, max);
  let s2 = rand(min, max);

  // Случайно выбираем операцию: 0 - сложение, 1 - вычитание, 2 - умножение, 3 - деление
  let operation = rand(0, 3);

  let s3, operator;

  switch (operation) {
    case 0:
      s3 = s1 + s2;
      operator = '+';
      break;
    case 1:
      s3 = s1 - s2;
      operator = '-';
      break;
    case 2:
      s3 = s1 * s2;
      operator = '*';
      break;
    case 3:
      s3 = s1 / s2;
      operator = '/';
      break;
  }

  let userAnswer = +prompt(`Решите пример: ${s1} ${operator} ${s2} =`);

  let answerMessage = (Math.abs(s3 - userAnswer) < 0.0001) ? 'Молодец!' : 'Ошибка!';

  alert(`${s1} ${operator} ${s2} = ${s3}\nВаш ответ: ${userAnswer}\nВерный ответ: ${s3}\n${answerMessage}`);
}

// 2 задание
let users = {};

for (let i = 1; i <= 10; i++) {
  let id = i;
  let userName = prompt("Your name?");
  let userAge = prompt("How old are you?");

  const user = {
    User: 'User ' + id,
    Name: 'Name ' + userName,
    Age: 'Age ' + userAge,
  };

  users[id] = user;
}

for (const userId in users) {
  const user = users[userId];
  for (const key in user) {
    console.log(user[key]);
  }
  console.log('\n');
}

let recepts = receipt();

recepts.delivery = {
  price: 9000,
};

// for (const key in recepts) {
//   console.log(`${key} ${recepts[key].price}`);
// }

// for (const key in recepts) {
//   for (const key2 in recepts[key]) {
//     console.log(`вы заказали ${key} ${recepts[key][key2]}`);
//   }
// }

//3 задание 

function calculateTotalOrder(order) {
  let total = 0;

  // Вывод списка заказа
  console.log('Список заказа:');
  for (const key in order) {
    const item = order[key];
    console.log(`${key}: ${item.info} - ${item.price} сум`);
    total += item.price;
  }

  // Добавление стоимости доставки (9000 сум)
  total += 9000;

  // Вывод общей стоимости
  console.log(`Общая стоимость с доставкой: ${total} сум`);
}

// Получаем случайный заказ
const randomOrder = receipt();

// Вызываем функцию для расчета и вывода информации о заказе
calculateTotalOrder(randomOrder);