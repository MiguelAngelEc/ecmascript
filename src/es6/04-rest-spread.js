// arrays destructuring

let frutas = ['manzana', 'banana'];
let [a, b] = frutas;
console.log(a, b); // Output: manzana banana
console.log(a, frutas[1]); // Output: manzana banana

// Object destructuring
let user = { username: 'Oscar', age: 34 };
let { username, age } = user;
console.log(username, user.age); // Output: Oscar 34

// Spread operator
let person = { name: 'Oscar', age: 34 };
let country = 'MX';
let data = { id: 1, ...person, country };
console.log(data); // Output: { id: 1, name: 'Oscar', age: 34, country: 'MX' }
