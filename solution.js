function letterCombinations(input_digit) {
  //Complete the function
  const map = [0,1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  const res = [];
  const que = [''];
  let str ='';

  while(que.length>0){
    str = que[0];
    que.shift();
    if(str.length === input_digit.length){
      res.push(str);
    } else {
      const n = Number(input_digit.charAt(str.length));
      const value = map[n];
      for(let i=0;i<value.length;i++){
        que.push(str+value[i]);
    }
  }
  
  }
return res;
}  

module.exports = letterCombinations;
