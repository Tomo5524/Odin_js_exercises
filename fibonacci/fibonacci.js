
// bottom up
const fibonacci = function(n) {
    if (n < 0){
        return "OOPS"
    }
    let a = 1;
    let b = 1;
    let N = parseInt(n);
    let temp = 0
    for (let i = 1; i < N; i++){
        // get sum of a+b before it adds up new value
        temp = a + b
        a = b
        b = temp
    }
    return a

}

// const fibonacci = function(n) {

//     if (n < 0){
//         return "OOPS"
//     }
//     // accept string
//     return helper(parseInt(n))
// }

// function helper(n){
//     if (n === 1 || n === 2){
//         return 1
//     }
//     return helper(n-1) + helper(n-2)
// }


module.exports = fibonacci
