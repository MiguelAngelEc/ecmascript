var lastName = 'Smith';
lastName = 'Doe'; // This is allowed
console.log(lastName); // Output: Doe

let fruit = 'apple';
fruit = 'banana'; // This is allowed
console.log(fruit); // Output: banana

const animal = 'dog';
animal = 'cat'; // This will throw an error: TypeError: Assignment to constant variable.
console.log(animal); // Output: dog


const fruits = () => {
    if(true) {
        let fruit1 = 'apple';
        var fruit2 = 'banana';
        const fruit3 = 'orange';
    }
    console.log(fruit1); // This will throw an error: ReferenceError: fruit1 is not defined
    console.log(fruit2); // Output: banana      
    console.log(fruit3); // This will throw an error: ReferenceError: fruit3 is not defined
}
fruits();