function solve(args){
    let s=+args[0];
    let n=+args[1];
    let a=[];
    let c=[];
    let q=[];
    let count=new Array(n).fill(0);
    let str='0000';
    let p=new Array(n);
    let b=s.toString(2);
    for(let i=0;i<b.length;i+=1){
        str+=b[i];
        str=str.substring(str.length-4,str.length);
    }
    for(let i=0;i<n;i+=1){
        p[i]=('000000000000000000000000000000');
    }
    for(let i=2;i<args.length;i+=1){
        a.push(+args[i]);
    }
   
    for(let i=0;i<a.length;i+=1){
        c.push(a[i].toString(2));
    }
    for(let i=0;i<c.length;i+=1){
        p[i]+=c[i];
    }
    for (let i=0;i<n;i+=1){
        for(let j=p[i].length-30;j<p[i].length-3;j+=1){
            q.push(p[i].substring(j,j+4));
        }
    
    }
    for(let i=0;i<n;i+=1){
        for(let j=26*i;j<=26*(i+1);j+=1){
            if(q[j]===str){
                count[i]+=1;
            }
        }
    }
    console.log(count);
}
solve(['9',
'2',
'1017',
'1177']);