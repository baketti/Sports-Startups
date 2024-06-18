import { Cittadino } from "./models/Cittadino";
import { Incentivo } from "./models/Incentivo";
import { Startup } from "./models/Startup";
import { citizenData } from "./test-data";
import { incentiveData } from "./test-data";
import { startupData } from "./test-data";

const startups = startupData.map(data => new Startup(
    data.name,
    data.focusSector,
    data.description,
    data.productsServices,
    data.annualRevenue,
    data.totalEmployees
));
  
const incentives = incentiveData.map(data => new Incentivo(
    data.id,
    data.description,
    data.incentiveValue,
));
  
const citizens = citizenData.map(data => new Cittadino(
    data.firstName,
    data.lastName,
    data.age,
    data.interests
));
  
for(let i=0;i<5;i++){
    citizens[i].doActivities(startups[i]);
    incentives[i].assignToStartup(startups[i]);
}