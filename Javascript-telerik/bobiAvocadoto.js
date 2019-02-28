function solve(args){
    let n=+args[0];
    let c=+args[1];
    let count=new Array(c).fill(0);
    let s=[];
    let p=[];
    let index;
    let m=n.toString(2);
    for(let i=2;i<c+2;i+=1){
          s.push((+args[i]).toString(2));
    }
    for(let i=0;i<s.length;i+=1){
        if(m.length>s[i].length){
       p.push(m.substring(m.length-s[i].length,m.length));
        } else{
            p.push(s[i].substring(s[i].length-m.length,s[i].length))
        }
    }
    for(let i=0;i<p.length;i+=1){
        for(let j=0;j<p[i].length;j+=1){
            if(p[i][j]!==m[j]){
                count[i]+=1;
            }
        }
    }
    for(let i=0;i<count.length-1;i+=1){
             if(count[i]>count[i+1]){
                 index=i;
             } else{
                 index=i+1;
             }
    }
    let binary=s[index];
    let bestComb=parseInt(binary,2);
    console.log(bestComb);
}
solve(['2344',
'2',
'23',
'15']);