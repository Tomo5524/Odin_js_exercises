const caesar = function(s,n) {
    let res = '';
    let temp = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i].toLowerCase() !== s[i].toUpperCase()){
            // if new num is 91 to 96
            let temp = s.charCodeAt(i);
            // deals with big numbers
            let rem = n % 26;
            if (s[i] == s[i].toUpperCase()){
                 // if wrapping (shift back to first letter(A)) needed, - 26 with current letter + remainder 
                if(temp + rem > 90){
                    res += String.fromCharCode(temp + rem - 26)
                }else if (temp + rem < 65){
                    res += String.fromCharCode(temp + rem + 26)
                }else{
                    res += String.fromCharCode(temp + rem);
                }
            }
            else if (s[i] == s[i].toLowerCase()){
                // if wrapping (shift back to first letter(A)) needed, - 26 with current letter + remainder 
                if(temp + rem > 122){
                    res += String.fromCharCode(temp + rem - 26)
                }else if (temp + rem < 97){
                    res += String.fromCharCode(temp + rem + 26)
                }else{
                    res += String.fromCharCode(temp + rem);
                }
            }
        
        // get non alphabet
        }else{
            res+=s[i];
        }
        
    }
    return res
}
//             // if new num is 91 to 96
//             let temp = s.charCodeAt(i) + n
//             if (s[i] == s[i].toUpperCase()){
//                 if(temp > 90){
//                     let remainder = n % 26;
//                     res += String.fromCharCode(temp - 26)
//                 }else if(temp < 65){
//                     res += String.fromCharCode(temp + 26)
//                 }else{
//                     res += String.fromCharCode(temp);
//                 }
//             }
//             else if (s[i] == s[i].toLowerCase()){
//                 if(temp > 122){
//                     res += String.fromCharCode(temp - 26)
//                 }else if(temp < 97){
//                     res += String.fromCharCode(temp + 26)
//                 }else{
//                     res += String.fromCharCode(temp);
//                 }
//             }
//             // if(s.charCodeAt(i) + n > 90 && s.charCodeAt(i) + n < 97){
//             //     res += String.fromCharCode(temp + 6)
//             // }
//             // else if (temp > 122){
//             //     res += String.fromCharCode(temp - 57)
//             // } else{
//             //     res += String.fromCharCode(temp)
//             // }
//         }else{
//             res+=s[i];
//         }
        
//     }
//     return res
// }

module.exports = caesar
