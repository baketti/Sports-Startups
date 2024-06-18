"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incentivo = void 0;
class Incentivo {
    constructor(idCode, description, incentiveValue, eligibilityCriteria) {
        this.idCode = idCode;
        this.description = description;
        this.incentiveValue = incentiveValue;
        this.eligibilityCriteria = eligibilityCriteria;
    }
    assignToStartup(startup) {
        if (this.checkEligibility(startup)) {
            console.log(`Incentive ${this.idCode} assigned to startup ${startup.name}`);
            startup.receiveIncentive(this);
        }
        else {
            console.log(`Startup ${startup.name} does not meet the eligibility criteria for incentive ${this.idCode}`);
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
