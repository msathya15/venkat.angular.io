import { Color } from "./color";
import { Config } from "./config";

export class Car {
    
    constructor(public id:number=null,
        public modelCode: string="", 
        public model:string="", 
        public colors:Color[]=[],
        public configSelect:Config[]=[],
        public includeTow:boolean=false,
        public includeYoke:boolean=false,
        public basicPrice:number=50000)
        {}
    }
