const removeFromArray = function(args) {
    // how to get multiple arguments
    // code below converts input to a nested list
    const ls = Array.from(arguments); //.split(',')
    //[ [ 1, 2, 3, 4 ], 7, 'tacos' ]

    // code below converts it to object
    //const ls = Array.(arguments); //.split(',')
    // [ [Arguments] { '0': [ 1, 2, 3, 4 ], '1': 7, '2': 'tacos' } ]

    //console.log(ls)
    
    for(let i = 1; i < ls.length; i++){
        // goal is to remove given elements after index 1 
        // so forloop starts off with 1
        // code below finds an index of targetd value
        let idx = ls[0].indexOf(ls[i]);
        // if targeted lalue exsits, excute it
        if (idx > -1){
            // splice's first arguemt specifies the location at which to begin adding or removing elements. 
            // second argument specifies the number of elements to remove
            ls[0].splice(idx, 1)
        }

    }
    //console.log('hiya')
    //console.log(ls[0], 'res')
    return ls[0]
}

module.exports = removeFromArray
