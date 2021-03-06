//Exercise 1:
//    Define a filter function on the String object. The function accepts an array of strings that
//    specifies a list of banned words. The function returns the string after removing all the
//    banned words.
//    Example:
//    console.log("This house is not nice!".filter('not'));
//    Output: "This house is nice!"
String.prototype.filter = function (...bannedWords) {
    let result = this;
    for (let word of bannedWords) {
        result = result.replace(word, '')
    }
    return result.replace("  ", " ");
};
console.log("This house is not nice!".filter('not'));

//Exercise 2:
//    Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
//    that works by repeatedly stepping through the list to be sorted,
//    Example:[6,4,0, 3,-2,1].bubbleSort();
//    Output : [-2, 0, 1, 3, 4, 6]

Array.prototype.bubbleSort = function () {
    var is_sorted = false;
    while (!is_sorted) {
        is_sorted = true;
        for (var n = 0; n < this.length - 1; n++) {
            if (this[n] > this[n + 1]) {
                var x = this[n + 1];
                this[n + 1] = this[n];
                this[n] = x;
                is_sorted = false;
            }
        }
    }
    return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//Exercise 3:
//    Create an object called Teacher derived from a Person function constructor, and implement
//    a method called teach that receives a string called subject, and prints out: [teacher's name]
//    is now teaching [subject]. Create a Teacher object and call its teach method.
//    Also do the same thing using Object.create. When using Object.create you will need a
//    factory function instead of a function constructor in order to pass parameters such as
//    �name� to be set in the prototype.
class Person {
    constructor(name) {
        this.name = name;
    }
    teach(subject) {
        return "Teacher " + this.name + " is now teaching " + subject;
    }
}

teacher = new Person("Hieu");
console.log(teacher.teach("math"));

const behavior = {
    teach(subject) {
        return "Teacher " + this.name + " is now teaching " + subject;
    }
}

teacher1 = Object.create(behavior);
teacher1.name = "Sami"
console.log(teacher1.teach("WAP"));

//Exercise 4:
//    Write code that will create person, student, and professor objects.
//    � Person objects have
//    o name and age fields
//    o a greeting method that prints out: �Greetings, my name is [name] and I am
//    [age] years old.�
//    o a salute method that prints out: �Good morning!, and in case I dont see you,
//    good afternoon, good evening and good night!�
//    � Student objects inherit name, age, and salute from person. They also have a field
//    �major� and have their own greeting method. Their greeting is �Hey, my name is
//    [name] and I am studying [major]. The greeting should be output to the console.
//    � Professor objects inherit name, age, and salute from person. They also have a field
//    �department� and have their own greeting method. Their salutation is �Good day,
//    my name is [name] and I am in the [department] department.� Output it to the
//    console.
//    � Create a professor object and a student object. Call both the greeting and salutation
//    methods on each.
//    � Do this exercise once using the object prototype approach for inheritance and then
//    using the function constructor approach.
let person = {
    name: null,
    age: null,
    greeting() {
        return "Greetings, my name is " + this.name + " and I am " + this.age + " years old.";
    },

    salute() {
        return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
    }
}

let student = {
    major: null,
    greeting() {
        return "Hey, my name is " + this.name + " and I am studying " + this.major;
    },
    __proto__: person
}

let professor = {
    department: null,
    greeting() {
        return "Good day, my name is " + this.name + " and I am in the " + this.department + " department.";
    },
    __proto__: person
}

person.name = "Hieu";
person.age = 36;

student.major = "Computer Science"
console.log(student.greeting());
console.log(student.salute());

professor.department = "CS Dept"
console.log(professor.greeting());
console.log(professor.salute());