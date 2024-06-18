"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incentivo = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Incentivo {
    constructor(idCode, description, incentiveValue) {
        this.idCode = idCode;
        this.description = description;
        this.incentiveValue = incentiveValue;
    }
    assignToStartup(startup) {
        if (this.checkEligibility(startup)) {
            console.log(chalk_1.default.green(`Incentive ${chalk_1.default.magenta(this.idCode)} assigned to startup ${chalk_1.default.yellowBright(startup.name)}`));
            startup.receiveIncentive(this);
        }
        else {
            console.log(chalk_1.default.red(`Startup ${chalk_1.default.yellowBright(startup.name)} does not meet the eligibility criteria for incentive ${chalk_1.default.magenta(this.idCode)}`));
        }
    }
    checkEligibility(startup) {
        const { totalEmployees, annualRevenue } = startup;
        if (totalEmployees < 10 && annualRevenue <= 2000000) {
            return true; // Microimpresa
        }
        else if (totalEmployees < 50 && annualRevenue <= 10000000) {
            return true; // Piccola impresa
        }
        else if (totalEmployees < 250 && annualRevenue <= 50000000) {
            return true; // Media impresa
        }
        return false; // Non idonea
    }
}
exports.Incentivo = Incentivo;
