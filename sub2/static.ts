type Point = {
    x: number;
    y: number;
};

class Grid {
    static origin: Point = {x:0, y:0};
    calculateDistanceFromOrigin(point: Point) {
        let xDist = point.x - Grid.origin.x; //static member는 이처럼 이름으로 접근
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist*xDist + yDist*yDist) / this.scale;
    }
    constructor(public scale: number) {}
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x:10, y:10}));
console.log(grid2.calculateDistanceFromOrigin({x:10, y:10}));