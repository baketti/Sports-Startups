import chalk from "chalk";
import { IStartup } from "../Startup";

export interface IIncentivo{
    idCode: string;
    description: string;
    incentiveValue: number;
    assignToStartup(startup: IStartup): void;
}

export class Incentivo implements IIncentivo{
    idCode: string;
    description: string;
    incentiveValue: number;
  
    constructor(
        idCode: string, 
        description: string, 
        incentiveValue: number, 
    ) {
      this.idCode = idCode;
      this.description = description;
      this.incentiveValue = incentiveValue;
    }
  
    assignToStartup(startup: IStartup): void {
      if (this.checkEligibility(startup)) {
        console.log(chalk.green(`Incentive ${chalk.magenta(this.idCode)} assigned to startup ${chalk.yellowBright(startup.name)}`));
        startup.receiveIncentive(this);
      } else {
          console.log(chalk.red(`Startup ${chalk.yellowBright(startup.name)} does not meet the eligibility criteria for incentive ${chalk.magenta(this.idCode)}`));
      }
    }
  
    private checkEligibility(startup: IStartup): boolean {
      const { totalEmployees, annualRevenue } = startup;
      if (totalEmployees < 10 && annualRevenue <= 2000000) {
        return true; // Microimpresa
      } else if (totalEmployees < 50 && annualRevenue <= 10000000) {
        return true; // Piccola impresa
      } else if (totalEmployees < 250 && annualRevenue <= 50000000) {
        return true; // Media impresa
      }
      return false; // Non idonea
    }
}