// forcefull type assertion

let response: any = '42';
let responseLength: number = (response as string);
let numericLength: number = (response as string).length;

console.log(response);
console.log(numericLength); // 2

console.log(typeof responseLength); // string
console.log(typeof numericLength); // number

// declare a type
type Book = { 
    name: string
}
let bookString = '{"name" : "who moved my cheese" }';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject); // {name:"who moved my cheese"}
console.log(typeof bookObject); // object


const inputElement = document.getElementById("username") as HTMLInputElement
console.log(inputElement);
console.log(typeof inputElement);

/*                           ^
ReferenceError: document is not defined
     
The error ReferenceError: document is not defined occurs because you are running your TypeScript code
 in a Node.js environment. 

The document object is part of the Web API provided by browsers (like Chrome or Firefox) to interact with
 a webpage's HTML. Since Node.js is a server-side runtime, it does not have a built-in Document Object Model (DOM). 
*/

// any vs unknown difference (use cases)

let value: any

value = "ice chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()

let newValue: unknown

newValue = "ice chai"
newValue = [1,2,3]
newValue = 2.5
if(typeof newValue === "string") {
    newValue.toUpperCase();
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
    
}

const data : unknown = "Hello Ji"
const strData: string = data as string

type Role = 'admin' | 'user'| 'superadmin'

function redirectBasedRole(role:Role) : void {
    if (role === 'admin'){
        console.log('Redirect to admin dashboard');
        return
        
    }
    if (role === 'user'){
        console.log('Redirect to user dashboard');
        return        
    }
    role
}

function neverReturn() : never {
    while(true) {}
}