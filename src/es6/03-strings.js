let hello = 'Hello';
let world = 'World';
let greeting = hello + ' ' + world + '!'; // Concatenation
console.log(greeting); // Output: Hello World!

// Template literals
let greetingTemplate = `${hello} ${world}!`; // Template literal
console.log(greetingTemplate); // Output: Hello World!  

// Multiline string
let lorem = 'esto es un texto de ejemplo\n' +
    'esto es una segunda linea\n' +
    'esto es una tercera linea';
console.log(lorem); // Output: esto es un texto de ejemplo
// esto es una segunda linea    

let loreme2 = `esto es un texto de ejemplo
esto es una segunda linea`
console.log(loreme2); // Output: esto es un texto de ejemplo
// esto es una segunda linea    