"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Max');
user1.greet('Hello Max!');
//# sourceMappingURL=app.js.map