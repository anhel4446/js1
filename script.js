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




do {
    var num = +prompt('Ведите числоd')
} while (isNaN(num) || num != 5){
    let num2 = +prompt('ведите степень ') 
    alert(num ** num2)
    
}

alert('начинаем 2 задание') 
let numSteps = +(prompt('Введите количество ступеней:'));
let stepChar = prompt('Введите вид ступеней:');
let finalChar = prompt('Введите конечный символ ступеней:');

for (let i = 1; i <= numSteps; i++) {
    let steps = stepChar.repeat(i) + finalChar;
    console.log(steps);
}

alert('начинаем 3 задание') 

let number = +(prompt('Введите целое число:'));

if (!isNaN(number)) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    alert(`Факториал числа ${number} равен ${factorial}`);
} else {
    console.log('Введите корректное целое число.');
}

    

    
