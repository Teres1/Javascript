function solve(args){
    let a=[];
    let b=[];
    let c=[];
    let t='';
   for (let i=0;i<args.length-1;i+=3){
       a.push(+args[i]);
   }
   for (let i=1;i<args.length-1;i+=3){
    b.push(+args[i]);
}
for (let i=2;i<args.length;i+=3){
    c.push(args[i]);
}
for(let i=0;i<a.length;i+=1){
    if((a[i]<0)&&(b[i]<0)){
        for(let j=c[i].length+a[i];j>=0;j+=b[i]){
                  t+=c[i][j];
        }
    } else if((a[i]<0)&&(b[i]>0)){
        for(let j=c[i].length+a[i];j<c[i].length;j+=b[i]){
            t+=c[i][j];
  }  
    }else if((a[i]>0)&&(b[i]<0)){
        for(let j=a[i];j>=0;j+=b[i]){
            t+=c[i][j];
        }
    }else if((a[i]>0)&&(b[i]>0)){
        for(let j=0+a[i];j<c[i].length;j+=b[i]){
            t+=c[i][j];
        }
    }
}
console.log(a);
console.log(b);
console.log(c);
console.log(t);
}
solve(['-4',
'1',
'What is this',
'4',
'-1',
'saw something!',
'-4',
'-1',
'ysae tog',
'end']);