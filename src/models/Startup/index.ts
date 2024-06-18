import { IIncentivo } from "../Incentivo";

//ADD a field about finance health
export interface IStartup {
  name: string;
  focusSector: string;
  description: string;
  productsServices: string[];
  annualRevenue: number;
  totalEmployees: number;
  receiveIncentive(incentive: IIncentivo): void;
  }

export class Startup implements IStartup{
    name: string;
    focusSector: string;
    description: string;
    productsServices: string[];
    annualRevenue: number;
    totalEmployees: number;
  
    constructor(
      name: string, 
      focusSector: string, 
      description: string, 
      productsServices: string[],
      annualRevenue: number,
      totalEmployees: number
    ) {
      this.name = name;
      this.focusSector = focusSector;
      this.description = description;
      this.productsServices = productsServices;
      this.annualRevenue = annualRevenue;
      this.totalEmployees = totalEmployees;
    }
  
    receiveIncentive(incentive: IIncentivo): void {
      console.log(`Incentive received: ${incentive.description}, value: ${incentive.incentiveValue}`);
    }
}