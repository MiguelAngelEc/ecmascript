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

// Rest operator
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
console.log(sum(1, 2, 3, 4)); // Output: [2, 3, 4] 3

function solution(json1 = { name: "Mr. Michi", food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) {
  let spread = { ...json1, ...json2 };
  return spread;
}
console.log(solution()); // Output: { name: 'Mr. Michi', food: 'Pescado', age: 12, color: 'Blanco' }