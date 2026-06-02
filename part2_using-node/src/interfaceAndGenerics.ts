interface Chai{
    flavour: string
    price: number
    milk?: boolean
}

const masalaChai: Chai = {
    flavour: "masala",
    price: 30
}

interface Shop {
    readonly id: number
    name: string
}

const s : Shop = {id: 1, name: "Chai caffe"}
// s.id = 2 // error because id is read only

interface DiscountCalculator {
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("Machine started")
    },
    stop() {
        console.log("Machine stopped")
    }
}

// index signatures
interface ChaiRatings {
    [flavour: string]: number
}

// we can add any flavour as a key and its rating as value
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.0,
    lemon: 3.5
}

interface User {
    name: string
}

interface User {
    age: number
}

// we can merge interfaces with same name
const u : User = {
    name: "Alice",
    age: 30
}

interface A {a:string}
interface B {b:string}

// we can extend multiple interfaces to create a new interface
interface C extends A, B {}

// Generics
// we can create reusable components with generics

function wrapInArray<T>(item: T): T[] {
    return [item]  // we can use T as a placeholder for any type
}

wrapInArray("hello") // returns string[]
wrapInArray(5) // returns number[]
wrapInArray({name: "Alice"}) // returns {name: string}[]  


function pair<A, B>(a: A, b: B): [A,B] {
    return [a,b]
}

pair("hello", "world") // returns [string, string]
pair("hello", 5) // returns [string, number]
pair(5, {name: "Alice"}) // returns [number, object]

// we can also use generics with interfaces and classes
interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 5} 
const stringBox: Box<string> = {content: "hello"} 

// we can also use generics with classes

interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}
