import { IStartup } from "../Startup";

interface ICittadino{
    name:string
    surname:string
    age:number
    sportsInterests:string[]
    doActivities(startup: IStartup):void
}

export class Cittadino implements ICittadino{
    name: string;
    surname: string;
    age: number;
    sportsInterests: string[];

    constructor(name:string,surname:string,age:number,sportsInterests:string[]){
        this.name = name
        this.surname=surname
        this.age = age
        this.sportsInterests = sportsInterests
    }

    doActivities(startup: IStartup): void {
        console.log(`${this.name} ${this.surname}, age ${this.age}: interested for participating in activity offered by ${startup.name}`);
    }
}