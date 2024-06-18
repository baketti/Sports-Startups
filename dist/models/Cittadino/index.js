"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cittadino = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Cittadino {
    constructor(name, surname, age, sportsInterests) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sportsInterests = sportsInterests;
    }
    doActivities(startup) {
        console.log(`${this.name} ${this.surname}, age ${this.age}: interested for participating in activity offered by ${chalk_1.default.yellowBright(startup.name)}`);
    }
}
exports.Cittadino = Cittadino;
