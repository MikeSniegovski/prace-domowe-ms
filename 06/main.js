const users = [{
    firstName: "Ross",
    lastName: "Frazier",
    age: 24,
    gender: "male",
    messages: 22
}, {
    firstName: "Tammie",
    lastName: "Leach",
    age: 31,
    gender: "female",
    messages: 22
}, {
    firstName: "Kaye",
    lastName: "Petty",
    age: 21,
    gender: "female",
    messages: 23
}, {
    firstName: "Nielsen",
    lastName: "Wright",
    age: 38,
    gender: "male",
    messages: 31
}, {
    firstName: "Nannie",
    lastName: "Moran",
    age: 33,
    gender: "female",
    messages: 22
}, {
    firstName: "Susan",
    lastName: "Long",
    age: 30,
    gender: "female",
    messages: 40
}, {
    firstName: "Montoya",
    lastName: "Roberts",
    age: 40,
    gender: "male",
    messages: 30
}, {
    firstName: "Iva",
    lastName: "Massey",
    age: 34,
    gender: "female",
    messages: 35
}, {
    firstName: "Hodge",
    lastName: "Fuentes",
    age: 40,
    gender: "male",
    messages: 34
}, {
    firstName: "Dianne",
    lastName: "Noel",
    age: 20,
    gender: "female",
    messages: 34
}, {
    firstName: "Curry",
    lastName: "Park",
    age: 26,
    gender: "male",
    messages: 22
}, {
    firstName: "Barbra",
    lastName: "Warren",
    age: 37,
    gender: "female",
    messages: 24
}, {
    firstName: "Gamble",
    lastName: "Pope",
    age: 34,
    gender: "male",
    messages: 40
}, {
    firstName: "Perry",
    lastName: "Garrett",
    age: 31,
    gender: "male",
    messages: 38
}, {
    firstName: "Bass",
    lastName: "Lynn",
    age: 24,
    gender: "male",
    messages: 36
}, {
    firstName: "Sallie",
    lastName: "Mccall",
    age: 22,
    gender: "female",
    messages: 40
}, {
    firstName: "Linda",
    lastName: "Carlson",
    age: 20,
    gender: "female",
    messages: 32
}, {
    firstName: "Adeline",
    lastName: "Alford",
    age: 28,
    gender: "female",
    messages: 25
}, {
    firstName: "Hammond",
    lastName: "Rogers",
    age: 40,
    gender: "male",
    messages: 28
}, {
    firstName: "Blackwell",
    lastName: "Sullivan",
    age: 36,
    gender: "male",
    messages: 38
}];

// part 1
function sendMessage() {
    let name, ageCondition;
    let messages = this.messages;

    if (this.age < 30) {
        name = this.firstName;
        ageCondition = '';
    } else {
        name = this.firstName + ' ' + this.lastName;
        if (this.gender === 'male') {
            ageCondition = 'Mr. '
        } else if (this.gender === 'female') {
            ageCondition = 'Mrs. '
        }
    }
    console.log(`Hello, ${ageCondition}${name}! You have ${messages} unread messages.`);
};
// part 2
users.forEach(function (el) {
    el.sendMsg = sendMessage;
});
// part 3
users.forEach(function (el) {
    el.sendMsg();
});
// part 4
let person1 = users.find(function (el) {
    return el.age < 30 && el.gender === 'female';
});
// part 5
let person2 = users.find(function (el) {
    return el.age > 30 && el.gender === 'male';
});


// part 6
const foundUsers = [person1, person2];

console.log(`--- found ${foundUsers.length} users ---`);

foundUsers.forEach(function (el) {
    el.sendMsg();
});