// let n=[];

let sevenBoom = function(n){
    let check = n.toString().includes(7);
    if(check){
        console.log("BOOM");
    }
    else if(n%7===0 && n.toString().includes("7")){
        console.log('BOOM')
    }
    else {console.log("NOT BOOM!")}
    return n
}

console.log(sevenBoom(3));
console.log(sevenBoom(77));
console.log(sevenBoom(534));
console.log(sevenBoom(537));