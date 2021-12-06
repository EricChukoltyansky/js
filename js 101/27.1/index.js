const takeANumber = (num) => {
    return new Promise((resolve, reject) => {
        if ( num > 10) {
            resolve();
        } else {
            reject();
        }
    })
};

takeANumber(11).then(()=>{
    console.log("It worked")
}).catch(()=>{
    console.log("It didn't")
})