abstract class Geometry {
    protected area: number;
    protected perimeter: number;

    constructor() {
        this.area = 0;
        this.perimeter = 0;
    }
   
}

class geoSquare extends Geometry {
    private side: number;

    constructor(s: number) {
        super();
        this.side = s;
       this.calculateAreaAndPerimeter();
    }

    private calculateAreaAndPerimeter() {
        this.area = this.side * this.side;
        this.perimeter = this.side * 4;
    }

    set Side(value: number) {
        this.side = value;
        this.calculateAreaAndPerimeter();
    }

    get Side() {
        return this.side;
    }

    get Area() {
        return this.area;
    }

}

let gSquare = new geoSquare(3);
console.log(`side : ${gSquare.Side}. area : ${gSquare.Area}`);
gSquare.Side = 20;
console.log(`side : ${gSquare.Side}. area : ${gSquare.Area}`);