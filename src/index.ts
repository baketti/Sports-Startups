import { Cittadino } from "./models/Cittadino";
import { Incentivo } from "./models/Incentivo";
import { Startup } from "./models/Startup";
import { citizensData } from "./test-data";
import { incentivesData } from "./test-data";
import { startupsData } from "./test-data";

const startups = startupsData.map(data => new Startup(
    data.name,
    data.focusSector,
    data.description,
    data.productsServices,
    data.annualRevenue,
    data.totalEmployees
));
  
const incentives = incentivesData.map(data => new Incentivo(
    data.id,
    data.description,
    data.incentiveValue,
));
  
const citizens = citizensData.map(data => new Cittadino(
    data.firstName,
    data.lastName,
    data.age,
    data.interests
));
  
for(let i=0;i<5;i++){
    citizens[i].doActivities(startups[i]);
    incentives[i].assignToStartup(startups[i]);
}