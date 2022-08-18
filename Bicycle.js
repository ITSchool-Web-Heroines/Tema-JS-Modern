import { Vehicle } from "./Vehicle.js"
export class Bicycle extends Vehicle {
destination;
wheelSize;
speeds;
destination(usage){
    if (usage === "city") {
        return "City Usage";
    }
    if (usage === "mtb") {
        return "Mountain Biking";
    }
}
    constructor(price, year, wheelSize, speeds) {
        super(price, year);
        this.wheelSize = wheelSize
        this.speeds = speeds
    }
}
