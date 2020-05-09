const reverseString = function(w) {
    str = '';
    n = w.length - 1
    for(let i = n; -1 < n; n--){
        str+=w[n]
    }
    return str
}

module.exports = reverseString

