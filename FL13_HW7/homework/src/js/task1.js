const currentHours = new Date().getHours();
const minLoginLength = 4;
const eveningStartHour = 20;
const registeredUsers = ['User', 'Admin'];

let login = prompt('Please, input your login:');
checkIsEmpty(login);
if (login.length < minLoginLength) {
    alert('I don`t know any users having name length less than 4 symbols');
} else if (registeredUsers.includes(login)) {
    let password = prompt('Please, input your password:');
    checkIsEmpty(password);
    checkPassword(login, password);
} else {
    alert('I don’t know you');
}

function checkIsEmpty (value) {
    if (!value.trim()) {
        alert('Canceled!');
    }
}
function sayHello(name) {
    if (currentHours < eveningStartHour) {
        alert(`Good day, dear ${name}!`);
    } else {
        alert(`Good evening, dear ${name}!`);
    }
}

function checkPassword(name, password) {
    const passwordData = {User: {password: 'UserPass'}, Admin: {password: 'RootPass'}};
    if(passwordData[name].password !== password ){
        alert('Wrong password')
    } else {
        sayHello(login);
    }
}