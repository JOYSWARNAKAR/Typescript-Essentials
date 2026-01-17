
// Understanding Unions & Any

let subs : number | string = '1M'

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending'
apiRequestStatus = "error"

let airlineSeat : 'aisle' | 'window' | 'middle' =  'middle'

airlineSeat = 'aisle'

const orders = ['12','34','56','67']

let currentorder : string | undefined;

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break
    }
    currentorder = '55'
}
console.log(currentorder);

// Try to avoid any type in the code











