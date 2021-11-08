// let n=[];

let sevenBoom = function(n){
    let check = n.includes(7);
    if(check){
        console.log("BOOM");
    }
    else if(n%7===0 && n.String.prototype.includes(7)){
        console.log('BOOM')
    }
    return n
}

console.log(sevenBoom(3))