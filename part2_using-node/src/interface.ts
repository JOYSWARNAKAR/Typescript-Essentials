type teaOrder = {
     type: string
     sugar: number
     strong: boolean
}

function makeTea(order: teaOrder) {
   console.log(order);
}

function serveTea(order:teaOrder) {
    console.log(order);
}

type teaRecipe = {
    water: number
    milk: number
}

/* 
    interface teaRecipe  {
    water: number
    milk: number
}
*/

class masalaTea implements teaRecipe {
    water = 100
    milk = 50
}

// type cupSize = 'small' | 'large'

interface cupSize {
    size : 'small' | 'large'
}

class Tea implements cupSize {
     size : 'small' | 'large' = 'large'
}

// type Response = { ok : true} | {ok : false}

interface Response {
    ok : true | false
}

class myRes implements Response {
    ok: boolean = true
}

// literal types
type TeaType = 'masala' | 'ginger' | 'lemon'
function orderTea(t:TeaType) {
    console.log(t);
    
}

//
type BaseTea  = {teaLeaves : number}
type EXtra = {masala : number}

type masalaChai = BaseTea & EXtra

const cup : masalaChai = {
    teaLeaves : 2,
    masala : 1
}

type User = {
    username : string
    bio ?:string

}

const u1 : User = {username : "Joy"}
const u2 : User = {username : "Joy" , bio : "joy.ai"}

type Config = {
    readonly appName : string
    version : number

}

const cfg : Config = {
    appName : "Carrom",
    version : 1
}
// desn't work because appName is readonly
// cfg.appName = "Hockey"