let repeatString = function(w,n) {
    // edge case
    if (n < 0){
        return 'ERROR'
    }
    let str = ''
    for(let i = 0; i < n; i++){
        str+=w
    }
    return str
}

module.exports = repeatString
