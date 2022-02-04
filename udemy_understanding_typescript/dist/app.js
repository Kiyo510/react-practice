"use strict";
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const add = (...numbers) => {
    numbers.reduce((curResult, curVelue) => {
        return curResult + curVelue;
    }, 0);
};
const addedNumbers = add(5, 20, 22, 4, 2);
console.log('add', addedNumbers);
const [hobby1, hobby2] = hobbies;
console.log('hh', hobbies, hobby1, hobby2);
//# sourceMappingURL=app.js.map