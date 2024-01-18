import { Color } from "./color";

export class Car {
    // private model:string;
    // private color:string[];
    // private config:string;
    // private range:string;
    // private towHitch:boolean;
    // private yokeWheel:boolean;
    constructor(public id:number=null,
        public modelCode: string="", public model:string="", public colors:Color[]=[],
        public configSelect:string="",
        public range:string="",
        public includeTow:boolean=false,
        public includeYoke:boolean=false,
        public basicPrice:number=50000)
        {}
        //     this.model=model;
        //     this.color=color;
        //     this.config=config;
        //     this.range=range;
        //     this.towHitch=towHitch;
        //     this.yokeWheel=yokeWheel;

        // }

}
