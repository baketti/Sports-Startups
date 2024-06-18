"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
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
        console.log(`Incentive received: ${incentive.description}, value: ${incentive.incentiveValue}`);
    }
}
exports.Startup = Startup;
