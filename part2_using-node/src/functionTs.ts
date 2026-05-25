function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`);
    
}
makeChai("Masala Chai", 5)

function getChaiPrice(): number {
    return 50
}

function makeOrder(order: string) {
    if(!order) return null
    return order
}

function logChai(): void {
    console.log("Chai is ready");
    
}

// function orderChai(type ?: string) {

// }

function orderChai(type: string = "Masala Chai") {

}

function createChai(order : {
    type : string;
    sugar : number;
    size : "small" | "large"
}): number {
    return 40
}













