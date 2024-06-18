"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cittadino = void 0;
class Cittadino {
    constructor(name, surname, age, sportsInterests) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sportsInterests = sportsInterests;
    }
    doActivities(startup) {
        console.log(`
            ${this.name} ${this.surname}, age ${this.age}:
            participating in activity offered by ${startup.name}`);
    }
}
exports.Cittadino = Cittadino;
