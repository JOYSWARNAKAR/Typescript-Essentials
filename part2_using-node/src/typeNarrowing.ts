function getChai (kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai .....`
    }
    return `Chai order: ${kind}`
}
// best practices
function serveTea(msg?: string) {
    if(msg) {
        return `serving ${msg}`
    }
    // there is no neeed declare ${msg} in the else or error part in the string interpalation
    return `server default masala chai`
}
// exhausted checks condition exmaple
function orderChai (size: 'small' | 'medium' | 'large' | number ){
    if (size === 'small'){
        return `small cutting chai...`
    }
    if(size === 'medium' || size === 'large'){
        return `make exxtra chai`
    }
    return `chai order ${size}`
    }
// safety checks for same function name bit different class name
class kulhadTea{
    serve(){
        return `Serving kulhad tea...`
    }
}
class cuttingTea{
    serve(){
        return `Serving cutting tea...`
    }
}
function serve(tea : kulhadTea | cuttingTea){
    if(tea instanceof kulhadTea){
        return tea.serve();
    }
}
// create my own types , yes can create your own types 😎


