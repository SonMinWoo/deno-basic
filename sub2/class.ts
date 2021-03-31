class Square {
    side: number;
    private area: number;
    #perimeter: number;

    constructor(s: number) {
        this.side = s;
        this.area = this.side * this.side;
        this.#perimeter = this.side * 4;
    }

}

class Geometry {
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
        this.area = this.side * this.side;
        this.perimeter = this.side * 4;
    }

    set Side(value: number) {
        this.side = value;
        this.area = this.side * this.side;
        this.perimeter = this.side * 4;
    }

    get Side() {
        return this.side;
    }

    get Area() {
        return this.area;
    }

}


let oSquare = new Square(2);
// console.log(oSquare.#perimeter) private 
console.log(oSquare.side)

let gSquare = new geoSquare(3);
console.log(`side : ${gSquare.Side}. area : ${gSquare.Area}`);
gSquare.Side = 20;
console.log(`side : ${gSquare.Side}. area : ${gSquare.Area}`);