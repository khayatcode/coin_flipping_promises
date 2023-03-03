function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}




function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        const maxAttempts = 100;

        while(headsCount < 5 && attempts < maxAttempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if(headsCount === 5){
            resolve(`It took ${attempts} tries to flip five "heads"`)
        }
        else if(attempts === maxAttempts){
            reject(`You lost, Coin was flipped ${maxAttempts} times`)
        }

    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?");


// You could also do it like this:

// function tossCoin() {
//     return Math.random() > 0.5 ? "heads" : "tails";
// }

// function fiveHeads() {
//     return new Promise((resolve, reject) => {
//         let headsCount = 0;
//         let attempts = 0;
//         const maxAttempts = 100;

//         const flipCoin = () => {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }

//         if (headsCount === 5) {
//             resolve(`It took ${attempts} tries to flip five "heads"`);
//         } else if (attempts === maxAttempts) {
//             reject(`Coin was flipped more than ${maxAttempts} times`);
//         } else {
//             flipCoin();
//         }
//         };

//         flipCoin();
//     });
// }

// fiveHeads()
// .then((result) => console.log(result))
// .catch((error) => console.log(error));
// console.log("This is run after the fiveHeads function starts");
