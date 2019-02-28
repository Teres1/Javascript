function solve(args){
    let k=+args[0];
    let n=+args[1];
    let result="";
    let finalCount=0;
    let a=[];
    for(let i=2;i<args.length;i+=1){
        result+=(((+args[i]).toString(2))+'');
    }
for(let i=0;i<result.length;i+=1){
    a.push(+result[i]);
}
    console.log(a);
    let b=[];
      for(let i=0;i<a.length;i+=1){
        if(a[i]!==a[i+1]){
           b.push(i);
                }
            }
            for(let i=0;i<b.length;i+=1){
                if((b[i+1]-b[i])===k){
                    finalCount+=1;
                }
            }
    console.log(b);
    console.log(finalCount);
}
solve(['1',
'4',
'50',
'6',
'14',
'1']);