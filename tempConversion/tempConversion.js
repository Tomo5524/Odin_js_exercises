const ftoc = function(num) {
  let f = num - 32;
  let ans = f * (5/9);
  let s = ans.toString()
  // check if last element is 0, then we need to round it up leaving no decimals
  if (s.slice(-1) === '0'){
    // grab all the elements except last two values
    return Number(s.slice(0,-2));
  }
  // edge case for 0 as it returned 0.0
  if (ans !== '0'){
    return Number(ans.toFixed(1));
  } else{
    return Number(ans)
  }
  
}

const ctof = function(num) {
  let ans = (num * 1.8) + 32;
  let s = ans.toString()
  // check if last element is 0, then we need to round it up leaving no decimals
  if (s.slice(-1) === '0'){
    // grab all the elements except last two values
    return Number(s.slice(0,-2));
  }
  // edge case for 0 as it returned 0.0
  // negative number still countes
  if (ans !== '0'){
    return Number(ans.toFixed(1));
  } else{
    return Number(ans)
  }
  
}

module.exports = {
  ftoc,
  ctof
}
