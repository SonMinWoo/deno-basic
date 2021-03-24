enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}
console.log(Direction)
const conDirection = {
    Up : "UP",
    Down : "Down",
    Left : "Left",
    Right : "Right",
}
console.log(conDirection)

enum autoDirection {
    Up,
    Down,
    Left,
    Right,
}
console.log(autoDirection)
let myEnumVar: autoDirection = autoDirection.Down;
myEnumVar = 5;
//myEnumVar = "hello";
console.log(myEnumVar)

enum E {
    Foo,
    Bar,
}
/*
function(x: E) {
    if (x !== E.Foo || x !== E.Bar) {

    }
}
*/