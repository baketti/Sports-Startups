"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Startup {
    constructor(name, focusSector, description, productsServices, annualRevenue, totalEmployees) {
        this.name = name;
        this.focusSector = focusSector;
        this.description = description;
        this.productsServices = productsServices;
        this.annualRevenue = annualRevenue;
        this.totalEmployees = totalEmployees;
    }
    receiveIncentive(incentive) {
        const { description, incentiveValue } = incentive;
        console.log(`Incentive received from ${chalk_1.default.yellowBright(this.name)}: ${chalk_1.default.magenta(description)}, value: ${chalk_1.default.magenta(incentiveValue)}`);
    }
}
exports.Startup = Startup;
