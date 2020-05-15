const palindromes = function(s) {

  // /[^A-Za-z]/g g replaces space with non space. 
  let ProcessedString = s.toLowerCase().replace(/[^A-Za-z]/g, '');
  return (
    ProcessedString
    .split('') // [list of each string]
    .reverse()
    .join('') === ProcessedString
  )

  //let letters = /^[A-Za-z]+$/;
  
  let S = '';
  // remove all non alphabets
  for (let i = 0; i < s.length; i++){
      if (s[i].toLowerCase() !== s[i].toUpperCase()){
          S += s[i]
      }
  }

  // get new middle point of new string
  const n = Math.floor((S.length) / 2);
  let temp = ''
  // if string.length is even, 
  // right half starts off with the middle string
  if (S.length % 2 === 0){
    temp = S.slice(n,S.length)
  }else{
    temp = S.slice(n+1,S.length)
  }
  let left = S.slice(0,n);
  let right = '';
  for (let j = temp.length -1; j > -1; j--){
    right += temp[j]
  }
  
  return left.toLowerCase() === right.toLowerCase();
  
  
  // let new_s = '';
  // let palin = '';
  // for (let i = 0; i < s.length; i++){
  //     if (s[i].toLowerCase() !== s[i].toUpperCase()){
  //         new_s += s[i]
  //     }
  //     if (s[n-i].toLowerCase() !== s[n-i].toUpperCase()){
  //         palin += s[n-i]
  //     }
  // }
  // if (new_s === palin){
  //     return true
  // }else{
  //     return false
  // }
}

module.exports = palindromes
