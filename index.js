
// Kahoot
// function sayHello () {
//   console.log('Hello');
// }
// sayHello();

// const test = {
//   '#125_part_II': 'Hello',
//   '2catch': 5,
//   sayHelloKey: sayHello
// }
// test.sayHelloKey();
// console.log(test);

// const numbers = [1, 2, 3];

// const userA = {
//   username: 'Mango',
//   age: 20
// };
// const userB = userA;
// userB.age = 30;
// console.log(userA.age, userB.age);

// ****************Об'єкт**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
// }
// console.log(user);


// ****************Звернення до властивостей об'єкта**************** \\

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'skills';

// console.log(user[objectKey]);
// console.log(user['name']);


// ****************Зміна значення властивості**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     '2key': 10
// }

// // console.table(user);

// user.name = 'Liza';
// user.city = 'Lviv';
// user['age'] = 28;
// console.table(user);


// user.city = 'Odessa';
// user['age'] = 38;
// console.table(user);

// user['2key'] = 5;
// console.log(user);



// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// Object.freeze(user);
// user.name = 'Kate';
// user.city = 'Lviv';
// console.table(user);


// user.skills.css = false;
// console.table(user);




// ****************Методи об'єкта**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     sayHello(city, country) {
//         console.log(city, country);
//         // console.log(`Hello my name ${this.name}`); // user.name
//     },
//     sayGoodbye: function () {
//       console.log('Goodbye')
//     }
// }
// user.sayHello('Lviv', 'Ukraine');
// user.sayGoodbye();




// ****************Цикл for...in**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     }
// }

// for (const test in user) {
//   console.log(test);
//     console.log(user[test]);
  
// }




// ****************Метод Object.keys()**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     isAdmin: true
// }

// const keys = Object.keys(user);
// for (const key of keys) {
//     // console.log(key, user[key]);
// }
// // console.log(keys);

// const userSkills = Object.keys(user.skills);
// console.log(userSkills)





// ****************Метод Object.values()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// // const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);




// ****************Метод Object.entries()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false,
//         js: true
//     },
//     isAdmin: true,
//     hobbies: ['running', 'coding', 'tennis']
// }


// const entries = Object.entries(user);
// // const entries = Object.entries(user.skills);
// console.log(entries);



// Короткий синтаксис ключів

// const name = 'Alex';
// const age = 25;

// const user = { name, age };
// // const user = {
// //   name: name,
// //   age: age
// // }
// console.log(user);

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.


// function createBasket(product, quantity, price) {
//   const result = {
//     name: product,
//     totalPrice: price * quantity,
//     quantity, // === quantity: quantity
//     price // === price: price
//   };

//   const keys = Object.keys(result);
//   console.log(keys)

//   return result;
// }

// console.log(keys);
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('apple', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// }

// function getTime(users) {
//   let players = 0;
//   let totalTime = 0;

//   for (const userName in users) {
//     players += 1;
//     console.log(users[userName])
//     totalTime += users[userName];
//   }

//     return `Count of players ${players}, average time ${totalTime / players}`;
// }

// console.log(getTime(players));


// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат string) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },
// ]


// function getUsers(arr, bookName) {

// }
// console.log(getUsers(friends, "Harry Potter"));


// function getTotalAge(arr) {
  
// }
// console.log(getTotalAge(friends));

// function sayHello () {
//   console.log('Hello');
// }

// const sayGoodbye = function () {
//   console.log('Goodbye')
// }

// const sayHelloCopy = sayHello;

// const user = {
//   name: 'Alex',
//   sayHello
// }

// user.sayHello()