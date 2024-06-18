"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cittadino_1 = require("./models/Cittadino");
const Incentivo_1 = require("./models/Incentivo");
const Startup_1 = require("./models/Startup");
const test_data_1 = require("./test-data");
const test_data_2 = require("./test-data");
const test_data_3 = require("./test-data");
const startups = test_data_3.startupData.map(data => new Startup_1.Startup(data.name, data.focusSector, data.description, data.productsServices, data.annualRevenue, data.totalEmployees));
const incentives = test_data_2.incentiveData.map(data => new Incentivo_1.Incentivo(data.id, data.description, data.incentiveValue, data.criteria));
const citizens = test_data_1.citizenData.map(data => new Cittadino_1.Cittadino(data.firstName, data.lastName, data.age, data.interests));
for (let i = 0; i < 5; i++) {
    citizens[i].doActivities(startups[i]);
    incentives[i].assignToStartup(startups[i]);
}
