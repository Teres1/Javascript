function solve(args){
    let a=[];
    let b=[];
    let c=[];
    let sum=0;
    let input=args[0].split(' ');
    for(let i=0;i<input.length;i+=1){
      if(input[i]!==' '){
      a.push(+input[i]);
    }
  }
    for(let i=1;i<a.length;i+=1){
      b.push(Math.abs(a[i]-a[i-1]));
    }
    let k=0;
    while(k<b.length){
      if(b[k]%2===0){
        c.push(b[k]);
        c.push(0);
        k+=2;
  
      } else if(b[k]%2!==0){
        c.push(b[k]);
       k+=1;
      }
  
    }
    for(let i=0;i<c.length;i+=1){
      if(c[i]%2===0){
  sum+=c[i];
      }
    }
  
  console.log(sum);
  
  }
  solve(['-5 5 1 8 -4 1 2']);