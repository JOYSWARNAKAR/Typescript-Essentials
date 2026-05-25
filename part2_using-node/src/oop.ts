class Chai {
    flavour: string;
    // price: number;

    // constructor(flavour: string, price: number) {
    //     this.flavour = flavour
    //     this.price = price
    // }
// }
    constructor(flavour: string) {
        this.flavour = flavour
        console.log(this);  // this refers to the new object
        
    }
}

const masalaChai = new Chai("Ginger")
masalaChai.flavour = "masala"

// Access Modifiers

class Tea {
    public name: string = "Lemon Tea"

    private secret = "Cardamon"

    reveal() {
        return this.secret  // ok
    }

}

class Shop {
    protected shopName = "Chai corner"

}
class Branch extends Shop{
    getName() {
        return this.shopName // ok
    }
}

new Branch().getName

class Walet {
    #balance = 100  // another way to declare private access modifier

    getBalance() {
        return this.#balance
    }
}

const w = new Walet()
w.getBalance()

// read only properties
// we cann't modify read only properties later
class Cup {
    readonly capacity: number = 250

    constructor (capacity: number) {
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if(value > 5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const c = new ModernChai() 
c.sugar = 3

class EkChai {
    static ShopName = "Enjoy Caffe"

    constructor (public flavour: string) {}
}
console.log(EkChai.ShopName);

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
        
    }
}

class Heater {
    heat() {}
}

class ChaiMaker {
    constructor(private heater: Heater){}
// composition
    make() {
        this.heater.heat
    }
}

// Abstraction , Polymorphism






// const c = new Tea()
// c.reveal()






















