const findTheOldest = function(obj){
    return obj.reduce((old,cur) => {
        // check index 0
        const oldIdx = findLonger(old.yearOfBirth,old.yearOfDeath) 
        // check idx 1
        const curIdx = findLonger(cur.yearOfBirth,cur.yearOfDeath)
        // if cur is greater, return cur otherwise old
        // cur index just returns idx so wanna call obj cur and old
        return oldIdx < curIdx ? cur : old
    });
}

function findLonger(birth,death){
    if (!death){
        death = new Date().getFullYear();
    }
    return death-birth;
}


// const findTheOldest = function(obj) {
    
//     let max = -Infinity;
//     let yearsToBeLived = 0;
//     let smallIndex = 0;
//     let idx = 0
//     obj.forEach(val => {
//         if (!val.yearOfDeath){
//             yearsToBeLived = 2020 - val.yearOfBirth
//         }else{
//             yearsToBeLived = val.yearOfDeath - val.yearOfBirth
//         }

//         if (max < yearsToBeLived){
//             max = yearsToBeLived;
//             smallIndex = idx
//         }
//         idx++
//     });

//     let Idx = 0
//     let res = ''
//     obj.forEach(val => {
        
//         if (Idx === smallIndex){
//             res = val.name
//         }
//         Idx++
//     });
//     console.log("'" + res + "'")
//     //return "'" + res + "'"
//     return res      
// }

//     let max = Infinity;
//     let yearsToBeLived = 0;
//     let smallIndex = 0;
//     let idx = 0
//     obj.forEach(val => {
//         if (!val.yearOfDeath){
//             yearsToBeLived = 2020 - val.yearOfBirth
//         }else{
//             yearsToBeLived = val.yearOfDeath - val.yearOfBirth
//         }

//         if (max < yearsToBeLived){
//             max = yearsToBeLived;
//             smallIndex = idx
//         }
//         idx++
//     });

//     let Idx = 0
//     obj.forEach(key => {
//         if(Idx === smallIndex){
//             return key.name
//         }
//         idx++
//     });
        
// }

module.exports = findTheOldest
