"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
const fetchUserData = {
    id: 'u1',
    name: 'John',
    job: {
        title: 'hoge',
        description: 'nanika',
    },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData);
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('車を運転中う');
    }
}
class Truck {
    drive() {
        console.log('トラックを運転中');
    }
    loadCargo(load) {
        console.log('荷物の重さは' + load + 'kgです。');
    }
}
const v1 = new Car();
const v2 = new Truck();
function outputViecleInfo(viecle) {
    viecle.drive();
    if (viecle instanceof Truck) {
        viecle.loadCargo(1000);
    }
}
outputViecleInfo(v1);
outputViecleInfo(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('移動速度' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 500 });
// const userInputElement = <HTMLInputElement>document.getElementById('message-output');
const userInputElement = document.getElementById('message-output');
userInputElement.value = 'こんにちは';
//# sourceMappingURL=app.js.map