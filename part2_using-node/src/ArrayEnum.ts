const chaiFlavours : string[] = ["Lemon", "Ginger","Red"]
const chaiPrice : number[] = [10,20,30]

const rating: Array<number> = [32.2, 5.6]

// array of objects

type Chai = {
    name: string;
    price: number
}
const menu : Chai[] = [
    {name: "Lemon", price: 10},
    {name: "Ice", price: 20}

]
menu.push({name: "Olong",price: 30 })

// read only array

const cities: readonly string[] = ["Kolkata", "Pune", "Mumbai"]
// cities.push("Delhi")   // Property 'push' does not exist on type 'readonly string[]'.

// Multidimentional arrays

const table : number[][] = [
    [12,56,89],
    [65,59,25]
]

// tuples

let chaiTuple : [string, number];
chaiTuple = ["Masala", 30]
// chaiTuple = [30, "Masala"]  // order should be maintained
// output comes in array format

let userInfo: [string, number, boolean?]
userInfo = ["joy", 100]
userInfo = ["joy", 100, true]

const location: readonly [number, number] = [28.66, 56.84,]
// cannot change the readonly values, they are not editable

// named tuple

const chaiItems: [name: string, price: number]=["Ice Chai", 30]

// Enum -> restriced users choice

enum CupSize {
    SMALL, MEDIUM, LARGE
}

const size = CupSize.LARGE

// Auto Increment Enums
enum Status{
    PENDING = 100,
    SERVED, // 101
    CANCELLED  // 102
}

// enum values are caps format ---> standard practice
enum ChaiType {
    MASALA = "masala",
    GINGER = " ginger"
}
function makeChai( type: ChaiType) {
    console.log(`Making: ${type}`);
    
}
makeChai(ChaiType.GINGER)
// makeChai("masala")  // Argument of type '"masala"' is not assignable to parameter of type 'ChaiType'.

// try to make enum in a same data type like strings, numbers etc.

enum RandomEnum {
    ID = 1,
    Name = "Lemon"
}


const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const s = Sugars.HIGH


// bad practice to write tuples

let t: [string, number] = ["chai",  10]
t.push("extra")   // bad practice





















