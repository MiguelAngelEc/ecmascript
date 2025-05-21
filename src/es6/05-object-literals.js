// enahced object literals

function newUser(user, age, country){
    return {
        user,
        age,
        country
    }
}
console.log(newUser('Oscar', 34, 'MX')); // Output: { user: 'Oscar', age: 34, country: 'MX' }

