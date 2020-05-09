const sumAll = function(n1,n2) {
    let sum = 0;
    // isNaN, it returns true when input isn't number 
    // how to check if input is number or not
    // also checks if numers are positive integers
    if (typeof n1 === 'number' && typeof n2 === 'number' && n1>0 && n2>0){
        // initialize varibales
        // has to be let because value will change
        let bigger = 0;
        let smaller = 0;
        // get bigger number
        if (n1 < n2) {
            bigger = n2
            smaller = n1
        }else{
            bigger = n1
            smaller = n2
        }

        for (let num = smaller; num < bigger+1; num++){
            //console.log(num,sum)
            sum+=num
        }
        // console.log(sum)
        return sum
    } else{
        return "ERROR"
    }
}

module.exports = sumAll
