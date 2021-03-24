interface IMyProps {
    name: string,
    age: number,
    city:string
}

function sayHello(myProps: IMyProps) {
    console.log(`Hello there ${myProps.age}`)
}

interface selectProps {
    name: string;
    age: number;
    city?: string;
}

function sayHelloSelect(myProps: selectProps) {
    console.log(`Hello there ${myProps.name}, and you live in ${myProps.city}`)
}
sayHelloSelect({
    name: "Minwoo",
    age : 25
})

interface readProps {
    readonly name: string;
    age: number;
}

interface Greeter {
    (name:string, age:number, city:string) : void;
}

const greeterFn: Greeter = function(a: string, b : number, c: string) {
    console.log(`Hello ${a}, you are ${b}! live in ${c}`);
};

function asyncOp(callback: Greeter) {
    callback("Fernando", 37, "Madrid");
}

greeterFn("ABC",29,"Seoul");
asyncOp(greeterFn);