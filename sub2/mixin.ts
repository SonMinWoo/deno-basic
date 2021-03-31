function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }

abstract class Callable {
    call() {
        console.log("Call!");
    }
}

abstract class Activable {
    active: boolean = false;

    activate() {
        this.active = true;
        console.log("Activating...");
    }

    deactivate() {
        this.active = false;
        console.log("Deactivating...");
    }
}

class MyClass {
    constructor() {}
}

interface MyClass extends Callable, Activable {}

applyMixins(MyClass, [Callable, Activable])

let o = new MyClass()
o.call()
o.activate()