function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);

}
newUser();
newUser('Ricardo', 23, 'CO');

// Default parameters
function newAdmin(name = 'Oscar', age = 34, country = 'MX'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('Ricardo', 23, 'CO');